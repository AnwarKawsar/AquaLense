import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Activity, LayoutDashboard, ShieldCheck } from 'lucide-react';
import Navbar from '../components/Navbar';
import BackgroundGrid from '../components/BackgroundGrid';

const Home = () => {
    // Define features for mapping
    const features = [
        {
            title: "Real-time Data",
            description: "Updates every second. Never miss a critical fluctuation in your water parameters.",
            icon: <Activity className="w-8 h-8 text-cyan-400" />,
        },
        {
            title: "Custom Dashboards",
            description: "Arrange your sensors and metrics exactly how you want them with our drag-and-drop grid.",
            icon: <LayoutDashboard className="w-8 h-8 text-cyan-400" />,
        },
        {
            title: "Enterprise Security",
            description: "Bank-grade encryption for all your data, compliant with industrial IoT standards.",
            icon: <ShieldCheck className="w-8 h-8 text-cyan-400" />,
        }
    ];

    return (
        <div className="min-h-screen font-sans selection:bg-teal-500/30 bg-slate-900 text-white">
            <BackgroundGrid />
            <Navbar />

            {/* Hero Section (Integrated from User Feedback) */}
            <section className="relative pt-24 pb-20 md:pt-32 md:pb-28 overflow-hidden z-10">
                {/* Optional: Subtle background glow effect for visual interest */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-cyan-500/10 blur-[120px] rounded-full -z-10 pointer-events-none"></div>

                <div className="max-w-5xl mx-auto px-6 text-center z-10 relative">

                    {/* NEW H1 Headline: Creates necessary hierarchy */}
                    <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 tracking-tight leading-tight">
                        The Operating System for <br className="hidden md:block" />
                        {/* Cyan accent color on key phrase */}
                        <span className="text-cyan-400">Modern Aquaculture</span>.
                    </h1>

                    {/* Sub-headline from your screenshot: Larger text, softer color */}
                    <p className="text-lg md:text-xl text-slate-400 mb-10 max-w-3xl mx-auto leading-relaxed">
                        Real-time insights, instant alerts, and historical data. The complete operating system for your aquaculture environment.
                    </p>

                    {/* Button Group: Flex container for alignment */}
                    <div className="flex flex-col sm:flex-row justify-center items-center gap-4">

                        {/* Primary Button: Solid Cyan background for high CTA prominence */}
                        <Link to="/dashboard" className="w-full sm:w-auto">
                            <button className="group bg-cyan-500 hover:bg-cyan-400 text-slate-900 font-bold py-3 px-8 rounded-lg transition-all duration-200 flex items-center gap-2 w-full justify-center text-lg shadow-[0_0_20px_rgba(6,182,212,0.5)]">
                                View Live Demo
                                {/* Arrow icon that moves slightly on hover */}
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </button>
                        </Link>

                        {/* Secondary Button: Transparent with border (ghost button) */}
                        <button className="border border-slate-600 hover:border-slate-400 hover:bg-slate-800/50 text-slate-200 font-semibold py-3 px-8 rounded-lg transition-all duration-200 w-full sm:w-auto justify-center text-lg">
                            Contact Sales
                        </button>

                    </div>
                </div>
            </section>

            {/* Hero Product Representation (Kept from previous iteration as it complements the hero) */}
            <section className="relative pb-24 z-10 px-6">
                <div className="w-full max-w-6xl mx-auto border border-slate-800 rounded-2xl shadow-2xl overflow-hidden bg-slate-950/80 backdrop-blur-md aspect-video relative group ring-1 ring-white/10">
                    {/* Cyber UI Abstract */}
                    <div className="absolute inset-0 flex flex-col">
                        <div className="h-14 border-b border-slate-800 flex items-center px-6 gap-3 bg-slate-900/80">
                            <div className="w-3.5 h-3.5 rounded-full bg-slate-700" />
                            <div className="w-3.5 h-3.5 rounded-full bg-slate-700" />
                            <div className="w-3.5 h-3.5 rounded-full bg-slate-700" />
                        </div>
                        <div className="flex-1 flex pointer-events-none select-none">
                            <div className="w-72 border-r border-slate-800 bg-slate-900/40 p-6 space-y-4 hidden md:block">
                                <div className="h-10 bg-slate-800/60 rounded animate-pulse w-3/4" />
                                <div className="h-10 bg-slate-800/60 rounded animate-pulse w-full" />
                                <div className="h-10 bg-slate-800/60 rounded animate-pulse w-5/6" />
                            </div>
                            <div className="flex-1 p-8 md:p-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                {[1, 2, 3, 4, 5, 6].map(i => (
                                    <div key={i} className="h-40 border border-slate-700/50 rounded-xl bg-slate-800/20 p-5 space-y-3 relative overflow-hidden flex flex-col justify-between">
                                        <div className="flex justify-between items-start">
                                            <div className="w-10 h-10 bg-teal-500/10 rounded-lg" />
                                            <div className="h-2 w-2 rounded-full bg-teal-500 shadow-[0_0_10px_rgba(20,184,166,1)]"></div>
                                        </div>
                                        <div>
                                            <div className="h-8 w-24 bg-slate-700/50 rounded mb-2" />
                                            <div className="h-1 w-full bg-slate-700 rounded-full overflow-hidden">
                                                <div className="h-full bg-teal-500 w-2/3" />
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Section (User Provided Refinement) */}
            <section className="bg-slate-900 py-20 px-6 text-white relative z-10 border-t border-slate-800">
                <div className="max-w-6xl mx-auto">

                    {/* Header Section */}
                    <div className="mb-16 text-center md:text-left">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">
                            Everything you need.
                        </h2>
                        <p className="text-slate-400 text-lg max-w-2xl">
                            Powerful features to keep your ecosystem healthy, secure, and fully monitored.
                        </p>
                    </div>

                    {/* Grid Layout: 1 column on mobile, 3 on desktop */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {features.map((feature, index) => (
                            <div
                                key={index}
                                className="bg-slate-800/50 border border-slate-700 rounded-xl p-8 hover:bg-slate-800 transition-all duration-300 group"
                            >
                                <div className="mb-6 bg-slate-900/50 w-fit p-3 rounded-lg border border-slate-700 group-hover:border-cyan-500/30 transition-colors">
                                    {feature.icon}
                                </div>
                                <h3 className="text-xl font-semibold mb-3 text-slate-100 group-hover:text-cyan-400 transition-colors">
                                    {feature.title}
                                </h3>
                                <p className="text-slate-400 leading-relaxed">
                                    {feature.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <footer className="py-16 border-t border-slate-800 relative z-10 bg-slate-950 w-full">
                <div className="container mx-auto px-6 text-center text-slate-500">
                    © 2024 AquaLense Inc. All rights reserved.
                </div>
            </footer>
        </div>
    );
};

export default Home;
