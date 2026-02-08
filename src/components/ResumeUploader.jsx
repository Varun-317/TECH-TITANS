import React, { useState } from 'react';

const ResumeUploader = ({ onUpload }) => {
    const [isDragging, setIsDragging] = useState(false);

    const handleDragOver = (e) => {
        e.preventDefault();
        setIsDragging(true);
    };

    const handleDragLeave = () => {
        setIsDragging(false);
    };

    const handleDrop = (e) => {
        e.preventDefault();
        setIsDragging(false);
        const files = e.dataTransfer.files;
        if (files.length > 0) {
            handleFile(files[0]);
        }
    };

    const handleFile = (file) => {
        onUpload(true); // Start processing
        setTimeout(() => {
            onUpload(false); // Done
        }, 1500);
    };

    return (
        <div
            className={`relative group border-2 border-dashed rounded-3xl p-16 text-center transition-all duration-500 overflow-hidden ${isDragging
                    ? 'border-primary bg-primary/10 scale-[1.02] shadow-[0_0_50px_rgba(139,92,246,0.2)]'
                    : 'border-white/10 hover:border-white/30 hover:bg-white/5'
                } glass`}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
        >
            {/* Dynamic background glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>

            <div className="relative z-10">
                <div className="w-20 h-20 bg-gradient-to-tr from-primary/20 to-secondary/20 rounded-2xl mx-auto flex items-center justify-center mb-8 border border-white/10 shadow-xl group-hover:scale-110 transition-transform duration-500">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                    </svg>
                </div>

                <h3 className="text-3xl font-black mb-3 text-white tracking-tight">Drop Resume Here</h3>
                <p className="text-slate-400 mb-10 max-w-sm mx-auto font-medium">
                    PDF or DOCX. We'll extract your skills and experience instantly using neural parsing.
                </p>

                <label className="relative btn-primary cursor-pointer inline-flex items-center gap-3 px-8 py-4 text-sm uppercase tracking-widest font-black transition-all hover:translate-y-[-2px]">
                    <span>Select File</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
                    </svg>
                    <input
                        type="file"
                        className="hidden"
                        accept=".pdf,.doc,.docx"
                        onChange={(e) => e.target.files[0] && handleFile(e.target.files[0])}
                    />
                </label>
            </div>

            <div className="mt-8 flex justify-center gap-6 text-slate-500">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
                    ATS-Friendly
                </div>
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
                    Privacy Secure
                </div>
            </div>
        </div>
    );
};

export default ResumeUploader;
