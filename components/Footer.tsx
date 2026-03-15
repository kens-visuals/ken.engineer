import { ReactNode } from "react";
import Link from "next/link";
import Image from "next/image";

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

  // Images only in UI; title/issuer/issued used for SEO (alt, title)
  const certificatesDisplay = siteConfig.certificates.map((cert) => {
    const altText = [cert.title, cert.issuer, cert.issued].filter(Boolean).join(", ");
    const titleAttr = `${cert.title} — ${cert.issuer}${cert.issued ? ` (${cert.issued})` : ""}`;
    return (
      <a
        key={cert.id}
        target="_blank"
        rel="noopener noreferrer"
        href={cert.url}
        title={titleAttr}
        className="flex shrink-0 grayscale transition-all duration-300 hover:grayscale-0"
      >
        <span className="relative block h-[100px] w-[100px] overflow-hidden rounded-lg bg-white/5">
          <Image
            fill
            src={cert.image}
            alt={altText}
            className="object-contain"
            sizes="100px"
          />
        </span>
      </a>
    );
  });

  return (
    <footer className="border-t border-t-primary-dark pt-6">
      <div className="my-8 grid grid-cols-2 gap-8 md:grid-cols-3">
        <ul className="space-y-2">{menuItemsDisplay}</ul>
        <ul className="space-y-2">{socialsDisplay}</ul>
        <div className="col-span-2 flex flex-row flex-wrap justify-start gap-4 pt-8 md:col-span-1 md:flex-nowrap md:justify-end md:pt-0">
          {certificatesDisplay}
        </div>
      </div>

      <div className="flex items-center justify-center pt-12 text-accent-grey-dark sm:pt-16">
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
