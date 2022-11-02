import { motion, Variants } from 'framer-motion';

export default function SkillsBackdrop({
  children,
}: {
  children: JSX.Element;
}) {
  const skillsCardVariants: Variants = {
    initial: { backdropFilter: `blur(7px)` },
    animate: {
      backdropFilter: `blur(0px)`,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <motion.div
      initial="initial"
      whileHover="animate"
      whileTap="animate"
      variants={skillsCardVariants}
      style={{ backdropFilter: 'blur(7px)' }}
      className="absolute inset-0 z-10 flex h-full w-full items-end rounded-lg"
    >
      {children}
    </motion.div>
  );
}
