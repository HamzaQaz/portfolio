import { motion } from "motion/react";
import { Mail, Github, MessageCircle, Globe } from "lucide-react";
import SpotlightCard from "@/components/SpotlightCard";
import GradientText from "@/components/GradientText";
import { useRef, type MouseEvent } from "react";

const socials = [
  { name: "Email", href: "mailto:hamzaq@n1ghtly.dev", icon: Mail, label: "hamzaq@n1ghtly.dev" },
  { name: "GitHub", href: "https://github.com/HamzaQaz", icon: Github, label: "github.com/HamzaQaz" },
  { name: "Discord", href: "#", icon: MessageCircle, label: "nightlydevz" },
];

function GlowCard() {
  const cardRef = useRef<HTMLAnchorElement>(null);

  const handleMouseMove = (e: MouseEvent<HTMLAnchorElement>) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -8;
    const rotateY = ((x - centerX) / centerX) * 8;
    card.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
    card.style.setProperty("--shine-x", `${(x / rect.width) * 100}%`);
    card.style.setProperty("--shine-y", `${(y / rect.height) * 100}%`);
  };

  const handleMouseLeave = () => {
    const card = cardRef.current;
    if (!card) return;
    card.style.transform = "perspective(800px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)";
  };

  return (
    <a
      ref={cardRef}
      href="https://halfservers.com"
      target="_blank"
      rel="noopener noreferrer"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="group relative block w-full max-w-md mx-auto rounded-2xl p-[1px] transition-all duration-300 ease-out"
      style={{
        background: "linear-gradient(135deg, rgba(52,211,153,0.2), rgba(59,130,246,0.2))",
        boxShadow: "0 0 20px rgba(52,211,153,0.08), 0 0 40px rgba(59,130,246,0.05)",
        transformStyle: "preserve-3d",
      }}
    >
      {/* Gradient border glow on hover */}
      <div
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: "linear-gradient(135deg, #34d399, #3b82f6, #34d399)",
          filter: "blur(1px)",
        }}
      />

      {/* Outer glow on hover */}
      <div
        className="absolute -inset-1 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"
        style={{
          background: "linear-gradient(135deg, rgba(52,211,153,0.3), rgba(59,130,246,0.3))",
          filter: "blur(16px)",
        }}
      />

      {/* Card body */}
      <div className="relative rounded-2xl bg-neutral-950 px-8 py-6 flex items-center justify-center gap-4 overflow-hidden">
        {/* Shine sweep effect */}
        <div
          className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{
            background: "radial-gradient(circle at var(--shine-x, 50%) var(--shine-y, 50%), rgba(255,255,255,0.08) 0%, transparent 60%)",
          }}
        />

        <Globe className="w-6 h-6 text-emerald-400 shrink-0 transition-transform duration-300 group-hover:scale-110" />
        <div className="text-center">
          <div className="font-display font-bold text-white text-lg">Need webdev or infrastructure help?</div>
          <div className="text-neutral-400 text-sm">Check out halfservers.com</div>
        </div>
      </div>
    </a>
  );
}

export function Contact() {
  return (
    <section id="contact" className="py-32 px-8 md:px-16 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <p className="text-xs uppercase tracking-[0.3em] text-emerald-400/60 font-medium mb-3">04 // Contact</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold tracking-tight">
            Get in{" "}
            <GradientText colors={["#34d399", "#6ee7b7", "#059669", "#34d399"]} animationSpeed={4} className="inline">
              Touch
            </GradientText>
          </h2>
          <div className="h-1 w-16 bg-emerald-400 rounded-full mt-4 mb-4" />
          <p className="text-neutral-400 text-lg max-w-lg">
            Always down for new opportunities, collabs, or just chatting about tech.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.15 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12"
        >
          {socials.map((s) => (
            <a key={s.name} href={s.href} target="_blank" rel="noopener noreferrer" className="group">
              <SpotlightCard spotlightColor="rgba(52, 211, 153, 0.15)" className="h-full">
                <s.icon className="w-6 h-6 text-emerald-400 mb-3 transition-transform duration-300 group-hover:scale-110" />
                <div className="text-sm font-medium text-white mb-1">{s.name}</div>
                <div className="text-xs text-neutral-500">{s.label}</div>
              </SpotlightCard>
            </a>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="flex justify-center"
        >
          <GlowCard />
        </motion.div>

        <div className="mt-24 pt-8 border-t border-neutral-800/50 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <p className="text-neutral-600 text-sm">
            Built with React, Vite & Tailwind CSS
          </p>
          <p className="text-neutral-700 text-xs">
            &copy; {new Date().getFullYear()} n1ghtly.dev. All rights reserved.
          </p>
        </div>
      </div>
    </section>
  );
}
