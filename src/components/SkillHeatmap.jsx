import React from 'react';
import { Treemap, ResponsiveContainer, Tooltip } from 'recharts';
import { motion } from 'framer-motion';

const data = [
    {
        name: 'Frontend',
        children: [
            { name: 'React', size: 4000 },
            { name: 'Vue', size: 2000 },
            { name: 'Angular', size: 1500 },
            { name: 'Next.js', size: 3500 },
        ],
    },
    {
        name: 'Backend',
        children: [
            { name: 'Node.js', size: 3800 },
            { name: 'Python', size: 4500 },
            { name: 'Go', size: 2200 },
            { name: 'Java', size: 3000 },
        ],
    },
    {
        name: 'AI/ML',
        children: [
            { name: 'PyTorch', size: 3900 },
            { name: 'TensorFlow', size: 2800 },
            { name: 'NLP', size: 3200 },
            { name: 'LLMs', size: 5000 },
        ],
    },
    {
        name: 'Cloud',
        children: [
            { name: 'AWS', size: 4200 },
            { name: 'Azure', size: 3100 },
            { name: 'Docker', size: 3500 },
            { name: 'Kubernetes', size: 3300 },
        ],
    },
];

const COLORS = ['#3b82f6', '#a855f7', '#10b981', '#f59e0b', '#ef4444'];

const CustomizedContent = (props) => {
    const { root, depth, x, y, width, height, index, name } = props;

    return (
        <g>
            <rect
                x={x}
                y={y}
                width={width}
                height={height}
                style={{
                    fill: COLORS[index % COLORS.length],
                    stroke: '#0f172a',
                    strokeWidth: 2 / (depth + 1),
                    strokeOpacity: 1,
                }}
            />
            {width > 50 && height > 30 && (
                <text
                    x={x + width / 2}
                    y={y + height / 2}
                    textAnchor="middle"
                    dominantBaseline="middle"
                    fill="#fff"
                    fontSize={12}
                    fontWeight="bold"
                >
                    {name}
                </text>
            )}
        </g>
    );
};

const SkillHeatmap = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-slate-900/50 backdrop-blur-xl border border-white/10 p-6 rounded-3xl h-[400px]"
        >
            <div className="mb-6">
                <h3 className="text-xl font-semibold text-white">Skill Saturation Heatmap</h3>
                <p className="text-slate-400 text-sm">Relative market value of current technologies</p>
            </div>

            <ResponsiveContainer width="100%" height="100%">
                <Treemap
                    data={data}
                    dataKey="size"
                    aspectRatio={4 / 3}
                    stroke="#fff"
                    fill="#8884d8"
                    content={<CustomizedContent />}
                >
                    <Tooltip
                        contentStyle={{
                            backgroundColor: '#0f172a',
                            border: '1px solid rgba(255,255,255,0.1)',
                            borderRadius: '12px',
                            color: '#fff'
                        }}
                    />
                </Treemap>
            </ResponsiveContainer>
        </motion.div>
    );
};

export default SkillHeatmap;
