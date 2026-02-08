import React, { useState } from "react";
import { motion } from "framer-motion";
import { Zap, TrendingUp } from "lucide-react";

const skillDemandData = [
    {
        industry: "Computer Engineering",
        color: "from-blue-500 to-blue-600",
        bgColor: "bg-blue-500/10",
        borderColor: "border-blue-500/30",
        skills: [
            { name: "React", demand: 92, gradient: "from-blue-400 to-cyan-400" },
            {
                name: "System Design",
                demand: 88,
                gradient: "from-blue-500 to-indigo-500",
            },
            {
                name: "Docker/K8s",
                demand: 85,
                gradient: "from-indigo-500 to-blue-600",
            },
        ],
    },
    {
        industry: "Mechanical Engineering",
        color: "from-purple-500 to-purple-600",
        bgColor: "bg-purple-500/10",
        borderColor: "border-purple-500/30",
        skills: [
            { name: "CAD Design", demand: 90, gradient: "from-purple-400 to-pink-400" },
            {
                name: "Thermodynamics",
                demand: 85,
                gradient: "from-purple-500 to-fuchsia-500",
            },
            {
                name: "FEA Analysis",
                demand: 80,
                gradient: "from-fuchsia-500 to-purple-600",
            },
        ],
    },
    {
        industry: "Automobile Engineering",
        color: "from-emerald-500 to-emerald-600",
        bgColor: "bg-emerald-500/10",
        borderColor: "border-emerald-500/30",
        skills: [
            {
                name: "EV Technology",
                demand: 92,
                gradient: "from-emerald-400 to-teal-400",
            },
            {
                name: "Control Systems",
                demand: 87,
                gradient: "from-teal-500 to-emerald-500",
            },
            {
                name: "Battery Management",
                demand: 84,
                gradient: "from-emerald-500 to-cyan-500",
            },
        ],
    },
    {
        industry: "Robotics & Automation",
        color: "from-amber-500 to-orange-600",
        bgColor: "bg-amber-500/10",
        borderColor: "border-amber-500/30",
        skills: [
            { name: "ROS/ROS2", demand: 88, gradient: "from-amber-400 to-orange-400" },
            {
                name: "Computer Vision",
                demand: 86,
                gradient: "from-orange-500 to-amber-500",
            },
            {
                name: "Control Theory",
                demand: 82,
                gradient: "from-amber-500 to-yellow-500",
            },
        ],
    },
    {
        industry: "Electrical Engineering",
        color: "from-red-500 to-rose-600",
        bgColor: "bg-red-500/10",
        borderColor: "border-red-500/30",
        skills: [
            {
                name: "Power Systems",
                demand: 89,
                gradient: "from-red-400 to-pink-400",
            },
            {
                name: "FPGA/Verilog",
                demand: 85,
                gradient: "from-pink-500 to-red-500",
            },
            {
                name: "Signal Processing",
                demand: 81,
                gradient: "from-red-500 to-rose-500",
            },
        ],
    },
    {
        industry: "Communication Engineering",
        color: "from-cyan-500 to-blue-600",
        bgColor: "bg-cyan-500/10",
        borderColor: "border-cyan-500/30",
        skills: [
            {
                name: "5G Technology",
                demand: 91,
                gradient: "from-cyan-400 to-sky-400",
            },
            {
                name: "RF Design",
                demand: 87,
                gradient: "from-sky-500 to-cyan-500",
            },
            {
                name: "Network Protocols",
                demand: 83,
                gradient: "from-cyan-500 to-blue-500",
            },
        ],
    },
];

const SkillHeatmap = () => {
    const [selectedIndustry, setSelectedIndustry] = useState(0);
    const selected = skillDemandData[selectedIndustry];

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-slate-900/50 backdrop-blur-xl border border-white/10 p-8 rounded-3xl"
        >
            {/* Header */}
            <div className="mb-8">
                <h3 className="text-2xl font-bold text-white mb-2 flex items-center gap-2">
                    <Zap className="w-6 h-6 text-yellow-400" />
                    Industry Skills Demand Map
                </h3>
                <p className="text-slate-400 text-sm">
                    Top demanded skills by industry with market demand percentages
                </p>
            </div>

            {/* Industry Navigation Tabs */}
            <div className="mb-8">
                <p className="text-xs text-slate-500 font-semibold uppercase tracking-widest mb-3">
                    Select Industry
                </p>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2">
                    {skillDemandData.map((item, idx) => (
                        <motion.button
                            key={idx}
                            onClick={() => setSelectedIndustry(idx)}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className={`px-3 py-2 rounded-lg border transition-all text-xs font-semibold text-center ${
                                selectedIndustry === idx
                                    ? `${item.bgColor} ${item.borderColor} ring-2 ring-offset-2 ring-offset-slate-950`
                                    : "bg-white/5 border-white/10 hover:bg-white/10"
                            }`}
                        >
                            {item.industry.split(" ")[0]}
                        </motion.button>
                    ))}
                </div>
            </div>

            {/* Skills Grid */}
            <motion.div
                key={selectedIndustry}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="space-y-4"
            >
                {/* Industry Header */}
                <div className={`p-4 rounded-2xl border backdrop-blur-xl ${selected.bgColor} ${selected.borderColor}`}>
                    <h4 className={`text-lg font-bold bg-gradient-to-r ${selected.color} bg-clip-text text-transparent`}>
                        {selected.industry}
                    </h4>
                    <p className="text-xs text-slate-400 mt-1">
                        {selected.skills.length} top in-demand skills
                    </p>
                </div>

                {/* Skills Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {selected.skills.map((skill, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: idx * 0.1 }}
                            viewport={{ once: true }}
                            whileHover={{ y: -5 }}
                            className="group relative overflow-hidden"
                        >
                            {/* Background gradient effect */}
                            <div className={`absolute inset-0 bg-gradient-to-br ${skill.gradient} opacity-0 group-hover:opacity-10 transition-opacity`} />

                            {/* Card */}
                            <div className="relative bg-white/5 border border-white/10 hover:border-white/30 transition-all p-6 rounded-2xl">
                                {/* Skill Name */}
                                <h5 className="text-white font-bold text-lg mb-4 group-hover:text-blue-300 transition-colors">
                                    {skill.name}
                                </h5>

                                {/* Demand Percentage Display */}
                                <div className="space-y-3">
                                    {/* Large Percentage */}
                                    <div className="flex items-baseline gap-1">
                                        <span
                                            className={`text-4xl font-bold bg-gradient-to-r ${skill.gradient} bg-clip-text text-transparent`}
                                        >
                                            {skill.demand}
                                        </span>
                                        <span className="text-lg font-semibold text-slate-400">%</span>
                                    </div>

                                    {/* Progress Bar */}
                                    <div className="space-y-2">
                                        <div className="flex justify-between items-center">
                                            <span className="text-xs text-slate-400 font-semibold">
                                                Market Demand
                                            </span>
                                            <span className="text-xs font-bold text-emerald-400">
                                                {skill.demand > 85 ? "High" : skill.demand > 75 ? "Medium" : "Good"}
                                            </span>
                                        </div>
                                        <div className="h-3 bg-white/10 rounded-full overflow-hidden backdrop-blur-sm">
                                            <motion.div
                                                initial={{ width: 0 }}
                                                whileInView={{ width: `${skill.demand}%` }}
                                                transition={{ duration: 0.8, delay: idx * 0.1 }}
                                                viewport={{ once: true }}
                                                className={`h-full bg-gradient-to-r ${skill.gradient} shadow-lg shadow-${skill.gradient.split(" ")[1]}-500/50`}
                                            />
                                        </div>
                                    </div>

                                    {/* Trend Indicator */}
                                    <div className="flex items-center gap-2 pt-3 border-t border-white/10">
                                        <TrendingUp className="w-4 h-4 text-amber-400" />
                                        <span className="text-xs font-semibold text-amber-400">
                                            +{40 + (skill.demand - 75)}% growth
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>

            {/* Industry Stats Summary */}
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                viewport={{ once: true }}
                className={`mt-6 p-4 rounded-xl border backdrop-blur-xl ${selected.bgColor} ${selected.borderColor}`}
            >
                <div className="flex items-center justify-between text-sm">
                    <div>
                        <p className="text-slate-400 text-xs uppercase tracking-widest font-semibold">
                            Average Demand
                        </p>
                        <p className="text-2xl font-bold text-white mt-1">
                            {Math.round(
                                selected.skills.reduce((acc, s) => acc + s.demand, 0) /
                                    selected.skills.length
                            )}
                            %
                        </p>
                    </div>
                    <div>
                        <p className="text-slate-400 text-xs uppercase tracking-widest font-semibold">
                            Growth Potential
                        </p>
                        <p className="text-2xl font-bold text-amber-400 mt-1">High </p>
                    </div>
                    <div>
                        <p className="text-slate-400 text-xs uppercase tracking-widest font-semibold">
                            Market Status
                        </p>
                        <p className="text-2xl font-bold text-emerald-400 mt-1">Active </p>
                    </div>
                </div>
            </motion.div>
        </motion.div>
    );
};

export default SkillHeatmap;
