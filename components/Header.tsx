import { motion, Variants } from "framer-motion";

import TextScramble from "./TextScramble";

const container: Variants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.1, // initial offset
      staggerChildren: 0.18, // per-word spacing
    },
  },
};

export default function Header() {
  const primary = { color: "var(--color-js-yellow)" };

  return (
    <header className="flex h-screen items-center justify-center">
      <motion.h1
        initial="hidden"
        variants={container}
        whileInView="visible"
        viewport={{ once: true, amount: 0.8 }}
        className="text-5xl leading-tight text-primary-light md:text-8xl lg:text-9xl"
      >
        <TextScramble text="Front" style={primary} triggerInitiallyAndOnHover />{" "}
        <TextScramble text="End" style={primary} triggerInitiallyAndOnHover />{" "}
        <TextScramble
          text="Engineer"
          style={primary}
          triggerInitiallyAndOnHover
        />{" "}
        <TextScramble text="of" /> <TextScramble text="Your" />{" "}
        <TextScramble text="Dreams" />
      </motion.h1>
    </header>
  );
}
