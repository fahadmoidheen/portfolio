import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
    const skills = [
        { name: "React", level: "Expert", category: "Frontend" },
        { name: "TypeScript", level: "Advanced", category: "Languages" },
        { name: "JavaScript", level: "Expert", category: "Languages" },
        { name: "Tailwind CSS", level: "Advanced", category: "Styling" },
        { name: "Next.js", level: "Advanced", category: "Frontend" },
        { name: "Node.js", level: "Intermediate", category: "Backend" },
        { name: "Git", level: "Advanced", category: "Tools" },
        { name: "HTML5/CSS3", level: "Expert", category: "Fundamentals" },
    ];

    return (
        <section id="skills" className="py-24 bg-slate-900 px-6">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-slate-100 to-slate-400 mb-4">Skills & Expertise</h2>
                    <div className="w-20 h-1 bg-purple-500 mx-auto rounded-full" />
                </motion.div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {skills.map((skill, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.3, delay: index * 0.1 }}
                            className="bg-slate-950 p-6 rounded-xl border border-slate-800 hover:border-purple-500/50 hover:bg-slate-900 transition-all group"
                        >
                            <h3 className="text-xl font-semibold text-slate-100 mb-2 group-hover:text-purple-400 transition-colors">{skill.name}</h3>
                            <div className="flex justify-between items-center text-sm text-slate-400">
                                <span>{skill.category}</span>
                                <span className="text-slate-500">{skill.level}</span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
