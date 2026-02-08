import React, { useState } from "react";
import TrendChart from "./TrendChart";
import SkillHeatmap from "./SkillHeatmap";
import TrendAlerts from "./TrendAlerts";
import CareerRecommendations from "./CareerRecommendations";
import { jobMarketData } from "../data/courseResources";
import {
    LineChart,
    Zap,
    Briefcase,
    DollarSign,
    TrendingUp,
    ChevronRight,
} from "lucide-react";
import { motion } from "framer-motion";

const industryColors = {
    "Computer Engineering": {
        bg: "bg-blue-500/10",
        border: "border-blue-500/30",
        badge: "bg-blue-500/20 text-blue-400",
    },
    "Mechanical Engineering": {
        bg: "bg-purple-500/10",
        border: "border-purple-500/30",
        badge: "bg-purple-500/20 text-purple-400",
    },
    "Automobile Engineering": {
        bg: "bg-emerald-500/10",
        border: "border-emerald-500/30",
        badge: "bg-emerald-500/20 text-emerald-400",
    },
    "Robotics & Automation": {
        bg: "bg-amber-500/10",
        border: "border-amber-500/30",
        badge: "bg-amber-500/20 text-amber-400",
    },
    "Electrical Engineering": {
        bg: "bg-red-500/10",
        border: "border-red-500/30",
        badge: "bg-red-500/20 text-red-400",
    },
    "Communication Engineering": {
        bg: "bg-cyan-500/10",
        border: "border-cyan-500/30",
        badge: "bg-cyan-500/20 text-cyan-400",
    },
};

const MarketTrends = ({ userProfile }) => {
    const [selectedDomain, setSelectedDomain] = useState(
        userProfile?.domain || "Computer Engineering"
    );
    const allDomains = Object.keys(jobMarketData);
    const selectedData = jobMarketData[selectedDomain];
    const selectedJobs = selectedData?.jobs || [];
    const selectedSkills = selectedData?.skills || [];

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

                {/* All Industries Domain Overview */}
                <div className="space-y-6 mb-12">
                    <div>
                        <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                            <LineChart className="w-6 h-6 text-blue-400" />
                            All Industries Overview
                        </h3>
                        <p className="text-slate-400 text-sm">
                            Browse top job opportunities and in-demand skills across all engineering
                            domains
                        </p>
                    </div>

                    {/* Industry Tabs */}
                    <div className="flex flex-wrap gap-2">
                        {allDomains.map((domain) => (
                            <motion.button
                                key={domain}
                                onClick={() => setSelectedDomain(domain)}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className={`px-4 py-2 rounded-lg border transition-all font-semibold text-sm ${
                                    selectedDomain === domain
                                        ? `${industryColors[domain].bg} ${industryColors[domain].border} ring-2 ring-offset-2 ring-offset-slate-950`
                                        : "bg-white/5 border-white/10 hover:border-white/30"
                                }`}
                            >
                                {domain.split(" ")[0]}
                            </motion.button>
                        ))}
                    </div>
                </div>

                {/* Domain Content Grid */}
                <motion.div
                    key={selectedDomain}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12"
                >
                    {/* Top Job Opportunities */}
                    <div className="lg:col-span-2 space-y-6">
                        <div className={`p-6 rounded-2xl border backdrop-blur-xl ${industryColors[selectedDomain].bg} ${industryColors[selectedDomain].border}`}>
                            <h4 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                                <Briefcase className="w-5 h-5 text-emerald-400" />
                                Top Job Opportunities in {selectedDomain.split(" ")[0]}
                            </h4>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {selectedJobs.length > 0 &&
                                    selectedJobs.map((job, idx) => (
                                        <motion.div
                                            key={idx}
                                            initial={{ opacity: 0, y: 10 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            transition={{ delay: idx * 0.1 }}
                                            viewport={{ once: true }}
                                            whileHover={{ y: -5 }}
                                            className="bg-white/5 border border-white/10 hover:border-white/30 transition-all p-4 rounded-xl group"
                                        >
                                            {/* Job Role */}
                                            <h5 className="text-white font-bold text-sm mb-1 group-hover:text-blue-400 transition-colors">
                                                {job.role}
                                            </h5>
                                            <p className="text-xs text-slate-400 mb-3">
                                                {job.company}  {job.location}
                                            </p>

                                            {/* Salary Badge */}
                                            <div className="flex items-center gap-2 mb-3 p-2 bg-emerald-500/10 border border-emerald-500/20 rounded-lg">
                                                <DollarSign className="w-3 h-3 text-emerald-400" />
                                                <span className="text-sm font-bold text-emerald-400">
                                                    {job.salary}
                                                </span>
                                                <span className="text-[10px] text-slate-400 ml-auto">
                                                    per annum
                                                </span>
                                            </div>

                                            {/* Skills */}
                                            <div className="space-y-2">
                                                <p className="text-xs font-semibold text-slate-300">
                                                    Skills Required:
                                                </p>
                                                <div className="flex flex-wrap gap-1">
                                                    {job.skills.map((skill, sIdx) => (
                                                        <span
                                                            key={sIdx}
                                                            className={`text-[10px] px-2 py-1 rounded-full border ${industryColors[selectedDomain].badge}`}
                                                        >
                                                            {skill}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>
                                        </motion.div>
                                    ))}
                            </div>
                        </div>
                    </div>

                    {/* In-Demand Skills */}
                    <div className="space-y-4">
                        <div className={`p-6 rounded-2xl border backdrop-blur-xl ${industryColors[selectedDomain].bg} ${industryColors[selectedDomain].border} h-full`}>
                            <h5 className="text-lg font-bold text-white mb-5 flex items-center gap-2">
                                <TrendingUp className="w-5 h-5 text-amber-400" />
                                In-Demand Skills
                            </h5>

                            <div className="space-y-4">
                                {selectedSkills.length > 0 &&
                                    selectedSkills.map((skill, idx) => (
                                        <motion.div
                                            key={idx}
                                            initial={{ opacity: 0, x: -20 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            transition={{ delay: idx * 0.1 }}
                                            viewport={{ once: true }}
                                            className="bg-white/5 border border-white/10 p-3 rounded-lg hover:bg-white/10 transition-all"
                                        >
                                            {/* Skill Name & Demand % */}
                                            <div className="flex justify-between items-center mb-2">
                                                <h6 className="font-semibold text-white text-sm">
                                                    {skill.name}
                                                </h6>
                                                <span className="text-sm font-bold text-emerald-400">
                                                    {skill.demand}%
                                                </span>
                                            </div>

                                            {/* Demand Progress Bar */}
                                            <div className="h-2 bg-white/10 rounded-full overflow-hidden mb-2">
                                                <motion.div
                                                    initial={{ width: 0 }}
                                                    whileInView={{ width: `${skill.demand}%` }}
                                                    transition={{ duration: 0.6, delay: idx * 0.1 }}
                                                    viewport={{ once: true }}
                                                    className="h-full bg-gradient-to-r from-emerald-500 to-blue-500"
                                                />
                                            </div>

                                            {/* Growth Rate */}
                                            <div className="flex items-center gap-1 text-xs">
                                                <TrendingUp className="w-3 h-3 text-amber-400" />
                                                <span className="font-semibold text-amber-400">
                                                    {skill.growth}
                                                </span>
                                                <span className="text-slate-400">growth/year</span>
                                            </div>
                                        </motion.div>
                                    ))}
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Bottom Grid - Alerts */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-1">
                        <div className="bg-slate-900/50 backdrop-blur-xl border border-white/10 p-8 rounded-3xl h-full">
                            <TrendAlerts userProfile={userProfile} />
                        </div>
                    </div>
                    <div className="lg:col-span-2">
                        {/* Quick Stats */}
                        <div className="grid grid-cols-3 gap-4">
                            {[
                                {
                                    label: "Avg Salary",
                                    value: selectedJobs.length > 0 ? selectedJobs[0].salary : "N/A",
                                    icon: DollarSign,
                                    color: "text-emerald-400",
                                },
                                {
                                    label: "Top Skills",
                                    value: selectedSkills.length,
                                    icon: TrendingUp,
                                    color: "text-blue-400",
                                },
                                {
                                    label: "Opportunities",
                                    value: selectedJobs.length,
                                    icon: Briefcase,
                                    color: "text-amber-400",
                                },
                            ].map((stat, idx) => {
                                const Icon = stat.icon;
                                return (
                                    <motion.div
                                        key={idx}
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        transition={{ delay: idx * 0.1 }}
                                        viewport={{ once: true }}
                                        className="bg-slate-900/50 backdrop-blur-xl border border-white/10 p-6 rounded-2xl text-center"
                                    >
                                        <Icon className={`w-6 h-6 ${stat.color} mx-auto mb-2`} />
                                        <p className="text-slate-400 text-xs uppercase font-semibold tracking-widest">
                                            {stat.label}
                                        </p>
                                        <p className="text-2xl font-bold text-white mt-1">
                                            {stat.value}
                                        </p>
                                    </motion.div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MarketTrends;
