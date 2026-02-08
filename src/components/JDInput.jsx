import React, { useState } from 'react';

const JDInput = ({ onNext, onBack }) => {
    const [jd, setJd] = useState('');

    return (
        <div className="glass p-10 rounded-2xl max-w-2xl mx-auto border border-primary/20 animate-in fade-in slide-in-from-right-4 duration-500">
            <h3 className="text-2xl font-bold mb-4">Paste Job Description</h3>
            <p className="text-slate-400 mb-6 text-sm">
                Provide the job description you're targeting. Our AI will analyze how well your resume
                matches these specific requirements.
            </p>

            <textarea
                className="w-full h-48 bg-slate-900/50 border border-white/10 rounded-xl p-4 text-slate-200 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all resize-none mb-6"
                placeholder="e.g. We are looking for a Senior Frontend Developer with 5+ years of experience in React..."
                value={jd}
                onChange={(e) => setJd(e.target.value)}
            ></textarea>

            <div className="flex gap-4">
                <button
                    onClick={onBack}
                    className="px-6 py-2 rounded-lg border border-white/10 text-slate-300 hover:bg-white/5 transition-colors"
                >
                    Back
                </button>
                <button
                    onClick={() => onNext(jd)}
                    disabled={!jd.trim()}
                    className="btn-primary flex-1 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    Analyze Match
                </button>
            </div>
        </div>
    );
};

export default JDInput;
