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

import profile from "../public/assets/profile-img.png";

export default function About() {
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

  return (
    <Section id="about">
      <h2 className="text-heading-lg md:text-8xl">
        Hi, I’m{" "}
        <motion.div
          initial="hidden"
          variants={container}
          whileInView="visible"
          viewport={{ once: false, amount: "all" }}
          className="lg:inline-flex lg:whitespace-nowrap"
        >
          <TextScramble
            text="Ken"
            speed={14}
            triggerInitiallyAndOnHover
            style={{ color: "var(--color-primary)" }}
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
            alt="Ken Nersisyan"
            className="flex w-full items-center justify-center rounded-full"
          />
          <Socials />
        </div>

        <motion.div
          initial="initial"
          whileInView="animate"
          variants={fadeIn}
          viewport={{ once: true, amount: 0.3 }}
          className="w-full"
        >
          <h3 className="text-heading-sm lg:text-heading-md">
            ...and I&apos;d love to bring your next project to life
          </h3>
          <p className="mt-4 mb-8 text-sm text-accent-grey-light dark:text-accent-grey-dark lg:text-body">
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
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex w-full items-center justify-center gap-3 rounded-xl border-2 bg-gradient-to-r from-js-yellow/10 to-js-yellow/5 p-4 text-center text-xl font-bold uppercase tracking-widest text-js-yellow transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-js-yellow/25 md:basis-1/2"
              style={{
                borderColor: "var(--color-primary)",
                color: "var(--color-primary)",
              }}
            >
              <svg
                id="file-import"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                style={{ fill: "var(--color-primary)" }}
              >
                <polygon points="1 15 1 13 12 13 12 8 13 8 13 9 14 9 14 10 15 10 15 11 16 11 16 12 17 12 17 13 18 13 18 15 17 15 17 16 16 16 16 17 15 17 15 18 14 18 14 19 13 19 13 20 12 20 12 15 1 15" />
                <polygon points="23 6 23 22 22 22 22 23 7 23 7 22 6 22 6 16 8 16 8 21 21 21 21 8 16 8 16 3 8 3 8 12 6 12 6 2 7 2 7 1 18 1 18 2 19 2 19 3 20 3 20 4 21 4 21 5 22 5 22 6 23 6" />
              </svg>
              View Resume
            </motion.a>

            <motion.a
              initial="initial"
              whileHover={hireMeButtonHover}
              whileInView="animate"
              variants={buttonVariant}
              viewport={{ once: true, amount: "some" }}
              href="mailto:karapet.nersisyan@yahoo.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex w-full items-center justify-center gap-3 rounded-xl border border-transparent p-4 text-center text-2xl font-bold uppercase tracking-widest text-primary-dark transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-js-yellow/25 md:basis-1/2"
              style={{
                color: "var(--color-background)",
                borderColor: "var(--color-primary)",
                backgroundColor: "var(--color-primary)",
              }}
            >
              <svg
                id="writing"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="h-6 w-6 fill-primary-dark"
                // style={{ fill: colorScheme.text }}
              >
                <path d="M23.5049 7.5012V9.50166H22.5047V10.5019H21.5045V9.50166H20.5043V8.50143H19.504V7.5012H20.5043V6.50098H22.5047V7.5012H23.5049Z" />
                <path d="M21.5046 10.5019V11.5021H20.5044V12.5024H19.5041V13.5026H18.5039V14.5028H17.5037V15.5031H16.5035V16.5033H15.5032V17.5035H14.503V18.5037H11.5023V15.5031H12.5025V14.5028H13.5028V13.5026H14.503V12.5024H15.5032V11.5021H16.5035V10.5019H17.5037V9.50169H18.5039V8.50146H19.5041V9.50169H20.5044V10.5019H21.5046Z" />
                <path d="M17.5036 2.50023V1.5H2.50023V2.50023H1.5V22.5048H2.50023V23.505H17.5036V22.5048H18.5039V16.5034H17.5036V17.5036H16.5034V18.5039H15.5032V19.5041H10.502V14.503H11.5023V13.5027H12.5025V12.5025H13.5027V11.5023H14.503V10.502H15.5032V9.50182H16.5034V8.50159H17.5036V7.50136H18.5039V2.50023H17.5036ZM16.5034 5.50091H3.50045V4.50068H16.5034V5.50091ZM14.503 8.50159H3.50045V7.50136H14.503V8.50159ZM8.50159 17.5036H3.50045V16.5034H8.50159V17.5036ZM3.50045 14.503V13.5027H9.50182V14.503H3.50045ZM3.50045 11.5023V10.502H12.5025V11.5023H3.50045Z" />
              </svg>
              Hire Me!
            </motion.a>
          </div>
        </motion.div>
      </motion.div>
    </Section>
  );
}
