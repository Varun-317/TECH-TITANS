import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ResumeUploader from './ResumeUploader';
import JDInput from './JDInput';
import AnalysisResults from './AnalysisResults';

const ResumeAnalyzer = () => {
    const [status, setStatus] = useState('idle'); // idle, uploading, jd, processing, results
    const [jd, setJd] = useState('');

    const handleUploadComplete = () => {
        setStatus('jd');
    };

    const handleJDSubmit = (jdText) => {
        setJd(jdText);
        setStatus('processing');
        setTimeout(() => {
            setStatus('results');
        }, 2000);
    };

    return (
        <section id="resume" className="py-48 px-4 sm:px-6 lg:px-8 border-t border-white/5">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-24 lg:mb-32"
                >
                    <motion.div
                        initial={{ scale: 0.9, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="inline-block px-4 py-1.5 rounded-full glass border-white/5 text-[10px] font-black uppercase tracking-[0.3em] text-primary mb-6"
                    >
                        Neural Parsing Engine
                    </motion.div>
                    <h2 className="text-5xl md:text-8xl font-black text-white mb-8 tracking-tighter uppercase leading-[0.9]">
                        RESUME <span className="text-gradient-primary">ANALYZER</span>
                    </h2>
                    <p className="text-slate-500 max-w-2xl mx-auto text-lg md:text-xl font-medium leading-relaxed">
                        Instant profile diagnostics. Our AI identifies structural optimization
                        opportunities and semantic keyword gaps.
                    </p>
                </motion.div>

                <div className="max-w-4xl mx-auto min-h-[400px]">
                    <AnimatePresence mode="wait">
                        {status === 'idle' && (
                            <motion.div
                                key="idle"
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 1.05 }}
                                transition={{ duration: 0.4 }}
                            >
                                <ResumeUploader onUpload={(loading) => !loading && handleUploadComplete()} />
                            </motion.div>
                        )}

                        {status === 'jd' && (
                            <motion.div
                                key="jd"
                                initial={{ opacity: 0, x: 50 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -50 }}
                                transition={{ duration: 0.4, ease: "easeOut" }}
                            >
                                <JDInput
                                    onNext={handleJDSubmit}
                                    onBack={() => setStatus('idle')}
                                />
                            </motion.div>
                        )}

                        {(status === 'uploading' || status === 'processing') && (
                            <motion.div
                                key="processing"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                className="glass p-20 rounded-3xl text-center border-white/5 shadow-[0_0_100px_rgba(139,92,246,0.1)]"
                            >
                                <div className="relative inline-block mb-12">
                                    <motion.div
                                        animate={{ rotate: 360 }}
                                        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                                        className="w-24 h-24 border-4 border-primary/20 border-t-primary rounded-full"
                                    />
                                    <motion.div
                                        animate={{ scale: [1, 1.2, 1] }}
                                        transition={{ duration: 1, repeat: Infinity }}
                                        className="absolute inset-0 flex items-center justify-center text-3xl"
                                    >
                                        🧠
                                    </motion.div>
                                </div>
                                <h3 className="text-3xl font-black text-white mb-4 tracking-tight">
                                    {status === 'uploading' ? 'Ingesting Profile...' : 'Computing Semantic Match...'}
                                </h3>
                                <p className="text-slate-500 text-lg">
                                    {status === 'uploading' ? 'Parsing text structures into neural representations.' : 'Cross-referencing experience vectors with JD requirements.'}
                                </p>
                            </motion.div>
                        )}

                        {status === 'results' && (
                            <motion.div
                                key="results"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6 }}
                            >
                                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-16 gap-6">
                                    <div>
                                        <h3 className="text-4xl font-black text-white tracking-tight leading-none">Diagnostic Feedback</h3>
                                        <motion.div
                                            initial={{ width: 0 }}
                                            animate={{ width: "fit-content" }}
                                            className="flex items-center gap-3 mt-4"
                                        >
                                            <span className="w-3 h-3 rounded-full bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.5)]"></span>
                                            <p className="text-slate-500 text-xs font-black uppercase tracking-[0.2em] whitespace-nowrap">Target: Semantic Optimization Complete</p>
                                        </motion.div>
                                    </div>
                                    <motion.button
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        onClick={() => setStatus('idle')}
                                        className="px-8 py-3 rounded-full glass border-white/10 text-[10px] font-black uppercase tracking-widest text-white hover:bg-white/10 transition-all"
                                    >
                                        New Analysis
                                    </motion.button>
                                </div>
                                <AnalysisResults jd={jd} />
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
};

export default ResumeAnalyzer;
