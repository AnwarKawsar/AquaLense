import React from 'react';
import Navbar from '../components/Navbar';
import BackgroundGrid from '../components/BackgroundGrid';
import { ArrowRight } from 'lucide-react';

const Solutions = () => {
    return (
        <div className="min-h-screen font-sans text-slate-100 selection:bg-blue-500/30">
            <BackgroundGrid />
            <Navbar />

            <main className="pt-32 pb-20 px-6 container mx-auto max-w-6xl relative z-10">
                <div className="max-w-3xl mb-24">
                    <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-8 text-white">
                        Built for every drop.
                    </h1>
                    <p className="text-xl text-slate-400 hover:text-slate-200 transition-colors cursor-default">
                        Whether you're managing a high-density Koi pond or a commercial aquaculture facility,
                        AquaLense adapts to your scale.
                    </p>
                </div>

                <div className="space-y-32">
                    <SolutionSection
                        number="01"
                        title="Commercial Aquaculture"
                        desc="Maximize yield and minimize mortality rates. Our predictive analytics help you adjust feed ratios and aeration based on real-time metabolism models."
                    />
                    <SolutionSection
                        number="02"
                        title="Hobbyist Koi Ponds"
                        desc="Protect your prized living jewels. Instant alerts for pH crashes or oxygen depletion ensure you can react before it's too late."
                    />
                    <SolutionSection
                        number="03"
                        title="Water Treatment"
                        desc="Monitor effluent quality and ensure compliance with environmental regulations automatically. Generate reports with a single click."
                    />
                </div>
            </main>
        </div>
    );
};

const SolutionSection = ({ number, title, desc }) => (
    <div className="group border-t border-slate-800 pt-16 flex flex-col md:flex-row gap-8 md:gap-32">
        <div className="font-mono text-xl text-blue-600 opacity-50">{number}</div>
        <div className="flex-1">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 group-hover:text-blue-200 transition-colors">{title}</h2>
            <p className="text-lg text-slate-400 leading-relaxed max-w-2xl">{desc}</p>
        </div>
        <div className="self-start md:self-end">
            <button className="flex items-center gap-2 text-slate-500 hover:text-white transition-colors group">
                Read Case Study <ArrowRight size={16} className="transform group-hover:translate-x-1 transition-transform" />
            </button>
        </div>
    </div>
)

export default Solutions;
