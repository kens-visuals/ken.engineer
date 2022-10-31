import Link from 'next/link';

export default function Footer() {
  const socials = [
    {
      name: 'GitHub',
      link: 'https://github.com/kens-visuals',
    },
    {
      name: 'LinkedIn',
      link: 'https://www.linkedin.com/in/karo-nersisyan-135118129/',
    },
    {
      name: 'Medium',
      link: 'https://medium.com/@kens_visuals',
    },
    {
      name: 'Twitter',
      link: 'https://twitter.com/kens_visuals',
    },
    {
      name: 'Discord',
      link: 'https://discordapp.com/users/kens_visuals#0900',
    },
  ];

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

  const socialsDisplay = socials.map(({ name, link }) => (
    <li key={name}>
      <a href={link} target="_blank" rel="noopener noreferrer">
        {name}
      </a>
    </li>
  ));

  return (
    <footer className="border-t border-t-primary-dark pt-6 dark:border-t-primary-light">
      <div className="my-8 grid gap-4 md:grid-cols-3 lg:max-w-3xl">
        <ul className="space-y-2">{menuItemsDisplay}</ul>

        <ul className="space-y-2">{socialsDisplay}</ul>

        {/* <ul className="space-y-2">
          <li>
            <a href="#">Books</a>
          </li>
          <li>
            <a href="#">Design</a>
          </li>
        </ul> */}
      </div>

      <div className="flex items-center justify-center">
        <span>
          Designed and Coded by{' '}
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
