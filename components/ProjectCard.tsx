import { useState } from "react";
import Image from "next/image";
import { motion, Variants } from "framer-motion";

import ImageModal from "./ImageModal";
import TextScramble from "./TextScramble";

import { container } from "../utils/animations";
import { ProjectsDataTypes } from "../utils/projectsData";

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
                  className="text-3xl font-bold leading-tight text-primary-dark dark:text-primary-light lg:text-4xl"
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
                className="text-lg leading-relaxed text-accent-grey-light dark:text-accent-grey-dark"
              >
                {description}
              </motion.p>

              <motion.div
                custom={3}
                variants={staggerVariants}
                className="flex flex-col gap-2"
              >
                <h4 className="text-sm font-semibold uppercase tracking-wider text-primary-dark dark:text-primary-light">
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
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-primary-light/20 bg-primary-light/90 backdrop-blur-sm transition-all duration-300 hover:scale-110 hover:border-js-yellow/30 hover:shadow-xl hover:shadow-js-yellow/20 dark:bg-primary-dark">
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
                <svg
                  id="image"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="h-5 w-5 fill-current"
                >
                  <polygon points="9 6 9 9 8 9 8 10 5 10 5 9 4 9 4 6 5 6 5 5 8 5 8 6 9 6" />
                  <path d="m22,2v-1H2v1h-1v20h1v1h20v-1h1V2h-1Zm-5,12v1h1v1h1v1h1v1h1v3h-13v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1v1h1Zm3,1v-1h-1v-1h-1v-1h-1v-1h-1v-1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v-1h-1v-1h-1v-1h-1v-1h-1V3h18v12h-1Zm-15,3v1h1v1h1v1H3v-4h1v1h1Z" />
                </svg>
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
                <svg
                  aria-hidden
                  viewBox="0 0 24 24"
                  className="h-5 w-5 fill-current"
                >
                  <polygon points="15 4 16 4 16 6 15 6 15 9 14 9 14 12 13 12 13 14 12 14 12 17 11 17 11 20 10 20 10 21 9 21 9 20 8 20 8 18 9 18 9 15 10 15 10 12 11 12 11 10 12 10 12 7 13 7 13 4 14 4 14 3 15 3 15 4" />
                  <polygon points="23 11 23 13 22 13 22 14 21 14 21 15 20 15 20 16 19 16 19 17 17 17 17 15 18 15 18 14 19 14 19 13 20 13 20 11 19 11 19 10 18 10 18 9 17 9 17 7 19 7 19 8 20 8 20 9 21 9 21 10 22 10 22 11 23 11" />
                  <polygon points="7 7 7 9 6 9 6 10 5 10 5 11 4 11 4 13 5 13 5 14 6 14 6 15 7 15 7 17 5 17 5 16 4 16 4 15 3 15 3 14 2 14 2 13 1 13 1 11 2 11 2 10 3 10 3 9 4 9 4 8 5 8 5 7 7 7" />
                </svg>
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
                <svg
                  aria-hidden
                  viewBox="0 0 24 24"
                  className="h-5 w-5 fill-current"
                >
                  <path d="m22,9v-2h-1v-2h-1v-1h-1v-1h-2v-1h-2v-1h-6v1h-2v1h-2v1h-1v1h-1v2h-1v2h-1v7h1v1h1v2h1v1h1v1h2v1h2v1h6v-1h2v-1h2v-1h1v-1h1v-2h1v-2h1v-6h-1Zm-1,1v4h-3v-4h3Zm-5-6h1v1h2v2h1v1h-3v-3h-1v-1Zm-2,14v2h-1v1h-2v-1h-1v-2h-1v-2h6v2h-1Zm2-8v4h-8v-4h8Zm-7-4h1v-2h1v-1h2v1h1v2h1v2h-6v-2Zm-5,1h1v-2h2v-1h1v1h-1v3h-3v-1Zm-1,7v-4h3v4h-3Zm2,5v-2h-1v-1h3v3h1v1h-1v-1h-2Zm14-2v2h-2v1h-1v-1h1v-3h3v1h-1Z" />
                </svg>
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
