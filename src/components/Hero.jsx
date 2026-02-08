import React from 'react';
import { motion } from 'framer-motion';

const Hero = ({ onLaunch }) => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3,
            },
        },
    };

    const itemVariants = {
        hidden: { y: 40, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
        },
    };

    return (
        <div className="relative pt-40 pb-32 lg:pt-56 lg:pb-48 overflow-hidden">
            {/* Cinematic Background elements */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10">
                <motion.div
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.1, 0.2, 0.1],
                    }}
                    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] bg-primary/20 rounded-full blur-[160px]"
                />
                <motion.div
                    animate={{
                        scale: [1.2, 1, 1.2],
                        opacity: [0.1, 0.2, 0.1],
                    }}
                    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                    className="absolute bottom-[-20%] right-[-10%] w-[60%] h-[60%] bg-secondary/20 rounded-full blur-[160px]"
                />
            </div>

            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center"
            >
                {/* Floating Badge */}
                <motion.div
                    variants={itemVariants}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border-white/10 mb-8"
                >
                    <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                    </span>
                    <span className="text-[10px] font-black uppercase tracking-[0.2em] text-white/70">Next-Gen Career Intelligence</span>
                </motion.div>

                <motion.h1
                    variants={itemVariants}
                    className="text-6xl md:text-9xl font-black tracking-tighter mb-8 leading-[0.9]"
                >
                    <span className="text-gradient block">ELEVATE YOUR</span>
                    <span className="text-gradient-primary block">POTENTIAL</span>
                </motion.h1>

                <motion.p
                    variants={itemVariants}
                    className="mt-6 max-w-2xl mx-auto text-lg md:text-xl text-slate-400 font-medium leading-relaxed"
                >
                    Neural-powered career guidance. Align your unique skills with market demands using
                    real-time intelligence and adaptive learning paths.
                </motion.p>

                <motion.div
                    variants={itemVariants}
                    className="mt-12 flex flex-col sm:flex-row justify-center gap-6"
                >
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={onLaunch}
                        className="btn-primary group"
                    >
                        <span className="relative z-10 flex items-center gap-2">
                            Launch Dashboard
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 group-hover:translate-x-1 transition-transform" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                            </svg>
                        </span>
                    </motion.button>
                    <motion.button
                        whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.1)" }}
                        whileTap={{ scale: 0.95 }}
                        className="btn-outline"
                    >
                        Documentation
                    </motion.button>
                </motion.div>

                {/* Stats Section */}
                <motion.div
                    variants={itemVariants}
                    className="mt-32 grid grid-cols-2 md:grid-cols-4 gap-8"
                >
                    {[
                        { label: 'Market Synergies', value: '42k+' },
                        { label: 'Neural Parsings', value: '1.2M' },
                        { label: 'Success Velocity', value: '94%' },
                        { label: 'Real-time Feed', value: '24/7' },
                    ].map((stat, i) => (
                        <motion.div
                            key={i}
                            whileHover={{ y: -5 }}
                            className="text-center group cursor-default"
                        >
                            <motion.div
                                initial={{ opacity: 0, scale: 0.5 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.8 + (i * 0.1), duration: 0.5 }}
                                className="text-2xl md:text-3xl font-black text-white group-hover:text-primary transition-colors duration-500"
                            >
                                {stat.value}
                            </motion.div>
                            <div className="text-[10px] font-black uppercase tracking-widest text-slate-500 mt-1">{stat.label}</div>
                        </motion.div>
                    ))}
                </motion.div>
            </motion.div>
        </div>
    );
};

export default Hero;
