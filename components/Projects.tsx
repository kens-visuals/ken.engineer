import { motion } from "framer-motion";

import Section from "./Section";
import ProjectCard from "./ProjectCard";
import TextScramble from "./TextScramble";

import { projectsData } from "../utils/projectsData";
import { buttonHover, container } from "../utils/animations";
import { siteConfig } from "../utils/config";
import { navIcons } from "../utils/icons";

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
      <h2 className="text-5xl text-primary-light md:text-heading-lg">
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
        href={siteConfig.externalLinks.frontendMentor}
        className="mt-6 flex w-full justify-center gap-2 rounded-xl bg-js-yellow py-4 text-center text-body font-bold uppercase tracking-widest text-primary-dark"
      >
        <navIcons.externalLink className="h-6 w-6" size={24} ariaHidden />
        View More
      </motion.a>
    </Section>
  );
}
