import Hero from "@/components/home/Hero";
import About from "@/components/home/About";
import Contact from "@/components/home/Contact";
import ProjectCard from "@/components/projects/ProjectCard";

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between">
            <Hero />

            <About />

            {/* Projects Section */}
            <section className="w-full max-w-[1600px] px-4 py-20">
                <div className="flex flex-col gap-10">
                    <div className="flex items-center gap-4">
                        <span className="text-sm font-mono uppercase tracking-widest text-muted-foreground">03 . Selected_Works</span>
                        <span className="h-px flex-1 bg-white/10"></span>
                    </div>

                    {/* Modern Grid Layout */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {/* Project 1: JADI Coffee (Web) */}
                        <ProjectCard
                            index={0}
                            title="JADI - Cinematic Experience"
                            description="Immersive landing page for JADI Coffee featuring scroll-linked image sequences, smooth Lenis scrolling, and high-end interactive animations."
                            tags={["Next.js", "Tailwind CSS", "Framer Motion", "Lenis"]}
                            imageSrc="/images/jadi-preview.png"
                            githubLink="https://github.com/shinerking/jadialfa"
                            liveLink="https://jadialfa-l8wr.vercel.app?_vercel_share=f9yiufYBy4whd8WUVBWlLK4gjjp6JkvA"
                        />
                        {/* Project 2: Full Stack Request (Laravel/Vue) */}
                        <ProjectCard
                            index={1}
                            title="LuxeMarket E-Commerce"
                            description="Scalable multi-vendor marketplace platform. Built with a headless architecture using Laravel API and Vue.js frontend for maximum performance."
                            tags={["Laravel", "Vue.js", "MySQL", "Redis"]}
                            liveLink="https://example.com"
                        />
                        {/* Project 3: Mobile (React Native) */}
                        <ProjectCard
                            index={2}
                            title="NexaFlow Mobile"
                            description="Cross-platform mobile application for team collaboration. Features real-time sync, offline mode, and biometric authentication."
                            tags={["React Native", "TypeScript", "Supabase", "Expo"]}
                            githubLink="https://github.com"
                            liveLink="https://example.com"
                        />
                    </div>
                </div>
            </section>

            <Contact />
        </main>
    );
}
