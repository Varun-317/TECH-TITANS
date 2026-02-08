import React, { useState } from 'react';

const DailyTasks = ({ tasks, onToggle }) => {
    return (
        <div className="space-y-4">
            <h4 className="text-lg font-bold flex items-center gap-2 mb-4">
                <span className="w-1.5 h-6 bg-secondary rounded-full"></span>
                Today's Learning Tasks
            </h4>
            {tasks.map((task) => (
                <div
                    key={task.id}
                    className={`flex items-center gap-4 p-4 rounded-xl border transition-all ${task.completed
                            ? 'bg-slate-900/50 border-white/5 opacity-60'
                            : 'bg-white/5 border-white/10 hover:border-white/20'
                        }`}
                >
                    <button
                        onClick={() => onToggle(task.id)}
                        className={`w-6 h-6 rounded-md border flex items-center justify-center transition-all ${task.completed
                                ? 'bg-secondary border-secondary text-white'
                                : 'border-white/20 text-transparent'
                            }`}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                    </button>
                    <div className="flex-1">
                        <h5 className={`font-medium ${task.completed ? 'line-through text-slate-500' : 'text-slate-200'}`}>
                            {task.title}
                        </h5>
                        <p className="text-xs text-slate-500 mt-0.5">{task.duration}</p>
                    </div>
                    <span className={`text-[10px] px-2 py-0.5 rounded-full font-bold uppercase tracking-wider ${task.tag === 'Video' ? 'bg-blue-500/10 text-blue-400' :
                            task.tag === 'Lab' ? 'bg-purple-500/10 text-purple-400' :
                                'bg-green-500/10 text-green-400'
                        }`}>
                        {task.tag}
                    </span>
                </div>
            ))}
        </div>
    );
};

export default DailyTasks;
