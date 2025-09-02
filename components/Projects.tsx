import { motion } from "framer-motion";

import Section from "./Section";
import ProjectCard from "./ProjectCard";
import TextScramble from "./TextScramble";

import { projectsData } from "../utils/projectsData";
import { buttonHover, container } from "../utils/animations";

const buttonCustomHover = {
  ...buttonHover,
  y: 10,
  scale: 0.95,
};

export default function Projects() {
  const projectCardsDisplay = projectsData.map((project) => (
    <ProjectCard key={project.title} {...project} />
  ));

  return (
    <Section id="projects">
      <h2 className="text-heading-lg text-primary-dark dark:text-primary-light">
        <motion.div
          initial="hidden"
          variants={container}
          whileInView="visible"
          viewport={{ once: true, amount: "some" }}
          className="lg:inline-flex lg:whitespace-nowrap"
        >
          <TextScramble speed={14} text="40+" />{" "}
        </motion.div>{" "}
        <motion.div
          initial="hidden"
          variants={container}
          whileInView="visible"
          viewport={{ once: false, amount: "some" }}
          className="lg:inline-flex lg:gap-8 lg:whitespace-nowrap"
        >
          <TextScramble
            speed={14}
            text="projects"
            triggerInitiallyAndOnHover
            style={{
              textDecoration: "underline",
              color: "var(--color-js-yellow)",
            }}
          />

          <motion.div
            initial="hidden"
            variants={container}
            whileInView="visible"
            viewport={{ once: true, amount: "some" }}
            className="lg:inline-flex lg:whitespace-nowrap"
          >
            <TextScramble speed={14} text="and counting" />{" "}
          </motion.div>
        </motion.div>
      </h2>

      <div className="mt-10 grid gap-6">{projectCardsDisplay}</div>

      <motion.a
        whileHover={buttonCustomHover}
        target="_blank"
        rel="noopener noreferrer"
        href="https://github.com/kens-visuals/frontend-mentor"
        className="mt-6 flex w-full justify-center gap-2 rounded-xl bg-js-yellow py-4 text-center text-body font-bold uppercase tracking-widest text-primary-dark"
      >
        <svg
          id="external-link"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          className="h-6 w-6"
        >
          <polygon points="20 15 20 22 19 22 19 23 2 23 2 22 1 22 1 5 2 5 2 4 11 4 11 6 3 6 3 21 18 21 18 15 20 15" />
          <polygon points="23 1 23 9 21 9 21 5 20 5 20 6 19 6 19 7 18 7 18 8 17 8 17 9 16 9 16 10 15 10 15 11 14 11 14 12 13 12 13 13 12 13 12 14 11 14 11 15 10 15 10 16 9 16 9 17 7 17 7 15 8 15 8 14 9 14 9 13 10 13 10 12 11 12 11 11 12 11 12 10 13 10 13 9 14 9 14 8 15 8 15 7 16 7 16 6 17 6 17 5 18 5 18 4 19 4 19 3 15 3 15 1 23 1" />
        </svg>
        View More
      </motion.a>
    </Section>
  );
}
