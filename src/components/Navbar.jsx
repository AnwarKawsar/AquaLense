import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Droplets } from 'lucide-react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-950/50 backdrop-blur-md border-b border-white/5">
            <div className="container mx-auto px-6 h-16 flex items-center justify-between">
                {/* Logo */}
                <Link to="/" className="flex items-center gap-3">
                    <img src="/logo.png" alt="AquaLense Logo" className="h-10 w-auto" />
                    <span className="font-bold text-xl tracking-tight text-white">AquaLense</span>
                </Link>

                {/* Desktop Links */}
                <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-400">
                    <Link to="/product" className="hover:text-white transition-colors">Product</Link>
                    <Link to="/solutions" className="hover:text-white transition-colors">Solutions</Link>
                    <Link to="/pricing" className="hover:text-white transition-colors">Pricing</Link>
                    <Link to="/team" className="hover:text-white transition-colors">Team</Link>
                </div>

                {/* Actions */}
                <div className="hidden md:flex items-center gap-4">
                    <Link to="/dashboard" className="text-sm font-medium hover:text-white text-slate-400">Log in</Link>
                    <Link to="/dashboard">
                        <button className="bg-black text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-gray-800 transition-colors">
                            Start Monitoring
                        </button>
                    </Link>
                </div>

                {/* Mobile Toggle */}
                <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden border-t p-4 bg-white">
                    <div className="flex flex-col space-y-4 text-sm font-medium">
                        <Link to="/" onClick={() => setIsOpen(false)}>Product</Link>
                        <Link to="/" onClick={() => setIsOpen(false)}>Solutions</Link>
                        <Link to="/dashboard" onClick={() => setIsOpen(false)}>Dashboard</Link>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
