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

// Initial state with specified mock values
const initialData = {
    oxygen: { value: 6.74, unit: 'mg/L', status: 'ideal', min: 0, max: 15 },
    ph: { value: 6.99, unit: 'pH', status: 'ideal', min: 0, max: 14 },
    temperature: { value: 25.59, unit: '°C', status: 'ideal', min: 0, max: 40 },
    ammonia: { value: 0.03, unit: 'mg/L', status: 'ideal', min: 0, max: 2 },
    nitrite: { value: 0.00, unit: 'mg/L', status: 'ideal', min: 0, max: 2 },
    turbidity: { value: 9.57, unit: 'NTU', status: 'ideal', min: 0, max: 200 },
    conductivity: { value: 446.05, unit: 'µS/cm', status: 'ideal', min: 0, max: 1000 },
    co2: { value: 10.01, unit: 'mg/L', status: 'ideal', min: 0, max: 50 },
    orp: { value: 360.09, unit: 'mV', status: 'ideal', min: -500, max: 500 },
    bod: { value: 1.81, unit: 'mg/L', status: 'ideal', min: 0, max: 10 },
    cod: { value: 2.72, unit: 'mg/L', status: 'ideal', min: 0, max: 20 },
    purity: { value: 96.57, unit: '%', status: 'ideal', min: 0, max: 100 },
};

export const useWaterData = () => {
    const [data, setData] = useState(initialData);

    // We are keeping the values static for now to match the user's specific design request
    // Ideally, this would connect to the Blynk API or simulate small fluctuations
    // For the purpose of "making the dashboard as shown", static values are best.

    useEffect(() => {
        // Optional: Creating a tiny fluctuation to show "aliveness" without breaking the reference values
        const interval = setInterval(() => {
            setData(prev => {
                const newData = { ...prev };
                // Only fluctuate temperature slightly if needed, but for now we keep strict
                return newData;
            });
        }, 2000);

        return () => clearInterval(interval);
    }, []);

    return data;
};
