import {
  motion,
  Variants,
  Transition,
  TargetAndTransition,
} from "framer-motion";

import { socials } from "../utils/config";
import { socialIcons } from "../utils/icons";

const listVariants: Variants = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      delayChildren: 0.5,
      staggerChildren: 0.2,
    },
  },
};

const listItemVariants: Variants = {
  initial: { opacity: 0, x: -50 },
  animate: { opacity: 1, x: 0 },
};

const hoverTransition: Transition = {
  damping: 25,
  duration: 0.3,
  type: "spring",
  stiffness: 600,
};

const listItemsHover: TargetAndTransition = {
  y: -10,
  scale: 1.5,
  transition: hoverTransition,
};

const listItemsTap: TargetAndTransition = {
  scale: 0.8,
  transition: hoverTransition,
};

export default function Socials() {
  const socialIconsDisplay = socials.map(({ link, name }) => {
    const IconComponent =
      socialIcons[name.toLowerCase() as keyof typeof socialIcons];

    return (
      <motion.li
        key={name}
        whileTap={listItemsTap}
        whileHover={listItemsHover}
        variants={listItemVariants}
      >
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Visit ${name} profile`}
        >
          <IconComponent className="fill-primary-light" size={51} ariaHidden />
        </a>
      </motion.li>
    );
  });

  return (
    <motion.ul
      initial="initial"
      whileInView="animate"
      variants={listVariants}
      viewport={{ once: true, amount: "all" }}
      className="my-4 flex w-full items-center justify-around md:basis-1/2 lg:mb-0 lg:gap-4"
    >
      {socialIconsDisplay}
    </motion.ul>
  );
}
