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
                        {/* Placeholder 1 */}
                        <ProjectCard
                            title="Coming Soon"
                            description="Project currently in development. Focusing on scalability and performance."
                            tags={["React", "Next.js", "In Progress"]}
                        />
                        {/* Placeholder 2 */}
                        <ProjectCard
                            title="Coming Soon"
                            description="Exciting new application in the works. Stay tuned for updates."
                            tags={["Python", "AI", "R&D"]}
                        />
                        {/* Placeholder 3 */}
                        <ProjectCard
                            title="Coming Soon"
                            description="Developing a robust solution for data analysis and visualization."
                            tags={["Data Science", "Machine Learning"]}
                        />
                    </div>
                </div>
            </section>

            <Contact />
        </main>
    );
}
