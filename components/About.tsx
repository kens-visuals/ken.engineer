import Image from 'next/image';

// Components
import Socials from './Socials';

// Assets
import imgPreview from '../public/assets/image-preview.png';

export default function About() {
  return (
    <section className="mt-60" id="about">
      <h2 className="text-heading-lg lg:text-8xl">
        Hi, I’m <span className="text-js-yellow underline">Ken</span>
      </h2>

      <div className="mt-10">
        <div className="md:flex md:items-center md:gap-8">
          <Image
            alt="Ken Nersisyan"
            src={imgPreview}
            height={300}
            width={300}
            className="my-10 lg:mb-0 lg:basis-1/2 lg:p-6"
          />

          <div className="lg:basis-1/2">
            <h3 className="text-heading-sm lg:text-heading-md">
              ...and I’d love to work on your next project
            </h3>
            <p className="mt-4 mb-8 text-sm text-accent-grey-light dark:text-accent-grey-dark lg:text-body">
              With over 5 years of experience in various front-end projects, I’m
              your one-stop shop for your next million dollar idea. I’m a
              front-end developer who’s madly in love with JavaScript and
              interactive web development. I will help you and your team to
              achive the best possible results for your project.{' '}
            </p>

            <div className="lg:flex lg:items-center lg:justify-between lg:gap-4">
              <Socials />

              <a
                href="mailto:karapet.nersisyan@yahoo.com"
                target="_blank"
                rel="noopener noreferrer"
                className="my-4 inline-block w-full rounded-full bg-js-yellow p-4 text-center text-2xl font-bold uppercase tracking-widest text-primary-dark md:basis-1/2 lg:p-2.5"
              >
                Hire Me!
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
