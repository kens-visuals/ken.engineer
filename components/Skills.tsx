/**
 * Skills.tsx
 * Orbital skills section: three rings (Core Stack, Mobile & Native, Tools & Platforms).
 * Desktop: orbiting icon nodes + SVG rings. Mobile: horizontal strips per category.
 */
import { motion, Variants } from "framer-motion";
import Section from "./Section";
import SkillsOrbitalStage, { type RingConfig } from "./SkillsOrbitalStage";
import TextScramble from "./TextScramble";
import {
  coreStackSkills,
  mobileSkills,
  toolsSkills,
} from "../utils/skills";
import { container } from "../utils/animations";

const ORBITAL_RINGS: RingConfig[] = [
  {
    label: "Core Stack",
    color: "#FFD369",
    glow: "rgba(255,211,105,0.4)",
    radius: 118,
    speed: 0.00022,
    skills: coreStackSkills,
  },
  {
    label: "Mobile & Native",
    color: "#61DAFB",
    glow: "rgba(97,218,251,0.4)",
    radius: 200,
    speed: -0.00013,
    skills: mobileSkills,
  },
  {
    label: "Tools & Platforms",
    color: "#C084FC",
    glow: "rgba(192,132,252,0.4)",
    radius: 288,
    speed: 0.000085,
    skills: toolsSkills,
  },
];

const fadeUp: Variants = {
  initial: { opacity: 0, y: 24 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: "easeOut" },
  },
};

const staggerContainer: Variants = {
  initial: {},
  animate: { transition: { staggerChildren: 0.12 } },
};

export default function Skills() {
  return (
    <Section id="skills">
      {/* Ambient blobs */}
      <div
        className="pointer-events-none fixed inset-0 z-0 rounded-full opacity-[0.07] blur-[120px]"
        aria-hidden
      >
        <div className="absolute -top-[20%] -left-[15%] h-[600px] w-[600px] rounded-full bg-[#FFD369]" />
        <div className="absolute top-[10%] -right-[10%] h-[500px] w-[500px] rounded-full bg-[#61DAFB]" />
        <div className="absolute bottom-0 left-[40%] h-[400px] w-[400px] rounded-full bg-[#C084FC]" />
      </div>

      <div className="relative z-10 w-full px-6 pt-10 pb-24 md:px-10 md:pt-20 md:pb-32">
        {/* Heading */}
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.2 }}
          className="mb-12 md:mb-16"
        >
          <motion.p
            variants={fadeUp}
            className="mb-3 font-mono text-[11px] tracking-[0.3em] uppercase text-[#FFD369]"
          >
            Ever improving
          </motion.p>
          <h2 className="flex flex-wrap items-baseline gap-x-1 text-5xl text-primary-light md:text-heading-lg">
            <motion.div
              initial="hidden"
              variants={container}
              whileInView="visible"
              viewport={{ once: true, amount: 0.8 }}
              className="lg:inline-flex lg:whitespace-nowrap"
            >
              <TextScramble speed={14} text="Technical " />
            </motion.div>
            <motion.div
              initial="hidden"
              variants={container}
              whileInView="visible"
              viewport={{ once: false, amount: 0.8 }}
              className="lg:inline-flex lg:whitespace-nowrap"
            >
              <TextScramble
                speed={14}
                text="skills"
                triggerInitiallyAndOnHover
                style={{
                  textDecoration: "underline",
                  color: "var(--color-js-yellow)",
                }}
              />
            </motion.div>
          </h2>
          <motion.p
            variants={fadeUp}
            className="mt-5 max-w-[280px] text-[13px] leading-relaxed text-white/25"
          >
            Hover the orbiting icons — three rings representing core stack,
            mobile, and tooling.
          </motion.p>
        </motion.div>

        {/* Desktop: orbital stage */}
        <SkillsOrbitalStage rings={ORBITAL_RINGS} />

        {/* Mobile: grid per category */}
        <div className="flex flex-col gap-5 overflow-visible md:hidden">
          {ORBITAL_RINGS.map((ring) => (
            <div key={ring.label} className="overflow-visible">
              <div className="mb-2 flex items-center gap-3">
                <span
                  className="h-px flex-1 opacity-20"
                  style={{ background: ring.color }}
                />
                <span
                  className="font-mono text-[11px] font-bold tracking-[0.2em] uppercase"
                  style={{ color: ring.color }}
                >
                  {ring.label}
                </span>
                <span
                  className="h-px flex-1 opacity-20"
                  style={{ background: ring.color }}
                />
              </div>
              <div className="flex flex-wrap gap-x-4 gap-y-4 py-1">
                {ring.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex w-[72px] flex-shrink-0 flex-col items-center gap-1.5"
                  >
                    <div
                      className="flex h-14 w-14 min-h-14 min-w-14 flex-shrink-0 items-center justify-center rounded-2xl border border-white/[0.08] bg-white/[0.05] active:scale-[0.88]"
                      style={{ borderColor: `${ring.color}25` }}
                    >
                      <span className="flex h-7 w-7 min-h-7 min-w-7 items-center justify-center">
                        <skill.Icon size={28} className="h-7 w-7 [&>svg]:h-7 [&>svg]:w-7 [&>svg]:max-h-full [&>svg]:max-w-full [&>svg]:object-contain" />
                      </span>
                    </div>
                    <span className="max-w-[64px] text-center text-[9px] leading-tight text-white/40">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
