import React from 'react';

const Navbar = ({ onDashboardClick }) => {
    return (
        <nav className="fixed top-0 w-full z-50 glass border-b border-white/5 py-4">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-12">
                    <div className="flex items-center gap-4">
                        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-[0_0_15px_rgba(139,92,246,0.5)]">
                            <span className="text-white font-black text-xs">TT</span>
                        </div>
                        <span className="text-xl font-black text-white tracking-widest uppercase selection:bg-white selection:text-black">TECH TITANS</span>
                    </div>

                    <div className="hidden md:flex items-center gap-10">
                        {['Resume', 'Planner', 'Market'].map((item) => (
                            <a
                                key={item}
                                href={`#${item.toLowerCase().split(' ')[0]}`}
                                className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 hover:text-white transition-all duration-300 relative group"
                            >
                                {item}
                                <span className="absolute -bottom-1 left-0 w-0 h-px bg-primary transition-all duration-300 group-hover:w-full"></span>
                            </a>
                        ))}
                        <button
                            onClick={onDashboardClick}
                            className="px-6 py-2 rounded-full glass border-white/10 text-[10px] font-black uppercase tracking-widest text-white hover:bg-white/10 transition-all active:scale-95"
                        >
                            Portal Access
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
