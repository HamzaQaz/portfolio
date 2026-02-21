import LetterGlitch from "@/components/LetterGlitch";
import GradientText from "@/components/GradientText";
import { LinkPreview } from "@/components/ui/link-preview";
import { motion } from "motion/react";

export function About() {
  return (
    <section id="about" className="py-32 px-8 md:px-16 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <p className="text-xs uppercase tracking-[0.3em] text-emerald-400/60 font-medium mb-3">01 // About</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold tracking-tight">
            About{" "}
            <GradientText colors={["#34d399", "#6ee7b7", "#059669", "#34d399"]} animationSpeed={4} className="inline">
              Me
            </GradientText>
          </h2>
          <div className="h-1 w-16 bg-emerald-400 rounded-full mt-4" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-5 text-neutral-400 leading-relaxed text-lg"
          >
            <p>
              I'm 15 and I've been building stuff on the web for as long as I can remember.
              I love jumping between crafting UIs with{" "}
              <LinkPreview url="https://react.dev" className="text-emerald-400 font-medium">React</LinkPreview> and{" "}
              <LinkPreview url="https://www.typescriptlang.org" className="text-emerald-400 font-medium">TypeScript</LinkPreview>, then switching
              over to backends with{" "}
              <LinkPreview url="https://nodejs.org" className="text-emerald-400 font-medium">Node.js</LinkPreview> and{" "}
              <LinkPreview url="https://www.python.org" className="text-emerald-400 font-medium">Python</LinkPreview>. The whole stack
              is my playground honestly.
            </p>
            <p>
              I'm also really into{" "}
              <LinkPreview url="https://www.cloudflare.com" className="text-emerald-400 font-medium">cloud infrastructure</LinkPreview> and{" "}
              <LinkPreview url="https://github.com/features/actions" className="text-emerald-400 font-medium">DevOps</LinkPreview>. I love n8n 
              and love optimizing everything from database queries to
              deployment pipelines. If it can be automated, I'm automating it.
            </p>
            <p>
              Outside of code, you'll catch me gaming, watching f1, or playing tennis, pickleball.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="rounded-2xl border border-neutral-800/50 overflow-hidden min-h-[300px]"
          >
            <LetterGlitch
              glitchColors={["#2b4539", "#34d399", "#059669"]}
              glitchSpeed={50}
              centerVignette={false}
              outerVignette={true}
              smooth={true}
              characters="NIGHTLYDEV/>_01"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
