import React from 'react';

const StudyTimeline = () => {
    const weeks = [
        { name: 'Week 1', status: 'completed', topic: 'Fundamentals' },
        { name: 'Week 2', status: 'current', topic: 'Modern UI Patterns' },
        { name: 'Week 3', status: 'upcoming', topic: 'API Integration' },
        { name: 'Week 4', status: 'upcoming', topic: 'System Design' },
    ];

    return (
        <div className="glass p-8 rounded-2xl">
            <h4 className="text-lg font-bold flex items-center gap-2 mb-8">
                <span className="w-1.5 h-6 bg-primary rounded-full"></span>
                Curriculum Roadmap
            </h4>
            <div className="relative pl-8 space-y-10 before:content-[''] before:absolute before:left-[11px] before:top-2 before:bottom-2 before:w-[2px] before:bg-slate-800">
                {weeks.map((week, i) => (
                    <div key={i} className="relative">
                        <div className={`absolute left-[-29px] top-1.5 w-5 h-5 rounded-full border-4 border-background z-10 ${week.status === 'completed' ? 'bg-green-500' :
                                week.status === 'current' ? 'bg-primary animate-pulse' :
                                    'bg-slate-700'
                            }`}></div>
                        <div className="flex justify-between items-start">
                            <div>
                                <h5 className={`font-bold ${week.status === 'upcoming' ? 'text-slate-500' : 'text-slate-200'}`}>
                                    {week.name}: {week.topic}
                                </h5>
                                <p className="text-sm text-slate-500 mt-1">
                                    {week.status === 'completed' ? 'Completed on May 12' :
                                        week.status === 'current' ? 'Currently in progress' :
                                            'Starts in 12 days'}
                                </p>
                            </div>
                            {week.status === 'current' && (
                                <span className="text-[10px] font-black bg-primary/20 text-primary px-2 py-1 rounded tracking-tighter uppercase">Active</span>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default StudyTimeline;
