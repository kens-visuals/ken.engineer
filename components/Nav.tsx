import Link from "next/link";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { motion, Variants, AnimatePresence } from "framer-motion";
import ThemeToggler from "./ThemeToggler";

export default function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const menuItems = [
    { name: "Skills", path: "/#skills" },
    { name: "Projects", path: "/#projects" },
    // { name: 'Articles', path: '/#articles' },
    { name: "Contact", path: "/#contact" },
  ];

  const navVariants: Variants = {
    hidden: { opacity: 0 },
    animate: { opacity: 1, transition: { duration: 0.5 } },
  };

  const mobileNavVariants: Variants = {
    initial: { x: "100%" },
    animate: {
      x: 0,
      transition: { type: "spring", stiffness: 300, damping: 30 },
    },
    exit: { x: "100%", transition: { duration: 0.25 } },
  };

  const mobileNavItemsVariants: Variants = {
    initial: { opacity: 0, x: 10 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: 10 },
  };

  const menuItemsDisplay = menuItems.map(({ name, path }) => (
    <motion.li
      variants={mobileNavItemsVariants}
      key={name}
      className="transition-all duration-200 hover:text-js-yellow"
      onClick={() => setIsMenuOpen(false)}
    >
      <Link href={path} scroll={false}>
        {name}
      </Link>
    </motion.li>
  ));

  return (
    <>
      {/* NAV (keeps its translate and its own blur if you like) */}
      <motion.nav
        initial="hidden"
        animate="animate"
        variants={navVariants}
        className="fixed top-0 left-1/2 z-50 flex w-full -translate-x-1/2 items-center justify-between rounded-b-lg bg-primary-light/70 pb-4 pt-6 backdrop-blur-lg dark:bg-primary-dark/30"
      >
        <div className="relative mx-auto flex w-[88%] max-w-5xl gap-4 font-inter md:static md:items-center">
          <Link
            className="mr-auto font-departure text-body uppercase text-primary-dark dark:text-primary-light"
            href="/"
          >
            Ken.Engineer
          </Link>

          <button
            type="button"
            className="md:hidden"
            onClick={() => setIsMenuOpen((s) => !s)}
            aria-label="Open menu"
          >
            {/* burger svg... */}
            <svg
              width="40"
              height="17"
              viewBox="0 0 40 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                width="40"
                height="3"
                className="fill-primary-dark dark:fill-primary-light"
              />
              <rect
                y="7"
                width="40"
                height="3"
                className="fill-primary-dark dark:fill-primary-light"
              />
              <rect
                y="14"
                width="40"
                height="3"
                className="fill-primary-dark dark:fill-primary-light"
              />
            </svg>
          </button>

          {/* Desktop menu */}
          <ul className="hidden w-full gap-4 p-4 pr-0 text-primary-dark dark:text-primary-light md:flex md:justify-end">
            {menuItemsDisplay}
            <li className="flex items-center">
              <ThemeToggler />
            </li>
          </ul>
        </div>
      </motion.nav>

      {mounted &&
        createPortal(
          <AnimatePresence>
            {isMenuOpen && (
              <motion.ul
                key="drawer"
                initial="initial"
                animate="animate"
                exit="exit"
                variants={mobileNavVariants}
                className="fixed inset-x-4 top-20 z-[70] flex h-fit max-h-[calc(100vh-6rem)] flex-col gap-6 rounded-2xl border border-white/10 bg-primary-light/80 p-8 text-primary-dark shadow-2xl backdrop-blur-2xl dark:border-primary-light/10 dark:bg-primary-dark/80 dark:text-primary-light md:hidden"
                role="dialog"
                aria-modal="true"
              >
                {menuItemsDisplay}
                <motion.li
                  variants={mobileNavItemsVariants}
                  key="themetoggle"
                  className="mt-2 flex items-center"
                >
                  <ThemeToggler />
                </motion.li>
              </motion.ul>
            )}
          </AnimatePresence>,
          document.body,
        )}
    </>
  );
}
