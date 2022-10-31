// Components
import ProjectCard from './ProjectCard';
import Section from './Section';

// Data
import { projectsData } from '../utils/projectsData';

export default function Projects() {
  const projectCardsDisplay = projectsData.map((project) => (
    <ProjectCard key={project.title} {...project} />
  ));

  return (
    <Section id="projects">
      <h2 className="text-heading-lg text-primary-dark dark:text-primary-light">
        40+ <span className="text-js-yellow underline">projects</span> and
        counting
      </h2>

      <div className="mt-10">{projectCardsDisplay}</div>

      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://github.com/kens-visuals/frontend-mentor"
        className="mt-6 flex w-full justify-center gap-2 rounded-xl bg-js-yellow py-4 text-center text-body font-bold uppercase tracking-widest text-primary-dark"
      >
        View More
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="h-6 w-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
          />
        </svg>
      </a>
    </Section>
  );
}
