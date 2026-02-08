import React from 'react';
import TrendChart from './TrendChart';
import SkillHeatmap from './SkillHeatmap';
import TrendAlerts from './TrendAlerts';
import RecommendationCard from './RecommendationCard';
import { LineChart, BarChart2, Zap } from 'lucide-react';

const MarketTrends = () => {
    return (
        <section id="market" className="py-24 relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-1/4 -right-20 w-80 h-80 bg-blue-600/10 rounded-full blur-[120px]" />
            <div className="absolute bottom-1/4 -left-20 w-80 h-80 bg-purple-600/10 rounded-full blur-[120px]" />

            <div className="container mx-auto px-6 relative">
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-medium mb-4 uppercase tracking-widest">
                        <Zap className="w-3 h-3" /> Real-time Market Data
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
                        Market Trends & <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">Skill Mapping</span>
                    </h2>
                    <p className="max-w-2xl mx-auto text-slate-400 text-lg leading-relaxed">
                        Stay ahead of the curve with AI-powered market analysis. We track thousands of job listings
                        and tech blogs to give you the most accurate skill trajectory.
                    </p>
                </div>

                {/* Charts Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
                    <TrendChart />
                    <SkillHeatmap />
                </div>

                {/* Bottom Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-1">
                        <div className="bg-slate-900/50 backdrop-blur-xl border border-white/10 p-8 rounded-3xl h-full">
                            <TrendAlerts />
                        </div>
                    </div>
                    <div className="lg:col-span-2">
                        <div className="bg-slate-900/50 backdrop-blur-xl border border-white/10 p-8 rounded-3xl h-full">
                            <RecommendationCard />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MarketTrends;
