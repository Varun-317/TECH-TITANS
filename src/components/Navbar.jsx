import React from 'react';

const Navbar = () => {
    return (
        <nav className="fixed top-0 w-full z-50 glass border-b border-white/5">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center">
                        <span className="text-2xl font-bold text-gradient">TECH TITANS</span>
                    </div>
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-8">
                            <a href="#" className="text-slate-300 hover:text-white transition-colors">Home</a>
                            <a href="#resume" className="text-slate-300 hover:text-white transition-colors">Resume Analyzer</a>
                            <a href="#planner" className="text-slate-300 hover:text-white transition-colors">Study Planner</a>
                            <a href="#trends" className="text-slate-300 hover:text-white transition-colors">Job Trends</a>
                            <button className="btn-primary ml-4">Get Started</button>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
