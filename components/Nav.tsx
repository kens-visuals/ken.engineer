import { useState } from 'react';
import Link from 'next/link';

// Components
import ThemeToggler from './ThemeToggler';

export default function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const menuItems = ['Skills', 'Projects', 'Articles', 'Contact', 'Books'];

  const menuItemsDisplay = menuItems.map((item) => (
    <li key={item} className="flex items-center">
      <Link href={`/#${item}`} scroll={false}>
        {item}
      </Link>
    </li>
  ));

  return (
    <nav className="fixed top-0 left-1/2 z-50 block w-[88%] max-w-5xl -translate-x-1/2 rounded-b-lg border-b border-primary-dark bg-nav-pattern pb-4 pt-6 backdrop-blur-lg dark:border-primary-light">
      <div className="relative flex gap-4 font-inter md:static md:items-center ">
        <Link className="mr-auto text-body uppercase" href="/">
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
          <ul className="absolute top-14 right-0 z-10 flex w-full max-w-sm flex-col gap-4 rounded-md bg-nav-pattern p-4 text-primary-dark backdrop-blur-lg dark:bg-nav-pattern  dark:text-primary-light md:hidden">
            {menuItemsDisplay}
            <li className="flex items-center">
              <ThemeToggler />
            </li>
          </ul>
        )}

        {/* Tablet and Desktop menu */}
        <ul className="hidden w-full gap-4 p-4 text-primary-dark dark:text-primary-light md:flex md:justify-end md:text-primary-dark">
          {menuItemsDisplay}
          <li className="flex items-center">
            <ThemeToggler />
          </li>
        </ul>
      </div>
    </nav>
  );
}
