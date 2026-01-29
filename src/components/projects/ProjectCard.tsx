"use client";

import React from "react";
import { Github, ExternalLink } from "lucide-react";
import Image from "next/image";

interface ProjectCardProps {
    title: string;
    description: string;
    tags: string[];
    imageSrc?: string;
    githubLink?: string;
    liveLink?: string;
}

export default function ProjectCard({
    title,
    description,
    tags,
    imageSrc,
    githubLink,
    liveLink
}: ProjectCardProps) {
    return (
        <div className="group rounded-xl overflow-hidden bg-neutral-900 border border-white/10 hover:border-white/20 transition-all duration-300 hover:shadow-[0_0_30px_rgba(59,130,246,0.1)] flex flex-col h-full">

            {/* Image Area */}
            <div className="relative h-48 w-full overflow-hidden border-b border-white/5 bg-black">
                {imageSrc ? (
                    <div
                        className="absolute inset-0 bg-cover bg-top transition-transform duration-700 group-hover:scale-105"
                        style={{ backgroundImage: `url(${imageSrc})` }}
                    />
                ) : (
                    <div className="w-full h-full flex flex-col items-center justify-center text-neutral-700 gap-2">
                        <div className="w-8 h-8 rounded border border-white/10 bg-white/5 flex items-center justify-center">
                            <span className="w-1/2 h-px bg-white/20"></span>
                        </div>
                        <span className="font-mono text-xs">No Preview</span>
                    </div>
                )}

                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-transparent to-transparent opacity-60" />
            </div>

            {/* Content */}
            <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-bold font-space text-white mb-3 group-hover:text-[rgb(var(--primary))] transition-colors">
                    {title}
                </h3>

                <div className="text-sm text-neutral-400 leading-relaxed mb-6 flex-1">
                    <ul className="list-disc pl-4 space-y-1">
                        {description.split('. ').map((point, i) => (
                            point && <li key={i}>{point.replace(/\.$/, '')}</li>
                        ))}
                    </ul>
                </div>

                {/* Actions */}
                <div className="flex gap-4 mb-6">
                    {githubLink && (
                        <a href={githubLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-xs font-mono uppercase tracking-wider hover:bg-white hover:text-black transition-all">
                            <Github size={14} /> GitHub
                        </a>
                    )}
                    {liveLink && (
                        <a href={liveLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-xs font-mono uppercase tracking-wider hover:bg-[rgb(var(--primary))] hover:text-white hover:border-[rgb(var(--primary))] transition-all">
                            <ExternalLink size={14} /> Live
                        </a>
                    )}
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 pt-4 border-t border-white/5">
                    {tags.map((tag) => (
                        <span key={tag} className="px-2 py-1 rounded text-[10px] font-mono uppercase tracking-wider bg-white/5 text-neutral-400 border border-white/5">
                            {tag}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
}
