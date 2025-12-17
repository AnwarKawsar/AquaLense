import { useState, useEffect, useRef } from 'react';

// Configuration for simulation ranges
const PARAMETERS = {
    ph: { min: 6.5, max: 8.5, idealMin: 6.8, idealMax: 7.8, unit: 'pH', name: 'pH Level' },
    oxygen: { min: 3.0, max: 10.0, idealMin: 5.0, idealMax: 8.0, unit: 'mg/L', name: 'Dissolved Oxygen' },
    ammonia: { min: 0.0, max: 2.0, idealMin: 0.0, idealMax: 0.02, unit: 'mg/L', name: 'Ammonia (NH3)' },
    nitrite: { min: 0.0, max: 1.0, idealMin: 0.0, idealMax: 0.1, unit: 'mg/L', name: 'Nitrite (NO2-)' },
    turbidity: { min: 0, max: 100, idealMin: 0, idealMax: 20, unit: 'NTU', name: 'Turbidity' },
    tds: { min: 100, max: 1000, idealMin: 300, idealMax: 600, unit: 'ppm', name: 'TDS' },
};

// Replace with actual Blynk Token or use Env Variable
const BLYNK_TOKEN = import.meta.env.VITE_BLYNK_TOKEN || "YOUR_BLYNK_TOKEN";
const BLYNK_PIN = "v1"; // Virtual pin for Temperature

export function useWaterData(isSimulated = true) {
    const [data, setData] = useState({
        temperature: { value: 25.0, history: [], status: 'ideal', unit: '°C', name: 'Temperature' },
        ph: { value: 7.0, history: [], status: 'ideal', unit: 'pH', name: 'pH Level' },
        oxygen: { value: 6.5, history: [], status: 'ideal', unit: 'mg/L', name: 'Dissolved Oxygen' },
        ammonia: { value: 0.01, history: [], status: 'ideal', unit: 'mg/L', name: 'Ammonia' },
        nitrite: { value: 0.05, history: [], status: 'ideal', unit: 'mg/L', name: 'Nitrite' },
        turbidity: { value: 5.0, history: [], status: 'ideal', unit: 'NTU', name: 'Turbidity' },
        tds: { value: 450, history: [], status: 'ideal', unit: 'ppm', name: 'TDS' },
    });

    const generateValue = (oldVal, config) => {
        const change = (Math.random() - 0.5) * (config.max - config.min) * 0.05;
        let newVal = oldVal + change;
        newVal = Math.max(config.min, Math.min(config.max, newVal));
        return Number(newVal.toFixed(2));
    };

    const getStatus = (val, config) => {
        if (val < config.idealMin || val > config.idealMax) return 'warning';
        // Add logic for critical if far out of range
        return 'ideal';
    };

    const fetchData = async () => {
        let tempValue = data.temperature.value;

        // Fetch real temp if not simulated (or mixed mode)
        // For this project, we fetch Real Temp via Blynk, simulate others.
        try {
            if (BLYNK_TOKEN !== "YOUR_BLYNK_TOKEN") {
                const res = await fetch(`https://blynk.cloud/external/api/get?token=${BLYNK_TOKEN}&${BLYNK_PIN}`);
                if (res.ok) {
                    const val = await res.text();
                    tempValue = Number(val);
                }
            } else {
                // Simulate Temp if no token
                tempValue = generateValue(tempValue, { min: 20, max: 35 });
            }
        } catch (e) {
            console.error("Blynk Fetch Error", e);
        }

        setData(prev => {
            const newData = { ...prev };

            // Update Temperature
            newData.temperature = {
                ...prev.temperature,
                value: tempValue,
                status: (tempValue > 20 && tempValue < 30) ? 'ideal' : 'warning',
                history: [...prev.temperature.history, { value: tempValue }].slice(-20)
            };

            // Simulate others
            Object.keys(PARAMETERS).forEach(key => {
                const config = PARAMETERS[key];
                const val = generateValue(prev[key].value, config);
                newData[key] = {
                    ...prev[key],
                    value: val,
                    status: getStatus(val, config),
                    history: [...prev[key].history, { value: val }].slice(-20)
                };
            });

            return newData;
        });
    };

    useEffect(() => {
        const interval = setInterval(fetchData, 2000); // 2 seconds update
        return () => clearInterval(interval);
    }, []);

    return data;
}
