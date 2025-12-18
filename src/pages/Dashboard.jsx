import React from 'react';
import { useWaterData } from '../hooks/useWaterData';
import ParameterCard from '../components/ParameterCard';
import {
    LayoutGrid, MapPin, BarChart3, Bell, Settings, User,
    Droplets, Thermometer, Activity, FlaskConical, Waves,
    Zap, Wind, Leaf, PlayCircle, ChevronDown, Search
} from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Dashboard = () => {
    const data = useWaterData();

    return (
        <div className="min-h-screen bg-gray-50 flex font-sans text-gray-900">

            {/* Sidebar - Solid White */}
            <aside className="w-64 bg-white border-r border-gray-200 flex flex-col sticky top-0 h-screen hidden lg:flex">
                <div className="h-16 flex items-center px-6 mb-6">
                    <Link to="/" className="flex items-center gap-3">
                        <img src="/logo.png" alt="AquaLense Logo" className="h-8 w-8" />
                        <span className="font-bold text-lg tracking-tight">AquaLense</span>
                    </Link>
                </div>

                <div className="flex-1 px-3 space-y-1">
                    <NavItem icon={<LayoutGrid size={18} />} label="Overview" active />
                    <NavItem icon={<MapPin size={18} />} label="Site Map" />
                    <NavItem icon={<BarChart3 size={18} />} label="Analytics" />
                    <NavItem icon={<Bell size={18} />} label="Notifications" />
                </div>

                <div className="p-3 mt-auto mb-4">
                    <NavItem icon={<Settings size={18} />} label="Settings" />
                    <div className="mt-4 flex items-center gap-3 px-3 py-2">
                        <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-gray-500">
                            <User size={16} />
                        </div>
                        <div className="text-sm">
                            <div className="font-medium">Admin User</div>
                            <div className="text-gray-500 text-xs">admin@aqualense.com</div>
                        </div>
                    </div>
                </div>
            </aside>

            {/* Main Area */}
            <main className="flex-1 flex flex-col min-w-0">
                {/* Header - Sticky White */}
                <header className="h-16 bg-white border-b border-gray-200 sticky top-0 z-20 flex items-center justify-between px-6 md:px-8">
                    <div className="flex items-center gap-4">
                        <span className="text-gray-400">/</span>
                        <h1 className="font-semibold text-sm">Main Koi Pond</h1>
                    </div>

                    <div className="flex items-center gap-4">
                        <div className="hidden md:flex items-center gap-2 px-3 py-1.5 bg-gray-100 rounded-md text-sm text-gray-500">
                            <Search size={14} />
                            <span>Search...</span>
                        </div>
                        <div className="h-4 w-[1px] bg-gray-200"></div>
                        <button className="flex items-center gap-2 bg-black text-white px-4 py-1.5 rounded-md text-sm font-medium hover:bg-gray-800 transition-colors">
                            <PlayCircle size={14} /> Start Analysis
                        </button>
                    </div>
                </header>

                {/* Content */}
                <div className="p-6 md:p-8 max-w-[1920px] mx-auto w-full">
                    <div className="mb-8">
                        <h2 className="text-2xl font-bold tracking-tight mb-2">Real-time Overview</h2>
                        <p className="text-gray-500">Monitoring 12 active sensors across the main facility.</p>
                    </div>

                    <motion.div
                        layout
                        className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-6"
                    >
                        <ParameterCard title="Dissolved Oxygen" icon={Wind} {...data.oxygen} color="#3b82f6" />
                        <ParameterCard title="pH Level" icon={Droplets} {...data.ph} color="#10b981" />
                        <ParameterCard title="Temperature" icon={Thermometer} {...data.temperature} color="#f59e0b" />
                        <ParameterCard title="Ammonia" icon={FlaskConical} {...data.ammonia} color="#ef4444" />

                        <ParameterCard title="Nitrite" icon={FlaskConical} {...data.nitrite} color="#8b5cf6" />
                        <ParameterCard title="Turbidity" icon={Waves} {...data.turbidity} color="#78716c" />
                        <ParameterCard title="Conductivity" icon={Zap} {...data.conductivity} color="#06b6d4" />
                        <ParameterCard title="Carbon Dioxide" icon={Wind} {...data.co2} color="#64748b" />

                        <ParameterCard title="ORP" icon={Activity} {...data.orp} color="#ec4899" />
                        <ParameterCard title="BOD" icon={Leaf} {...data.bod} color="#84cc16" />
                        <ParameterCard title="COD" icon={Flask2Icon} {...data.cod} color="#14b8a6" />
                        <ParameterCard title="Water Purity" icon={Droplets} {...data.purity} color="#6366f1" />
                    </motion.div>
                </div>
            </main>
        </div>
    );
};

// Helper Icon
const Flask2Icon = (props) => <FlaskConical {...props} className="rotate-12" />

const NavItem = ({ icon, label, active }) => (
    <button className={`w-full flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium transition-colors ${active ? 'bg-gray-100 text-gray-900' : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'}`}>
        {icon}
        {label}
    </button>
)

export default Dashboard;
