import { motion } from "motion/react";
import SpotlightCard from "@/components/SpotlightCard";
import GradientText from "@/components/GradientText";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "DracoByte",
    description: "Game and web hosting service. I'm a Senior Developer building out the platform, dashboard, and backend infrastructure.",
    tags: ["React", "Node.js", "Infrastructure", "DevOps"],
    role: "Senior Developer",
    live: "https://dracobyte.pro",
  },
  {
    title: "HalfServers",
    description: "Web development and infrastructure services. Working as a Senior Developer on the site, client tooling, and server management systems.",
    tags: ["TypeScript", "Next.js", "Cloud", "Automation"],
    role: "Senior Developer",
    live: "https://halfservers.com",
  },
  {
    title: "Celina ISD Temp Sensors",
    description: "Building a temperature sensor monitoring system for Celina ISD. Real-time data collection, dashboards, and alerting for school facilities.",
    tags: ["IoT", "Python", "React", "PostgreSQL"],
    role: "Developer",
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-32 px-8 md:px-16 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <p className="text-xs uppercase tracking-[0.3em] text-emerald-400/60 font-medium mb-3">03 // Projects</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold tracking-tight">
            Currently{" "}
            <GradientText colors={["#34d399", "#6ee7b7", "#059669", "#34d399"]} animationSpeed={4} className="inline">
              Working On
            </GradientText>
          </h2>
          <div className="h-1 w-16 bg-emerald-400 rounded-full mt-4" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className={i === 2 ? "lg:col-span-2" : ""}
            >
              <SpotlightCard spotlightColor="rgba(52, 211, 153, 0.1)" className="h-full">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="font-display font-bold text-white text-xl">{project.title}</h3>
                      <span className="px-2 py-0.5 text-[10px] uppercase tracking-wider rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-semibold">
                        {project.role}
                      </span>
                    </div>
                    <p className="text-neutral-400 text-sm mb-4 leading-relaxed">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span key={tag} className="px-2.5 py-1 text-xs rounded-md bg-neutral-800/80 text-neutral-400 border border-neutral-700/50">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  {project.live && (
                    <a href={project.live} target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-lg border border-neutral-700 text-neutral-500 hover:text-emerald-400 hover:border-emerald-500/30 hover:bg-emerald-500/5 transition-all duration-300 shrink-0">
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  )}
                </div>
              </SpotlightCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
