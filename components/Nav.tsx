import Link from 'next/link';
import { useState } from 'react';
import { motion, Variants, AnimatePresence } from 'framer-motion';

// Components
import ThemeToggler from './ThemeToggler';

export default function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { name: 'Skills', path: '/#skills' },
    { name: 'Projects', path: '/#projects' },
    { name: 'Articles', path: '/#articles' },
    { name: 'Contact', path: '/#contact' },
  ];

  const navVariants: Variants = {
    hidden: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };

  const mobileNavVariants: Variants = {
    initial: { x: '-100%' },
    animate: {
      x: 0,
      transition: { delayChildren: 0.8, staggerChildren: 0.1 },
    },
    exit: {
      x: '100%',
      transition: {
        delay: 1,
        delayChildren: 0.2,
        staggerChildren: 0.1,
        staggerDirection: -1,
      },
    },
  };

  const mobileNavItemsVariants: Variants = {
    initial: { opacity: 0, x: -10 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -10 },
  };

  const menuItemsDisplay = menuItems.map(({ name, path }) => (
    <motion.li variants={mobileNavItemsVariants} key={name}>
      <Link href={path} scroll={false}>
        {name}
      </Link>
    </motion.li>
  ));

  return (
    <motion.nav
      initial="hidden"
      animate="animate"
      variants={navVariants}
      className="fixed top-0 left-1/2 z-50 flex w-full -translate-x-1/2 items-center justify-between rounded-b-lg bg-primary-light/70 pb-4 pt-6 backdrop-blur-lg dark:bg-primary-dark/30"
    >
      <div className="relative mx-auto flex w-[88%] max-w-5xl gap-4 font-inter md:static md:items-center">
        <Link
          className="mr-auto text-body uppercase text-primary-dark dark:text-primary-light"
          href="/"
        >
          Ken.Engineer
        </Link>

        <button
          type="button"
          className="md:hidden"
          onClick={() => setIsMenuOpen((prevMenuState) => !prevMenuState)}
        >
          <svg
            width="40"
            height="17"
            viewBox="0 0 40 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="Group">
              <rect
                id="Rectangle"
                width="40"
                height="3"
                className="fill-primary-dark dark:fill-primary-light "
              />
              <rect
                id="Rectangle_2"
                y="7"
                width="40"
                height="3"
                className="fill-primary-dark dark:fill-primary-light "
              />
              <rect
                id="Rectangle_3"
                y="14"
                width="40"
                height="3"
                className="fill-primary-dark dark:fill-primary-light "
              />
              <rect
                id="Rectangle_4"
                width="40"
                height="3"
                className="fill-primary-dark dark:fill-primary-light "
              />
            </g>
          </svg>
        </button>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.ul
              key="nav"
              initial="initial"
              animate="animate"
              exit="exit"
              variants={mobileNavVariants}
              className="absolute top-14 right-0 z-10 flex w-full max-w-sm flex-col gap-4 rounded-md bg-primary-light/70 p-6 text-primary-dark backdrop-blur-lg dark:bg-primary-dark/30 dark:text-primary-light md:hidden"
            >
              {menuItemsDisplay}
              <motion.li
                variants={mobileNavItemsVariants}
                key="themetoggle"
                className="flex items-center"
              >
                <ThemeToggler />
              </motion.li>
            </motion.ul>
          )}
        </AnimatePresence>

        {/* Tablet and Desktop menu */}
        <ul className="hidden w-full gap-4 p-4 pr-0 text-primary-dark dark:text-primary-light md:flex md:justify-end">
          {menuItemsDisplay}
          <li className="flex items-center">
            <ThemeToggler />
          </li>
        </ul>
      </div>
    </motion.nav>
  );
}
