import React from 'react';
import { Github, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-slate-950 border-t border-slate-800 py-12 px-6">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
                <div className="text-center md:text-left">
                    <h2 className="text-2xl font-bold text-white mb-2">Fahad K</h2>
                    <p className="text-slate-400">Building digital experiences that matter.</p>
                </div>

                <div className="flex items-center space-x-6">
                    <a href="#" className="text-slate-400 hover:text-white transition-colors">
                        <Github size={24} />
                    </a>
                    <a href="#" className="text-slate-400 hover:text-white transition-colors">
                        <Linkedin size={24} />
                    </a>
                    <a href="#" className="text-slate-400 hover:text-white transition-colors">
                        <Twitter size={24} />
                    </a>
                </div>
            </div>
            <div className="max-w-7xl mx-auto mt-8 pt-8 border-t border-slate-900 text-center text-slate-500 text-sm">
                © {new Date().getFullYear()} Fahad K. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
