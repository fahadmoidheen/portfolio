import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Code2, Terminal } from 'lucide-react';

const Hero = () => {
    return (
        <section className="min-h-screen flex items-center justify-center pt-20 px-6">
            <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">

                {/* Text Content */}
                <div className="space-y-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="inline-flex items-center space-x-2 bg-slate-900/50 border border-slate-800 rounded-full px-4 py-1.5 text-sm text-cyan-400"
                    >
                        <Terminal size={14} />
                        <span>Full Stack Developer</span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-slate-100 to-slate-400 leading-tight"
                    >
                        Building digital <br />
                        <span className="text-cyan-400">experiences</span> that matter.
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="text-lg text-slate-400 max-w-lg"
                    >
                        I'm <span className="text-slate-200 font-semibold">Fahad K</span>, Software Engineer 3 at <span className="text-slate-200 font-semibold">AOT Technologies</span>. I specialize in building exception digital experiences with React and modern frontend technologies.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="flex items-center space-x-4 pt-4"
                    >
                        <a href="#projects" className="px-8 py-3 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold rounded-full transition-all flex items-center gap-2 group">
                            View Work
                            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                        </a>
                        <a href="#contact" className="px-8 py-3 border border-slate-700 hover:border-slate-500 text-slate-300 hover:text-white rounded-full transition-all">
                            Contact Me
                        </a>
                    </motion.div>
                </div>

                {/* Visual/Image */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="relative hidden md:block"
                >
                    <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse" />
                    <div className="relative z-10 bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-2xl skew-y-[-2deg] hover:skew-y-0 transition-transform duration-500">
                        <div className="flex items-center space-x-2 mb-4">
                            <div className="w-3 h-3 rounded-full bg-red-500" />
                            <div className="w-3 h-3 rounded-full bg-yellow-500" />
                            <div className="w-3 h-3 rounded-full bg-green-500" />
                        </div>
                        <div className="space-y-3 font-mono text-sm">
                            <div className="text-purple-400">const developer = {'{'}</div>
                            <div className="pl-4 text-slate-300">name: <span className="text-green-400">'Fahad K'</span>,</div>
                            <div className="pl-4 text-slate-300">role: <span className="text-green-400">'Software Engineer 3'</span>,</div>
                            <div className="pl-4 text-slate-300">company: <span className="text-green-400">'AOT Technologies'</span>,</div>
                            <div className="pl-4 text-slate-300">skills: ['React', 'TypeScript', 'Node.js']</div>
                            <div className="text-purple-400">{'}'};</div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
