// import Image from "next/image";
// import { nanoid } from "nanoid";
// import { motion, Variants } from "framer-motion";

// interface SkillsLogosListProps {
//   logosArr: { img: string; name: string }[];
// }

// const listVariants: Variants = {
//   initial: { opacity: 0 },
//   animate: {
//     opacity: 1,
//     transition: {
//       delayChildren: 0.8,
//       staggerChildren: 0.1,
//     },
//   },
// };

// const itemVariants: Variants = {
//   initial: { opacity: 0, x: -10 },
//   animate: { opacity: 1, x: 0 },
// };

// export default function SkillsLogosList({ logosArr }: SkillsLogosListProps) {
//   return (
//     <motion.ul
//       initial="initial"
//       whileInView="animate"
//       variants={listVariants}
//       viewport={{ once: true, amount: "some" }}
//       className="col-span-full flex w-full flex-wrap items-center gap-2 md:gap-3"
//     >
//       {logosArr?.map(({ name, img }) => (
//         <motion.li variants={itemVariants} key={nanoid()}>
//           <Image src={img} alt={name} height={50} width={50} />
//         </motion.li>
//       ))}
//     </motion.ul>
//   );
// }

// SkillsLogosList.tsx (auto-fit grid + auto-scale to prevent overflow)
import Image from "next/image";
import { nanoid } from "nanoid";
import { motion, Variants } from "framer-motion";
import { useLayoutEffect, useRef, useState } from "react";

interface SkillsLogosListProps {
  logosArr: { img: string; name: string }[];
}

const listVariants: Variants = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: { delayChildren: 0.4, staggerChildren: 0.05 },
  },
};

const itemVariants: Variants = {
  initial: { opacity: 0, y: 6 },
  animate: { opacity: 1, y: 0 },
};

export default function SkillsLogosList({ logosArr }: SkillsLogosListProps) {
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const gridRef = useRef<HTMLUListElement | null>(null);
  const [scale, setScale] = useState(1);

  useLayoutEffect(() => {
    const el = wrapperRef.current;
    const grid = gridRef.current;
    if (!el || !grid) return;

    const ro = new ResizeObserver(() => {
      // reserve the current wrapper height and grid content height
      const avail = el.clientHeight;
      const needed = grid.scrollHeight;

      // scale down only if we overflow
      const next = needed > 0 ? Math.min(1, avail / needed) : 1;
      setScale(next);
    });

    ro.observe(el);
    ro.observe(grid);
    // eslint-disable-next-line consistent-return
    return () => ro.disconnect();
  }, []);

  return (
    <div ref={wrapperRef} className="relative h-full w-full">
      <motion.ul
        ref={gridRef}
        initial="initial"
        whileInView="animate"
        variants={listVariants}
        viewport={{ once: true, amount: "some" }}
        style={{ transform: `scale(${scale})`, transformOrigin: "top left" }}
        className="grid w-full content-start gap-2 [grid-template-columns:repeat(auto-fill,minmax(48px,1fr))] md:gap-3"
      >
        {logosArr?.map(({ name, img }) => (
          <motion.li
            variants={itemVariants}
            key={nanoid()}
            className="relative aspect-square overflow-hidden rounded-md p-1 md:p-1.5"
          >
            <Image
              src={img}
              alt={name}
              fill
              sizes="(min-width:1280px) 88px, (min-width:768px) 72px, 56px"
              className="object-contain"
              priority={false}
            />
          </motion.li>
        ))}
      </motion.ul>
    </div>
  );
}
