import React from 'react';
import { motion } from 'framer-motion';
import { BadgeAlert, TrendingDown, Skull, Activity, Cloud, Monitor, FishSymbol } from 'lucide-react';
import { Link } from 'react-router-dom';

const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
};

const Home = () => {
    return (
        <div className="flex flex-col w-full">
            {/* Hero Section */}
            <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden bg-gradient-to-b from-primary/10 via-background to-background">
                <div className="container px-4 md:px-6 flex flex-col items-center text-center z-10">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        className="mb-8 p-6 bg-white/30 backdrop-blur-xl rounded-full shadow-lg border border-white/50"
                    >
                        {/* Logo Placeholder - simplified version used in Navbar */}
                        <div className="flex items-center justify-center space-x-2">
                            <div className="w-16 h-16 bg-primary rounded-xl flex items-center justify-center text-primary-foreground">
                                <FishSymbol size={40} />
                            </div>
                        </div>
                    </motion.div>

                    <motion.h1
                        {...fadeIn}
                        className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-700 mb-6"
                    >
                        Crystal clear insights for <br className="hidden md:block" /> optimal fish farming.
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3, duration: 0.8 }}
                        className="max-w-[700px] text-muted-foreground text-lg md:text-xl mb-10"
                    >
                        Monitor water quality in real-time to prevent production loss and ensure healthy growth.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                        className="flex flex-col sm:flex-row gap-4"
                    >
                        <Link to="/dashboard">
                            <button className="h-12 px-8 rounded-full bg-primary text-primary-foreground font-semibold text-lg hover:shadow-lg hover:scale-105 transition-all">
                                View Live Demo
                            </button>
                        </Link>
                        <button className="h-12 px-8 rounded-full border border-input bg-background hover:bg-accent text-lg font-medium transition-colors">
                            Learn More
                        </button>
                    </motion.div>
                </div>

                {/* Decorative background elements */}
                <div className="absolute top-1/4 left-10 w-64 h-64 bg-primary/20 rounded-full blur-3xl -z-10 animate-pulse" />
                <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl -z-10" />
            </section>

            {/* Problem Section */}
            <section className="py-24 bg-muted/30">
                <div className="container px-4 md:px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">The Problem</h2>
                        <p className="mt-4 text-muted-foreground text-xl">Inefficient Water Management</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <ProblemCard
                            icon={<TrendingDown className="h-12 w-12 text-destructive" />}
                            title="Production Loss"
                            description="Poor water quality leads to massive financial losses estimated at $730M per year."
                        />
                        <ProblemCard
                            icon={<BadgeAlert className="h-12 w-12 text-orange-500" />}
                            title="Hampered Growth"
                            description="Ammonia and pH fluctuations stunt fish development and increase mortality."
                        />
                        <ProblemCard
                            icon={<Skull className="h-12 w-12 text-gray-700" />}
                            title="Human Toxicity"
                            description="Contaminated fish consumption poses serious health risks to humans."
                        />
                    </div>
                </div>
            </section>

            {/* Soiution / How it Works */}
            <section className="py-24" id="how-it-works">
                <div className="container px-4 md:px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">The Aqua Lense Solution</h2>
                        <p className="mt-4 text-muted-foreground text-xl">A complete 3-Node System for continuous monitoring</p>
                    </div>

                    <div className="relative flex flex-col md:flex-row items-center justify-center gap-12 bg-card p-12 rounded-3xl border shadow-sm">
                        {/* Node 1 */}
                        <div className="flex flex-col items-center text-center max-w-xs z-10">
                            <div className="w-24 h-24 rounded-2xl bg-blue-100 flex items-center justify-center mb-4 text-primary">
                                <FishSymbol size={48} />
                            </div>
                            <h3 className="text-xl font-bold mb-2">Fish Farm Node</h3>
                            <p className="text-muted-foreground">Sensors deployed in the pond collect vital data.</p>
                        </div>

                        {/* Arrow */}
                        <div className="hidden md:flex flex-col items-center text-muted-foreground/50">
                            <div className="h-1 w-24 bg-current rounded-full" />
                            <span className="text-xs uppercase mt-2 font-semibold tracking-widest">Data</span>
                        </div>

                        {/* Node 2 - Cloud/Hardware */}
                        <div className="flex flex-col items-center text-center max-w-xs z-10">
                            <div className="w-24 h-24 rounded-2xl bg-indigo-100 flex items-center justify-center mb-4 text-indigo-600">
                                <Cloud size={48} />
                            </div>
                            <h3 className="text-xl font-bold mb-2">Processing Node</h3>
                            <p className="text-muted-foreground">Hardware transmits data to the cloud instantly.</p>
                        </div>

                        {/* Arrow */}
                        <div className="hidden md:flex flex-col items-center text-muted-foreground/50">
                            <div className="h-1 w-24 bg-current rounded-full" />
                            <span className="text-xs uppercase mt-2 font-semibold tracking-widest">Insights</span>
                        </div>

                        {/* Node 3 - Software */}
                        <div className="flex flex-col items-center text-center max-w-xs z-10">
                            <div className="w-24 h-24 rounded-2xl bg-emerald-100 flex items-center justify-center mb-4 text-emerald-600">
                                <Monitor size={48} />
                            </div>
                            <h3 className="text-xl font-bold mb-2">Software Node</h3>
                            <p className="text-muted-foreground">You receive real-time notifications and analytics.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

function ProblemCard({ icon, title, description }) {
    return (
        <motion.div
            whileHover={{ y: -5 }}
            className="flex flex-col items-center text-center p-8 rounded-2xl bg-card border shadow-sm hover:shadow-md transition-all"
        >
            <div className="mb-6 p-4 rounded-full bg-background border shadow-inner">
                {icon}
            </div>
            <h3 className="text-xl font-bold mb-2">{title}</h3>
            <p className="text-muted-foreground leading-relaxed">
                {description}
            </p>
        </motion.div>
    )
}

export default Home;
