import { motion, Variants } from "framer-motion";

import Section from "./Section";
import TextScramble from "./TextScramble";
import GridSweepSegmentFM from "./GridSweepFM";

import { actionIcons } from "../utils/icons";
import { contactInfo } from "../utils/config";
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
        className="text-5xl md:text-heading-lg lg:inline-flex lg:whitespace-nowrap"
      >
        <TextScramble
          speed={14}
          text="Contact me"
          triggerInitiallyAndOnHover
          style={{ color: "var(--color-js-yellow)" }}
        />
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

        <div className="absolute inset-0 z-0 bg-black/40" />

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
                <actionIcons.email
                  className="h-6 w-6 fill-current text-js-yellow"
                  size={24}
                  ariaHidden
                />
              </div>
              <div>
                <h4 className="text-xl font-bold text-primary-light">
                  Let&apos;s Connect
                </h4>
                <p className="text-sm text-accent-grey-dark">
                  Ready to bring your vision to life
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-2">
              <div className="flex items-center gap-2 rounded-full border border-js-yellow/30 bg-js-yellow/20 px-3 py-1.5">
                <div className="h-2 w-2 animate-pulse rounded-full bg-js-yellow" />
                <span className="text-sm font-medium text-js-yellow">
                  {contactInfo.availability}
                </span>
              </div>
            </div>
          </motion.div>

          <motion.div
            custom={2}
            variants={staggerVariants}
            className="flex flex-col gap-4"
          >
            <p className="text-lg leading-relaxed text-accent-grey-dark">
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
                whileHover={buttonHover}
                whileTap={{ scale: 0.98 }}
                href={`mailto:${contactInfo.email}`}
                className="relative inline-flex flex-1 items-center justify-center gap-3 rounded-2xl border border-transparent bg-js-yellow py-4 px-6 text-center text-body font-semibold tracking-wider text-primary-dark transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl hover:shadow-js-yellow/25"
              >
                <actionIcons.email
                  className="h-5 w-5 fill-current"
                  size={20}
                  ariaHidden
                />
                Send Email
              </motion.a>

              <motion.a
                target="_blank"
                rel="noopener noreferrer"
                whileTap={{ scale: 0.98 }}
                whileHover={{ scale: 1.02, y: -2 }}
                href={contactInfo.linkedin}
                className="relative inline-flex flex-1 items-center justify-center gap-3 rounded-2xl border-2 border-js-yellow/30 bg-transparent py-4 px-6 text-center text-body font-semibold tracking-wider text-js-yellow transition-all duration-300 hover:border-js-yellow hover:bg-js-yellow hover:text-primary-dark hover:shadow-2xl hover:shadow-js-yellow/25"
              >
                <actionIcons.email
                  className="h-5 w-5 fill-current"
                  size={20}
                  ariaHidden
                />
                LinkedIn
              </motion.a>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </Section>
  );
}
