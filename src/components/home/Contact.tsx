"use client";

import React from "react";
import { ArrowUpRight, Mail, Instagram, Linkedin, Github } from "lucide-react";

export default function Contact() {
    return (
        <section id="contact" className="w-full max-w-[1600px] px-4 py-32 flex flex-col items-center text-center relative overflow-hidden">
            {/* Background Decoration */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.1)_0%,transparent_70%)] blur-3xl" />

            <div className="z-10 space-y-8">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs font-mono uppercase tracking-widest text-[rgb(var(--secondary))]">
                    <div className="w-1.5 h-1.5 rounded-full bg-[rgb(var(--secondary))] animate-pulse" />
                    Open for Collaboration
                </div>

                <h2 className="text-5xl md:text-8xl font-bold font-space tracking-tighter">
                    LET'S BUILD <br /> THE FUTURE
                </h2>

                <p className="max-w-xl mx-auto text-muted-foreground text-lg">
                    Have a project in mind? Let's discuss how we can create something extraordinary together.
                </p>

                <a
                    href="mailto:abimanyu@example.com"
                    className="group relative inline-flex items-center justify-center px-8 py-4 bg-white text-black font-bold font-space text-lg tracking-wide overflow-hidden rounded-full hover:scale-105 transition-transform duration-300"
                >
                    <span className="relative z-10 flex items-center gap-2 group-hover:text-blue-600 transition-colors">
                        Get in Touch <Mail size={20} />
                    </span>
                    {/* Hover Fill Effect */}
                    <div className="absolute inset-0 bg-[#CCFF00] translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-[0.22,1,0.36,1]" />
                </a>
            </div>

            {/* Footer Elements */}
            <div className="w-full flex flex-col md:flex-row justify-between items-center mt-32 pt-8 border-t border-white/10 text-xs font-mono text-neutral-500 uppercase gap-6">
                <div>
                    &copy; 2026 Abimanyu Rianto Putra. All rights reserved.
                </div>

                {/* Social Icons */}
                <div className="flex items-center gap-6">
                    <a href="https://www.instagram.com/abimanyuriantop/" target="_blank" rel="noopener noreferrer" className="hover:text-[rgb(var(--primary))] transition-transform hover:scale-110 duration-300">
                        <Instagram size={20} className="opacity-70 hover:opacity-100" />
                    </a>
                    <a href="https://www.linkedin.com/in/abimanyu-rianto-putra-277966318" target="_blank" rel="noopener noreferrer" className="hover:text-[rgb(var(--primary))] transition-transform hover:scale-110 duration-300">
                        <Linkedin size={20} className="opacity-70 hover:opacity-100" />
                    </a>
                    <a href="https://github.com/shinerking/" target="_blank" rel="noopener noreferrer" className="hover:text-[rgb(var(--primary))] transition-transform hover:scale-110 duration-300">
                        <Github size={20} className="opacity-70 hover:opacity-100" />
                    </a>
                    <a href="mailto:abimanyuriantoputra@gmail.com" className="hover:text-[rgb(var(--primary))] transition-transform hover:scale-110 duration-300">
                        <Mail size={20} className="opacity-70 hover:opacity-100" />
                    </a>
                </div>
            </div>
        </section>
    );
}
