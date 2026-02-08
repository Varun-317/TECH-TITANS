import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, TrendingDown, AlertCircle, Zap, Building2 } from 'lucide-react';
import { jobMarketData } from '../data/courseResources';

const industryAlerts = {
    "Computer Engineering": [
        {
            id: 1,
            title: 'AI/ML Skills Surge',
            description: 'Demand for LLM integration and RAG skills up 45% YoY.',
            type: 'up',
            impact: 'High',
        },
        {
            id: 2,
            title: 'DevOps Essentials',
            description: 'Docker, K8s, and CI/CD expertise now mandatory for backend roles.',
            type: 'alert',
            impact: 'High',
        },
    ],
    "Mechanical Engineering": [
        {
            id: 1,
            title: 'Additive Manufacturing Boom',
            description: '3D printing and AM skills demand increased by 50% in manufacturing.',
            type: 'up',
            impact: 'High',
        },
        {
            id: 2,
            title: 'CAD Modernization',
            description: 'Cloud-based CAD tools (Fusion 360, Onshape) replacing traditional software.',
            type: 'trend',
            impact: 'Medium',
        },
    ],
    "Automobile Engineering": [
        {
            id: 1,
            title: 'EV Revolution',
            description: 'Electric vehicle powertrain skills demand up 80% as industry shifts.',
            type: 'up',
            impact: 'High',
        },
        {
            id: 2,
            title: 'Autonomous Systems Boom',
            description: 'ADAS and autonomous driving skills critical for competitive edge.',
            type: 'alert',
            impact: 'High',
        },
    ],
    "Robotics & Automation": [
        {
            id: 1,
            title: 'ROS Adoption',
            description: 'ROS 2 and middleware adoption at all-time high in robotics industry.',
            type: 'up',
            impact: 'High',
        },
        {
            id: 2,
            title: 'Computer Vision Essential',
            description: 'YOLO, OpenCV expertise now baseline for robotics engineers.',
            type: 'alert',
            impact: 'Medium',
        },
    ],
    "Electrical Engineering": [
        {
            id: 1,
            title: 'Renewable Energy Growth',
            description: 'Solar and wind energy systems engineering roles increased by 35%.',
            type: 'up',
            impact: 'High',
        },
        {
            id: 2,
            title: 'FPGA Demand Rising',
            description: 'Verilog and FPGA design skills crucial for embedded systems.',
            type: 'trend',
            impact: 'Medium',
        },
    ],
    "Communication Engineering": [
        {
            id: 1,
            title: '5G Infrastructure',
            description: '5G network deployment creating 75% surge in demand for specialists.',
            type: 'up',
            impact: 'High',
        },
        {
            id: 2,
            title: 'RF Design Innovation',
            description: 'Advanced antenna design and SDR technologies gaining traction.',
            type: 'trend',
            impact: 'Medium',
        },
    ]
};

const TrendAlerts = ({ userProfile }) => {
    const domain = userProfile?.domain || "Computer Engineering";
    const currentAlerts = industryAlerts[domain] || industryAlerts["Computer Engineering"];
    const allDomains = Object.keys(industryAlerts);
    
    return (
        <div className="space-y-6">
            <h3 className="text-xl font-semibold text-white mb-6 flex items-center gap-2">
                <Zap className="w-5 h-5 text-yellow-400" />
                Market Trend Alerts
            </h3>

            {/* Current Industry Alerts */}
            <div className="space-y-3">
                <div className="text-sm text-slate-400 font-semibold uppercase tracking-widest mb-2 flex items-center gap-2">
                    <Building2 className="w-4 h-4" />
                    Your Domain: {domain}
                </div>
                {currentAlerts.map((alert, index) => (
                    <motion.div
                        key={alert.id}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="bg-white/5 border border-white/10 p-4 rounded-2xl hover:bg-white/10 transition-colors group"
                    >
                        <div className="flex items-start gap-4">
                            <div className={`p-2 rounded-lg ${alert.type === 'up' ? 
                                'bg-emerald-500/20 text-emerald-400' :
                                alert.type === 'down' ? 'bg-rose-500/20 text-rose-400' :
                                alert.type === 'alert' ? 'bg-amber-500/20 text-amber-400' :
                                'bg-blue-500/20 text-blue-400'
                            }`}>
                                {alert.type === 'up' && <TrendingUp className="w-5 h-5" />}
                                {alert.type === 'down' && <TrendingDown className="w-5 h-5" />}
                                {alert.type === 'alert' && <AlertCircle className="w-5 h-5" />}
                                {alert.type === 'trend' && <Zap className="w-5 h-5" />}
                            </div>
                            <div className="flex-1">
                                <div className="flex items-center justify-between mb-1">
                                    <h4 className="font-medium text-white group-hover:text-blue-400 transition-colors uppercase text-xs tracking-wider">
                                        {alert.title}
                                    </h4>
                                    <span className={`text-[10px] px-2 py-0.5 rounded-full border ${alert.impact === 'High' ? 'border-rose-500/50 text-rose-400 bg-rose-500/10' :
                                        alert.impact === 'Medium' ? 'border-amber-500/50 text-amber-400 bg-amber-500/10' :
                                        'border-blue-500/50 text-blue-400 bg-blue-500/10'
                                    }`}>
                                        {alert.impact} Impact
                                    </span>
                                </div>
                                <p className="text-sm text-slate-400 leading-relaxed">
                                    {alert.description}
                                </p>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* All Industries Overview */}
            <div className="mt-8 pt-6 border-t border-white/10">
                <div className="text-sm text-slate-400 font-semibold uppercase tracking-widest mb-4">
                    All Industries Snapshot
                </div>
                <div className="space-y-2">
                    {allDomains.map((ind, idx) => {
                        const alerts = industryAlerts[ind];
                        const topAlert = alerts[0];
                        return (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: idx * 0.05 }}
                                viewport={{ once: true }}
                                className={`p-3 rounded-lg border transition-all ${domain === ind ? 'bg-blue-500/10 border-blue-500/30' : 'bg-white/5 border-white/10 hover:bg-white/10'}`}
                            >
                                <div className="flex items-start justify-between">
                                    <div className="flex-1">
                                        <p className={`text-xs font-bold uppercase tracking-wider ${domain === ind ? 'text-blue-400' : 'text-slate-300'}`}>
                                            {ind}
                                        </p>
                                        <p className="text-xs text-slate-400 mt-1">{topAlert.title}</p>
                                    </div>
                                    <div className={`text-xs px-2 py-1 rounded-full font-semibold ${topAlert.type === 'up' ? 'bg-emerald-500/20 text-emerald-400' : topAlert.type === 'alert' ? 'bg-amber-500/20 text-amber-400' : 'bg-blue-500/20 text-blue-400'}`}>
                                        {topAlert.type === 'up' ? '↑ High' : topAlert.type === 'alert' ? '! Alert' : '→ Trend'}
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default TrendAlerts;
