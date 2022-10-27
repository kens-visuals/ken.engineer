import Image, { StaticImageData } from 'next/image';

interface ProjectsDataTypes {
  title: string;
  screenshot: StaticImageData;
  description: string;
  code: string;
  liveSite: string;
}

export default function ProjectCard({
  title,
  screenshot,
  description,
  code,
  liveSite,
}: ProjectsDataTypes) {
  return (
    <div className="mt-4 flex flex-col gap-6 overflow-hidden rounded-2xl border border-accent-grey-light p-6 dark:border-accent-grey-dark lg:flex-row">
      <div className="h-full w-full lg:max-w-md lg:flex-grow-0">
        <Image
          src={screenshot}
          alt="markdown app screenshot"
          height={410}
          width={710}
          className="cursor-pointer rounded-xl grayscale transition-all duration-300 hover:grayscale-0"
        />
      </div>

      <div className="w-full lg:flex lg:flex-col lg:justify-between">
        <h4 className="text-heading-md leading-none text-primary-dark dark:text-primary-light">
          {title}
        </h4>
        <span className="mt-2 inline-block text-body text-primary-dark dark:text-primary-light">
          Tech stack:
        </span>
        <p className="mt-4 max-w-md text-accent-grey-light dark:text-accent-grey-dark">
          {description}
        </p>

        <div className="mt-6 flex w-full flex-col gap-4 md:flex-row">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={code}
            className="w-full rounded-full border border-js-yellow py-2 text-center text-body font-bold tracking-wider text-js-yellow"
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
