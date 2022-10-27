import { StaticImageData } from 'next/image';

// Components
import ProjectCard from './ProjectCard';

// Assets
import markdownAppScreenshot from '../public/assets/markdown-notes-app-screenshot.png';
import passwordAppScreenshot from '../public/assets/screenshot.png';
import calculatorAppScreenshot from '../public/assets/calculator-app-screenshot.png';

export interface ProjectsDataTypes {
  title: string;
  screenshot: StaticImageData;
  description: string;
  code: string;
  liveSite: string;
}

const projectsData: ProjectsDataTypes[] = [
  {
    title: 'Markdown Notes PWA',
    screenshot: markdownAppScreenshot,
    description: `Simple markdown app that can be used to keep your notes safe and easy
    accessible everywhere. Trust me it’s more secure than a Swiss bank,
    nobody will know your deepest secrets.`,
    code: 'https://github.com/kens-visuals/markdown-notes-app',
    liveSite: 'https://markdown-notes-app-delta.vercel.app/',
  },
  {
    title: 'Password Generator',
    screenshot: passwordAppScreenshot,
    description: `With this password generator no hacker in the world won’t be able to 
    hack your social media accounts –– said no one ever. It’s side a simple 
    side project, have fun playing with it!`,
    code: 'https://github.com/kens-visuals/password-generator-app',
    liveSite: 'https://password-generator-app-tawny.vercel.app/',
  },
  {
    title: 'Calculator PWA',
    screenshot: calculatorAppScreenshot,
    description: `Multi theme calulator that can  be easily added to your phone or tablet 
    to add some color to the boring calculations. Unless, if you’re counting
    your millions, that’s not boring on any calculator, let alone this one.`,
    code: 'https://github.com/kens-visuals/calculator-app',
    liveSite: 'https://kens-visuals.github.io/calculator-app/',
  },
];

export default function Projects() {
  const projectCardsDisplay = projectsData.map((project) => (
    <ProjectCard key={project.title} {...project} />
  ));

  return (
    <section>
      <h2 className="text-heading-lg text-primary-dark dark:text-primary-light">
        40+ <span className="text-js-yellow underline">projects</span> and
        counting
      </h2>

      <div>{projectCardsDisplay}</div>

      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://github.com/kens-visuals/frontend-mentor"
        className="mt-6 block w-full rounded-xl bg-js-yellow py-4 text-center text-body font-bold uppercase tracking-widest text-primary-dark"
      >
        View More
      </a>
    </section>
  );
}
