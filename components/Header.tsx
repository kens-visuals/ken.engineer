import { motion, Variants } from 'framer-motion';

export default function Header() {
  const headingVariants: Variants = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        delay: 0.2,
        type: 'tween',
        duration: 0.8,
        delayChildren: 0.1,
        staggerChildren: 1,
      },
    },
  };

  const spanVariants: Variants = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
  };

  return (
    <header className="my-60">
      <motion.h1
        initial="initial"
        animate="animate"
        variants={headingVariants}
        className="text-heading-lg leading-tight text-primary-dark dark:text-primary-light md:text-8xl lg:text-9xl"
      >
        <motion.span variants={spanVariants} className="text-js-yellow">
          Front-End Engineer
        </motion.span>{' '}
        <motion.span variants={spanVariants}>of Your Dreams</motion.span>
      </motion.h1>
    </header>
  );
}
