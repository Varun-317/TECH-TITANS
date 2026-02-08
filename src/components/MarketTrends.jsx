import React from 'react';
import TrendChart from './TrendChart';
import SkillHeatmap from './SkillHeatmap';
import TrendAlerts from './TrendAlerts';
import RecommendationCard from './RecommendationCard';
import { jobMarketData } from '../data/courseResources';
import { LineChart, BarChart2, Zap, Briefcase, DollarSign, TrendingUp } from 'lucide-react';

const MarketTrends = ({ userProfile }) => {
    const domain = userProfile?.domain || "Computer Engineering";
    const marketData = jobMarketData[domain];
    const jobs = marketData?.jobs || [];
    const skills = marketData?.skills || [];

    return (
        <section id="market" className="py-24 relative overflow-hidden">        
            {/* Background elements */}
            <div className="absolute top-1/4 -right-20 w-80 h-80 bg-blue-600/10 rounded-full blur-[120px]" />
            <div className="absolute bottom-1/4 -left-20 w-80 h-80 bg-purple-600/10 rounded-full blur-[120px]" />
            
            <div className="container mx-auto px-6 relative">
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-medium mb-4 uppercase tracking-widest">
                        <Zap className="w-3 h-3" /> Real-time Market Data for <span className="text-white font-bold">{domain}</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
                        Market Trends & <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">Skill Mapping</span>
                    </h2>

                    {/* Job Opportunities Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-12">
                        {jobs.length > 0 && jobs.map((job, idx) => (
                            <div key={idx} className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-white/30 transition-all">
                                <div className="flex items-start gap-3 mb-4">
                                    <Briefcase className="w-5 h-5 text-blue-400 flex-shrink-0 mt-1" />
                                    <div className="text-left">
                                        <h4 className="text-slate-200 text-sm uppercase tracking-widest font-bold">{job.role}</h4>
                                        <p className="text-xs text-slate-500 mt-1">{job.company} • {job.location}</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-2 mb-3">
                                    <DollarSign className="w-4 h-4 text-emerald-400" />
                                    <p className="text-lg font-bold text-emerald-400">{job.salary}</p>
                                </div>
                                <div className="text-left">
                                    <p className="text-xs text-slate-400 font-semibold mb-2">Required Skills:</p>
                                    <div className="flex flex-wrap gap-1">
                                        {job.skills.map((skill, sIdx) => (
                                            <span key={sIdx} className="text-xs px-2 py-1 rounded-full bg-blue-500/10 text-blue-300">
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Top Skills Demand */}
                    <div className="bg-gradient-to-r from-slate-900/50 to-slate-800/50 backdrop-blur-xl border border-white/10 p-8 rounded-3xl max-w-4xl mx-auto mb-12">
                        <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                            <TrendingUp className="w-6 h-6 text-emerald-400" />
                            In-Demand Skills for {domain}
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            {skills.length > 0 && skills.map((skill, idx) => (
                                <div key={idx} className="bg-white/5 rounded-xl p-4">
                                    <p className="text-white font-semibold mb-2">{skill.name}</p>
                                    <div className="flex items-center gap-3">
                                        <div className="flex-1 bg-white/10 rounded-full h-2">
                                            <div 
                                                className="bg-gradient-to-r from-blue-500 to-emerald-500 h-2 rounded-full" 
                                                style={{ width: `${skill.demand}%` }}
                                            />
                                        </div>
                                        <span className="text-sm font-bold text-emerald-400">{skill.demand}%</span>
                                    </div>
                                    <p className="text-xs text-blue-300 mt-2 font-semibold">{skill.growth}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <p className="max-w-2xl mx-auto text-slate-400 text-lg leading-relaxed">
                        Stay ahead of the curve with AI-powered market analysis. We track thousands of job listings
                        and tech blogs to give you the most accurate skill trajectory.
                    </p>
                </div>

                {/* Charts Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
                    <TrendChart />
                    <SkillHeatmap />
                </div>

                {/* Bottom Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-1">
                        <div className="bg-slate-900/50 backdrop-blur-xl border border-white/10 p-8 rounded-3xl h-full">
                            <TrendAlerts />
                        </div>
                    </div>
                    <div className="lg:col-span-2">
                        <div className="bg-slate-900/50 backdrop-blur-xl border border-white/10 p-8 rounded-3xl h-full">
                            <RecommendationCard />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MarketTrends;
