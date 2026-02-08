import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ResumeUploader from './ResumeUploader';
import JDInput from './JDInput';
import AnalysisResults from './AnalysisResults';
import { extractTextFromPDF } from '../utils/pdf';
import { analyzeResume } from '../utils/ai';

const ResumeAnalyzer = () => {
    const [status, setStatus] = useState('idle'); // idle, uploading, jd, processing, results, error
    const [jd, setJd] = useState('');
    const [resumeFile, setResumeFile] = useState(null);
    const [resumeText, setResumeText] = useState('');
    const [analysisData, setAnalysisData] = useState(null);
    const [apiKey, setApiKey] = useState(localStorage.getItem('openrouter_key') || '');
    const [error, setError] = useState('');

    useEffect(() => {
        if (apiKey) {
            localStorage.setItem('openrouter_key', apiKey);
        }
    }, [apiKey]);

    const handleFileUpload = async (file) => {
        // Handle mock upload/legacy behavior if a string is passed
        if (typeof file !== 'object') {
            // If boolean or other type, just move to JD step for demo purposes
            setStatus('jd');
            setResumeText("Legacy Mock Resume Text");
            return;
        }

        setResumeFile(file);
        setStatus('uploading');
        try {
            const text = await extractTextFromPDF(file);
            setResumeText(text);
            setStatus('jd');
        } catch (err) {
            console.error(err);
            setError('Failed to extract text from PDF. Please try another file.');
            setStatus('error');
        }
    };

    const handleJDSubmit = async (jdText) => {
        if (!apiKey) {
            setError('Please provide an OpenRouter API key first.');
            setStatus('error');
            return;
        }

        setJd(jdText);
        setStatus('processing');
        try {
            const data = await analyzeResume(resumeText, jdText, apiKey);
            setAnalysisData(data);
            setStatus('results');
        } catch (err) {
            console.error(err);
            setError(err.message || 'AI Analysis failed. Check your API key or connection.');
            setStatus('error');
        }
    };

    const reset = () => {
        setStatus('idle');
        setResumeFile(null);
        setResumeText('');
        setAnalysisData(null);
        setError('');
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
                        Real-time AI Verification
                    </motion.div>
                    <h2 className="text-5xl md:text-8xl font-black text-white mb-8 tracking-tighter uppercase leading-[0.9]">
                        RESUME <span className="text-gradient-primary">ANALYZER</span>
                    </h2>

                    {/* API Key Configuration */}
                    <div className="max-w-md mx-auto mb-12">
                        <div className="relative group">
                            <input
                                type="password"
                                placeholder="Enter OpenRouter API Key"
                                value={apiKey}
                                onChange={(e) => setApiKey(e.target.value)}
                                className="w-full bg-white/5 border border-white/10 rounded-full px-6 py-3 text-sm focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all text-center"
                            />
                            {!apiKey && (
                                <p className="mt-2 text-[10px] text-accent font-bold uppercase tracking-widest animate-pulse">
                                    API Key Required for analysis
                                </p>
                            )}
                        </div>
                    </div>
                </motion.div>

                <div className="max-w-4xl mx-auto min-h-[400px]">
                    <AnimatePresence mode="wait">
                        {status === 'idle' && (
                            <motion.div
                                key="idle"
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 1.05 }}
                            >
                                <ResumeUploader onUpload={handleFileUpload} />
                            </motion.div>
                        )}

                        {status === 'jd' && (
                            <motion.div
                                key="jd"
                                initial={{ opacity: 0, x: 50 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -50 }}
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
                                    {status === 'uploading' ? 'Parsing PDF...' : 'Running Neural ATS Audit...'}
                                </h3>
                                <p className="text-slate-500 text-lg">
                                    {status === 'uploading' ? 'Extracting semantic structure from document layers.' : 'Cross-referencing experience vectors with JD requirements.'}
                                </p>
                            </motion.div>
                        )}

                        {status === 'results' && analysisData && (
                            <motion.div
                                key="results"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                            >
                                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-16 gap-6">
                                    <div>
                                        <h3 className="text-4xl font-black text-white tracking-tight">Diagnostic Feedback</h3>
                                        <div className="flex items-center gap-3 mt-4">
                                            <span className="w-3 h-3 rounded-full bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.5)]"></span>
                                            <p className="text-slate-500 text-xs font-black uppercase tracking-[0.2em]">Neural Analysis Complete</p>
                                        </div>
                                    </div>
                                    <button
                                        onClick={reset}
                                        className="btn-outline px-8 py-3"
                                    >
                                        New Analysis
                                    </button>
                                </div>
                                <AnalysisResults data={analysisData} />
                            </motion.div>
                        )}

                        {status === 'error' && (
                            <motion.div
                                key="error"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                className="glass p-16 rounded-3xl text-center border-accent/20"
                            >
                                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
                                    <span className="text-2xl">⚠️</span>
                                </div>
                                <h3 className="text-2xl font-black text-white mb-2">Analysis Interrupted</h3>
                                <p className="text-slate-400 mb-8">{error}</p>
                                <button
                                    onClick={reset}
                                    className="btn-primary"
                                >
                                    Try Again
                                </button>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
};

export default ResumeAnalyzer;
