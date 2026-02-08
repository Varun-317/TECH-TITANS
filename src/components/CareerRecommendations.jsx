import React, { useState } from "react";
import { motion } from "framer-motion";
import {
    Briefcase,
    ArrowRight,
    TrendingUp,
    DollarSign,
    Target,
    BookOpen,
    Zap,
} from "lucide-react";
import { jobMarketData } from "../data/courseResources";

const CareerRecommendations = ({ userProfile }) => {
    const [selectedIndustry, setSelectedIndustry] = useState(
        userProfile?.domain || "Computer Engineering"
    );
    
    const industries = Object.keys(jobMarketData);
    const currentData = jobMarketData[selectedIndustry];
    const jobs = currentData?.jobs || [];
    const skills = currentData?.skills || [];

    const industryColors = {
        "Computer Engineering": "from-blue-500 to-blue-600",
        "Mechanical Engineering": "from-purple-500 to-purple-600",
        "Automobile Engineering": "from-emerald-500 to-emerald-600",
        "Robotics & Automation": "from-amber-500 to-amber-600",
        "Electrical Engineering": "from-red-500 to-red-600",
        "Communication Engineering": "from-cyan-500 to-cyan-600",
    };

    const industryBgColors = {
        "Computer Engineering": "bg-blue-500/10 border-blue-500/30",
        "Mechanical Engineering": "bg-purple-500/10 border-purple-500/30",
        "Automobile Engineering": "bg-emerald-500/10 border-emerald-500/30",
        "Robotics & Automation": "bg-amber-500/10 border-amber-500/30",
        "Electrical Engineering": "bg-red-500/10 border-red-500/30",
        "Communication Engineering": "bg-cyan-500/10 border-cyan-500/30",
    };

    const industryBadgeColors = {
        "Computer Engineering": "text-blue-400 bg-blue-500/10 border-blue-500/20",
        "Mechanical Engineering":
            "text-purple-400 bg-purple-500/10 border-purple-500/20",
        "Automobile Engineering":
            "text-emerald-400 bg-emerald-500/10 border-emerald-500/20",
        "Robotics & Automation":
            "text-amber-400 bg-amber-500/10 border-amber-500/20",
        "Electrical Engineering":
            "text-red-400 bg-red-500/10 border-red-500/20",
        "Communication Engineering":
            "text-cyan-400 bg-cyan-500/10 border-cyan-500/20",
    };

    return (
        <div className="space-y-8">
            {/* Industry Selector */}
            <div className="space-y-4">
                <h3 className="text-xl font-semibold text-white flex items-center gap-2">
                    <Target className="w-5 h-5 text-blue-400" />
                    Industry-Wise Career Paths
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
                    {industries.map((industry) => (
                        <motion.button
                            key={industry}
                            onClick={() => setSelectedIndustry(industry)}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className={`p-3 rounded-lg border transition-all font-semibold text-sm text-center ${
                                selectedIndustry === industry
                                    ? `${industryBgColors[industry]} ring-2 ring-offset-2 ring-offset-slate-950`
                                    : "bg-white/5 border-white/10 hover:border-white/30"
                            }`}
                        >
                            {industry.split(" ")[0]}
                        </motion.button>
                    ))}
                </div>
            </div>

            {/* Career Paths Grid */}
            <motion.div
                key={selectedIndustry}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="space-y-6"
            >
                <div className="grid grid-cols-1 gap-6">
                    {/* Header with Industry Info */}
                    <div
                        className={`p-6 rounded-2xl ${industryBgColors[selectedIndustry]} border backdrop-blur-xl`}
                    >
                        <div className="flex items-start justify-between">
                            <div>
                                <h4 className="text-2xl font-bold text-white mb-2">
                                    {selectedIndustry}
                                </h4>
                                <p className="text-slate-300 text-sm">
                                    Top career opportunities and skill requirements
                                </p>
                            </div>
                            <Briefcase className="w-8 h-8 text-blue-400 flex-shrink-0" />
                        </div>
                    </div>

                    {/* Top Career Opportunities */}
                    <div className="space-y-4">
                        <h5 className="text-lg font-semibold text-white flex items-center gap-2">
                            <TrendingUp className="w-5 h-5 text-emerald-400" />
                            Top Career Opportunities
                        </h5>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            {jobs.map((job, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: idx * 0.1 }}
                                    viewport={{ once: true }}
                                    whileHover={{ y: -5 }}
                                    className="group relative overflow-hidden"
                                >
                                    <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-purple-600/5 opacity-50 group-hover:opacity-100 transition-opacity" />
                                    <div className="relative bg-white/5 border border-white/10 hover:border-white/30 transition-all p-5 rounded-2xl">
                                        {/* Role and Company */}
                                        <div className="mb-4">
                                            <h6 className="text-lg font-bold text-white group-hover:text-blue-400 transition-colors mb-1">
                                                {job.role}
                                            </h6>
                                            <p className="text-xs text-slate-400">
                                                {job.company}  {job.location}
                                            </p>
                                        </div>

                                        {/* Salary */}
                                        <div className="flex items-center gap-2 mb-4 p-3 bg-emerald-500/10 border border-emerald-500/20 rounded-lg">
                                            <DollarSign className="w-4 h-4 text-emerald-400" />
                                            <span className="font-bold text-emerald-400">
                                                {job.salary}
                                            </span>
                                            <span className="text-xs text-slate-400 ml-auto">
                                                per annum
                                            </span>
                                        </div>

                                        {/* Required Skills */}
                                        <div className="space-y-2">
                                            <p className="text-xs font-semibold text-slate-300 uppercase tracking-wider">
                                                Required Skills
                                            </p>
                                            <div className="flex flex-wrap gap-2">
                                                {job.skills.map((skill, sIdx) => (
                                                    <span
                                                        key={sIdx}
                                                        className={`text-xs px-2 py-1 rounded-full border ${industryBadgeColors[selectedIndustry]}`}
                                                    >
                                                        {skill}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* In-Demand Skills Mapping */}
                    <div className="space-y-4">
                        <h5 className="text-lg font-semibold text-white flex items-center gap-2">
                            <Zap className="w-5 h-5 text-amber-400" />
                            Skill Mapping & Market Demand
                        </h5>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            {skills.map((skill, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ delay: idx * 0.1 }}
                                    viewport={{ once: true }}
                                    className="p-5 rounded-xl bg-white/5 border border-white/10 hover:border-white/30 transition-all space-y-3"
                                >
                                    <div className="flex items-start justify-between">
                                        <h6 className="font-semibold text-white text-sm">
                                            {skill.name}
                                        </h6>
                                        <BookOpen className="w-4 h-4 text-blue-400 flex-shrink-0" />
                                    </div>

                                    {/* Demand Progress Bar */}
                                    <div className="space-y-2">
                                        <div className="flex justify-between items-center">
                                            <span className="text-xs text-slate-400">
                                                Market Demand
                                            </span>
                                            <span className="text-sm font-bold text-emerald-400">
                                                {skill.demand}%
                                            </span>
                                        </div>
                                        <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                                            <motion.div
                                                initial={{ width: 0 }}
                                                whileInView={{ width: `${skill.demand}%` }}
                                                transition={{ duration: 0.6, delay: idx * 0.1 }}
                                                viewport={{ once: true }}
                                                className="h-full bg-gradient-to-r from-emerald-500 to-blue-500"
                                            />
                                        </div>
                                    </div>

                                    {/* Growth Rate */}
                                    <div className="pt-2 border-t border-white/10 flex items-center gap-2">
                                        <TrendingUp className="w-3 h-3 text-amber-400" />
                                        <span className="text-xs font-semibold text-amber-400">
                                            {skill.growth}
                                        </span>
                                        <span className="text-xs text-slate-400">
                                            growth/year
                                        </span>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Career Path Summary */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="p-6 rounded-2xl bg-gradient-to-r from-blue-600/10 to-purple-600/10 border border-white/10 backdrop-blur-xl"
                    >
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-lg bg-blue-500/20">
                                <Briefcase className="w-6 h-6 text-blue-400" />
                            </div>
                            <div className="flex-1">
                                <h6 className="text-lg font-bold text-white mb-2">
                                    Career Path Insights
                                </h6>
                                <p className="text-sm text-slate-300 leading-relaxed">
                                    Master the in-demand skills listed above to secure top career
                                    opportunities in {selectedIndustry}. Average salary ranges from{" "}
                                    <span className="font-bold text-emerald-400">
                                        {jobs[0]?.salary || "N/A"}
                                    </span>{" "}
                                    to{" "}
                                    <span className="font-bold text-emerald-400">
                                        {jobs[jobs.length - 1]?.salary || "N/A"}
                                    </span>
                                    . Start learning and build your professional network in this
                                    field.
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </motion.div>
        </div>
    );
};

export default CareerRecommendations;
