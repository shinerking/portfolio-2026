"use client";

import React from "react";
import { motion } from "framer-motion";

const skills = [
    {
        category: "Frontend & Mobile",
        items: ["Next.js", "React", "Vue.js", "TypeScript", "React Native"]
    },
    {
        category: "Styling & Creative",
        items: ["Tailwind CSS", "Bootstrap", "GSAP", "Framer Motion", "Three.js"]
    },
    {
        category: "Backend & API",
        items: ["Node.js", "Express.js", "Laravel", "PHP (Native/CI)", "Python"]
    },
    {
        category: "Database & DevOps",
        items: ["PostgreSQL", "MySQL", "Supabase", "Docker", "Git"]
    },
];

export default function Skills() {
    return (
        <section className="w-full max-w-[1600px] px-4 py-20">
            <div className="flex items-center gap-4 mb-16">
                <span className="text-sm font-mono uppercase tracking-widest text-muted-foreground">02 . Technical_Arsenal</span>
                <span className="h-px flex-1 bg-white/10"></span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {skills.map((group, idx) => (
                    <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.1, duration: 0.5 }}
                        viewport={{ once: true }}
                        className="p-6 rounded-lg border border-white/5 bg-white/5 hover:bg-white/10 hover:border-[rgb(var(--primary))/30] transition-all duration-300 backdrop-blur-sm group"
                    >
                        <h3 className="text-lg font-space font-bold mb-6 text-[rgb(var(--primary))] group-hover:text-[rgb(var(--secondary))] transition-colors">
                            {group.category}
                        </h3>
                        <ul className="space-y-3 font-mono text-sm text-neutral-400">
                            {group.items.map((skill, i) => (
                                <li key={i} className="flex items-center gap-2">
                                    <span className="w-1 h-1 bg-white/20 rounded-full" />
                                    {skill}
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
