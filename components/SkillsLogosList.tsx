import Image from 'next/image';
import { nanoid } from 'nanoid';
import { motion, Variants } from 'framer-motion';

export default function SkillsLogosList({
  logosArr,
}: {
  logosArr: {
    name: string;
    img: string;
  }[];
}) {
  const listVariants: Variants = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        delayChildren: 0.8,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    initial: { opacity: 0, x: -10 },
    animate: { opacity: 1, x: 0 },
  };

  return (
    <motion.ul
      initial="initial"
      whileInView="animate"
      variants={listVariants}
      viewport={{ once: true, amount: 'some' }}
      className="col-span-full flex w-full flex-wrap items-center gap-2 md:gap-3"
    >
      {logosArr.map(({ name, img }) => (
        <motion.li variants={itemVariants} key={nanoid()}>
          <Image src={img} alt={name} height={50} width={50} />
        </motion.li>
      ))}
    </motion.ul>
  );
}
