import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, TrendingDown, AlertCircle, Zap } from 'lucide-react';

const alerts = [
    {
        id: 1,
        title: 'Generative AI Surge',
        description: 'Demand for LLM integration skills increased by 45% this quarter.',
        type: 'up',
        impact: 'High',
    },
    {
        id: 2,
        title: 'Legacy Java Decline',
        description: 'Maintenance roles for Java 8 and below are decreasing. Migration skills needed.',
        type: 'down',
        impact: 'Medium',
    },
    {
        id: 3,
        title: 'Cybersecurity Alert',
        description: 'Zero-trust architecture is becoming a mandatory requirement for DevOps roles.',
        type: 'alert',
        impact: 'High',
    },
    {
        id: 4,
        title: 'Edge Computing',
        description: 'New trend: Integration of AI models on edge devices is picking up pace.',
        type: 'trend',
        impact: 'Low',
    }
];

const TrendAlerts = () => {
    return (
        <div className="space-y-4">
            <h3 className="text-xl font-semibold text-white mb-6 flex items-center gap-2">
                <Zap className="w-5 h-5 text-yellow-400" />
                Market Trend Alerts
            </h3>

            {alerts.map((alert, index) => (
                <motion.div
                    key={alert.id}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-white/5 border border-white/10 p-4 rounded-2xl hover:bg-white/10 transition-colors group"
                >
                    <div className="flex items-start gap-4">
                        <div className={`p-2 rounded-lg ${alert.type === 'up' ? 'bg-emerald-500/20 text-emerald-400' :
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
    );
};

export default TrendAlerts;
