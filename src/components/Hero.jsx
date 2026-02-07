import React from 'react';

const Hero = () => {
    return (
        <div className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center">
                    <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6">
                        <span className="block">Navigate Your Career with</span>
                        <span className="block text-gradient">AI-Powered Precision</span>
                    </h1>
                    <p className="mt-3 max-w-md mx-auto text-lg text-slate-400 sm:text-xl md:mt-5 md:max-w-3xl">
                        Align your skills with market trends, optimize your resume, and follow adaptive study plans
                        designed just for you.
                    </p>
                    <div className="mt-10 flex justify-center gap-4">
                        <button className="btn-primary text-lg px-8 py-3">
                            Explore Tools
                        </button>
                        <button className="px-8 py-3 rounded-lg border border-white/10 glass hover:bg-white/5 transition-all text-lg">
                            Learn More
                        </button>
                    </div>
                </div>

                {/* Feature Preview Cards */}
                <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[
                        { title: 'Resume Analyzer', desc: 'S3: Smart resume scoring and feedback.' },
                        { title: 'Adaptive Planner', desc: 'M2: Personalized learning paths.' },
                        { title: 'Market Trends', desc: 'H1: Real-time skill demand mapping.' }
                    ].map((feature, i) => (
                        <div key={i} className="glass p-8 rounded-2xl hover:translate-y-[-8px] transition-all duration-300">
                            <div className="w-12 h-12 bg-primary/20 rounded-lg mb-6 flex items-center justify-center text-primary">
                                {i + 1}
                            </div>
                            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                            <p className="text-slate-400">{feature.desc}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Decorative background elements */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 operation-pointer-none">
                <div className="absolute top-[-10%] left-[-10%] w-1/2 h-1/2 bg-primary/10 rounded-full blur-[120px]"></div>
                <div className="absolute bottom-[-10%] right-[-10%] w-1/2 h-1/2 bg-secondary/10 rounded-full blur-[120px]"></div>
            </div>
        </div>
    );
};

export default Hero;
