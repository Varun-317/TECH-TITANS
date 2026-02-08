import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import { motion } from 'framer-motion';

const data = [
    { month: 'Jan', AI: 4000, WebDev: 2400, Cloud: 2400 },
    { month: 'Feb', AI: 3000, WebDev: 1398, Cloud: 2210 },
    { month: 'Mar', AI: 2000, WebDev: 9800, Cloud: 2290 },
    { month: 'Apr', AI: 2780, WebDev: 3908, Cloud: 2000 },
    { month: 'May', AI: 1890, WebDev: 4800, Cloud: 2181 },
    { month: 'Jun', AI: 2390, WebDev: 3800, Cloud: 2500 },
    { month: 'Jul', AI: 3490, WebDev: 4300, Cloud: 2100 },
];

const TrendChart = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-slate-900/50 backdrop-blur-xl border border-white/10 p-6 rounded-3xl h-[400px]"
        >
            <div className="flex items-center justify-between mb-6">
                <div>
                    <h3 className="text-xl font-semibold text-white">Market Demand Trends</h3>
                    <p className="text-slate-400 text-sm">Skills demand trajectory for 2024</p>
                </div>
                <div className="flex gap-4">
                    <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                        <span className="text-xs text-slate-300">AI / ML</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full bg-purple-500"></div>
                        <span className="text-xs text-slate-300">Web Dev</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
                        <span className="text-xs text-slate-300">Cloud Computing</span>
                    </div>
                </div>
            </div>

            <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                    <defs>
                        <linearGradient id="colorAI" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3} />
                            <stop offset="95%" stopColor="#3b82f6" stopOpacity={0} />
                        </linearGradient>
                        <linearGradient id="colorWeb" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#a855f7" stopOpacity={0.3} />
                            <stop offset="95%" stopColor="#a855f7" stopOpacity={0} />
                        </linearGradient>
                        <linearGradient id="colorCloud" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#10b981" stopOpacity={0.3} />
                            <stop offset="95%" stopColor="#10b981" stopOpacity={0} />
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
                    />
                    <Tooltip
                        contentStyle={{
                            backgroundColor: '#0f172a',
                            border: '1px solid rgba(255,255,255,0.1)',
                            borderRadius: '12px',
                            color: '#fff'
                        }}
                    />
                    <Area
                        type="monotone"
                        dataKey="AI"
                        stroke="#3b82f6"
                        strokeWidth={3}
                        fillOpacity={1}
                        fill="url(#colorAI)"
                    />
                    <Area
                        type="monotone"
                        dataKey="WebDev"
                        stroke="#a855f7"
                        strokeWidth={3}
                        fillOpacity={1}
                        fill="url(#colorWeb)"
                    />
                    <Area
                        type="monotone"
                        dataKey="Cloud"
                        stroke="#10b981"
                        strokeWidth={3}
                        fillOpacity={1}
                        fill="url(#colorCloud)"
                    />
                </AreaChart>
            </ResponsiveContainer>
        </motion.div>
    );
};

export default TrendChart;
