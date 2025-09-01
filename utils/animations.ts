import { Variants } from "framer-motion";

export const fadeIn: Variants = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
};

export const buttonHover = {
  y: -10,
  scale: 1.05,
  boxShadow: "0 20px 25px -5px rgba(253, 211, 105, 0.25)",
};

export const hireMeButtonHover = {
  y: -10,
  scale: 1.05,
  boxShadow: "0 20px 25px -5px rgba(253, 211, 105, 0.25)",
  color: "#1C1C1C", // Keep the dark text color
};

export const container: Variants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: { delayChildren: 0.6, staggerChildren: 0.12 },
  },
};
