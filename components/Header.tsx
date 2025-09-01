// import { useDynamicColor } from "../contexts/DynamicColorContext";
// import TextScramble from "./TextScramble";

// export default function Header() {
//   const { colorScheme } = useDynamicColor();

//   return (
//     <header className="my-72">
//       <h1 className="text-heading-lg leading-tight text-primary-dark dark:text-primary-light md:text-8xl lg:text-9xl">
//         <TextScramble
//           delay={100}
//           text="Front"
//           style={{ color: colorScheme.primary }}
//         />{" "}
//         <TextScramble
//           delay={200}
//           text="End"
//           style={{ color: colorScheme.primary }}
//         />{" "}
//         <TextScramble
//           delay={300}
//           text="Engineer"
//           style={{ color: colorScheme.primary }}
//         />{" "}
//         <TextScramble text="of" delay={400} />{" "}
//         <TextScramble text="Your" delay={500} />{" "}
//         <TextScramble text="Dreams" delay={600} />
//       </h1>
//     </header>
//   );
// }

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
  const primary = { color: "var(--color-primary)" };

  return (
    <header className="my-72">
      <motion.h1
        initial="hidden"
        variants={container}
        whileInView="visible"
        viewport={{ once: true, amount: 0.8 }}
        className="text-heading-lg leading-tight text-primary-dark dark:text-primary-light md:text-8xl lg:text-9xl"
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
