import Image from 'next/image';
import { motion, Variants } from 'framer-motion';

// Interface
import { ProjectsDataTypes } from '../utils/projectsData';

export default function ProjectCard({
  title,
  screenshot,
  description,
  code,
  liveSite,
  techStack,
}: ProjectsDataTypes) {
  const projectVariants: Variants = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        delayChildren: 0.1,
        ease: 'easeIn',
      },
    },
  };

  const projectChildrenVariants = (direction: 'left' | 'right'): Variants => ({
    initial: { x: direction === 'left' ? -10 : 10, opacity: 0 },
    animate: { x: 0, opacity: 1 },
  });

  const projectButtonsHover: Variants = {
    initial: { scale: 1 },
    animate: { scale: 1.1 },
  };

  const techStackLogosDisplay = techStack.map(({ id, img }) => (
    <li key={id}>
      <Image src={img} alt="programming language logo" height={40} width={40} />
    </li>
  ));

  return (
    <motion.div
      initial="initial"
      whileInView="animate"
      variants={projectVariants}
      viewport={{ once: true, amount: 'all' }}
      className="mt-4 flex flex-col gap-6 rounded-2xl border border-accent-grey-light p-5 dark:border-accent-grey-dark lg:flex-row"
    >
      <motion.div
        variants={projectChildrenVariants('left')}
        className="h-fit w-full lg:max-w-md lg:flex-grow-0"
      >
        <Image
          src={screenshot}
          alt="markdown app screenshot"
          height={100}
          width={1000}
          className="cursor-pointer rounded-xl grayscale transition-all duration-300 hover:grayscale-0"
        />
      </motion.div>

      <motion.div
        variants={projectChildrenVariants('right')}
        className="w-full lg:flex lg:flex-col lg:justify-between"
      >
        <h4 className="w-fit rounded-md bg-js-yellow p-2 text-heading-md leading-none text-primary-dark ">
          {title}
        </h4>
        <div className="mt-4 mb-2 flex items-center justify-between md:justify-start md:gap-4">
          <span className="inline-block text-body font-bold uppercase text-primary-dark dark:text-primary-light">
            Tech stack
          </span>
          <ul className="flex items-center gap-2">{techStackLogosDisplay}</ul>
        </div>
        <p className="max-w-md text-accent-grey-light dark:text-accent-grey-dark">
          {description}
        </p>

        <div className="mt-4 flex w-full flex-col gap-4 md:flex-row">
          <motion.a
            href={code}
            target="_blank"
            rel="noopener noreferrer"
            initial="initial"
            whileHover="animate"
            variants={projectButtonsHover}
            className="w-full rounded-full border border-js-yellow py-2 text-center text-body font-bold tracking-wider text-primary-dark dark:text-js-yellow"
          >
            Code
          </motion.a>
          <motion.a
            href={liveSite}
            target="_blank"
            rel="noopener noreferrer"
            initial="initial"
            whileHover="animate"
            variants={projectButtonsHover}
            className="w-full rounded-full bg-js-yellow py-2 text-center text-body font-bold tracking-wider text-primary-dark"
          >
            Live Site
          </motion.a>
        </div>
      </motion.div>
    </motion.div>
  );
}
