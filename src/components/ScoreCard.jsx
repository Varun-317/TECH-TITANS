import React from 'react';
import { motion } from 'framer-motion';

const ScoreCard = ({ label, score, color }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -8, scale: 1.02 }}
            className="glass p-8 rounded-3xl relative overflow-hidden group transition-all duration-500 cursor-default"
        >
            <motion.div
                animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.03, 0.06, 0.03]
                }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute top-0 right-0 w-32 h-32 bg-current rounded-full -mr-12 -mt-12"
            />

            <div className="relative z-10 flex flex-col items-center">
                <motion.div
                    initial={{ scale: 0.5, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.8, type: "spring" }}
                    className={`text-6xl font-black mb-4 tracking-tighter ${color} drop-shadow-[0_0_20px_currentColor]`}
                >
                    {score}<span className="text-xl ml-1 opacity-60">%</span>
                </motion.div>

                <div className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 mb-6 group-hover:text-slate-300 transition-colors">
                    {label}
                </div>

                <div className="w-full bg-slate-900/50 h-1.5 rounded-full overflow-hidden border border-white/5">
                    <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${score}%` }}
                        transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
                        className={`h-full rounded-full shadow-[0_0_15px_currentColor]`}
                        style={{ backgroundColor: 'currentColor' }}
                    />
                </div>
            </div>
        </motion.div>
    );
};

export default ScoreCard;
