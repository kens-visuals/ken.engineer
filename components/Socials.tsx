// Data
import socials from '../utils/socialData';

export default function Socials() {
  const socialIconsDisplay = socials.map(({ link, svg }) => (
    <li key={link}>
      <a href={link} target="_blank" rel="noopener noreferrer">
        {svg}
      </a>
    </li>
  ));

  return (
    <ul className="my-4 flex items-center justify-between md:basis-1/2 lg:gap-4">
      {socialIconsDisplay}
    </ul>
  );
}
