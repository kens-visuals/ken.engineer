import { ReactNode } from "react";
import Link from "next/link";
import Image from "next/image";

import certificate from "../public/assets/meta-front-end-developer-certificate.png";
import { socials, menuItems, siteConfig, socialLinks } from "../utils/config";
import { navIcons } from "../utils/icons";

type MenuItem = {
  name: string;
  path: string;
  icon?: ReactNode;
};

// Add external link icon to resume menu item
const menuItemsWithIcons: MenuItem[] = menuItems.map((item) => ({
  ...item,
  icon:
    item.name === "Resume" ? (
      <navIcons.externalLink
        className="h-4 w-4 fill-primary-light transition-colors duration-200 group-hover/menu-item:fill-js-yellow"
        size={16}
        ariaHidden
      />
    ) : undefined,
}));

export default function Footer() {
  const menuItemsDisplay = menuItemsWithIcons.map(({ name, path, icon }) => (
    <li key={name}>
      <Link
        href={path}
        scroll={false}
        className="group/menu-item flex items-center gap-2 text-primary-light transition-all duration-300 hover:text-js-yellow"
      >
        {name}
        {icon}
      </Link>
    </li>
  ));

  const socialsDisplay = socials.map(({ name, link }) => (
    <li key={name}>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="text-primary-light transition-all duration-300 hover:text-js-yellow"
      >
        {name}
      </a>
    </li>
  ));

  return (
    <footer className="border-t border-t-primary-dark pt-6">
      <div className="my-8 grid gap-16 md:grid-cols-3 lg:max-w-3xl lg:gap-4">
        <ul className="space-y-2">{menuItemsDisplay}</ul>

        <ul className="space-y-2">{socialsDisplay}</ul>

        <a
          target="_blank"
          rel="noopener noreferrer"
          className="w-full grayscale filter transition-all duration-300 hover:grayscale-0"
          href={siteConfig.externalLinks.credly}
        >
          <Image
            width={100}
            height={100}
            src={certificate}
            alt="meta front end developer certificate"
          />
        </a>
      </div>

      <div className="flex items-center justify-center pt-24 text-accent-grey-dark">
        <span>
          {siteConfig.footer.copyright}{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={socialLinks.github}
            className="text-js-yellow underline underline-offset-4"
          >
            {siteConfig.name}
          </a>
        </span>
      </div>
    </footer>
  );
}
