import React from "react";
import TrendChart from "./TrendChart";
import SkillHeatmap from "./SkillHeatmap";
import TrendAlerts from "./TrendAlerts";
import CareerRecommendations from "./CareerRecommendations";
import { jobMarketData } from "../data/courseResources";
import {
    LineChart,
    BarChart2,
    Zap,
    Briefcase,
    DollarSign,
    TrendingUp,
} from "lucide-react";

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
                        <Zap className="w-3 h-3" /> Industry-Wise Market Analysis
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
                        Market Trends &{" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">
                            Career Roadmap
                        </span>
                    </h2>
                </div>

                {/* Charts Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
                    <TrendChart />
                    <SkillHeatmap />
                </div>

                {/* Career Recommendations Section */}
                <div className="bg-slate-900/50 backdrop-blur-xl border border-white/10 p-8 rounded-3xl mb-12">
                    <CareerRecommendations userProfile={userProfile} />
                </div>

                {/* Bottom Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-1">
                        <div className="bg-slate-900/50 backdrop-blur-xl border border-white/10 p-8 rounded-3xl h-full">
                            <TrendAlerts userProfile={userProfile} />
                        </div>
                    </div>
                    <div className="lg:col-span-2">
                        <div className="bg-slate-900/50 backdrop-blur-xl border border-white/10 p-8 rounded-3xl h-full space-y-6">
                            <div>
                                <h3 className="text-xl font-semibold text-white mb-6 flex items-center gap-2">
                                    <LineChart className="w-5 h-5 text-blue-400" />
                                    Current Domain Overview
                                </h3>

                                {/* Job Opportunities */}
                                <div className="mb-8">
                                    <h4 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                                        <Briefcase className="w-4 h-4 text-emerald-400" />
                                        Top Job Opportunities
                                    </h4>
                                    <div className="grid grid-cols-1 gap-4">
                                        {jobs.length > 0 &&
                                            jobs.map((job, idx) => (
                                                <div
                                                    key={idx}
                                                    className="p-4 rounded-xl bg-white/5 border border-white/10 hover:border-white/30 transition-all"
                                                >
                                                    <div className="flex items-start justify-between mb-2">
                                                        <div>
                                                            <h5 className="text-white font-semibold">
                                                                {job.role}
                                                            </h5>
                                                            <p className="text-xs text-slate-400">
                                                                {job.company}  {job.location}
                                                            </p>
                                                        </div>
                                                        <div className="flex items-center gap-1 bg-emerald-500/10 px-3 py-1 rounded-full">
                                                            <DollarSign className="w-3 h-3 text-emerald-400" />
                                                            <span className="text-sm font-bold text-emerald-400">
                                                                {job.salary}
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <div className="flex flex-wrap gap-1">
                                                        {job.skills.map((skill, sIdx) => (
                                                            <span
                                                                key={sIdx}
                                                                className="text-xs px-2 py-1 rounded-full bg-blue-500/10 text-blue-300"
                                                            >
                                                                {skill}
                                                            </span>
                                                        ))}
                                                    </div>
                                                </div>
                                            ))}
                                    </div>
                                </div>

                                {/* In-Demand Skills */}
                                <div>
                                    <h4 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                                        <TrendingUp className="w-4 h-4 text-amber-400" />
                                        In-Demand Skills
                                    </h4>
                                    <div className="space-y-3">
                                        {skills.length > 0 &&
                                            skills.map((skill, idx) => (
                                                <div
                                                    key={idx}
                                                    className="p-3 rounded-lg bg-white/5 border border-white/10"
                                                >
                                                    <div className="flex justify-between items-center mb-2">
                                                        <span className="font-semibold text-white text-sm">
                                                            {skill.name}
                                                        </span>
                                                        <span className="text-xs font-bold text-emerald-400">
                                                            {skill.demand}%
                                                        </span>
                                                    </div>
                                                    <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
                                                        <div
                                                            className="bg-gradient-to-r from-emerald-500 to-blue-500 h-1.5 rounded-full"
                                                            style={{
                                                                width: `${skill.demand}%`,
                                                            }}
                                                        />
                                                    </div>
                                                    <p className="text-xs text-amber-400 mt-1 font-semibold">
                                                        {skill.growth}
                                                    </p>
                                                </div>
                                            ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MarketTrends;
