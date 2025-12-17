import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Droplets } from 'lucide-react';
import { cn } from '../lib/utils';
import { motion } from 'framer-motion';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container flex h-16 items-center px-4 md:px-8">
                <Link to="/" className="mr-6 flex items-center space-x-2">
                    <Droplets className="h-6 w-6 text-primary" />
                    <span className="hidden font-bold sm:inline-block">Aqua Lense</span>
                </Link>

                {/* Desktop Nav */}
                <div className="hidden md:flex md:items-center md:space-x-6 text-sm font-medium">
                    <Link to="/" className="transition-colors hover:text-foreground/80 text-foreground/60">
                        Home
                    </Link>
                    <a href="#how-it-works" className="transition-colors hover:text-foreground/80 text-foreground/60">
                        How it works
                    </a>
                </div>

                <div className="flex flex-1 items-center justify-end space-x-2">
                    <Link to="/dashboard">
                        <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2">
                            Demo Dashboard
                        </button>
                    </Link>
                    <button
                        className="md:hidden p-2"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className="md:hidden border-b bg-background p-4"
                >
                    <div className="flex flex-col space-y-4">
                        <Link to="/" className="text-sm font-medium" onClick={() => setIsOpen(false)}>
                            Home
                        </Link>
                        <a href="#how-it-works" className="text-sm font-medium" onClick={() => setIsOpen(false)}>
                            How it works
                        </a>
                        <Link to="/dashboard" onClick={() => setIsOpen(false)}>
                            <button className="w-full rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground">
                                Demo Dashboard
                            </button>
                        </Link>
                    </div>
                </motion.div>
            )}
        </nav>
    );
};

export default Navbar;
