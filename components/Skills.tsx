import { motion } from "framer-motion";

import Section from "./Section";
import SkillsTitle from "./SkillsTitle";
import TextScramble from "./TextScramble";
import SkillsBackdrop from "./SkillsBackdrop";
import SkillsLogosList from "./SkillsLogosList";

import * as icons from "../utils/skillsLogos";
import { container } from "../utils/animations";

export default function Skills() {
  return (
    <Section id="skills">
      <h2 className="text-6xl text-heading-lg leading-tight text-primary-dark dark:text-primary-light">
        <motion.div
          initial="hidden"
          variants={container}
          whileInView="visible"
          viewport={{ once: true, amount: 0.8 }}
          className="lg:inline-flex lg:whitespace-nowrap"
        >
          <TextScramble speed={14} text="Ever improving" />
        </motion.div>{" "}
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

      <div className="my-10 grid grid-cols-1 gap-4 text-3xl font-bold sm:grid-cols-2">
        <div className="relative flex w-full items-start overflow-hidden rounded-lg bg-resume-pattern p-4">
          <SkillsLogosList logosArr={icons.mainToolsLogos} />
          <SkillsBackdrop>
            <SkillsTitle
              title="Main Tools"
              bgPattern="bg-resume-pattern--text"
            />
          </SkillsBackdrop>
        </div>

        <div className="relative flex w-full items-start overflow-hidden rounded-lg bg-main-tools-pattern p-4">
          <SkillsLogosList logosArr={icons.otherToolsLogos} />
          <SkillsBackdrop>
            <SkillsTitle
              title="Other Tools"
              bgPattern="bg-main-tools-pattern--text"
            />
          </SkillsBackdrop>
        </div>
      </div>
    </Section>
  );
}
