import { useEffect, useState } from "react";
import Link from "next/link";
import { createPortal } from "react-dom";
import { motion, Variants, AnimatePresence } from "framer-motion";

const menuItems = [
  { name: "Skills", path: "/#skills" },
  { name: "Projects", path: "/#projects" },
  { name: "Contact", path: "/#contact" },
  {
    name: "Resume",
    path: "/resume.pdf",
    icon: (
      <svg
        id="external-link"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        className="h-4 w-4 fill-primary-light"
      >
        <polygon points="20 15 20 22 19 22 19 23 2 23 2 22 1 22 1 5 2 5 2 4 11 4 11 6 3 6 3 21 18 21 18 15 20 15" />
        <polygon points="23 1 23 9 21 9 21 5 20 5 20 6 19 6 19 7 18 7 18 8 17 8 17 9 16 9 16 10 15 10 15 11 14 11 14 12 13 12 13 13 12 13 12 14 11 14 11 15 10 15 10 16 9 16 9 17 7 17 7 15 8 15 8 14 9 14 9 13 10 13 10 12 11 12 11 11 12 11 12 10 13 10 13 9 14 9 14 8 15 8 15 7 16 7 16 6 17 6 17 5 18 5 18 4 19 4 19 3 15 3 15 1 23 1" />
      </svg>
    ),
  },
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

export default function Nav() {
  const [mounted, setMounted] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => setMounted(true), []);

  const menuItemsDisplay = menuItems.map(({ name, path, icon }) => (
    <motion.li
      key={name}
      variants={mobileNavItemsVariants}
      onClick={() => setIsMenuOpen(false)}
      className="group/menu-item transition-all duration-200 hover:text-js-yellow"
    >
      <Link href={path} scroll={false} className="flex items-center gap-2">
        {name}
        <span className="group-hover/menu-item:text-js-yellow">{icon}</span>
        {/* {icon} */}
      </Link>
    </motion.li>
  ));

  return (
    <>
      <motion.nav
        initial="hidden"
        animate="animate"
        variants={navVariants}
        className="fixed top-0 left-1/2 z-50 flex w-full -translate-x-1/2 items-center justify-between rounded-b-lg bg-primary-dark/70 pb-4 pt-6 backdrop-blur-lg"
      >
        <div className="relative mx-auto flex w-[92%] max-w-5xl justify-between gap-2 font-inter text-primary-light md:static md:items-center md:gap-4">
          <Link
            href="/"
            className="font-departure text-sm uppercase sm:text-body"
          >
            Ken.Engineer
          </Link>

          <button
            type="button"
            className="md:hidden"
            aria-label="Open menu"
            onClick={() => setIsMenuOpen((s) => !s)}
          >
            <svg
              id="bars"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="h-6 w-6 fill-primary-light"
            >
              <rect x="1" y="11" width="22" height="2" />
              <rect x="1" y="19" width="22" height="2" />
              <rect x="1" y="3" width="22" height="2" />
            </svg>
          </button>

          <ul className="hidden w-full gap-4 p-4 pr-0 text-primary-light md:flex md:justify-end">
            {menuItemsDisplay}
          </ul>
        </div>
      </motion.nav>

      {mounted &&
        createPortal(
          <AnimatePresence>
            {isMenuOpen && (
              <motion.ul
                key="drawer"
                exit="exit"
                role="dialog"
                initial="initial"
                animate="animate"
                aria-modal="true"
                variants={mobileNavVariants}
                className="fixed inset-x-4 top-20 z-[70] flex h-fit max-h-[calc(100vh-6rem)] flex-col gap-6 rounded-2xl border border-white/10 bg-primary-dark/80 p-8 text-primary-light shadow-2xl backdrop-blur-2xl md:hidden"
              >
                {menuItemsDisplay}
              </motion.ul>
            )}
          </AnimatePresence>,
          document.body,
        )}
    </>
  );
}
