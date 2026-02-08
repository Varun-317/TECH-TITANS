import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import CalibrationQuiz from './CalibrationQuiz';
import StudyTimeline from './StudyTimeline';
import DailyTasks from './DailyTasks';
import ProgressBar from './ProgressBar';
import { courseResources, jobMarketData } from '../data/courseResources';

const StudyPlanner = ({ userProfile, setUserProfile }) => {
    const [status, setStatus] = useState('quiz'); // quiz, dashboard
    const defaultDomain = 'Computer Engineering';
    const initialTasks = courseResources[defaultDomain] || courseResources['Computer Engineering'];
    const [tasks, setTasks] = useState(initialTasks);

    const toggleTask = (id) => {
        setTasks(tasks.map(t => t.id === id ? { ...t, completed: !t.completed } : t));
    };

    const completedCount = tasks.filter(t => t.completed).length;
    const progressPercent = Math.round((completedCount / tasks.length) * 100);

    const handleQuizComplete = (answers) => {
        setUserProfile(answers);
        const selectedDomain = answers.domain;
        const newTasks = courseResources[selectedDomain] || courseResources['Computer Engineering'];
        setTasks(newTasks);
        setStatus('dashboard');
    };

    const curriculumExpansion = {
        "Computer Engineering": [
            { id: 5, title: 'Distributed Systems & Consistency Models', duration: '2.5 hours', tag: 'Deep Dive', completed: false },
            { id: 6, title: 'Rust Integration for Performance', duration: '1.5 hours', tag: 'Lab', completed: false }
        ],
        "Mechanical Engineering": [
            { id: 5, title: 'Computational Fluid Dynamics (CFD)', duration: '3 hours', tag: 'Simulation', completed: false },
            { id: 6, title: 'Mechatronics System Control', duration: '2 hours', tag: 'Lab', completed: false }
        ],
        "Automobile Engineering": [
            { id: 5, title: 'Hydrogen Fuel Cell Technology', duration: '2 hours', tag: 'Research', completed: false },
            { id: 6, title: 'ADAS Algorithms Deep Dive', duration: '2.5 hours', tag: 'Coding', completed: false }
        ],
        "Robotics & Automation": [
            { id: 5, title: 'Swarm Robotics Coordination', duration: '1.5 hours', tag: 'Theory', completed: false },
            { id: 6, title: 'Reinforcement Learning for Control', duration: '3 hours', tag: 'AI/ML', completed: false }
        ],
        "Electrical Engineering": [
            { id: 5, title: 'FPGA Design with Verilog', duration: '2.5 hours', tag: 'Lab', completed: false },
            { id: 6, title: 'High Voltage DC Transmission', duration: '1.5 hours', tag: 'Theory', completed: false }
        ],
        "Communication Engineering": [
            { id: 5, title: 'Quantum Communication Basics', duration: '2 hours', tag: 'Future Tech', completed: false },
            { id: 6, title: 'Software Defined Radio (SDR) Lab', duration: '2.5 hours', tag: 'Lab', completed: false }
        ]
    };

    const handleExpandCurriculum = () => {
        const domain = userProfile?.domain || "Computer Engineering";
        const newModules = curriculumExpansion[domain] || curriculumExpansion["Computer Engineering"];

        // check if already expanded
        if (tasks.find(t => t.id === 5)) {
            alert("Curriculum already expanded to maximum capacity for this sprint.");
            return;
        }

        setTasks(prev => [...prev, ...newModules]);
    };

    return (
        <section id="planner" className="py-48 px-4 sm:px-6 lg:px-8 bg-white/[0.01]">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="text-center mb-24 lg:mb-32"
                >
                    <div className="inline-block px-4 py-1.5 rounded-full glass border-white/5 text-[10px] font-black uppercase tracking-[0.3em] text-secondary mb-6">
                        Adaptive Learning Core
                    </div>
                    <h2 className="text-5xl md:text-8xl font-black text-white mb-8 tracking-tighter">STUDY <span className="text-gradient-primary">PLANNER</span></h2>
                    <p className="text-slate-500 max-w-2xl mx-auto text-lg md:text-xl font-medium leading-relaxed">
                        Personalized velocity charts. Dynamic curriculum adjustment based on
                        retention metrics and career objective drift.
                    </p>
                </motion.div>

                <AnimatePresence mode="wait">
                    {status === 'quiz' ? (
                        <motion.div
                            key="quiz"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95 }}
                            transition={{ duration: 0.5 }}
                        >
                            <CalibrationQuiz onComplete={handleQuizComplete} />
                        </motion.div>
                    ) : (
                        <motion.div
                            key="dashboard"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.8 }}
                            className="space-y-16"
                        >
                            {/* High-level Overview */}
                            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                                <motion.div
                                    initial={{ x: -50, opacity: 0 }}
                                    animate={{ x: 0, opacity: 1 }}
                                    className="lg:col-span-3 glass p-10 rounded-3xl relative overflow-hidden"
                                >
                                    <motion.div
                                        animate={{ x: [-20, 20, -20], y: [-10, 10, -10] }}
                                        transition={{ duration: 10, repeat: Infinity }}
                                        className="absolute top-0 right-0 w-64 h-64 bg-secondary/10 rounded-full blur-[100px] -mr-32 -mt-32"
                                    />
                                    <h4 className="text-xs font-black uppercase tracking-[0.2em] text-slate-500 mb-8">
                                        System Velocity: <span className="text-primary">{userProfile?.domain || 'General Engineering'}</span>
                                    </h4>
                                    <ProgressBar
                                        label={`Mastery Achievement (${userProfile?.proficiency?.split(' ')[0] || 'In Progress'})`}
                                        progress={34}
                                    />
                                </motion.div>

                                <motion.div
                                    initial={{ x: 50, opacity: 0 }}
                                    animate={{ x: 0, opacity: 1 }}
                                    className="glass p-10 rounded-3xl flex flex-col justify-center items-center text-center group"
                                >
                                    <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 mb-2 group-hover:text-secondary transition-colors">Momentum Streak</p>
                                    <motion.div
                                        initial={{ scale: 0 }}
                                        animate={{ scale: 1 }}
                                        transition={{ type: "spring", stiffness: 200, delay: 0.5 }}
                                        className="text-6xl font-black text-secondary drop-shadow-[0_0_20px_rgba(6,182,212,0.4)]"
                                    >
                                        12
                                    </motion.div>
                                    <p className="text-xs font-bold text-slate-400 mt-2 uppercase tracking-widest">Cycles</p>
                                </motion.div>
                            </div>

                            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                                <motion.div
                                    initial={{ y: 30, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ delay: 0.3 }}
                                    className="lg:col-span-2 space-y-12"
                                >
                                    <div className="glass p-10 rounded-[2rem] border-white/5">
                                        <div className="flex justify-between items-end mb-12">
                                            <div>
                                                <h3 className="text-3xl font-black text-white tracking-tight">Active Sprint</h3>
                                                <p className="text-slate-500 text-sm mt-2 font-medium">Real-time schedule synchronization active</p>
                                            </div>
                                            <div className="text-right">
                                                <motion.div
                                                    key={progressPercent}
                                                    initial={{ scale: 1.2, color: "#06b6d4" }}
                                                    animate={{ scale: 1, color: "#fff" }}
                                                    className="text-4xl font-black"
                                                >
                                                    {progressPercent}%
                                                </motion.div>
                                                <div className="text-[10px] font-black text-secondary uppercase tracking-widest mt-1">Sprint Quota</div>
                                            </div>
                                        </div>

                                        <DailyTasks tasks={tasks} onToggle={toggleTask} />

                                        <motion.div
                                            whileHover={{ scale: 1.01 }}
                                            className="mt-12 p-8 rounded-2xl bg-white/[0.03] border border-white/5 flex items-start gap-6 relative overflow-hidden cursor-default"
                                        >
                                            <motion.div
                                                animate={{ height: ["20%", "100%", "20%"] }}
                                                transition={{ duration: 4, repeat: Infinity }}
                                                className="absolute top-0 left-0 w-1 bg-primary/40"
                                            />
                                            <div className="text-3xl animate-bounce">🧩</div>
                                            <div>
                                                <p className="text-sm font-black text-white uppercase tracking-widest mb-2">Neural Recommendation</p>
                                                <p className="text-sm text-slate-400 leading-relaxed">
                                                    Analysis of your {userProfile?.domain} trajectory indicates high retention in **Interactive Labs**.
                                                    System has prioritized {tasks.find(t => !t.completed)?.title || "Advanced Modules"} to align with your {userProfile?.proficiency?.split(' ')[0]} goal.
                                                </p>
                                            </div>
                                        </motion.div>
                                    </div>
                                </motion.div>

                                <motion.div
                                    initial={{ x: 30, opacity: 0 }}
                                    animate={{ x: 0, opacity: 1 }}
                                    transition={{ delay: 0.5 }}
                                    className="space-y-12"
                                >
                                    <StudyTimeline domain={userProfile?.domain} />
                                    <motion.button
                                        whileHover={{ scale: 1.05, y: -5 }}
                                        whileTap={{ scale: 0.95 }}
                                        onClick={handleExpandCurriculum}
                                        className="w-full py-5 rounded-2xl bg-white text-black font-black uppercase tracking-[0.2em] text-xs shadow-[0_20px_40px_rgba(255,255,255,0.05)]"
                                    >
                                        Expand Curriculum
                                    </motion.button>
                                    <div className="glass p-8 rounded-3xl border-dashed border-white/10 text-center group">
                                        <p className="text-[10px] font-black text-slate-600 uppercase tracking-widest leading-relaxed group-hover:text-slate-400 transition-colors">
                                            Next Sync: Today 11:45 PM<br />
                                            Global Ranking: Top 3%
                                        </p>
                                    </div>
                                </motion.div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence >
            </div >
        </section >
    );
};

export default StudyPlanner;
