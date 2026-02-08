import React, { useState } from 'react';

const CalibrationQuiz = ({ onComplete }) => {
    const [currentStep, setCurrentStep] = useState(0);
    const questions = [
        {
            text: "How would you rate your proficiency in Web Development?",
            options: ["Beginner", "Intermediate", "Advanced"]
        },
        {
            text: "How much time can you dedicate daily to learning?",
            options: ["1-2 hours", "3-4 hours", "5+ hours"]
        },
        {
            text: "What is your primary career goal?",
            options: ["Frontend Developer", "Backend Developer", "Fullstack Engineer"]
        }
    ];

    const handleAnswer = () => {
        if (currentStep < questions.length - 1) {
            setCurrentStep(currentStep + 1);
        } else {
            onComplete();
        }
    };

    return (
        <div className="glass p-10 rounded-2xl max-w-2xl mx-auto border border-primary/20 shadow-[0_0_30px_rgba(139,92,246,0.1)]">
            <div className="flex justify-between items-center mb-8">
                <span className="text-xs font-bold uppercase tracking-widest text-primary">Calibration Quiz</span>
                <span className="text-slate-500 text-sm">{currentStep + 1} / {questions.length}</span>
            </div>

            <div className="mb-10">
                <h3 className="text-2xl font-bold mb-6">{questions[currentStep].text}</h3>
                <div className="space-y-4">
                    {questions[currentStep].options.map((option, i) => (
                        <button
                            key={i}
                            onClick={handleAnswer}
                            className="w-full text-left p-5 rounded-xl bg-white/5 border border-white/10 hover:border-primary/50 hover:bg-primary/5 transition-all group"
                        >
                            <div className="flex items-center justify-between">
                                <span className="text-slate-300 group-hover:text-white font-medium">{option}</span>
                                <div className="w-6 h-6 rounded-full border border-white/20 group-hover:border-primary transition-colors"></div>
                            </div>
                        </button>
                    ))}
                </div>
            </div>

            <div className="w-full bg-slate-800 h-1 rounded-full overflow-hidden">
                <div
                    className="h-full bg-primary transition-all duration-500"
                    style={{ width: `${((currentStep + 1) / questions.length) * 100}%` }}
                ></div>
            </div>
        </div>
    );
};

export default CalibrationQuiz;
