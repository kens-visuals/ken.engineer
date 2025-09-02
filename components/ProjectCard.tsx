import { useState } from "react";
import Image from "next/image";
import { motion, Variants } from "framer-motion";

import ImageModal from "./ImageModal";
import TextScramble from "./TextScramble";

import { container } from "../utils/animations";
import { ProjectsDataTypes } from "../utils/projectsData";
import { actionIcons } from "../utils/icons";

const cardVariants: Variants = {
  initial: { opacity: 0, scale: 0.95 },
  animate: {
    scale: 1,
    opacity: 1,
    transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

const staggerVariants: Variants = {
  initial: { opacity: 0, y: 20 },
  animate: (i: number) => ({
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      delay: i * 0.1,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  }),
};

export default function ProjectCardV4({
  code,
  title,
  liveSite,
  techStack,
  screenshot,
  description,
}: ProjectsDataTypes) {
  const [isImageModalOpen, setIsImageModalOpen] = useState(false);

  return (
    <motion.article
      initial="initial"
      whileInView="animate"
      variants={cardVariants}
      viewport={{ once: true, amount: 0.3 }}
      className="hover:shadow-3xl group relative overflow-hidden rounded-3xl border border-white/[0.08] bg-gradient-to-br from-white/[0.08] to-white/[0.02] shadow-2xl backdrop-blur-xl transition-all duration-700 hover:scale-[1.02] hover:border-js-yellow/20"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-js-yellow/10 via-transparent to-transparent transition-opacity duration-700 group-hover:opacity-100 lg:opacity-0" />

      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:20px_20px] transition-opacity duration-1000 group-hover:opacity-100 lg:opacity-0" />

      <div className="relative p-8">
        <div className="flex flex-col items-start gap-8 lg:flex-row">
          <motion.div
            custom={1}
            variants={staggerVariants}
            className="flex min-h-0 flex-1 flex-col justify-between"
          >
            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-4 md:flex-row md:justify-between lg:items-center">
                <motion.h3
                  initial="hidden"
                  variants={container}
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                  className="text-3xl font-bold leading-tight text-primary-light lg:text-4xl"
                >
                  <TextScramble
                    speed={14}
                    text={title}
                    triggerInitiallyAndOnHover
                  />
                </motion.h3>

                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2 rounded-full border border-js-yellow/30 bg-js-yellow/20 px-3 py-1.5">
                    <div className="h-2 w-2 animate-pulse rounded-full bg-js-yellow" />
                    <span className="text-sm font-medium text-js-yellow">
                      Web Application
                    </span>
                  </div>
                </div>
              </div>

              <motion.p
                custom={2}
                variants={staggerVariants}
                className="text-lg leading-relaxed text-accent-grey-dark"
              >
                {description}
              </motion.p>

              <motion.div
                custom={3}
                variants={staggerVariants}
                className="flex flex-col gap-2"
              >
                <h4 className="text-sm font-semibold uppercase tracking-wider text-primary-light">
                  Technology Stack
                </h4>
                <div className="flex flex-wrap gap-1">
                  {techStack.map(({ id, img }, index) => (
                    <motion.div
                      key={id}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.4 + index * 0.05 }}
                      className="group/tech"
                    >
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-primary-dark/20 bg-primary-dark/90 backdrop-blur-sm transition-all duration-300 hover:scale-110 hover:border-js-yellow/30 hover:shadow-xl hover:shadow-js-yellow/20">
                        <Image
                          src={img}
                          alt="tech logo"
                          width={24}
                          height={24}
                          className="object-contain transition-transform duration-300 group-hover/tech:scale-110"
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>

            <motion.div
              custom={4}
              variants={staggerVariants}
              className="flex flex-col gap-4 pt-4 lg:flex-row"
            >
              <motion.button
                type="button"
                whileTap={{ scale: 0.98 }}
                whileHover={{ scale: 1.02, y: -2 }}
                onClick={() => setIsImageModalOpen(true)}
                className="relative inline-flex flex-1 items-center justify-center gap-3 rounded-2xl border-2 border-js-yellow/30 bg-transparent py-4 px-6 text-center text-body font-semibold tracking-wider text-js-yellow transition-all duration-300 hover:border-js-yellow hover:bg-js-yellow hover:text-primary-dark hover:shadow-2xl hover:shadow-js-yellow/25"
              >
                <actionIcons.image
                  className="h-5 w-5 fill-current"
                  size={20}
                  ariaHidden
                />
                View Screenshot
              </motion.button>
              <motion.a
                href={code}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="relative inline-flex flex-1 items-center justify-center gap-3 rounded-2xl border-2 border-js-yellow/30 bg-transparent py-4 px-6 text-center text-body font-semibold tracking-wider text-js-yellow transition-all duration-300 hover:border-js-yellow hover:bg-js-yellow hover:text-primary-dark hover:shadow-2xl hover:shadow-js-yellow/25"
              >
                <actionIcons.code
                  className="h-5 w-5 fill-current"
                  size={20}
                  ariaHidden
                />
                Source Code
              </motion.a>

              <motion.a
                href={liveSite}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="relative inline-flex flex-1 items-center justify-center gap-3 rounded-2xl border border-transparent bg-js-yellow py-4 px-6 text-center text-body font-semibold tracking-wider text-primary-dark transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl hover:shadow-js-yellow/25"
              >
                <actionIcons.live
                  className="h-5 w-5 fill-current"
                  size={20}
                  ariaHidden
                />
                Live Demo
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <ImageModal
        imageSrc={screenshot}
        isOpen={isImageModalOpen}
        imageAlt={`${title} screenshot`}
        onClose={() => setIsImageModalOpen(false)}
      />
    </motion.article>
  );
}
