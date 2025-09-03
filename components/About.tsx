import Image from "next/image";
import { motion, Variants } from "framer-motion";

import Socials from "./Socials";
import Section from "./Section";
import TextScramble from "./TextScramble";

import {
  fadeIn,
  container,
  buttonHover,
  hireMeButtonHover,
} from "../utils/animations";
import { siteConfig } from "../utils/config";
import { actionIcons } from "../utils/icons";

import profile from "../public/assets/profile-img.png";

const titleVariants: Variants = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: { delayChildren: 0.4, staggerChildren: 0.2 },
  },
};

const buttonVariant: Variants = {
  initial: { opacity: 0, x: 150 },
  animate: { x: 0, opacity: 1, transition: { delay: 1.2 } },
};

export default function About() {
  return (
    <Section id="about" style={{ marginTop: "5rem" }}>
      <h2 className="text-7xl text-primary-light md:text-8xl">
        <motion.div
          initial="hidden"
          variants={container}
          whileInView="visible"
          viewport={{ once: true, amount: "some" }}
          className="lg:inline-flex lg:whitespace-nowrap"
        >
          <TextScramble
            text="Hi, I'm"
            style={{ color: "var(--color-primary-light)" }}
          />
        </motion.div>{" "}
        <motion.div
          initial="hidden"
          variants={container}
          whileInView="visible"
          viewport={{ once: false, amount: "all" }}
          className="lg:inline-flex lg:whitespace-nowrap"
        >
          <TextScramble
            text="Ken"
            triggerInitiallyAndOnHover
            style={{ color: "var(--color-js-yellow)" }}
          />
        </motion.div>
      </h2>

      <motion.div
        initial="initial"
        whileInView="animate"
        variants={titleVariants}
        viewport={{ once: true, amount: "some" }}
        className="mt-10 flex flex-col items-center gap-10 lg:grid lg:grid-cols-2 lg:items-center lg:gap-8"
      >
        <div className="flex h-full flex-col items-center justify-between gap-6">
          <Image
            width={250}
            height={250}
            src={profile}
            alt={siteConfig.name}
            className="flex w-full items-center justify-center rounded-full"
          />
          <Socials />
        </div>

        <motion.div
          initial="initial"
          variants={fadeIn}
          whileInView="animate"
          viewport={{ once: true, amount: 0.3 }}
          className="w-full text-primary-light"
        >
          <h3 className="text-heading-sm lg:text-heading-md">
            ...and I&apos;d love to bring your next project to life
          </h3>
          <p className="mt-4 mb-8 text-sm text-accent-grey-dark lg:text-body">
            With over 5 years of experience crafting exceptional front-end
            experiences, I&apos;m passionate about turning innovative ideas into
            reality. I&apos;m a front-end developer who&apos;s deeply passionate
            about JavaScript and interactive web development. I&apos;ll work
            closely with you and your team to achieve outstanding results that
            exceed expectations.{" "}
          </p>

          <div className="flex flex-col items-center justify-between gap-4">
            <motion.a
              initial="initial"
              whileHover={buttonHover}
              whileInView="animate"
              variants={buttonVariant}
              viewport={{ once: true, amount: "some" }}
              href={siteConfig.resume.path}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex w-full items-center justify-center gap-3 rounded-xl border-2 bg-gradient-to-r from-js-yellow/10 to-js-yellow/5 p-4 text-center text-xl font-bold uppercase tracking-widest text-js-yellow transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-js-yellow/25 md:basis-1/2"
              style={{
                color: "var(--color-js-yellow)",
                borderColor: "var(--color-js-yellow)",
              }}
            >
              <actionIcons.file
                size={24}
                ariaHidden
                className="h-6 w-6 fill-js-yellow"
              />
              View Resume
            </motion.a>

            <motion.a
              target="_blank"
              initial="initial"
              whileInView="animate"
              variants={buttonVariant}
              rel="noopener noreferrer"
              whileHover={hireMeButtonHover}
              href={`mailto:${siteConfig.email}`}
              viewport={{ once: true, amount: "some" }}
              style={{
                color: "var(--color-primary-dark)",
                backgroundColor: "var(--color-js-yellow)",
              }}
              className="group relative inline-flex w-full items-center justify-center gap-3 rounded-xl border border-transparent p-4 text-center text-2xl font-bold uppercase tracking-widest text-primary-dark transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-js-yellow/25 md:basis-1/2"
            >
              <actionIcons.writing
                size={24}
                ariaHidden
                className="h-6 w-6 fill-primary-dark"
              />
              Hire Me!
            </motion.a>
          </div>
        </motion.div>
      </motion.div>
    </Section>
  );
}
