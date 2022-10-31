import Image from 'next/image';

// Interface
import { ProjectsDataTypes } from '../utils/projectsData';

export default function ProjectCard({
  title,
  screenshot,
  description,
  code,
  liveSite,
  techStack,
}: ProjectsDataTypes) {
  const techStackLogosDisplay = techStack.map(({ id, img }) => (
    <li key={id}>
      <Image src={img} alt="programming language logo" height={40} width={40} />
    </li>
  ));

  return (
    <div className="mt-4 flex flex-col gap-6 overflow-hidden rounded-2xl border border-accent-grey-light p-5 dark:border-accent-grey-dark lg:flex-row">
      <div className="h-fit w-full lg:max-w-md lg:flex-grow-0">
        <Image
          src={screenshot}
          alt="markdown app screenshot"
          height={100}
          width={1000}
          className="cursor-pointer rounded-xl grayscale transition-all duration-300 hover:grayscale-0"
        />
      </div>

      <div className="w-full lg:flex lg:flex-col lg:justify-between">
        <h4 className="w-fit rounded-md bg-js-yellow p-2 text-heading-md leading-none text-primary-dark ">
          {title}
        </h4>
        <div className="mt-4 mb-2 flex items-center justify-between md:justify-start md:gap-4">
          <span className="inline-block text-body font-bold uppercase text-primary-dark dark:text-primary-light">
            Tech stack
          </span>
          <ul className="flex items-center gap-2">{techStackLogosDisplay}</ul>
        </div>
        <p className="max-w-md text-accent-grey-light dark:text-accent-grey-dark">
          {description}
        </p>

        <div className="mt-4 flex w-full flex-col gap-4 md:flex-row">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={code}
            className="w-full rounded-full border border-js-yellow py-2 text-center text-body font-bold tracking-wider text-primary-dark dark:text-js-yellow"
          >
            Code
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={liveSite}
            className="w-full rounded-full bg-js-yellow py-2 text-center text-body font-bold tracking-wider text-primary-dark"
          >
            Live Site
          </a>
        </div>
      </div>
    </div>
  );
}
