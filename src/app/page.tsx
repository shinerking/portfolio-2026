import Hero from "@/components/home/Hero";
import About from "@/components/home/About";
import Skills from "@/components/home/Skills";
import Contact from "@/components/home/Contact";
import ProjectCard from "@/components/projects/ProjectCard";

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between">
            <Hero />

            <About />

            <Skills />

            {/* Projects Section */}
            <section id="projects" className="w-full max-w-[1600px] px-4 py-20">
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
                        {/* Project 2: Smart Retail AI Dashboard */}
                        <ProjectCard
                            index={1}
                            title="Smart Retail Ai Dashboard"
                            description="An intelligent monitoring system for retail chains. Integrated with Python K-Means Clustering to automatically segment store performance and visualized using interactive geospatial maps."
                            tags={["Next.js", "TypeScript", "Python", "Leaflet Maps", "Tailwind"]}
                            imageSrc="/images/dashboard-ai.png"
                            githubLink="https://github.com/shinerking/dashboard-retail-ai"
                            liveLink="https://shinerking.github.io/dashboard-retail-ai/"
                        />
                        {/* Project 3: Sentinel AI Ops */}
                        <ProjectCard
                            index={2}
                            title="Sentinel AI Ops - Real-Time Sentinel"
                            description="An advanced security monitoring platform built with a Microservices architecture, integrating Google Gemini 2.5 Pro for autonomous log analysis. This system features a real-time data pipeline that streams server logs directly to a dynamic dashboard, providing instant risk scoring and technical threat mitigation strategies for critical security events. Fully containerized for seamless deployment and scalability."
                            tags={["Next.js", "Node.js", "Socket.io", "Gemini AI", "Docker", "Redis", "Supabase"]}
                            imageSrc="/images/sentinel-ops.png"
                            githubLink="https://github.com/shinerking/sentinel-ai-ops"
                        />
                    </div>
                </div>
            </section>

            <Contact />
        </main>
    );
}
