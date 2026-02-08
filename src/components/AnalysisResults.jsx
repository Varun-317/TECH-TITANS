import React from 'react';
import ScoreCard from './ScoreCard';

const AnalysisResults = ({ jd }) => {
    const recommendations = [
        { type: 'Critical', text: 'Missing industry-specific keywords like "React hooks" or "System Design" found in JD.' },
        { type: 'Optimization', text: 'Improve your summary to quantify achievements using metrics detected in your text.' },
        { type: 'Formatting', text: 'Ensure consistent font styling across all sections for ATS compatibility.' }
    ];

    const skillMatches = [
        { skill: 'React.js', match: true },
        { skill: 'Tailwind CSS', match: true },
        { skill: 'Node.js', match: false },
        { skill: 'TypeScript', match: false },
        { skill: 'Cloud Architecture', match: false },
    ];

    return (
        <div className="space-y-10">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <ScoreCard label="JD Match Rate" score={58} color="text-primary" />
                <ScoreCard label="Keyword Synergy" score={72} color="text-secondary" />
                <ScoreCard label="Experience Gap" score={15} color="text-accent" />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Fix-It Suggestions */}
                <div className="glass p-8 rounded-3xl border-white/5 relative overflow-hidden group">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl -mr-16 -mt-16 group-hover:bg-primary/10 transition-all duration-500"></div>
                    <h3 className="text-xl font-black mb-8 flex items-center gap-3">
                        <span className="w-2 h-6 bg-primary rounded-full shadow-[0_0_10px_rgba(139,92,246,0.5)]"></span>
                        Critical Interventions
                    </h3>
                    <div className="space-y-6">
                        {recommendations.map((rec, i) => (
                            <div key={i} className="flex gap-4 p-5 rounded-2xl bg-white/5 border border-white/5 hover:border-white/10 transition-all hover:translate-x-1">
                                <span className={`px-2.5 py-1 rounded-lg text-[10px] font-black h-fit tracking-tighter uppercase ${rec.type === 'Critical' ? 'bg-red-500/20 text-red-400 border border-red-500/20' :
                                        rec.type === 'Optimization' ? 'bg-blue-500/20 text-blue-400 border border-blue-500/20' :
                                            'bg-slate-500/20 text-slate-400 border border-slate-500/20'
                                    }`}>
                                    {rec.type}
                                </span>
                                <p className="text-slate-300 text-sm leading-relaxed font-medium">{rec.text}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* JD Skill Gap Analysis */}
                <div className="glass p-8 rounded-3xl border-white/5 relative overflow-hidden group">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/5 rounded-full blur-3xl -mr-16 -mt-16 group-hover:bg-secondary/10 transition-all duration-500"></div>
                    <h3 className="text-xl font-black mb-8 flex items-center gap-3">
                        <span className="w-2 h-6 bg-secondary rounded-full shadow-[0_0_10px_rgba(6,182,212,0.5)]"></span>
                        JD Semantic Match
                    </h3>
                    <div className="flex flex-wrap gap-3">
                        {skillMatches.map((item, i) => (
                            <div
                                key={i}
                                className={`px-5 py-2.5 rounded-xl border flex items-center gap-3 transition-all cursor-default ${item.match
                                        ? 'border-green-500/20 bg-green-500/10 text-green-400'
                                        : 'border-red-500/20 bg-red-500/10 text-red-400'
                                    }`}
                            >
                                <div className={`w-2 h-2 rounded-full ${item.match ? 'bg-green-400' : 'bg-red-400 animate-pulse'}`}></div>
                                <span className="font-bold text-sm">{item.skill}</span>
                            </div>
                        ))}
                    </div>
                    <div className="mt-10 p-5 rounded-2xl bg-white/5 border border-white/5 relative bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]">
                        <p className="text-xs text-slate-400 leading-relaxed font-medium italic">
                            "Based on the Job Description, we detected a strong semantic gap in <span className="text-white">TypeScript</span> and <span className="text-white">Cloud Architecture</span>.
                            Your resume currently ranks in the <span className="text-primary text-sm font-bold">top 42%</span> of applicants for this role."
                        </p>
                    </div>
                </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
                <button className="flex-1 py-5 rounded-2xl bg-gradient-to-r from-primary to-secondary text-white font-black uppercase tracking-widest text-sm hover:shadow-[0_0_50px_rgba(139,92,246,0.3)] transition-all active:scale-95">
                    Generate Optimized Resume
                </button>
                <button className="px-8 py-5 rounded-2xl bg-white/5 border border-white/10 text-white font-bold hover:bg-white/10 transition-all text-sm uppercase">
                    Compare Versions
                </button>
            </div>
        </div>
    );
};

export default AnalysisResults;
