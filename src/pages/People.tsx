import { motion } from "motion/react";
import { useRef, type MouseEvent } from "react";
import { ArrowLeft, Heart } from "lucide-react";
import { Link } from "react-router-dom";
import GradientText from "@/components/GradientText";


// ─── Customize your people here ───────────────────────────────────────────────
const people = [
  {
    name: "H4lf",
    description: "The OG, the one who gave me the opertunity to show what I can do and the one who hosts this website. Absolute legend.",
  },
  {
    name: "stellarsqilin",
    description: "Chill, Funny, and really easy to jumpscare",
  },
  {
    name: "akason1cc",
    description: "Very Chill, love his roomate in his mic background, and is a great friend to have around.",
  },
  {
    name: "potatoleo",
    description: "Chill Valorant player, and is always down to play some games. he a potato but a good one.",
  },
  {
    name: "SakuraBob",
    description: "He just a bob",
  }
];
// ──────────────────────────────────────────────────────────────────────────────

function PersonCard({ name, description, index }: { name: string; description: string; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -6;
    const rotateY = ((x - centerX) / centerX) * 6;
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
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
    >
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="group relative rounded-2xl p-[1px] transition-all duration-300 ease-out cursor-default"
        style={{
          background: "linear-gradient(135deg, rgba(52,211,153,0.15), rgba(59,130,246,0.15))",
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
            background: "linear-gradient(135deg, rgba(52,211,153,0.2), rgba(59,130,246,0.2))",
            filter: "blur(16px)",
          }}
        />

        {/* Card body */}
        <div className="relative rounded-2xl bg-neutral-950 p-6 overflow-hidden">
          {/* Shine sweep */}
          <div
            className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            style={{
              background: "radial-gradient(circle at var(--shine-x, 50%) var(--shine-y, 50%), rgba(255,255,255,0.06) 0%, transparent 60%)",
            }}
          />

          <div className="flex items-start gap-4">
            {/* Avatar placeholder */}
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-emerald-500/20 to-blue-500/20 border border-emerald-500/20 flex items-center justify-center shrink-0">
              <span className="text-lg font-bold text-emerald-400 font-display">
                {name.charAt(0)}
              </span>
            </div>

            <div className="flex-1 min-w-0">
              <h3 className="font-display font-bold text-white text-lg mb-1">{name}</h3>
              <p className="text-neutral-400 text-sm leading-relaxed">{description}</p>
            </div>

            <Heart className="w-4 h-4 text-emerald-500/30 shrink-0 mt-1 group-hover:text-emerald-400/60 transition-colors duration-300" />
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function People() {
  return (
    <div className="relative z-10 px-8 md:px-16 lg:px-24 py-16">
      <div className="max-w-4xl mx-auto">
          {/* Back link */}
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
          >
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-neutral-500 hover:text-emerald-400 transition-colors text-sm mb-12"
            >
              <ArrowLeft className="w-4 h-4" />
              Back home
            </Link>
          </motion.div>

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-16"
          >
            <p className="text-xs uppercase tracking-[0.3em] text-emerald-400/60 font-medium mb-3">
              My People
            </p>
            <h1 className="font-display text-4xl md:text-6xl font-bold tracking-tight mb-4">
              Favourite{" "}
              <GradientText
                colors={["#34d399", "#6ee7b7", "#3b82f6", "#34d399"]}
                animationSpeed={4}
                className="inline"
              >
                People
              </GradientText>
            </h1>
            <div className="h-1 w-16 bg-emerald-400 rounded-full mt-4 mb-4" />
            <p className="text-neutral-400 text-lg max-w-lg">
              The people who made the biggest impact on me. Wouldn't be where I am without them.
            </p>
          </motion.div>

          {/* People grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {people.map((person, i) => (
              <PersonCard key={person.name} name={person.name} description={person.description} index={i} />
            ))}
          </div>
        </div>
      </div>
  );
}
