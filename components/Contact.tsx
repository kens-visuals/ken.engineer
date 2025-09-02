import { motion, Variants } from "framer-motion";

import Section from "./Section";
import GridSweepSegmentFM from "./GridSweepFM";
import TextScramble from "./TextScramble";

import { container } from "../utils/animations";

const cardVariants: Variants = {
  initial: { opacity: 0, scale: 0.95 },
  animate: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

const staggerVariants: Variants = {
  initial: { opacity: 0, y: 20 },
  animate: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  }),
};

const buttonHover = {
  scale: 1.02,
  y: -2,
  boxShadow: "0 20px 25px -5px rgba(253, 211, 105, 0.25)",
};

export default function Contact() {
  return (
    <Section id="contact">
      <motion.h3
        initial="hidden"
        variants={container}
        whileInView="visible"
        viewport={{ once: false, amount: "some" }}
        className="text-heading-lg text-primary-dark dark:text-primary-light"
      >
        <div className="inline-flex whitespace-nowrap">
          <TextScramble
            speed={14}
            text="Contact me"
            triggerInitiallyAndOnHover
            style={{ color: "var(--color-js-yellow)" }}
          />
        </div>
      </motion.h3>

      <motion.div
        initial="initial"
        whileInView="animate"
        variants={cardVariants}
        viewport={{ once: true, amount: 0.3 }}
        className="group relative isolate mt-8 overflow-hidden rounded-3xl border border-white/[0.08] bg-gradient-to-br from-white/[0.08] to-white/[0.02] p-8 shadow-2xl backdrop-blur-xl transition-all duration-700 hover:scale-[1.02] hover:border-js-yellow/20"
      >
        {/* Background gradient wash (under everything) */}
        <div className="pointer-events-none absolute inset-0 z-0 bg-gradient-to-br from-js-yellow/10 via-transparent to-transparent transition-opacity duration-700 group-hover:opacity-100 lg:opacity-0" />

        {/* Static grid (under) */}
        <div className="pointer-events-none absolute inset-0 z-0 bg-[linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[size:20px_20px]" />

        <GridSweepSegmentFM
          cell={20}
          skipEvery={1}
          maxDelay={2.4}
          minDelay={0.8}
          minDuration={5.5}
          maxDuration={7.0}
          lineThickness={1}
          baseOpacity={0.35}
          segmentRatio={0.2}
          color="253,211,105" // js-yellow
          zIndexClass="z-[1]"
        />

        <div className="relative z-10 flex flex-col gap-6">
          <motion.div
            custom={1}
            variants={staggerVariants}
            className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between"
          >
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-js-yellow/30 bg-js-yellow/20 backdrop-blur-sm">
                <svg
                  id="envelope-solid"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="h-6 w-6 fill-current text-js-yellow"
                >
                  <polygon points="21 4 21 5 20 5 20 6 19 6 19 7 18 7 18 8 17 8 17 9 16 9 16 10 15 10 15 11 14 11 14 12 13 12 13 13 11 13 11 12 10 12 10 11 9 11 9 10 8 10 8 9 7 9 7 8 6 8 6 7 5 7 5 6 4 6 4 5 3 5 3 4 21 4" />
                  <polygon points="23 5 23 19 22 19 22 20 2 20 2 19 1 19 1 5 3 5 3 6 4 6 4 7 5 7 5 8 6 8 6 9 7 9 7 10 8 10 8 11 9 11 9 12 10 12 10 13 11 13 11 14 13 14 13 13 14 13 14 12 15 12 15 11 16 11 16 10 17 10 17 9 18 9 18 8 19 8 19 7 20 7 20 6 21 6 21 5 23 5" />
                </svg>
              </div>
              <div>
                <h4 className="text-xl font-bold text-primary-dark dark:text-primary-light">
                  Let&apos;s Connect
                </h4>
                <p className="text-sm text-accent-grey-light dark:text-accent-grey-dark">
                  Ready to bring your vision to life
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-2">
              <div className="flex items-center gap-2 rounded-full border border-js-yellow/30 bg-js-yellow/20 px-3 py-1.5">
                <div className="h-2 w-2 animate-pulse rounded-full bg-js-yellow" />
                <span className="text-sm font-medium text-js-yellow">
                  Available for new projects
                </span>
              </div>
            </div>
          </motion.div>

          <motion.div
            custom={2}
            variants={staggerVariants}
            className="flex flex-col gap-4"
          >
            <p className="text-lg leading-relaxed text-accent-grey-light dark:text-accent-grey-dark">
              I&apos;d love to have a conversation about how I can help bring
              your vision to life. The best first step is for us to discuss your
              project requirements and goals. Then we can create a plan to move
              forward together.
            </p>
          </motion.div>

          <motion.div
            custom={3}
            variants={staggerVariants}
            className="flex flex-col gap-4"
          >
            <div className="flex flex-col gap-3 lg:flex-row">
              <motion.a
                href="mailto:karapet.nersisyan@yahoo.com"
                whileHover={buttonHover}
                whileTap={{ scale: 0.98 }}
                className="relative inline-flex flex-1 items-center justify-center gap-3 rounded-2xl border border-transparent bg-js-yellow py-4 px-6 text-center text-body font-semibold tracking-wider text-primary-dark transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl hover:shadow-js-yellow/25"
              >
                {/* email icon */}
                <svg
                  id="envelope"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="h-5 w-5 fill-current"
                >
                  <path d="m21,5v-1H3v1H1v14h1v1h20v-1h1V5h-2Zm-11,7v-1h-1v-1h-1v-1h-1v-1h-1v-1h-1v-1h14v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-2v-1h-1Zm-6-5v1h1v1h1v1h1v1h1v1h1v1h1v1h1v1h2v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1v11H3V7h1Z" />
                </svg>
                Send Email
              </motion.a>

              <motion.a
                href="https://linkedin.com/in/karapet-nersisyan"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="relative inline-flex flex-1 items-center justify-center gap-3 rounded-2xl border-2 border-js-yellow/30 bg-transparent py-4 px-6 text-center text-body font-semibold tracking-wider text-js-yellow transition-all duration-300 hover:border-js-yellow hover:bg-js-yellow hover:text-primary-dark hover:shadow-2xl hover:shadow-js-yellow/25"
              >
                {/* linkedin icon */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="h-5 w-5 fill-current"
                >
                  <path d="M4 3h4v4H4zM4 9h4v12H4zM10 9h4v2h.1c.6-1.1 2-2.3 4.2-2.3 4.5 0 5.4 3 5.4 6.9V21h-4v-5.2c0-1.2 0-2.8-1.7-2.8s-2 1.3-2 2.7V21h-4V9z" />
                </svg>
                LinkedIn
              </motion.a>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </Section>
  );
}
