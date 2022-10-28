import Image from 'next/image';

// Components
import Socials from './Socials';

// Assets
import imgPreview from '../public/assets/image-preview.png';

export default function About() {
  return (
    <section className="mt-48">
      <h2 className="text-heading-lg">
        Hi, I’m <span className="text-js-yellow underline">Ken</span>
      </h2>

      <div className="mt-4 grid md:grid-cols-2">
        <Image
          alt="Ken Nersisyan"
          src={imgPreview}
          height={300}
          width={300}
          className="my-10"
        />

        <div className="md:col-start-2 md:col-end-3 ">
          <h3 className="text-heading-md">
            ...and I’d love to work on your next project
          </h3>
          <p className="mt-4 mb-10 text-accent-grey-light dark:text-accent-grey-dark">
            With over 5 years of experience in various front-end projects, I’m
            your one-stop shop for your next million dollar idea. I’m a
            front-end developer who’s madly in love with JavaScript and
            interactive web development. I will help you and your team to achive
            the best possible results for your project.{' '}
          </p>
        </div>

        <div className="md:col-span-2 md:row-start-2 md:flex md:w-full md:items-center md:justify-between md:gap-4">
          <div className="md:basis-2/5">
            <Socials />
          </div>

          <a
            href="mailto:karapet.nersisyan@yahoo.com"
            target="_blank"
            rel="noopener noreferrer"
            className="my-4 inline-block w-full rounded-full bg-js-yellow p-4 text-center text-2xl font-bold uppercase tracking-widest text-primary-dark md:basis-1/2"
          >
            Hire Me!
          </a>
        </div>
      </div>
    </section>
  );
}
