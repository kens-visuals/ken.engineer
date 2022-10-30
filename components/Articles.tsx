// import Image from 'next/image';
import { nanoid } from 'nanoid';

interface ArticleTypes {
  link: string;
  title: string;
  // eslint-disable-next-line react/no-unused-prop-types
  pubDate: string;
}

export default function Articles({ posts }: any) {
  const { items: articles } = posts;

  const {
    link: recentLink,
    title: recentTitle,
    thumbnail: recentThumbnail,
  } = articles[0];

  const articlesDisplay = articles
    .slice(1, 4)
    .map(({ link, title, pubDate }: ArticleTypes) => (
      <li key={nanoid()} className="w-full lg:px-8">
        <a
          href={link}
          className="my-4 block text-xl font-bold transition-all duration-300 hover:text-js-yellow lg:mt-0"
        >
          {title}
        </a>
        <span className="text-accent-grey-dark dark:text-accent-grey-light ">
          Published: {pubDate}
        </span>
      </li>
    ));

  return (
    <section className="my-60">
      <h2 className="text-heading-lg text-primary-dark dark:text-primary-light">
        Tech <span className="text-js-yellow underline">articles</span> for
        everyone
      </h2>

      <div className="mt-10 items-stretch md:mt-8 lg:grid lg:grid-cols-2 lg:grid-rows-1 lg:gap-4">
        <div className="relative rounded-xl lg:col-span-2">
          {/* FIXME:  */}
          {/* <Image
            src="https://images.unsplash.com/photo-1568092461669-88ea238c24eb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80"
            alt="article preview"
            height={500}
            width={500}
            className="w-full rounded-xl "
          /> */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={recentThumbnail}
            alt={recentTitle}
            className="h-full w-full rounded-xl"
          />

          {/* Article section for tablet and biger viewports */}
          <div className="absolute inset-0 z-10 h-full w-full rounded-lg p-6 backdrop-blur-none md:flex md:items-end md:bg-primary-dark/50 md:backdrop-blur-sm">
            <article className="hidden md:inline-block">
              <div className="md:grid md:h-full md:grid-cols-2 md:justify-between">
                <h4 className="font-inter text-heading-lg text-primary-light md:col-span-2">
                  {recentTitle}
                </h4>

                <div className="md:col-span-2 md:mt-4 md:flex md:flex-col md:justify-between">
                  {/* <p className="text-xl text-primary-light">
                    We dive into the next evolution of the web that claims to
                    put the power of the platforms back into the hands of the
                    people. But is it really fulfilling its promise?
                  </p> */}

                  <a
                    href={recentLink}
                    target="block _blank"
                    rel="noopener noreferrer"
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
            {recentTitle}
          </h4>

          {/* <p className="my-6 text-body text-accent-grey-light dark:text-accent-grey-dark lg:mt-0">
            We dive into the next evolution of the web that claims to put the
            power of the platforms back into the hands of the people. But is it
            really fulfilling its promise?
          </p> */}

          <a
            href={recentLink}
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

        <ul className="mt-6 grid-cols-3  space-y-10 divide-y divide-js-yellow lg:grid lg:gap-6 lg:space-y-0 lg:divide-y-0 lg:divide-x">
          {articlesDisplay}
        </ul>
      </aside>

      <div className="rounded-lg bg-main-tools-pattern p-6">
        <span className="text-heading-sm font-normal text-primary-dark dark:text-primary-light">
          Did you like my articles? Then the{' '}
          <a
            target="block _blank"
            rel="noopener noreferrer"
            href="https://medium.com/subscribe/@kens_visuals"
            className="animate-pulse border-b-2 border-b-teal-700 bg-teal-900 bg-clip-text font-bold text-transparent hover:text-primary-dark dark:bg-main-tools-pattern--text hover:dark:text-primary-light"
          >
            subscription button
          </a>{' '}
          is waiting for you
        </span>
      </div>
    </section>
  );
}
