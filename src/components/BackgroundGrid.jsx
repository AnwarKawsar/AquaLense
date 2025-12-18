import React from 'react';

const BackgroundGrid = () => {
    return (
        <div className="fixed inset-0 -z-50 overflow-hidden bg-slate-950">
            {/* 3D Moving Grid */}
            <div className="absolute inset-0 perspective-[500px]">
                <div className="absolute inset-0 transform rotate-x-60 scale-y-150 origin-top animate-grid-flow opacity-30">
                    <div className="w-full h-[200%] bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:40px_40px]"></div>
                </div>
            </div>

            {/* Vignette Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-slate-950 pointer-events-none" />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-transparent to-slate-950 pointer-events-none" />

            {/* Floating Particles (CSS) */}
            <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-blue-500 rounded-full animate-float-slow opacity-50 blur-[2px]" />
            <div className="absolute top-3/4 right-1/3 w-1.5 h-1.5 bg-indigo-400 rounded-full animate-float-medium opacity-60 blur-[1px]" />
            <div className="absolute bottom-1/4 left-1/2 w-3 h-3 bg-teal-500 rounded-full animate-float-fast opacity-30 blur-[4px]" />
        </div>
    );
};

export default BackgroundGrid;
