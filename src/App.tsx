import { Nav } from "@/components/sections/Nav";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Skills } from "@/components/sections/Skills";
import { Projects } from "@/components/sections/Projects";
import { Contact } from "@/components/sections/Contact";
import Aurora from "@/components/Aurora";

import ScrollVelocity from "@/components/ScrollVelocity";
import { motion, useScroll, useTransform } from "motion/react";

function App() {
  const { scrollYProgress } = useScroll();
  const auroraOpacity = useTransform(scrollYProgress, [0.05, 0.2], [0, 0.15]);

  return (
    <>
      <motion.div className="fixed inset-0 z-0" style={{ opacity: auroraOpacity }}>
        <Aurora colorStops={["#059669", "#34d399", "#064e3b"]} speed={0.5} />
      </motion.div>

      <div className="relative z-10">
        <Nav />
        <Hero />

        <div className="border-y border-neutral-800/30 py-4">
          <ScrollVelocity
            texts={[
              "React — TypeScript — Node.js — Python — AWS — Docker — PostgreSQL — Next.js — Tailwind — GraphQL — Redis — Linux —",
              "Infrastructure — DevOps — CI/CD — Figma — Prisma — REST APIs — GitHub Actions — Vercel — MongoDB — Bash —",
            ]}
            velocity={30}
            className="text-neutral-700 font-medium font-display"
            scrollerClassName="!text-lg !md:text-xl !leading-normal"
          />
        </div>

        <About />
        <Skills />
        <Projects />
        <Contact />
      </div>
    </>
  );
}

export default App;
