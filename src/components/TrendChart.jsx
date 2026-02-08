import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import { motion } from 'framer-motion';

const data = [
    { month: 'Jan', Computer: 92, Mechanical: 65, Automobile: 78, Robotics: 71, Electrical: 68, Communication: 74 },
    { month: 'Feb', Computer: 88, Mechanical: 68, Automobile: 75, Robotics: 73, Electrical: 70, Communication: 76 },
    { month: 'Mar', Computer: 95, Mechanical: 70, Automobile: 82, Robotics: 75, Electrical: 72, Communication: 78 },
    { month: 'Apr', Computer: 91, Mechanical: 72, Automobile: 80, Robotics: 77, Electrical: 74, Communication: 80 },
    { month: 'May', Computer: 94, Mechanical: 75, Automobile: 85, Robotics: 79, Electrical: 76, Communication: 82 },
    { month: 'Jun', Computer: 96, Mechanical: 78, Automobile: 88, Robotics: 81, Electrical: 78, Communication: 84 },
    { month: 'Jul', Computer: 93, Mechanical: 80, Automobile: 86, Robotics: 83, Electrical: 80, Communication: 86 },
];

const TrendChart = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-slate-900/50 backdrop-blur-xl border border-white/10 p-6 rounded-3xl h-[400px]"
        >
            <div className="mb-6">
                <h3 className="text-xl font-semibold text-white">Market Demand Trends</h3>
                <p className="text-slate-400 text-sm">Demand trajectory for all engineering industries (2024)</p>
            </div>

            <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                    <defs>
                        <linearGradient id="colorComputer" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3} />
                            <stop offset="95%" stopColor="#3b82f6" stopOpacity={0} />
                        </linearGradient>
                        <linearGradient id="colorMechanical" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#a855f7" stopOpacity={0.3} />
                            <stop offset="95%" stopColor="#a855f7" stopOpacity={0} />
                        </linearGradient>
                        <linearGradient id="colorAutomobile" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#10b981" stopOpacity={0.3} />
                            <stop offset="95%" stopColor="#10b981" stopOpacity={0} />
                        </linearGradient>
                        <linearGradient id="colorRobotics" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#f59e0b" stopOpacity={0.3} />
                            <stop offset="95%" stopColor="#f59e0b" stopOpacity={0} />
                        </linearGradient>
                        <linearGradient id="colorElectrical" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#ef4444" stopOpacity={0.3} />
                            <stop offset="95%" stopColor="#ef4444" stopOpacity={0} />
                        </linearGradient>
                        <linearGradient id="colorCommunication" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#06b6d4" stopOpacity={0.3} />
                            <stop offset="95%" stopColor="#06b6d4" stopOpacity={0} />
                        </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="#ffffff10" />
                    <XAxis
                        dataKey="month"
                        stroke="#94a3b8"
                        fontSize={12}
                        tickLine={false}
                        axisLine={false}
                    />
                    <YAxis
                        stroke="#94a3b8"
                        fontSize={12}
                        tickLine={false}
                        axisLine={false}
                        label={{ value: 'Demand %', angle: -90, position: 'insideLeft' }}
                    />
                    <Tooltip
                        contentStyle={{
                            backgroundColor: '#0f172a',
                            border: '1px solid rgba(255,255,255,0.1)',
                            borderRadius: '12px',
                            color: '#fff'
                        }}
                        formatter={(value) => [`${value}%`, '']}
                    />
                    <Legend 
                        wrapperStyle={{ paddingTop: '20px' }}
                        iconType="line"
                    />
                    <Area
                        type="monotone"
                        dataKey="Computer"
                        stroke="#3b82f6"
                        strokeWidth={2}
                        fillOpacity={1}
                        fill="url(#colorComputer)"
                    />
                    <Area
                        type="monotone"
                        dataKey="Mechanical"
                        stroke="#a855f7"
                        strokeWidth={2}
                        fillOpacity={1}
                        fill="url(#colorMechanical)"
                    />
                    <Area
                        type="monotone"
                        dataKey="Automobile"
                        stroke="#10b981"
                        strokeWidth={2}
                        fillOpacity={1}
                        fill="url(#colorAutomobile)"
                    />
                    <Area
                        type="monotone"
                        dataKey="Robotics"
                        stroke="#f59e0b"
                        strokeWidth={2}
                        fillOpacity={1}
                        fill="url(#colorRobotics)"
                    />
                    <Area
                        type="monotone"
                        dataKey="Electrical"
                        stroke="#ef4444"
                        strokeWidth={2}
                        fillOpacity={1}
                        fill="url(#colorElectrical)"
                    />
                    <Area
                        type="monotone"
                        dataKey="Communication"
                        stroke="#06b6d4"
                        strokeWidth={2}
                        fillOpacity={1}
                        fill="url(#colorCommunication)"
                    />
                </AreaChart>
            </ResponsiveContainer>
        </motion.div>
    );
};

export default TrendChart;
