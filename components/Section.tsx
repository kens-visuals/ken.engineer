import { motion, Variants } from "framer-motion";

interface SectionProps {
  id: string;
  children: JSX.Element[];
  style?: React.CSSProperties;
}

const sectionVariants: Variants = {
  initial: { opacity: 0, x: "-10%" },
  animate: { opacity: 1, x: 0, transition: { duration: 0.5 } },
};

export default function Section({ id, children, style }: SectionProps) {
  return (
    <motion.section
      id={id}
      style={style}
      initial="initial"
      whileInView="animate"
      variants={sectionVariants}
      viewport={{ once: true, amount: 0.2 }}
      className="my-40 pt-20 md:my-60 md:pt-40 lg:pt-20"
    >
      {children}
    </motion.section>
  );
}
