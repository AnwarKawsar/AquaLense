import React from 'react';
import Navbar from '../components/Navbar';
import BackgroundGrid from '../components/BackgroundGrid';
import { Linkedin, Mail, GraduationCap } from 'lucide-react';

const Team = () => {
    const teamMembers = [
        {
            name: "Sadia Sultana Disha",
            role: "CEO",
            dept: "Department of Fisheries and Marine Bioscience",
            image: "/team/sadia.png"
        },
        {
            name: "Salma Akter",
            role: "CMO",
            dept: "Department of Fisheries and Marine Bioscience",
            image: "/team/salma.png"
        },
        {
            name: "Syed Raihanul Yeamin",
            role: "CFO",
            dept: "Department of Fisheries and Marine Bioscience",
            image: "/team/syed.png"
        },
        {
            name: "Kawsar Anwar",
            role: "CTO",
            dept: "Department of Electrical and Electronic Engineering",
            image: "/team/kawsar.png"
        }
    ];

    return (
        <div className="min-h-screen font-sans selection:bg-teal-500/30 bg-slate-900 text-white">
            <BackgroundGrid />
            <Navbar />

            <main className="pt-32 pb-20 px-6 container mx-auto max-w-7xl relative z-10">
                <div className="text-center mb-20">
                    <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
                        Meet the <span className="text-cyan-400">Innovators</span>.
                    </h1>
                    <p className="text-xl text-slate-400 max-w-2xl mx-auto">
                        A multidisciplinary team bridging the gap between marine bioscience and advanced electronics.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {teamMembers.map((member, index) => (
                        <div key={index} className="group relative">
                            {/* Card Background */}
                            <div className="absolute inset-0 bg-slate-800/40 rounded-2xl -rotate-1 group-hover:rotate-0 transition-transform duration-300" />

                            <div className="relative bg-slate-900 border border-slate-800 p-6 rounded-2xl hover:border-cyan-500/30 transition-colors h-full flex flex-col items-center text-center">
                                {/* Image Placeholder */}
                                <div className="w-32 h-32 mb-6 relative">
                                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-full blur-xl group-hover:blur-2xl transition-all" />
                                    <div className="relative w-full h-full bg-slate-800 rounded-full border-2 border-slate-700 overflow-hidden flex items-center justify-center">
                                        {member.image ? (
                                            <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                                        ) : (
                                            <span className="text-4xl text-slate-600 font-bold">
                                                {member.name.charAt(0)}
                                            </span>
                                        )}
                                    </div>
                                </div>

                                <h3 className="text-xl font-bold text-white mb-2">{member.name}</h3>
                                <div className="text-cyan-400 font-bold text-sm tracking-wider uppercase mb-4">{member.role}</div>

                                <div className="mt-auto space-y-4 w-full">
                                    <div className="h-px w-full bg-slate-800" />
                                    <div className="flex flex-col items-center gap-2 text-slate-500 text-xs">
                                        <GraduationCap size={16} className="text-slate-600" />
                                        <span className="leading-relaxed">{member.dept}</span>
                                    </div>
                                    <div className="flex justify-center gap-3 pt-2">
                                        <button className="p-2 rounded-full bg-slate-800 hover:bg-cyan-500/20 hover:text-cyan-400 transition-colors">
                                            <Linkedin size={16} />
                                        </button>
                                        <button className="p-2 rounded-full bg-slate-800 hover:bg-cyan-500/20 hover:text-cyan-400 transition-colors">
                                            <Mail size={16} />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </main>
        </div>
    );
};

export default Team;
