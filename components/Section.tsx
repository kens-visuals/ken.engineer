import { motion, Variants } from "framer-motion";

export default function Section({
  id,
  children,
}: {
  id: string;
  children: JSX.Element[];
}) {
  const sectionVariants: Variants = {
    initial: { opacity: 0, x: "-10%" },
    animate: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  };

  return (
    <motion.section
      id={id}
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
