import { motion } from "motion/react";
import SpotlightCard from "@/components/SpotlightCard";
import ShinyText from "@/components/ShinyText";
import GradientText from "@/components/GradientText";
import { Code2, Server, Database, Cloud, Palette, Terminal } from "lucide-react";

const skills = [
  { title: "Frontend", desc: "React, TypeScript, Next.js, Tailwind, Framer Motion", icon: Code2 },
  { title: "Backend", desc: "Node.js, Express, Python, GraphQL, REST APIs", icon: Server },
  { title: "Databases", desc: "PostgreSQL, MongoDB, Redis, Prisma, Drizzle", icon: Database },
  { title: "Cloud & DevOps", desc: "AWS, Docker, CI/CD, GitHub Actions, Vercel", icon: Cloud },
  { title: "UI/UX", desc: "Figma, Responsive Design, Accessibility, Design Systems", icon: Palette },
  { title: "Tools", desc: "Git, Linux, VS Code, Neovim, Bash scripting", icon: Terminal },
];

export function Skills() {
  return (
    <section id="skills" className="py-32 px-8 md:px-16 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <p className="text-xs uppercase tracking-[0.3em] text-emerald-400/60 font-medium mb-3">02 // Skills</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold tracking-tight">
            What I{" "}
            <GradientText colors={["#34d399", "#6ee7b7", "#059669", "#34d399"]} animationSpeed={4} className="inline">
              Work With
            </GradientText>
          </h2>
          <div className="h-1 w-16 bg-emerald-400 rounded-full mt-4" />
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {skills.map((skill, i) => (
            <motion.div
              key={skill.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
            >
              <SpotlightCard spotlightColor="rgba(52, 211, 153, 0.15)" className="h-full">
                <div className="w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center mb-4">
                  <skill.icon className="w-5 h-5 text-emerald-400" />
                </div>
                <ShinyText text={skill.title} speed={4} color="#ffffff" shineColor="#34d399" className="font-display font-bold text-lg mb-2 block" />
                <p className="text-neutral-400/80 text-sm leading-relaxed">{skill.desc}</p>
              </SpotlightCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
