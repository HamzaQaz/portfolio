import BlurText from "@/components/BlurText";
import FaultyTerminal from "@/components/FaultyTerminal";
import ShinyText from "@/components/ShinyText";
import ClientOnly from "@/components/ClientOnly";
import { motion, useScroll, useTransform } from "motion/react";
import { Github, Mail, Mouse } from "lucide-react";
import { useRef } from "react";

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const bgOpacity = useTransform(scrollYProgress, [0, 0.8], [0.2, 0]);
  const scrollIndicatorOpacity = useTransform(scrollYProgress, [0, 0.15], [1, 0]);

  return (
    <section ref={ref} className="relative min-h-screen flex items-center justify-center px-8 md:px-16 lg:px-24 overflow-hidden">
      <motion.div className="absolute inset-0" style={{ opacity: bgOpacity }}>
        <ClientOnly>
          <FaultyTerminal
            tint="#34d399"
            scale={1.2}
            timeScale={0.3}
            brightness={0.6}
            glitchAmount={0.5}
            flickerAmount={0.3}
            scanlineIntensity={0.2}
            curvature={0.1}
            mouseReact={true}
            mouseStrength={0.15}
          />
        </ClientOnly>
      </motion.div>

      <div className="relative z-10 max-w-4xl w-full text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-6 flex justify-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-emerald-500/20 bg-emerald-500/10 text-emerald-400 text-sm font-medium mb-8">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
            </span>
            <ShinyText text="Available for work" speed={3} color="#34d399" shineColor="#6ee7b7" />
          </div>
        </motion.div>

        <BlurText
          text="Hey, I'm Hamza Qazi"
          delay={100}
          animateBy="words"
          direction="top"
          className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6 font-display justify-center"
        />

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="text-lg md:text-xl text-neutral-400 max-w-2xl mx-auto mb-12 leading-relaxed"
        >
          15 y/o full-stack dev who loves building cool stuff.
          React, Node.js, infrastructure, and whatever else catches my eye.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4, duration: 0.4 }}
          className="flex items-center justify-center gap-4"
        >
          <a
            href="https://github.com/HamzaQaz"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center gap-2.5 rounded-xl px-6 py-3 font-medium text-white transition-all duration-300"
          >
            {/* Resting border */}
            <span className="absolute inset-0 rounded-xl border border-neutral-700 transition-opacity duration-300 group-hover:opacity-0" />
            {/* Gradient border on hover */}
            <span
              className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{ padding: "1px", background: "linear-gradient(135deg, #34d399, #3b82f6)", WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)", WebkitMaskComposite: "xor", maskComposite: "exclude" }}
            />
            {/* Glow */}
            <span
              className="absolute -inset-1 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-md"
              style={{ background: "linear-gradient(135deg, rgba(52,211,153,0.25), rgba(59,130,246,0.25))" }}
            />
            <Github className="w-4 h-4 transition-transform duration-300 group-hover:scale-110" />
            GitHub
          </a>
          <a
            href="#contact"
            className="group relative inline-flex items-center gap-2.5 rounded-xl px-6 py-3 font-medium text-white transition-all duration-300"
          >
            <span className="absolute inset-0 rounded-xl border border-neutral-700 transition-opacity duration-300 group-hover:opacity-0" />
            <span
              className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{ padding: "1px", background: "linear-gradient(135deg, #34d399, #3b82f6)", WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)", WebkitMaskComposite: "xor", maskComposite: "exclude" }}
            />
            <span
              className="absolute -inset-1 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-md"
              style={{ background: "linear-gradient(135deg, rgba(52,211,153,0.25), rgba(59,130,246,0.25))" }}
            />
            <Mail className="w-4 h-4 transition-transform duration-300 group-hover:scale-110" />
            Contact
          </a>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-neutral-500"
        style={{ opacity: scrollIndicatorOpacity }}
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <Mouse className="w-5 h-5" />
        </motion.div>
        <span className="text-xs tracking-widest uppercase">Scroll</span>
      </motion.div>
    </section>
  );
}
