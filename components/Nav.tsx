import { ReactNode, useEffect, useState } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import { motion, Variants, AnimatePresence } from "framer-motion";

import { useSmoothScroll } from "../hooks/useSmoothScroll";

import { navIcons } from "../utils/icons";
import { menuItems, siteConfig } from "../utils/config";

type MenuItem = {
  name: string;
  path: string;
  icon?: ReactNode;
};

const menuItemsWithIcons: MenuItem[] = menuItems.map((item) => ({
  ...item,
  icon:
    item.name === "Resume" ? (
      <navIcons.externalLink
        size={16}
        ariaHidden
        className="h-4 w-4 fill-primary-light transition-all duration-200 group-hover/menu-item:fill-js-yellow"
      />
    ) : undefined,
}));

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
  const { scrollToSection } = useSmoothScroll();

  const [mounted, setMounted] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => setMounted(true), []);

  const handleNavOrBrandClick = (
    pathOrEvent: string | React.MouseEvent,
    isBrand: boolean = false,
  ) => {
    if (typeof pathOrEvent === "string") {
      const path = pathOrEvent;
      setIsMenuOpen(false);

      if (path.startsWith("/resume.pdf")) return;

      if (path.startsWith("/#")) {
        const targetId = path.substring(2);
        const navItem = document.querySelector(`[href="${path}"]`);
        const originalText = navItem?.textContent;

        // Scramble text during scroll
        const scrambleText = () => {
          const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
          return originalText
            ?.split("")
            .map(() => chars[Math.floor(Math.random() * chars.length)])
            .join("");
        };

        scrollToSection(targetId, {
          offset: 100,
          onStart: () => {
            // Start text scramble
            const interval = setInterval(() => {
              if (navItem) navItem.textContent = scrambleText() || "";
            }, 50);

            setTimeout(() => {
              clearInterval(interval);
              if (navItem) navItem.textContent = originalText || "";
            }, 1000);
          },
        });
      }
    } else if (isBrand) {
      // Handle brand click
      const e = pathOrEvent;
      e.preventDefault();
      const navItem = document.querySelector(`[href="/"]`);
      const originalText = navItem?.textContent;

      // Scramble text during scroll
      const scrambleText = () => {
        const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
        return originalText
          ?.split("")
          .map(() => chars[Math.floor(Math.random() * chars.length)])
          .join("");
      };

      scrollToSection("header", {
        offset: 0,
        onStart: () => {
          // Start text scramble
          const interval = setInterval(() => {
            if (navItem) navItem.textContent = scrambleText() || "";
          }, 50);

          setTimeout(() => {
            clearInterval(interval);
            if (navItem) navItem.textContent = originalText || "";
          }, 1000);
        },
      });
    }
  };

  const menuItemsDisplay = menuItemsWithIcons.map(({ name, path, icon }) => (
    <motion.li
      key={name}
      whileTap={{ scale: 0.95 }}
      variants={mobileNavItemsVariants}
      className="group/menu-item transition-all duration-200 hover:text-js-yellow"
    >
      <Link
        href={path}
        scroll={false}
        className="flex items-center gap-2"
        onClick={(e) => {
          if (path.startsWith("/#")) {
            e.preventDefault();
            handleNavOrBrandClick(path, e);
          }
        }}
      >
        {name}
        {icon}
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
            onClick={(e) => handleNavOrBrandClick(e, true)}
            className="font-departure text-sm uppercase sm:text-body"
          >
            {siteConfig.navigation.brand}
          </Link>

          <button
            type="button"
            className="md:hidden"
            aria-label="Open menu"
            onClick={() => setIsMenuOpen((s) => !s)}
          >
            <navIcons.hamburger
              size={24}
              ariaHidden
              className="h-6 w-6 fill-primary-light"
            />
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
