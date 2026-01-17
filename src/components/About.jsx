import React from 'react';
import { motion } from 'framer-motion';
import { User, Code, Smartphone, Globe } from 'lucide-react';

const About = () => {
    const cards = [
        { icon: <Code size={24} />, title: "Frontend Development", desc: "Expertise in React.js and modern JavaScript frameworks." },
        { icon: <Smartphone size={24} />, title: "Responsive Design", desc: "Creating seamless experiences across all devices." },
        { icon: <Globe size={24} />, title: "Web Performance", desc: "Optimizing applications for speed and efficiency." },
    ];

    return (
        <section id="about" className="py-24 bg-slate-950 px-6 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-blue-500/10 rounded-full blur-[100px]" />

            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-slate-100 to-slate-400 mb-4">About Me</h2>
                    <div className="w-20 h-1 bg-cyan-500 mx-auto rounded-full" />
                </motion.div>

                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="space-y-6 text-slate-300 text-lg leading-relaxed"
                    >
                        <p>
                            Hello! I'm <span className="text-cyan-400 font-semibold">Fahad K</span>, a passionate Software Engineer based in India. I currently work as a Software Engineer 3 at <span className="text-white font-semibold">AOT Technologies</span>.
                        </p>
                        <p>
                            With extensive experience in the software industry, my primary focus is on <span className="text-white">Frontend Development</span> using React and the JavaScript ecosystem. I take pride in building pixel-perfect, performant, and accessible web applications.
                        </p>
                        <p>
                            I enjoy solving complex problems and turning ideas into reality through code. Whether it's a complex dashboard or a landing page, I strive for excellence in every pixel.
                        </p>
                    </motion.div>

                    <div className="grid gap-6">
                        {cards.map((card, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.2 + (index * 0.1) }}
                                className="bg-slate-900/50 p-6 rounded-xl border border-slate-800 hover:border-cyan-500/50 transition-colors flex items-start gap-4"
                            >
                                <div className="p-3 bg-cyan-500/10 rounded-lg text-cyan-400">
                                    {card.icon}
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold text-white mb-2">{card.title}</h3>
                                    <p className="text-slate-400">{card.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
