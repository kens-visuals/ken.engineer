import { motion, Variants } from "framer-motion";

interface SkillsBackdropProps {
  children: JSX.Element;
}

const skillsCardVariants: Variants = {
  initial: {
    backdropFilter: "blur(8px)",
    WebkitBackdropFilter: "blur(8px)",
    backgroundColor: "rgba(255, 255, 255, 0.08)",
  },
  animate: {
    backdropFilter: "blur(0px)",
    WebkitBackdropFilter: "blur(0px)",
    backgroundColor: "rgba(255, 255, 255, 0)",
    transition: { duration: 0.3, ease: "easeOut" },
  },
};

export default function SkillsBackdrop({ children }: SkillsBackdropProps) {
  return (
    <motion.div
      initial="initial"
      whileTap="animate"
      whileHover="animate"
      variants={skillsCardVariants}
      className="absolute inset-0 z-10 flex h-full w-full items-end rounded-lg hover:cursor-pointer"
    >
      {children}
    </motion.div>
  );
}
