import Image from 'next/image';

// Assets
import articlePlacehoder from '../public/assets/article-placehoder.png';

export default function Articles() {
  return (
    <section className="my-60">
      <h2 className="text-heading-lg text-primary-dark dark:text-primary-light">
        Tech <span className=" text-js-yellow underline">articles</span> for
        everyone
      </h2>

      <div className="mt-6">
        <Image
          src={articlePlacehoder}
          alt="article preview"
          height={500}
          width={500}
          className="rounded-xl"
        />

        <article>
          <h4 className="my-4 font-inter text-heading-lg leading-[3rem] text-primary-dark dark:text-primary-light">
            The Bright Future of Web 3.0?
          </h4>
          <p className="my-6 text-body text-accent-grey-light dark:text-accent-grey-dark">
            We dive into the next evolution of the web that claims to put the
            power of the platforms back into the hands of the people. But is it
            really fulfilling its promise?
          </p>
          <a
            href="#"
            className="mt-6 flex w-full justify-center gap-2 rounded-xl bg-js-yellow py-4 text-center text-body uppercase tracking-widest text-primary-dark"
          >
            Read More
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
        </article>

        <aside className="my-6 rounded-xl bg-primary-dark p-6 text-primary-light dark:bg-primary-light dark:text-primary-dark">
          <span className="text-heading-md tracking-widest text-js-yellow">
            New
          </span>

          <ul className="mt-6 space-y-10 divide-y divide-js-yellow">
            <li>
              <a
                href="#"
                className="my-4 block text-xl font-bold transition-all duration-300 hover:text-js-yellow"
              >
                Hydrogen VS Electric Cars
              </a>
              <span className="text-accent-grey-dark dark:text-accent-grey-light ">
                Will hydrogen-fueled cars ever catch up to EVs?
              </span>
            </li>
            <li>
              <a
                href="#"
                className="my-4 block text-xl font-bold transition-all duration-300 hover:text-js-yellow"
              >
                The Downsides of AI Artistry
              </a>
              <span className="text-accent-grey-dark dark:text-accent-grey-light ">
                What are the possible adverse effects of on-demand AI image
                generation?
              </span>
            </li>
            <li>
              <a
                href="#"
                className="my-4 block text-xl font-bold transition-all duration-300 hover:text-js-yellow"
              >
                Is VC Funding Drying Up?
              </a>
              <span className="text-accent-grey-dark dark:text-accent-grey-light ">
                Private funding by VC firms is down 50% YOY. We take a look at
                what that means.
              </span>
            </li>
          </ul>
        </aside>
      </div>

      <div className="rounded-lg bg-main-tools-pattern p-8">
        <span className="text-heading-sm font-normal text-primary-light">
          Did you like my articles? Then the{' '}
          <a
            href="#"
            target="block _blank"
            rel="noopener noreferrer"
            href="https://medium.com/subscribe/@kens_visuals"
            className="animate-pulse border-b-2 border-b-teal-700 bg-main-tools-pattern--text bg-clip-text font-bold text-transparent hover:text-primary-light "
          >
            subscription button
          </a>{' '}
          is waiting for you
        </span>
      </div>
    </section>
  );
}
