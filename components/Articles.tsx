import Image from 'next/image';

export default function Articles() {
  return (
    <section className="my-60">
      <h2 className="text-heading-lg text-primary-dark dark:text-primary-light">
        Tech <span className=" text-js-yellow underline">articles</span> for
        everyone
      </h2>

      <div className="mt-6 items-stretch md:mt-8 lg:grid lg:grid-cols-2 lg:grid-rows-1 lg:gap-4">
        <div className="relative rounded-xl lg:col-span-2">
          <Image
            src="https://images.unsplash.com/27/type-set.jpg?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2684&q=80"
            alt="article preview"
            height={500}
            width={500}
            className="w-full rounded-xl "
          />

          {/* Article section for tablet and biger viewports */}
          <div className="absolute inset-0 z-10 h-full w-full rounded-lg p-6 backdrop-blur-none md:flex md:items-end md:bg-primary-dark/50 md:backdrop-blur-sm">
            <article className="hidden md:inline-block">
              <div className="md:grid md:h-full md:grid-cols-2 md:justify-between">
                <h4 className="font-inter text-heading-lg text-primary-light">
                  The Truth About Learning TypeScript in 4 Minutes
                </h4>

                <div className="md:flex md:flex-col md:justify-between">
                  <p className="text-xl text-primary-light">
                    We dive into the next evolution of the web that claims to
                    put the power of the platforms back into the hands of the
                    people. But is it really fulfilling its promise?
                  </p>

                  <a
                    href="#"
                    className="flex w-full justify-center gap-2 rounded-xl bg-js-yellow py-4 text-center text-body uppercase tracking-widest text-primary-dark md:self-end"
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
                </div>
              </div>
            </article>
          </div>
        </div>

        {/* Article section for mobile viewports */}
        <article className="md:hidden">
          <h4 className="my-4 font-inter text-heading-sm text-primary-dark dark:text-primary-light">
            The Truth About Learning TypeScript in 4 Minutes
          </h4>

          <p className="my-6 text-body text-accent-grey-light dark:text-accent-grey-dark lg:mt-0">
            We dive into the next evolution of the web that claims to put the
            power of the platforms back into the hands of the people. But is it
            really fulfilling its promise?
          </p>

          <a
            href="#"
            className="flex w-full justify-center gap-2 rounded-xl bg-js-yellow py-4 text-center text-body uppercase tracking-widest text-primary-dark"
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
      </div>

      <aside className="my-6 rounded-xl bg-primary-dark p-6 text-primary-light dark:bg-primary-light dark:text-primary-dark lg:p-8 lg:py-14">
        <span className="text-heading-md tracking-widest text-js-yellow lg:p-8">
          New
        </span>

        <ul className="mt-6 grid-cols-3 space-y-10 divide-y divide-js-yellow md:mt-0 lg:grid lg:gap-6 lg:space-y-0 lg:divide-y-0 lg:divide-x">
          <li className="w-full lg:px-8">
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
          <li className="w-full lg:px-8">
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
          <li className="w-full lg:px-8">
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

      <div className="rounded-lg bg-main-tools-pattern p-8">
        <span className="text-heading-sm font-normal text-primary-dark dark:text-primary-light">
          Did you like my articles? Then the{' '}
          <a
            href="#"
            target="block _blank"
            rel="noopener noreferrer"
            href="https://medium.com/subscribe/@kens_visuals"
            className="animate-pulse border-b-2 border-b-teal-700 bg-teal-900 bg-clip-text font-bold text-transparent hover:text-primary-light dark:bg-main-tools-pattern--text "
          >
            subscription button
          </a>{' '}
          is waiting for you
        </span>
      </div>
    </section>
  );
}
