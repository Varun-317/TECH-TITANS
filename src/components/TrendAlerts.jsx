import React, { useState } from "react";
import { motion } from "framer-motion";
import {
    TrendingUp,
    TrendingDown,
    AlertCircle,
    Zap,
    Building2,
} from "lucide-react";
import { jobMarketData } from "../data/courseResources";

const industryAlerts = {
    "Computer Engineering": [
        {
            id: 1,
            title: "AI/ML Skills Surge",
            description: "Demand for LLM integration and RAG skills up 45% YoY.",
            type: "up",
            impact: "High",
        },
        {
            id: 2,
            title: "DevOps Essentials",
            description:
                "Docker, K8s, and CI/CD expertise now mandatory for backend roles.",
            type: "alert",
            impact: "High",
        },
    ],
    "Mechanical Engineering": [
        {
            id: 1,
            title: "Additive Manufacturing Boom",
            description:
                "3D printing and AM skills demand increased by 50% in manufacturing.",
            type: "up",
            impact: "High",
        },
        {
            id: 2,
            title: "CAD Modernization",
            description:
                "Cloud-based CAD tools (Fusion 360, Onshape) replacing traditional software.",
            type: "trend",
            impact: "Medium",
        },
    ],
    "Automobile Engineering": [
        {
            id: 1,
            title: "EV Revolution",
            description:
                "Electric vehicle powertrain skills demand up 80% as industry shifts.",
            type: "up",
            impact: "High",
        },
        {
            id: 2,
            title: "Autonomous Systems Boom",
            description:
                "ADAS and autonomous driving skills critical for competitive edge.",
            type: "alert",
            impact: "High",
        },
    ],
    "Robotics & Automation": [
        {
            id: 1,
            title: "ROS Adoption",
            description:
                "ROS 2 and middleware adoption at all-time high in robotics industry.",
            type: "up",
            impact: "High",
        },
        {
            id: 2,
            title: "Computer Vision Essential",
            description: "YOLO, OpenCV expertise now baseline for robotics engineers.",
            type: "alert",
            impact: "Medium",
        },
    ],
    "Electrical Engineering": [
        {
            id: 1,
            title: "Renewable Energy Growth",
            description:
                "Solar and wind energy systems engineering roles increased by 35%.",
            type: "up",
            impact: "High",
        },
        {
            id: 2,
            title: "FPGA Demand Rising",
            description:
                "Verilog and FPGA design skills crucial for embedded systems.",
            type: "trend",
            impact: "Medium",
        },
    ],
    "Communication Engineering": [
        {
            id: 1,
            title: "5G Infrastructure",
            description:
                "5G network deployment creating 75% surge in demand for specialists.",
            type: "up",
            impact: "High",
        },
        {
            id: 2,
            title: "RF Design Innovation",
            description:
                "Advanced antenna design and SDR technologies gaining traction.",
            type: "trend",
            impact: "Medium",
        },
    ],
};

const industryColors = {
    "Computer Engineering": {
        bg: "bg-blue-500/10",
        border: "border-blue-500/30",
        text: "text-blue-400",
    },
    "Mechanical Engineering": {
        bg: "bg-purple-500/10",
        border: "border-purple-500/30",
        text: "text-purple-400",
    },
    "Automobile Engineering": {
        bg: "bg-emerald-500/10",
        border: "border-emerald-500/30",
        text: "text-emerald-400",
    },
    "Robotics & Automation": {
        bg: "bg-amber-500/10",
        border: "border-amber-500/30",
        text: "text-amber-400",
    },
    "Electrical Engineering": {
        bg: "bg-red-500/10",
        border: "border-red-500/30",
        text: "text-red-400",
    },
    "Communication Engineering": {
        bg: "bg-cyan-500/10",
        border: "border-cyan-500/30",
        text: "text-cyan-400",
    },
};

const TrendAlerts = ({ userProfile }) => {
    const [selectedIndustry, setSelectedIndustry] = useState(
        userProfile?.domain || "Computer Engineering"
    );
    const allDomains = Object.keys(industryAlerts);

    const renderAlertIcon = (type) => {
        if (type === "up") return <TrendingUp className="w-5 h-5" />;
        if (type === "down") return <TrendingDown className="w-5 h-5" />;
        if (type === "alert") return <AlertCircle className="w-5 h-5" />;
        return <Zap className="w-5 h-5" />;
    };

    const getAlertBgColor = (type) => {
        if (type === "up") return "bg-emerald-500/20 text-emerald-400";
        if (type === "down") return "bg-rose-500/20 text-rose-400";
        if (type === "alert") return "bg-amber-500/20 text-amber-400";
        return "bg-blue-500/20 text-blue-400";
    };

    const getImpactBgColor = (impact) => {
        if (impact === "High")
            return "border-rose-500/50 text-rose-400 bg-rose-500/10";
        if (impact === "Medium")
            return "border-amber-500/50 text-amber-400 bg-amber-500/10";
        return "border-blue-500/50 text-blue-400 bg-blue-500/10";
    };

    const selectedAlerts = industryAlerts[selectedIndustry] || [];
    const colors = industryColors[selectedIndustry];

    return (
        <div className="space-y-6">
            <h3 className="text-xl font-semibold text-white mb-6 flex items-center gap-2">
                <Zap className="w-5 h-5 text-yellow-400" />
                Market Trend Alerts - All Industries
            </h3>

            {/* Industry Selector Tabs */}
            <div className="space-y-3">
                <p className="text-xs text-slate-400 font-semibold uppercase tracking-widest">
                    Select Industry
                </p>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                    {allDomains.map((industry) => (
                        <motion.button
                            key={industry}
                            onClick={() => setSelectedIndustry(industry)}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.95 }}
                            className={`p-2 rounded-lg border text-xs font-semibold text-center transition-all ${
                                selectedIndustry === industry
                                    ? `${industryColors[industry].bg} ${industryColors[industry].border} ring-2 ring-offset-2 ring-offset-slate-950`
                                    : "bg-white/5 border-white/10 hover:bg-white/10"
                            }`}
                        >
                            {industry.split(" ")[0]}
                        </motion.button>
                    ))}
                </div>
            </div>

            {/* Selected Industry Alerts */}
            <motion.div
                key={selectedIndustry}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2 }}
                className={`p-4 rounded-2xl border backdrop-blur-xl ${colors.bg} ${colors.border}`}
            >
                <div className="flex items-center gap-2 mb-4">
                    <Building2 className={`w-5 h-5 ${colors.text}`} />
                    <h4 className={`font-bold text-lg ${colors.text}`}>
                        {selectedIndustry}
                    </h4>
                </div>

                <div className="space-y-3">
                    {selectedAlerts.map((alert, index) => (
                        <motion.div
                            key={alert.id}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="bg-white/5 border border-white/10 p-4 rounded-xl hover:bg-white/10 transition-colors group"
                        >
                            <div className="flex items-start gap-4">
                                <div
                                    className={`p-2 rounded-lg ${getAlertBgColor(
                                        alert.type
                                    )}`}
                                >
                                    {renderAlertIcon(alert.type)}
                                </div>
                                <div className="flex-1">
                                    <div className="flex items-center justify-between mb-1">
                                        <h5 className="font-semibold text-white group-hover:text-blue-400 transition-colors text-sm">
                                            {alert.title}
                                        </h5>
                                        <span
                                            className={`text-[10px] px-2 py-0.5 rounded-full border ${getImpactBgColor(
                                                alert.impact
                                            )}`}
                                        >
                                            {alert.impact} Impact
                                        </span>
                                    </div>
                                    <p className="text-xs text-slate-400 leading-relaxed">
                                        {alert.description}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>

            {/* All Industries Quick Overview */}
            <div className="mt-6 pt-6 border-t border-white/10">
                <p className="text-xs text-slate-400 font-semibold uppercase tracking-widest mb-4">
                    All Industries Overview
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {allDomains.map((ind, idx) => {
                        const alerts = industryAlerts[ind];
                        const topAlert = alerts[0];
                        const colors = industryColors[ind];
                        const isSelected = selectedIndustry === ind;

                        return (
                            <motion.button
                                key={idx}
                                onClick={() => setSelectedIndustry(ind)}
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: idx * 0.05 }}
                                viewport={{ once: true }}
                                whileHover={{ scale: 1.02 }}
                                className={`p-3 rounded-lg border transition-all text-left cursor-pointer ${
                                    isSelected
                                        ? `${colors.bg} ${colors.border} ring-2 ring-offset-2 ring-offset-slate-950`
                                        : "bg-white/5 border-white/10 hover:bg-white/10"
                                }`}
                            >
                                <div className="flex items-start justify-between">
                                    <div className="flex-1">
                                        <p
                                            className={`text-xs font-bold uppercase tracking-wider ${
                                                isSelected ? colors.text : "text-slate-300"
                                            }`}
                                        >
                                            {ind}
                                        </p>
                                        <p className="text-xs text-slate-400 mt-1 line-clamp-2">
                                            {topAlert.title}
                                        </p>
                                    </div>
                                    <div
                                        className={`text-xs px-2 py-1 rounded-full font-semibold flex-shrink-0 ml-2 ${getAlertBgColor(
                                            topAlert.type
                                        )}`}
                                    >
                                        {topAlert.type === "up"
                                            ? ""
                                            : topAlert.type === "alert"
                                            ? "!"
                                            : ""}
                                    </div>
                                </div>
                            </motion.button>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default TrendAlerts;
