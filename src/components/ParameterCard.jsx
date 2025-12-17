import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUp, ArrowDown, Minus } from 'lucide-react';
import { AreaChart, Area, ResponsiveContainer, YAxis } from 'recharts';

const ParameterCard = ({ title, value, unit, status, trend, history, color = "#0ea5e9" }) => {
    // Determine status color
    const statusColors = {
        ideal: "bg-emerald-500/10 text-emerald-500 border-emerald-500/20",
        warning: "bg-yellow-500/10 text-yellow-500 border-yellow-500/20",
        critical: "bg-red-500/10 text-red-500 border-red-500/20",
    };

    const currentStatus = statusColors[status?.toLowerCase()] || statusColors.ideal;

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative overflow-hidden rounded-xl border bg-card p-6 shadow-sm hover:shadow-md transition-all"
        >
            <div className="flex justify-between items-start mb-4">
                <div>
                    <h3 className="text-sm font-medium text-muted-foreground">{title}</h3>
                    <div className="flex items-baseline gap-1 mt-1">
                        <span className="text-3xl font-bold tracking-tight">{value}</span>
                        <span className="text-sm font-medium text-muted-foreground">{unit}</span>
                    </div>
                </div>
                <div className={`px-2.5 py-0.5 rounded-full text-xs font-semibold border ${currentStatus}`}>
                    {status?.toUpperCase()}
                </div>
            </div>

            <div className="h-[60px] w-full mt-4">
                <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={history}>
                        <defs>
                            <linearGradient id={`color-${title}`} x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor={color} stopOpacity={0.3} />
                                <stop offset="95%" stopColor={color} stopOpacity={0} />
                            </linearGradient>
                        </defs>
                        <YAxis hide domain={['dataMin - 1', 'dataMax + 1']} />
                        <Area
                            type="monotone"
                            dataKey="value"
                            stroke={color}
                            fillOpacity={1}
                            fill={`url(#color-${title})`}
                            strokeWidth={2}
                        />
                    </AreaChart>
                </ResponsiveContainer>
            </div>
        </motion.div>
    );
};

export default ParameterCard;
