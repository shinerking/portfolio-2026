"use client";

import React from "react";
import { motion } from "framer-motion";

const skills = [
    "Next.js", "React", "TypeScript", "Node.js",
    "Tailwind CSS", "GSAP", "Three.js", "Python",
    "PostgreSQL", "Docker", "Figma"
];

const education = [
    {
        school: "University of Indraprasta PGRI",
        degree: "Bachelor of informatics engineering",
        year: "2020 - 2024"
    },
    // Add more if needed
];

export default function About() {
    return (
        <section id="about" className="w-full max-w-[1600px] px-4 py-32 flex flex-col md:flex-row gap-16 items-start">
            {/* Profile Visual */}
            {/* Profile Visual */}
            <div className="w-full md:w-5/12 aspect-[4/5] relative rounded-lg overflow-hidden border border-white/10 bg-neutral-900 group shrink-0">
                <div
                    className="absolute inset-0 bg-cover bg-no-repeat opacity-90 transition-transform duration-700 group-hover:scale-105"
                    style={{
                        backgroundImage: "url('/images/profile.jpg')",
                        backgroundPosition: "center"
                    }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/20" />
                <div className="absolute bottom-6 left-6">
                    <h2 className="text-4xl font-space font-bold text-white mb-2">Abimanyu Rianto Putra</h2>
                    <div className="flex items-center gap-2 text-[rgb(var(--primary))] font-mono text-xs uppercase tracking-widest">
                        <span className="w-2 h-2 rounded-full bg-[rgb(var(--primary))] animate-pulse" />
                        Junior Full Stack Developer | AI Engineering Enthusiast
                    </div>
                </div>
            </div>

            {/* Content Side */}
            <div className="flex-1 space-y-12">

                {/* Bio */}
                <div className="space-y-6">
                    <div className="flex items-center gap-4">
                        <span className="text-sm font-mono uppercase tracking-widest text-muted-foreground">01 . Profile</span>
                        <span className="h-px w-20 bg-white/10"></span>
                    </div>

                    <h3 className="text-3xl md:text-5xl font-bold leading-tight">
                        Architecting Digital <span className="text-white/40">Realities</span>
                    </h3>

                    <div className="space-y-6 text-muted-foreground leading-relaxed text-lg">
                        <p>
                            Hello! I am an Informatics student at Universitas Indraprasta PGRI (UNINDRA) with a strong passion for Web Development and Artificial Intelligence.
                        </p>
                        <p>
                            As a Junior Full-Stack Developer, I enjoy building functional applications that solve real-world problems. My technical focus includes:
                        </p>
                        <ul className="list-disc pl-5 space-y-2 text-base">
                            <li><strong className="text-white">Web Development:</strong> Building responsive interfaces using React.js, Next.js, and Tailwind CSS.</li>
                            <li><strong className="text-white">Python & AI:</strong> Developing backend logic, automation tools, and exploring Machine Learning concepts (currently working on trading bots and data processing projects).</li>
                        </ul>
                        <p>
                            I am constantly learning and currently expanding my skills in mobile development and AI integration. I am eager to connect with fellow developers and open to opportunities in web development or software engineering.
                        </p>
                    </div>
                </div>

                {/* Content */}
                <div className="space-y-6">
                    <h4 className="text-sm font-mono uppercase tracking-widest text-[rgb(var(--secondary))]">Tech Stack & Tools</h4>

                    {/* Grouped Skills */}
                    <div className="space-y-4">
                        <div className="flex flex-col gap-2">
                            <span className="text-xs text-muted-foreground uppercase">Core</span>
                            <div className="flex flex-wrap gap-2">
                                {["Next.js", "React", "TypeScript", "Node.js"].map(s => (
                                    <span key={s} className="px-3 py-1 bg-white/5 border border-white/10 rounded text-sm hover:bg-white/10 transition-colors">{s}</span>
                                ))}
                            </div>
                        </div>
                        <div className="flex flex-col gap-2">
                            <span className="text-xs text-muted-foreground uppercase">Design & 3D</span>
                            <div className="flex flex-wrap gap-2">
                                {["Tailwind CSS", "GSAP", "Three.js", "Figma"].map(s => (
                                    <span key={s} className="px-3 py-1 bg-white/5 border border-white/10 rounded text-sm hover:bg-white/10 transition-colors">{s}</span>
                                ))}
                            </div>
                        </div>
                        <div className="flex flex-col gap-2">
                            <span className="text-xs text-muted-foreground uppercase">Backend</span>
                            <div className="flex flex-wrap gap-2">
                                {["PostgreSQL", "Python", "Docker"].map(s => (
                                    <span key={s} className="px-3 py-1 bg-white/5 border border-white/10 rounded text-sm hover:bg-white/10 transition-colors">{s}</span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Education */}
                <div className="space-y-4 pt-8 border-t border-white/10">
                    <h4 className="text-sm font-mono uppercase tracking-widest text-[rgb(var(--secondary))]">Education</h4>
                    <div className="space-y-6">
                        {education.map((edu, i) => (
                            <div key={i} className="flex justify-between items-start">
                                <div>
                                    <h5 className="font-bold text-lg">{edu.school}</h5>
                                    <p className="text-muted-foreground">{edu.degree}</p>
                                </div>
                                <span className="font-mono text-sm text-neutral-500">{edu.year}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
