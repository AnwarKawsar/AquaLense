import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

const ParameterCard = ({ title, icon: Icon, value, unit, status, min = 0, max = 100, color = "#2563EB" }) => {
    // Normalize value loops
    const normalizedValue = Math.min(Math.max((value - min) / (max - min) * 100, 0), 100);

    const data = [
        { value: normalizedValue },
        { value: 100 - normalizedValue },
    ];

    return (
        <div className="bg-white rounded-xl border border-gray-200 p-6 flex flex-col justify-between h-[220px] hover:border-blue-500 transition-colors group">
            {/* Header */}
            <div className="flex justify-between items-start">
                <div className="flex items-center gap-3 text-gray-900">
                    {Icon && <Icon size={20} className="text-gray-500 group-hover:text-blue-600 transition-colors" />}
                    <span className="font-semibold text-base tracking-tight">{title}</span>
                </div>
                <span className="text-sm font-medium text-gray-400">{unit}</span>
            </div>

            {/* Main Value - Fluid Type */}
            <div className="flex-1 flex items-center justify-start mt-2">
                <span className="text-[clamp(2.5rem,4vw,3.5rem)] font-bold text-gray-900 tracking-tighter leading-none">
                    {value}
                </span>
            </div>

            {/* Footer / Gauge */}
            <div className="flex justify-between items-end">
                <div className="flex flex-col">
                    <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1">Status</span>
                    <span className={`text-sm font-medium px-2 py-0.5 rounded-full w-fit ${status === 'ideal' ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-700'}`}>
                        {status.charAt(0).toUpperCase() + status.slice(1)}
                    </span>
                </div>

                <div className="h-12 w-24 relative opacity-80 group-hover:opacity-100 transition-opacity">
                    <ResponsiveContainer width="100%" height="100%">
                        <PieChart>
                            <Pie
                                data={data}
                                cx="50%"
                                cy="100%"
                                startAngle={180}
                                endAngle={0}
                                innerRadius={25}
                                outerRadius={36}
                                paddingAngle={0}
                                dataKey="value"
                                stroke="none"
                                cornerRadius={0} // Sharp corners for technical feel
                            >
                                <Cell fill={color} />
                                <Cell fill="#f1f5f9" />
                            </Pie>
                        </PieChart>
                    </ResponsiveContainer>
                </div>
            </div>
        </div>
    );
};

export default ParameterCard;
