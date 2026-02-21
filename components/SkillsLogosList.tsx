/**
 * SkillsLogosList.tsx
 * Renders a grid of developer-icons SVG components with Framer Motion stagger.
 * Small tooltips on hover/focus for each icon box.
 */

import { nanoid } from "nanoid";
import { motion, Variants } from "framer-motion";
import type { SkillIcon } from "../utils/skills";

interface SkillsLogosListProps {
  logosArr: SkillIcon[];
}

const listVariants: Variants = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: { delayChildren: 0.3, staggerChildren: 0.05 },
  },
};

const itemVariants: Variants = {
  initial: { opacity: 0, y: 8, scale: 0.85 },
  animate: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 260, damping: 20 },
  },
};

export default function SkillsLogosList({ logosArr }: SkillsLogosListProps) {
  return (
    <motion.ul
      initial="initial"
      whileInView="animate"
      variants={listVariants}
      viewport={{ amount: "some" }}
      className="grid w-full content-start gap-2 [grid-template-columns:repeat(auto-fill,minmax(44px,1fr))] md:gap-3"
    >
      {logosArr.map(({ name, Icon }) => (
        <motion.li
          key={nanoid()}
          variants={itemVariants}
          title={name}
          className="group/icon relative flex aspect-square items-center justify-center overflow-visible rounded-lg bg-white/5 p-1.5 transition-colors duration-200 hover:bg-white/10 md:p-2"
        >
          {/* Tooltip shows only when hovering this icon box, not the whole card */}
          <span
            role="tooltip"
            className="pointer-events-none absolute left-1/2 z-20 -translate-x-1/2 whitespace-nowrap rounded bg-primary-dark/95 px-1.5 py-0.5 text-[10px] font-medium text-primary-light shadow-lg ring-1 ring-white/10 opacity-0 transition-opacity duration-150 group-hover/icon:opacity-100 group-focus-within/icon:opacity-100 -top-7 md:-top-8"
          >
            {name}
          </span>

          <span className="sr-only">{name}</span>
          <Icon size={32} className="pointer-events-auto h-full w-full" />
        </motion.li>
      ))}
    </motion.ul>
  );
}
