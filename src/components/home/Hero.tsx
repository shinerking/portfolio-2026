"use client";

import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import * as random from "maath/random/dist/maath-random.cjs";

// --- Particle Field (R3F) ---
function Particles(props: any) {
    const ref = useRef<any>();
    // Reduced particle count slightly for performance while keeping the look
    const [sphere] = React.useState(() => random.inSphere(new Float32Array(3000), { radius: 1.5 }));

    useFrame((state, delta) => {
        if (ref.current) {
            ref.current.rotation.x -= delta / 15;
            ref.current.rotation.y -= delta / 20;
        }
    });

    return (
        <group rotation={[0, 0, Math.PI / 4]}>
            <Points ref={ref} positions={sphere} stride={3} frustumCulled={false} {...props}>
                <PointMaterial
                    transparent
                    color="#3B82F6"
                    size={0.005}
                    sizeAttenuation={true}
                    depthWrite={false}
                    opacity={0.6}
                />
            </Points>
        </group>
    );
}

// --- Main Hero Component ---
export default function Hero() {
    const titleRef = useRef<HTMLHeadingElement>(null);
    const triggerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (titleRef.current) {
            gsap.fromTo(titleRef.current,
                { opacity: 0, y: 50, filter: "blur(10px)" },
                { opacity: 1, y: 0, filter: "blur(0px)", duration: 1.5, ease: "power3.out", stagger: 0.1 }
            );
        }
    }, []);

    return (
        <section ref={triggerRef} className="relative h-screen w-full flex flex-col justify-center items-center overflow-hidden border-b border-white/5 bg-black">

            {/* 1. Underlying Background Latar (Global) */}
            <div className="absolute inset-0 z-0 bg-transparent" />

            {/* 2. Restored Particle Effect */}
            <div className="absolute inset-0 z-10 w-full h-full">
                <Canvas camera={{ position: [0, 0, 1] }}>
                    <Particles />
                </Canvas>
            </div>

            {/* Content */}
            <div className="relative z-20 text-center space-y-8 px-4 pointer-events-none">

                {/* Glitch Headline */}
                <h1 ref={titleRef} className="text-5xl md:text-8xl font-bold font-space tracking-tight leading-tight mix-blend-screen pointer-events-auto">
                    BUILDING THE <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">
                        FUTURE OF WEB & AI
                    </span>
                </h1>

                <div className="flex justify-center gap-4 pt-8 pointer-events-auto">
                    <button
                        onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                        className="px-8 py-3 bg-white text-black font-bold font-mono text-sm tracking-wider uppercase hover:bg-[rgb(var(--primary))] hover:text-white transition-colors duration-300 clip-path-slant"
                    >
                        View Profile
                    </button>
                </div>
            </div>

            {/* Decorative Grid Lines */}
            <div className="absolute bottom-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent z-20" />
        </section>
    );
}
