import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
    const projects = [
        {
            title: "Project Alpha",
            desc: "A responsive portfolio website built with React and Tailwind CSS.",
            tags: ["React", "Tailwind CSS", "Framer Motion"],
            links: { demo: "#", code: "#" },
            image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=2426&ixlib=rb-4.0.3"
        },
        {
            title: "Task Manager App",
            desc: "A productivity application with drag-and-drop features.",
            tags: ["React", "Redux", "Node.js"],
            links: { demo: "#", code: "#" },
            image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=2370&ixlib=rb-4.0.3"
        },
        {
            title: "E-commerce Dashboard",
            desc: "Admin dashboard for managing orders and inventory.",
            tags: ["Next.js", "TypeScript", "Chart.js"],
            links: { demo: "#", code: "#" },
            image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=2370&ixlib=rb-4.0.3"
        }
    ];

    return (
        <section id="projects" className="py-24 bg-slate-950 px-6">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-slate-100 to-slate-400 mb-4">Featured Projects</h2>
                    <div className="w-20 h-1 bg-blue-500 mx-auto rounded-full" />
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-slate-900 rounded-xl overflow-hidden border border-slate-800 hover:border-blue-500/50 hover:shadow-2xl hover:shadow-blue-500/10 transition-all group"
                        >
                            <div className="h-48 overflow-hidden relative">
                                <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-transparent transition-colors z-10" />
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                            </div>
                            <div className="p-6 space-y-4">
                                <h3 className="text-xl font-bold text-white">{project.title}</h3>
                                <p className="text-slate-400 text-sm">{project.desc}</p>
                                <div className="flex flex-wrap gap-2">
                                    {project.tags.map(tag => (
                                        <span key={tag} className="text-xs px-2 py-1 bg-slate-800 text-blue-300 rounded-md border border-slate-700">{tag}</span>
                                    ))}
                                </div>
                                <div className="flex items-center gap-4 pt-2">
                                    <a href={project.links.demo} className="flex items-center gap-2 text-sm text-white hover:text-blue-400 transition-colors">
                                        <ExternalLink size={16} /> Live Demo
                                    </a>
                                    <a href={project.links.code} className="flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors">
                                        <Github size={16} /> Source Code
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
