import React from "react";
import { Treemap, ResponsiveContainer, Tooltip } from "recharts";
import { motion } from "framer-motion";

const data = [
    {
        name: "Computer Engineering",
        children: [
            { name: "React (92%)", size: 4000 },
            { name: "System Design (88%)", size: 3800 },
            { name: "Docker/K8s (85%)", size: 3600 },
        ],
    },
    {
        name: "Mechanical Engineering",
        children: [
            { name: "CAD (90%)", size: 3900 },
            { name: "Thermodynamics (85%)", size: 3700 },
            { name: "Finite Element (80%)", size: 3400 },
        ],
    },
    {
        name: "Automobile Engineering",
        children: [
            { name: "EV Technology (92%)", size: 4100 },
            { name: "Vehicle Dynamics (87%)", size: 3750 },
            { name: "Battery Management (84%)", size: 3600 },
        ],
    },
    {
        name: "Robotics & Automation",
        children: [
            { name: "ROS/ROS2 (88%)", size: 3800 },
            { name: "Control Systems (86%)", size: 3700 },
            { name: "Kinematics (82%)", size: 3500 },
        ],
    },
    {
        name: "Electrical Engineering",
        children: [
            { name: "Power Systems (89%)", size: 3850 },
            { name: "Signal Processing (85%)", size: 3650 },
            { name: "Circuit Design (81%)", size: 3450 },
        ],
    },
    {
        name: "Communication Engineering",
        children: [
            { name: "5G Technology (91%)", size: 4000 },
            { name: "Network Protocols (87%)", size: 3750 },
            { name: "RF Design (83%)", size: 3550 },
        ],
    },
];

const COLORS = [
    "#3b82f6",
    "#a855f7",
    "#10b981",
    "#f59e0b",
    "#ef4444",
    "#06b6d4",
];

const CustomizedContent = (props) => {
    const { root, depth, x, y, width, height, index, name } = props;

    return (
        <g>
            <rect
                x={x}
                y={y}
                width={width}
                height={height}
                style={{
                    fill: COLORS[index % COLORS.length],
                    stroke: "#0f172a",
                    strokeWidth: 2 / (depth + 1),
                    strokeOpacity: 1,
                }}
            />
            {width > 50 && height > 30 && (
                <text
                    x={x + width / 2}
                    y={y + height / 2}
                    textAnchor="middle"
                    dominantBaseline="middle"
                    fill="#fff"
                    fontSize={12}
                    fontWeight="bold"
                >
                    {name}
                </text>
            )}
        </g>
    );
};

const SkillHeatmap = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-slate-900/50 backdrop-blur-xl border border-white/10 p-6 rounded-3xl h-[400px]"
        >
            <div className="mb-6">
                <h3 className="text-xl font-semibold text-white">Industry Skills Demand</h3>
                <p className="text-slate-400 text-sm">Top demanded skills by industry with demand percentages</p>
            </div>

            <ResponsiveContainer width="100%" height="100%">
                <Treemap
                    data={data}
                    dataKey="size"
                    aspectRatio={4 / 3}
                    stroke="#fff"
                    fill="#8884d8"
                    content={<CustomizedContent />}
                >
                    <Tooltip
                        contentStyle={{
                            backgroundColor: "#0f172a",
                            border: "1px solid rgba(255,255,255,0.1)",
                            borderRadius: "12px",
                            color: "#fff",
                        }}
                    />
                </Treemap>
            </ResponsiveContainer>
        </motion.div>
    );
};

export default SkillHeatmap;
