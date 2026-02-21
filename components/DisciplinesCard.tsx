import { motion, Variants } from "framer-motion";
import TextScramble from "./TextScramble";
import { disciplinesData } from "../utils/disciplinesData";
import { projectTechIconMap } from "../utils/skills";
import { actionIcons } from "../utils/icons";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: [0.25, 0.46, 0.45, 0.94] },
  }),
};

const cardReveal: Variants = {
  hidden: { opacity: 0, scale: 0.97 },
  visible: (i: number = 0) => ({
    opacity: 1,
    scale: 1,
    transition: { duration: 0.55, delay: i * 0.08, ease: [0.25, 0.46, 0.45, 0.94] },
  }),
};

export default function DisciplinesCard() {
  const { title, tagline, description, links, techStack, highlights } =
    disciplinesData;

  return (
    <motion.article
      initial="hidden"
      whileInView="visible"
      variants={cardReveal}
      custom={1}
      viewport={{ once: true, amount: 0.2 }}
      className="
        group relative overflow-hidden rounded-3xl
        border border-white/[0.08]
        bg-gradient-to-br from-white/[0.08] to-white/[0.02]
        shadow-2xl backdrop-blur-xl
        transition-all duration-700
        hover:scale-[1.01] hover:border-js-yellow/20 hover:shadow-3xl
      "
    >
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-js-yellow/10 via-transparent to-transparent opacity-0 transition-opacity duration-700 group-hover:opacity-100" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:20px_20px] opacity-0 transition-opacity duration-1000 group-hover:opacity-100" />

      <div className="relative p-6 md:p-10">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div className="flex min-w-0 flex-1 flex-col gap-2">
            <motion.h3
              custom={1}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-3xl font-bold text-primary-light lg:text-4xl"
            >
              <TextScramble speed={14} text={title} triggerInitiallyAndOnHover />
            </motion.h3>
            <motion.p
              custom={2}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-sm font-semibold uppercase tracking-wider text-js-yellow"
            >
              {tagline}
            </motion.p>
          </div>

          <motion.div
            custom={0}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex items-center gap-2 rounded-full border border-js-yellow/30 bg-js-yellow/20 px-3 py-1.5"
          >
            <span className="h-2 w-2 animate-pulse rounded-full bg-js-yellow" />
            <span className="text-sm font-medium text-js-yellow">iOS App</span>
          </motion.div>
        </div>

        <motion.p
          custom={3}
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-6 text-lg leading-relaxed text-accent-grey-dark"
        >
          {description}
        </motion.p>

        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {highlights.map((h, i) => (
            <motion.div
              key={h.id}
              custom={i}
              variants={cardReveal}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className="
                rounded-2xl border border-white/[0.06]
                bg-white/[0.04] p-5
                transition-colors duration-300
                hover:border-js-yellow/20 hover:bg-js-yellow/[0.04]
              "
            >
              <p className="mb-1 text-sm font-bold uppercase tracking-widest text-js-yellow">
                {h.label}
              </p>
              <p className="text-sm leading-relaxed text-accent-grey-dark">{h.detail}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          custom={5}
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-8 flex flex-col gap-3"
        >
          <h4 className="text-sm font-semibold uppercase tracking-wider text-primary-light">
            Technology Stack
          </h4>
          <div className="flex flex-wrap gap-2">
            {techStack.map(({ id, name, iconKey }, index) => {
              const TechIcon = projectTechIconMap[iconKey];
              return (
                <motion.div
                  key={id}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.4 + index * 0.06 }}
                  title={name}
                  className="group/tech"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-primary-dark/20 bg-primary-dark/90 backdrop-blur-sm transition-all duration-300 hover:scale-110 hover:border-js-yellow/30 hover:shadow-xl hover:shadow-js-yellow/20">
                    {TechIcon ? (
                      <TechIcon
                        size={24}
                        className="h-6 w-6 object-contain transition-transform duration-300 group-hover/tech:scale-110 [&>svg]:h-6 [&>svg]:w-6"
                      />
                    ) : (
                      <span className="text-xs font-bold text-js-yellow">
                        {name.slice(0, 2)}
                      </span>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        <motion.div
          custom={6}
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-8 flex flex-col gap-3 sm:flex-row"
        >
          <motion.a
            href={links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="
              inline-flex flex-1 items-center justify-center gap-3
              rounded-2xl border-2 border-js-yellow/30
              bg-transparent px-6 py-4
              text-body font-semibold tracking-wider text-js-yellow
              transition-all duration-300
              hover:border-js-yellow hover:bg-js-yellow hover:text-primary-dark
              hover:shadow-2xl hover:shadow-js-yellow/25
            "
          >
            <actionIcons.code className="h-5 w-5 fill-current" size={20} ariaHidden />
            LinkedIn
          </motion.a>

          <motion.a
            href={links.twitter}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="
              inline-flex flex-1 items-center justify-center gap-3
              rounded-2xl border border-transparent
              bg-js-yellow px-6 py-4
              text-body font-semibold tracking-wider text-primary-dark
              transition-all duration-300
              hover:scale-[1.02] hover:shadow-2xl hover:shadow-js-yellow/25
            "
          >
            <actionIcons.live className="h-5 w-5 fill-current" size={20} ariaHidden />
            X / Twitter
          </motion.a>
        </motion.div>
      </div>
    </motion.article>
  );
}
