import Link from "next/link";
import Image from "next/image";

import certificate from "../public/assets/meta-front-end-developer-certificate.png";

export default function Footer() {
  const socials = [
    {
      name: "GitHub",
      link: "https://github.com/kens-visuals",
    },
    {
      name: "LinkedIn",
      link: "https://www.linkedin.com/in/karo-nersisyan-135118129/",
    },
    {
      name: "Medium",
      link: "https://medium.com/@kens_visuals",
    },
    {
      name: "Discord",
      link: "https://discordapp.com/users/kens_visuals#0900",
    },
    {
      name: "Resume",
      link: "/resume.pdf",
    },
  ];

  const menuItems = [
    { name: "Skills", path: "/#skills" },
    { name: "Projects", path: "/#projects" },
    { name: "Articles", path: "/#articles" },
    { name: "Contact", path: "/#contact" },
  ];

  const menuItemsDisplay = menuItems.map(({ name, path }) => (
    <li key={name}>
      <Link
        href={path}
        scroll={false}
        className="text-primary-light transition-all duration-300 hover:text-js-yellow"
      >
        {name}
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
          href="https://www.credly.com/badges/46c47d7c-d818-4d7f-b808-5d04ad3053b9/public_url"
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
          Designed and Developed by{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/kens-visuals"
            className="text-js-yellow underline underline-offset-4"
          >
            Ken Nersisyan
          </a>
        </span>
      </div>
    </footer>
  );
}
