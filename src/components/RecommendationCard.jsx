import React from 'react';
import { motion } from 'framer-motion';
import { Lightbulb, ArrowRight, Share2, Plus } from 'lucide-react';

const recommendations = [
    {
        title: 'Learn LangChain',
        subtitle: 'High Demand for AI orchestration',
        match: '98%',
        category: 'AI / ML',
        color: 'blue'
    },
    {
        title: 'Master Kubernetes',
        subtitle: 'Crucial for scalable deployments',
        match: '85%',
        category: 'DevOps',
        color: 'emerald'
    },
    {
        title: 'Rust for Performance',
        subtitle: 'Emerging trend in systems programming',
        match: '72%',
        category: 'Systems',
        color: 'orange'
    }
];

const RecommendationCard = () => {
    return (
        <div className="space-y-4">
            <h3 className="text-xl font-semibold text-white mb-6 flex items-center gap-2">
                <Lightbulb className="w-5 h-5 text-blue-400" />
                Top Career Recommendations
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {recommendations.map((rec, index) => (
                    <motion.div
                        key={rec.title}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.1 }}
                        viewport={{ once: true }}
                        whileHover={{ y: -5 }}
                        className="relative overflow-hidden group"
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-purple-600/10 opacity-50 group-hover:opacity-100 transition-opacity" />
                        <div className="relative bg-slate-900/50 backdrop-blur-xl border border-white/10 p-5 rounded-2xl">
                            <div className="flex justify-between items-start mb-4">
                                <div className={`p-2 rounded-lg bg-${rec.color}-500/20 text-${rec.color}-400`}>
                                    <Plus className="w-5 h-5" />
                                </div>
                                <span className="text-xl font-bold text-white tracking-tighter">{rec.match}</span>
                            </div>

                            <h4 className="text-lg font-semibold text-white mb-1 group-hover:text-blue-400 transition-colors">
                                {rec.title}
                            </h4>
                            <p className="text-xs text-slate-400 mb-6">
                                {rec.subtitle}
                            </p>

                            <div className="flex items-center justify-between">
                                <span className="text-[10px] px-2 py-1 bg-white/5 border border-white/10 rounded-md text-slate-300 uppercase tracking-widest">
                                    {rec.category}
                                </span>
                                <button className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-white transition-colors">
                                    <ArrowRight className="w-4 h-4" />
                                </button>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default RecommendationCard;
