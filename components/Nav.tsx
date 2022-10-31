import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

// Components
import ThemeToggler from './ThemeToggler';

export default function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { name: 'Skills', path: '/#skills' },
    { name: 'Projects', path: '/#projects' },
    { name: 'Articles', path: '/#articles' },
    { name: 'Contact', path: '/#contact' },
    { name: 'Resume', path: '/#resume' },
  ];

  const menuItemsDisplay = menuItems.map(({ name, path }) => (
    <li key={name}>
      <Link href={path} scroll={false}>
        {name}
      </Link>
    </li>
  ));

  const navVariants = {
    hidden: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: { type: 'inertia', velocity: 50, opacity: { duration: 0.2 } },
    },
  };

  return (
    <motion.nav
      initial="hidden"
      animate="animate"
      variants={navVariants}
      className="fixed top-0 left-1/2 z-50 w-[88%] max-w-5xl -translate-x-1/2 rounded-b-lg bg-primary-light/70 pb-4 pt-6 backdrop-blur-lg dark:bg-primary-dark/30"
    >
      <div className="relative flex gap-4 px-6 font-inter md:static md:items-center">
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
        {isMenuOpen && (
          <ul className="absolute top-14 right-0 z-10 flex w-full max-w-sm flex-col gap-4 rounded-md bg-primary-light/70 p-6 text-primary-dark backdrop-blur-lg dark:bg-primary-dark/30 dark:text-primary-light md:hidden">
            {menuItemsDisplay}
            <li className="flex items-center">
              <ThemeToggler />
            </li>
          </ul>
        )}

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
