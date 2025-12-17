import React, { useState } from 'react';
import { useWaterData } from '../hooks/useWaterData';
import ParameterCard from '../components/ParameterCard';
import { Sliders, RefreshCw, AlertTriangle } from 'lucide-react';
import { motion } from 'framer-motion';

const Dashboard = () => {
    const data = useWaterData();
    const [showSettings, setShowSettings] = useState(false);

    // Check if any parameter is critical/warning
    const alertCount = Object.values(data).filter(d => d.status !== 'ideal').length;

    return (
        <div className="container min-h-screen py-8 px-4 md:px-8 space-y-8">
            {/* Header */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight">Main Koi Pond</h1>
                    <p className="text-muted-foreground flex items-center gap-2">
                        <span className="relative flex h-3 w-3">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
                        </span>
                        System Online • Monitoring Active
                    </p>
                </div>

                <div className="flex items-center gap-2">
                    {alertCount > 0 && (
                        <div className="flex items-center px-4 py-2 bg-red-100 text-red-600 rounded-md font-medium text-sm border border-red-200">
                            <AlertTriangle size={16} className="mr-2" />
                            {alertCount} Alerts Detected
                        </div>
                    )}
                    <button
                        onClick={() => window.location.reload()}
                        className="p-2 text-muted-foreground hover:bg-accent rounded-md"
                    >
                        <RefreshCw size={20} />
                    </button>
                    <button
                        onClick={() => setShowSettings(!showSettings)}
                        className="p-2 text-muted-foreground hover:bg-accent rounded-md"
                    >
                        <Sliders size={20} />
                    </button>
                </div>
            </div>

            {/* Grid of Parameters */}
            <motion.div
                layout
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
            >
                <ParameterCard
                    title="Temperature"
                    value={data.temperature.value}
                    unit="°C"
                    status={data.temperature.status}
                    history={data.temperature.history}
                    color="#f59e0b" // Ambient/Warm color
                />
                <ParameterCard
                    title="pH Level"
                    value={data.ph.value}
                    unit="pH"
                    status={data.ph.status}
                    history={data.ph.history}
                    color="#10b981" // Emerald
                />
                <ParameterCard
                    title="Dissolved Oxygen"
                    value={data.oxygen.value}
                    unit="mg/L"
                    status={data.oxygen.status}
                    history={data.oxygen.history}
                    color="#3b82f6" // Blue
                />
                <ParameterCard
                    title="Ammonia"
                    value={data.ammonia.value}
                    unit="mg/L"
                    status={data.ammonia.status}
                    history={data.ammonia.history}
                    color="#ef4444" // Red (Danger)
                />
                <ParameterCard
                    title="Nitrite"
                    value={data.nitrite.value}
                    unit="mg/L"
                    status={data.nitrite.status}
                    history={data.nitrite.history}
                    color="#8b5cf6" // Purple
                />
                <ParameterCard
                    title="Turbidity"
                    value={data.turbidity.value}
                    unit="NTU"
                    status={data.turbidity.status}
                    history={data.turbidity.history}
                    color="#78716c" // Stone/Muddy
                />
                <ParameterCard
                    title="TDS"
                    value={data.tds.value}
                    unit="ppm"
                    status={data.tds.status}
                    history={data.tds.history}
                    color="#64748b" // Slate
                />
            </motion.div>

            {/* Settings Panel Mockup */}
            {showSettings && (
                <div className="bg-card p-6 rounded-xl border mt-8">
                    <h3 className="font-semibold mb-4">Dashboard Settings</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <label className="flex flex-col gap-2">
                            <span className="text-sm font-medium">Blynk Auth Token</span>
                            <input type="text" placeholder="Enter Token" className="border rounded-md px-3 py-2 bg-background" />
                        </label>
                        <div className="flex items-center mt-6">
                            <p className="text-sm text-muted-foreground">This is where you would configure real device connections.</p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Dashboard;
