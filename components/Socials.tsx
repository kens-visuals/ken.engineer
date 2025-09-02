import {
  motion,
  Variants,
  Transition,
  TargetAndTransition,
} from "framer-motion";

interface SVGTypes {
  link: string;
  svg: JSX.Element;
}

const socials: SVGTypes[] = [
  {
    link: "https://github.com/kens-visuals",
    svg: (
      <svg
        fill="none"
        id="github"
        width="51"
        height="51"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        className="fill-primary-dark dark:fill-primary-light"
      >
        <polygon points="23 9 23 15 22 15 22 17 21 17 21 19 20 19 20 20 19 20 19 21 18 21 18 22 16 22 16 23 15 23 15 18 14 18 14 17 15 17 15 16 17 16 17 15 18 15 18 14 19 14 19 9 18 9 18 6 16 6 16 7 15 7 15 8 14 8 14 7 10 7 10 8 9 8 9 7 8 7 8 6 6 6 6 9 5 9 5 14 6 14 6 15 7 15 7 16 9 16 9 18 7 18 7 17 6 17 6 16 4 16 4 17 5 17 5 19 6 19 6 20 9 20 9 23 8 23 8 22 6 22 6 21 5 21 5 20 4 20 4 19 3 19 3 17 2 17 2 15 1 15 1 9 2 9 2 7 3 7 3 5 4 5 4 4 5 4 5 3 7 3 7 2 9 2 9 1 15 1 15 2 17 2 17 3 19 3 19 4 20 4 20 5 21 5 21 7 22 7 22 9 23 9" />
      </svg>
    ),
  },
  {
    link: "https://www.linkedin.com/in/karo-nersisyan-135118129/",
    svg: (
      <svg
        fill="none"
        id="linkedin"
        width="51"
        height="51"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        className="fill-primary-dark dark:fill-primary-light"
      >
        <path d="m22,2v-1H2v1h-1v20h1v1h20v-1h1V2h-1Zm-9,10v8h-3v-11h3v1h1v-1h4v1h1v10h-3v-8h-3Zm-9-4v-3h3v3h-3Zm3,1v11h-3v-11h3Z" />
      </svg>
    ),
  },
  {
    link: "https://twitter.com/kens_visuals",
    svg: (
      <svg
        fill="none"
        id="x"
        width="51"
        height="51"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        className="fill-primary-dark dark:fill-primary-light"
      >
        <path d="m15.5,10v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1v-1h-3v1h-1v1h-1v1h-1v1h-1v1h-1v1h-2v-1h-1v-1h-1v-2h-1v-1h-1v-1H1.5v1h1v1h1v1h1v2h1v1h1v2h1v1h1v2h1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h3v-1h1v-1h1v-1h1v-1h1v-1h1v-1h2v1h1v1h1v2h1v1h1v1h7v-1h-1v-1h-1v-1h-1v-2h-1v-1h-1v-2h-1v-1h-1v-2h-1v-1h1Zm0,4v1h1v2h1v1h1v2h-3v-2h-1v-1h-1v-1h-1v-2h-1v-1h-1v-1h-1v-2h-1v-1h-1v-2h-1v-1h-1v-2h3v1h1v2h1v1h1v2h1v1h1v1h1v2h1Z" />
      </svg>
    ),
  },
  {
    link: "https://discordapp.com/users/kens_visuals#0900",
    svg: (
      <svg
        fill="none"
        id="discord"
        width="51"
        height="51"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        className="fill-primary-dark dark:fill-primary-light"
      >
        <path d="M22,11V8H21V6H20V5H18V4H15V5H9V4H6V5H4V6H3V8H2v3H1v7H3v1H5v1H7V18H6V17H8v1H9v1h6V18h1V17h2v1H17v2h2V19h2V18h2V11ZM9,15H7V14H6V12H7V11H9v1h1v2H9Zm9-1H17v1H15V14H14V12h1V11h2v1h1Z" />
      </svg>
    ),
  },
];

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
  const socialIconsDisplay = socials.map(({ link, svg }) => (
    <motion.li
      key={link}
      whileTap={listItemsTap}
      whileHover={listItemsHover}
      variants={listItemVariants}
    >
      <a href={link} target="_blank" rel="noopener noreferrer">
        {svg}
      </a>
    </motion.li>
  ));

  return (
    <motion.ul
      initial="initial"
      whileInView="animate"
      variants={listVariants}
      viewport={{ once: true, amount: "all" }}
      className="my-4 flex w-full items-center justify-around md:basis-1/2 lg:gap-4"
    >
      {socialIconsDisplay}
    </motion.ul>
  );
}
