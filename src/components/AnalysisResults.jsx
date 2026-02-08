import React from 'react';
import ScoreCard from './ScoreCard';

const AnalysisResults = ({ data }) => {
    const { matchScore, summary, strengths, weaknesses, missingKeywords, recommendations } = data;

    return (
        <div className="space-y-10">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <ScoreCard label="Match Rate" score={matchScore} color="text-primary" />
                <ScoreCard label="Citations" score={85} color="text-secondary" />
                <ScoreCard label="Structural Integrity" score={92} color="text-accent" />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Fix-It Suggestions */}
                <div className="glass p-8 rounded-3xl border-white/5 relative overflow-hidden group">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl -mr-16 -mt-16 group-hover:bg-primary/10 transition-all duration-500"></div>
                    <h3 className="text-xl font-black mb-8 flex items-center gap-3">
                        <span className="w-2 h-6 bg-primary rounded-full shadow-[0_0_10px_rgba(139,92,246,0.5)]"></span>
                        Strategic Insights
                    </h3>
                    <div className="space-y-6">
                        {recommendations.slice(0, 3).map((rec, i) => (
                            <div key={i} className="flex gap-4 p-5 rounded-2xl bg-white/5 border border-white/5 hover:border-white/10 transition-all hover:translate-x-1">
                                <span className="px-2.5 py-1 rounded-lg text-[10px] font-black h-fit tracking-tighter uppercase bg-primary/20 text-primary border border-primary/20">
                                    Action
                                </span>
                                <p className="text-slate-300 text-sm leading-relaxed font-medium">{rec}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* JD Skill Gap Analysis */}
                <div className="glass p-8 rounded-3xl border-white/5 relative overflow-hidden group">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/5 rounded-full blur-3xl -mr-16 -mt-16 group-hover:bg-secondary/10 transition-all duration-500"></div>
                    <h3 className="text-xl font-black mb-8 flex items-center gap-3">
                        <span className="w-2 h-6 bg-secondary rounded-full shadow-[0_0_10px_rgba(6,182,212,0.5)]"></span>
                        Missing Keywords
                    </h3>
                    <div className="flex flex-wrap gap-3">
                        {missingKeywords.map((keyword, i) => (
                            <div
                                key={i}
                                className="px-5 py-2.5 rounded-xl border border-red-500/20 bg-red-500/10 text-red-400 flex items-center gap-3 transition-all cursor-default"
                            >
                                <div className="w-2 h-2 rounded-full bg-red-400 animate-pulse"></div>
                                <span className="font-bold text-sm">{keyword}</span>
                            </div>
                        ))}
                        {missingKeywords.length === 0 && (
                            <p className="text-slate-500 italic text-sm">No critical keywords missing.</p>
                        )}
                    </div>
                    <div className="mt-10 p-5 rounded-2xl bg-white/5 border border-white/5 relative">
                        <p className="text-xs text-slate-400 leading-relaxed font-medium">
                            <span className="text-white font-bold uppercase tracking-widest block mb-2">Executive Summary:</span>
                            {summary}
                        </p>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="p-8 rounded-3xl border border-white/5 bg-white/[0.02]">
                    <h4 className="text-sm font-black uppercase tracking-widest text-primary mb-4">Core Strengths</h4>
                    <ul className="list-disc list-inside space-y-2 text-slate-400 text-sm font-medium">
                        {strengths.map((s, i) => <li key={i}>{s}</li>)}
                    </ul>
                </div>
                <div className="p-8 rounded-3xl border border-white/5 bg-white/[0.02]">
                    <h4 className="text-sm font-black uppercase tracking-widest text-accent mb-4">Critical Weaknesses</h4>
                    <ul className="list-disc list-inside space-y-2 text-slate-400 text-sm font-medium">
                        {weaknesses.map((w, i) => <li key={i}>{w}</li>)}
                    </ul>
                </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
                <button className="flex-1 py-5 rounded-2xl bg-gradient-to-r from-primary to-secondary text-white font-black uppercase tracking-widest text-sm hover:shadow-[0_0_50px_rgba(139,92,246,0.3)] transition-all active:scale-95">
                    Generate Optimized Resume
                </button>
                <button onClick={() => window.location.reload()} className="px-8 py-5 rounded-2xl bg-white/5 border border-white/10 text-white font-bold hover:bg-white/10 transition-all text-sm uppercase">
                    New Scan
                </button>
            </div>
        </div>
    );
};

export default AnalysisResults;
