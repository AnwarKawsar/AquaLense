import React from 'react';
import Navbar from '../components/Navbar';
import BackgroundGrid from '../components/BackgroundGrid';
import { Check, Cpu, Layout, Settings } from 'lucide-react';

const Pricing = () => {
    return (
        <div className="min-h-screen font-sans text-slate-100 selection:bg-cyan-500/30 bg-slate-950">
            <BackgroundGrid />
            <Navbar />

            <main className="pt-32 pb-20 px-6 container mx-auto max-w-7xl relative z-10">
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
                        Transparent <span className="text-cyan-400">Revenue Model</span>.
                    </h1>
                    <p className="text-xl text-slate-400 max-w-2xl mx-auto">
                        High-quality hardware combined with intelligent software to scale your aquaculture business.
                    </p>
                </div>

                {/* Hardware Section */}
                <div className="mb-24">
                    <div className="flex items-center gap-4 mb-8">
                        <div className="p-2 bg-cyan-500/10 rounded-lg">
                            <Cpu className="text-cyan-400" size={24} />
                        </div>
                        <h2 className="text-2xl font-bold">Hardware</h2>
                    </div>

                    <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-8 max-w-2xl">
                        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
                            <div className="space-y-4 text-center md:text-left">
                                <h3 className="text-xl font-bold text-white">Aqua Lense Node</h3>
                                <p className="text-slate-400">The core monitoring unit. Dust-proof, water-resistant, and high-precision sensors.</p>
                            </div>
                            <div className="text-center">
                                <div className="text-5xl font-bold text-white mb-2">$50</div>
                                <div className="text-cyan-400 font-semibold uppercase tracking-widest text-xs">Per Unit</div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Software Section */}
                <div>
                    <div className="flex items-center gap-4 mb-8">
                        <div className="p-2 bg-blue-500/10 rounded-lg">
                            <Layout className="text-blue-400" size={24} />
                        </div>
                        <h2 className="text-2xl font-bold">Software</h2>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {/* Business Tier */}
                        <PricingCard
                            tier="Business"
                            price="$10"
                            period="/mo"
                            offer="12-months term + 1 month free"
                            features={["Everything you need to manage your Fish farm", "Real-time alerts", "Standard analytics", "Mobile access"]}
                        />

                        {/* Premium Tier */}
                        <PricingCard
                            tier="Premium"
                            price="$50"
                            period="/mo"
                            offer="24-months term + 1 month free"
                            highlight
                            features={["All the sensors needs, in one package", "Advanced AI predictions", "Custom dashboard views", "Priority 24/7 support"]}
                        />

                        {/* Customized Tier */}
                        <PricingCard
                            tier="Customized"
                            price="Custom"
                            period=""
                            offer="Based on requirements"
                            features={["Depend on farmer demand", "Custom sensor integrations", "Enterprise SLA", "On-site installation"]}
                        />
                    </div>
                </div>
            </main>

            <footer className="py-16 border-t border-slate-800 relative z-10 bg-slate-950 w-full mt-20">
                <div className="container mx-auto px-6 text-center text-slate-500">
                    © 2024 AquaLense Inc. All rights reserved.
                </div>
            </footer>
        </div>
    );
};

const PricingCard = ({ tier, price, period, offer, features, highlight }) => (
    <div className={`relative p-8 rounded-3xl border flex flex-col transition-all duration-300 hover:scale-[1.02] ${highlight
            ? 'bg-slate-900 border-cyan-500/50 shadow-[0_0_40px_-10px_rgba(6,182,212,0.3)]'
            : 'bg-slate-950/40 border-slate-800'
        }`}>
        {highlight && (
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-cyan-500 text-slate-950 text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full">
                Most Popular
            </div>
        )}

        <h3 className={`text-lg font-medium mb-2 ${highlight ? 'text-cyan-400' : 'text-slate-400'}`}>{tier}</h3>
        <div className="flex items-baseline gap-1 mb-2">
            <span className="text-5xl font-bold text-white tracking-tighter">{price}</span>
            <span className="text-slate-500 font-medium">{period}</span>
        </div>

        <div className="text-sm font-semibold text-slate-500 mb-8 pb-4 border-b border-slate-800">
            {offer}
        </div>

        <div className="space-y-4 mb-8 flex-1">
            {features.map((feat, i) => (
                <div key={i} className="flex items-start gap-3 text-slate-300 text-sm">
                    <Check size={16} className={`${highlight ? 'text-cyan-400' : 'text-slate-500'} mt-0.5 shrink-0`} />
                    <span className="leading-relaxed">{feat}</span>
                </div>
            ))}
        </div>

        <button className={`w-full py-4 rounded-xl font-bold transition-all ${highlight
                ? 'bg-cyan-500 hover:bg-cyan-400 text-slate-950 shadow-lg'
                : 'bg-slate-800 hover:bg-slate-700 text-white'
            }`}>
            {price === 'Custom' ? 'Contact Sales' : 'Get Started'}
        </button>
    </div>
)

export default Pricing;
