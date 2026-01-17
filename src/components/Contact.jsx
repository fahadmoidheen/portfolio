import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, Send } from 'lucide-react';

const Contact = () => {
    const [submitted, setSubmitted] = React.useState(false);

    const handleSubmit = () => {
        setSubmitted(true);
        setTimeout(() => {
            setSubmitted(false);
            // Optional: Form reset logic if needed, but since it's a standard form submit, page doesn't reload.
            // We can manually clear inputs if we attach refs, but for now just showing the popup is enough.
        }, 5000);
    };

    return (
        <section id="contact" className="py-24 bg-slate-950 px-6 relative">
            <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-cyan-500/10 rounded-full blur-[100px]" />
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-slate-100 to-slate-400 mb-4">Get In Touch</h2>
                    <div className="w-20 h-1 bg-cyan-500 mx-auto rounded-full" />
                </motion.div>

                <div className="grid md:grid-cols-2 gap-12">
                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="space-y-8"
                    >
                        <h3 className="text-2xl font-semibold text-white">Let's Talk</h3>
                        <p className="text-slate-400 text-lg">
                            I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
                        </p>

                        <div className="space-y-6">
                            <div className="flex items-center gap-4 text-slate-300">
                                <div className="p-3 bg-slate-900 rounded-lg text-cyan-400 border border-slate-800">
                                    <Mail size={24} />
                                </div>
                                <div>
                                    <p className="text-sm text-slate-500">Mail me at</p>
                                    <p className="font-medium">fahad@example.com</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4 text-slate-300">
                                <div className="p-3 bg-slate-900 rounded-lg text-cyan-400 border border-slate-800">
                                    <Phone size={24} />
                                </div>
                                <div>
                                    <p className="text-sm text-slate-500">Call me at</p>
                                    <p className="font-medium">+91 98765 43210</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4 text-slate-300">
                                <div className="p-3 bg-slate-900 rounded-lg text-cyan-400 border border-slate-800">
                                    <MapPin size={24} />
                                </div>
                                <div>
                                    <p className="text-sm text-slate-500">Location</p>
                                    <p className="font-medium">Remote / India</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="bg-slate-900 p-8 rounded-2xl border border-slate-800 relative"
                    >
                        {/* Success Popup */}
                        {submitted && (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="absolute inset-0 bg-slate-900/95 backdrop-blur-sm z-10 flex flex-col items-center justify-center text-center p-6 rounded-2xl border border-cyan-500/30"
                            >
                                <div className="w-16 h-16 bg-green-500/20 text-green-400 rounded-full flex items-center justify-center mb-4">
                                    <Send size={32} />
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-2">Message Sent!</h3>
                                <p className="text-slate-300 mb-6">Thanks for reaching out. I'll get back to you soon.</p>
                                <button
                                    onClick={() => setSubmitted(false)}
                                    className="px-6 py-2 bg-slate-800 hover:bg-slate-700 text-white rounded-lg transition-colors"
                                >
                                    Close
                                </button>
                            </motion.div>
                        )}

                        <iframe name="hidden_iframe" id="hidden_iframe" style={{ display: 'none' }}></iframe>

                        <form
                            action="https://docs.google.com/forms/u/0/d/e/1FAIpQLSeXqUz0EfhLm8zeyUPFWHO7gXLxhYI0xJr7YWUwmF0kPDmaJQ/formResponse"
                            target="hidden_iframe"
                            method="POST"
                            onSubmit={handleSubmit}
                            className="space-y-6"
                        >
                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm text-slate-400">Name</label>
                                    <input
                                        type="text"
                                        name="entry.966504983"
                                        className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-500 transition-colors"
                                        placeholder="John Doe"
                                        required
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm text-slate-400">Email</label>
                                    <input
                                        type="email"
                                        name="entry.539792637"
                                        className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-500 transition-colors"
                                        placeholder="john@example.com"
                                        required
                                    />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm text-slate-400">Message</label>
                                <textarea
                                    rows="4"
                                    name="entry.67905715"
                                    className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-500 transition-colors resize-none"
                                    placeholder="Tell me about your project..."
                                    required
                                ></textarea>
                            </div>
                            <button type="submit" className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold py-4 rounded-lg transition-all flex items-center justify-center gap-2">
                                Send Message <Send size={18} />
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
