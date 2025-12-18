import React from 'react';
import Navbar from '../components/Navbar';
import BackgroundGrid from '../components/BackgroundGrid';
import { Cpu, Wifi, Database, Shield, Zap, Search } from 'lucide-react';

const Product = () => {
    return (
        <div className="min-h-screen font-sans text-slate-100 selection:bg-blue-500/30">
            <BackgroundGrid />
            <Navbar />

            <main className="pt-32 pb-20 px-6 container mx-auto max-w-6xl relative z-10">
                <div className="text-center mb-20">
                    <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6 bg-gradient-to-br from-white to-slate-400 bg-clip-text text-transparent">
                        Hardware meets Intelligence.
                    </h1>
                    <p className="text-xl text-slate-400 max-w-2xl mx-auto">
                        The AquaLense Node is a self-contained ecosystem monitor.
                        Rugged, reliable, and ready to deploy in minutes.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-16 items-center mb-32">
                    <div className="relative group">
                        <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 to-indigo-500/20 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-500" />
                        <div className="relative bg-slate-900/50 backdrop-blur-md border border-slate-700/50 rounded-3xl p-8 aspect-square flex items-center justify-center">
                            {/* Placeholder for Product Image */}
                            <div className="text-slate-500 font-mono text-sm border border-dashed border-slate-600 p-12 rounded-xl">
                                [ 3D Product Render Here ]
                            </div>
                        </div>
                    </div>

                    <div className="space-y-12">
                        <FeatureRow
                            icon={<Cpu size={24} className="text-blue-400" />}
                            title="Edge Processing"
                            desc="On-board AI analysis filters noise and sends only verified data points to the cloud, saving bandwidth."
                        />
                        <FeatureRow
                            icon={<Wifi size={24} className="text-emerald-400" />}
                            title="Tri-Band Connectivity"
                            desc="LoRaWAN, LTE-M, and WiFi ensure connectivity even in remote farm locations."
                        />
                        <FeatureRow
                            icon={<Zap size={24} className="text-amber-400" />}
                            title="12-Month Battery"
                            desc="High-density LiFePO4 cells combined with solar harvesting keep the node running year-round."
                        />
                    </div>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                    <SpecCard icon={<Database size={20} />} title="Data Retention" value="Unlimited Cloud Storage" />
                    <SpecCard icon={<Shield size={20} />} title="Durability" value="IP68 Waterproof Rating" />
                    <SpecCard icon={<Search size={20} />} title="Precision" value="±0.01 pH Accuracy" />
                </div>
            </main>
        </div>
    );
};

const FeatureRow = ({ icon, title, desc }) => (
    <div className="flex gap-4">
        <div className="mt-1 w-12 h-12 rounded-xl bg-slate-800/50 flex items-center justify-center shrink-0 border border-slate-700/50">
            {icon}
        </div>
        <div>
            <h3 className="text-xl font-bold mb-2">{title}</h3>
            <p className="text-slate-400 leading-relaxed">{desc}</p>
        </div>
    </div>
)

const SpecCard = ({ icon, title, value }) => (
    <div className="bg-slate-900/40 border border-slate-800 p-6 rounded-xl flex items-center gap-4">
        <div className="text-slate-500">{icon}</div>
        <div>
            <div className="text-xs text-slate-500 uppercase tracking-widest font-semibold">{title}</div>
            <div className="font-mono text-lg font-bold text-blue-100">{value}</div>
        </div>
    </div>
)

export default Product;
