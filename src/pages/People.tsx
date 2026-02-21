import { motion } from "motion/react";
import { useRef, type MouseEvent } from "react";
import { ArrowLeft, Heart } from "lucide-react";
import { Link } from "react-router-dom";
import GradientText from "@/components/GradientText";


// ─── Customize your people here ───────────────────────────────────────────────
// Each person can have a custom color gradient for their card.
// `colors` takes two hex values: [start, end] for the gradient.
// If omitted, defaults to emerald → blue.
const people: Person[] = [
  {
    name: "H4lf",
    description: "The OG, the one who gave me the opertunity to show what I can do and the one who hosts this website. Absolute legend.",
    colors: ["#3b82f6", "#34d399"], // blue → green
  },
  {
    name: "stellarsqilin",
    description: "Chill, Funny, and really easy to jumpscare",
    colors: ["#7dd3fc", "#f0f9ff"], // light blue → white
  },
  {
    name: "akason1cc",
    description: "Very Chill, love his roomate in his mic background, and is a great friend to have around.",
    colors: ["#ef4444", "#22d3ee"], // red → aqua
  },
  {
    name: "potatoleo",
    description: "Chill Valorant player, and is always down to play some games. he a potato but a good one.",
    colors: ["#a16207", "#451a03"], // brown → dark brown
  },
  {
    name: "SakuraBob",
    description: "He just a bob",
    colors: ["#f472b6", "#a855f7"], // pink → purple
  },
];
// ──────────────────────────────────────────────────────────────────────────────

interface Person {
  name: string;
  description: string;
  colors?: [string, string];
}

function PersonCard({ person, index }: { person: Person; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [c1, c2] = person.colors ?? ["#34d399", "#3b82f6"];

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

  // Derive rgba versions for subtle bg tints
  const hexToRgba = (hex: string, a: number) => {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    return `rgba(${r},${g},${b},${a})`;
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, delay: index * 0.1, ease: "easeOut" }}
    >
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="group relative rounded-2xl p-[1px] transition-all duration-300 ease-out cursor-default"
        style={{
          background: `linear-gradient(135deg, ${hexToRgba(c1, 0.2)}, ${hexToRgba(c2, 0.2)})`,
          transformStyle: "preserve-3d",
        }}
      >
        {/* Gradient border glow on hover */}
        <div
          className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{
            background: `linear-gradient(135deg, ${c1}, ${c2}, ${c1})`,
            filter: "blur(1px)",
          }}
        />

        {/* Outer glow on hover */}
        <div
          className="absolute -inset-1.5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"
          style={{
            background: `linear-gradient(135deg, ${hexToRgba(c1, 0.25)}, ${hexToRgba(c2, 0.25)})`,
            filter: "blur(20px)",
          }}
        />

        {/* Card body */}
        <div className="relative rounded-2xl bg-neutral-950 p-5 sm:p-6 overflow-hidden">
          {/* Shine sweep */}
          <div
            className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            style={{
              background: "radial-gradient(circle at var(--shine-x, 50%) var(--shine-y, 50%), rgba(255,255,255,0.07) 0%, transparent 60%)",
            }}
          />

          {/* Top color accent line */}
          <div
            className="absolute top-0 left-6 right-6 h-[1px] opacity-40 group-hover:opacity-80 transition-opacity duration-500"
            style={{ background: `linear-gradient(90deg, transparent, ${c1}, ${c2}, transparent)` }}
          />

          <div className="flex items-start gap-3 sm:gap-4 mt-2">
            {/* Avatar */}
            <div
              className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center shrink-0 border transition-shadow duration-300 group-hover:shadow-lg"
              style={{
                background: `linear-gradient(135deg, ${hexToRgba(c1, 0.15)}, ${hexToRgba(c2, 0.15)})`,
                borderColor: hexToRgba(c1, 0.2),
                boxShadow: `0 0 0 0 transparent`,
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLDivElement).style.boxShadow = `0 0 16px ${hexToRgba(c1, 0.3)}`;
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLDivElement).style.boxShadow = `0 0 0 0 transparent`;
              }}
            >
              <span
                className="text-base sm:text-lg font-bold font-display"
                style={{ color: c1 }}
              >
                {person.name.charAt(0).toUpperCase()}
              </span>
            </div>

            <div className="flex-1 min-w-0">
              <h3 className="font-display font-bold text-white text-base sm:text-lg mb-1">{person.name}</h3>
              <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed">{person.description}</p>
            </div>

            <Heart
              className="w-4 h-4 shrink-0 mt-1 transition-all duration-300 group-hover:scale-110"
              style={{ color: hexToRgba(c1, 0.3) }}
              onMouseEnter={(e) => { (e.currentTarget as SVGSVGElement).style.color = c1; }}
              onMouseLeave={(e) => { (e.currentTarget as SVGSVGElement).style.color = hexToRgba(c1, 0.3); }}
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function People() {
  return (
    <div className="relative z-10 px-6 sm:px-8 md:px-16 lg:px-24 py-10 sm:py-16">
      <div className="max-w-4xl mx-auto">
        {/* Back link */}
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
        >
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-neutral-500 hover:text-emerald-400 transition-colors text-sm mb-8 sm:mb-12"
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
          className="mb-10 sm:mb-16"
        >
          <p className="text-xs uppercase tracking-[0.3em] text-emerald-400/60 font-medium mb-3">
            My People
          </p>
          <h1 className="font-display text-3xl sm:text-4xl md:text-6xl font-bold tracking-tight mb-4">
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
          <p className="text-neutral-400 text-base sm:text-lg max-w-lg">
            The people who made the biggest impact on me. Wouldn't be where I am without them.
          </p>
        </motion.div>

        {/* People grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
          {people.map((person, i) => (
            <PersonCard key={person.name} person={person} index={i} />
          ))}
        </div>
      </div>
    </div>
  );
}
