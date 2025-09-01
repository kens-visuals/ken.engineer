import { motion, Variants } from "framer-motion";
import { nanoid } from "nanoid";

// Hooks
import useMediaQuery from "../hooks/useMediaQuery";

// Components
import Section from "./Section";

// Animations
import { buttonHover, fadeIn } from "../utils/animations";

interface PostsTypes {
  items: [
    {
      title: string;
      pubDate: string;
      link: string;
      thumbnail: string;
    },
  ];
}

function convertDate(date: string) {
  const [year, month, day] = date.slice(0, 10).split("-");

  return `Published: ${month}/${day}/${year}`;
}

export default function Articles({ posts }: { posts: PostsTypes }) {
  const matches = useMediaQuery("(min-width: 768px)");

  const { items: articles } = posts;

  const {
    link: recentLink,
    title: recentTitle,
    thumbnail: recentThumbnail,
  } = articles[0];

  const articlesVariants: Variants = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.3,
      },
    },
  };

  const backdropVariant: Variants = {
    initial: { backdropFilter: `blur(0px)`, WebkitBackdropFilter: `blur(0px)` },
    animate: {
      backdropFilter: matches ? `blur(5px)` : `blur(0px)`,
      WebkitBackdropFilter: matches ? `blur(5px)` : `blur(0px)`,
      transition: {
        duration: 1,
        delayChildren: 0.8,
      },
    },
  };

  const buttonCustomHover = {
    ...buttonHover,
    y: 0,
    scale: 0.95,
  };

  const articlesDisplay = articles
    .slice(1, 4)
    .map(({ link, title, pubDate }) => (
      <motion.li
        key={nanoid()}
        variants={fadeIn}
        className="flex w-full flex-col justify-between lg:px-8"
      >
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="my-4 block text-xl font-bold transition-all duration-300 hover:text-js-yellow lg:mt-0 lg:text-2xl"
        >
          {title}
        </a>
        <span className="text-xs text-accent-grey-dark dark:text-accent-grey-light">
          {convertDate(pubDate)}
        </span>
      </motion.li>
    ));

  return (
    <Section id="articles">
      <h2 className="text-heading-lg text-primary-dark dark:text-primary-light">
        Tech <span className="text-js-yellow underline">articles</span> for
        everyone
      </h2>

      <div className="mt-10 items-stretch md:mt-8 lg:grid lg:grid-cols-2 lg:grid-rows-1 lg:gap-4">
        <motion.div
          initial="initial"
          whileInView="animate"
          variants={articlesVariants}
          viewport={{ once: true, amount: "some" }}
          className="relative rounded-xl lg:col-span-2"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <motion.img
            variants={fadeIn}
            src={recentThumbnail}
            alt={recentTitle}
            className="h-full w-full rounded-xl"
          />

          {/* Article section for tablet and biger viewports */}
          <motion.div
            initial="initial"
            whileInView="animate"
            variants={backdropVariant}
            viewport={{ once: true, amount: "all" }}
            className="absolute inset-0 z-10 h-full w-full rounded-lg p-6 backdrop-blur-none md:flex md:items-end md:bg-primary-dark/50"
          >
            <motion.article
              variants={fadeIn}
              className="hidden md:inline-block"
            >
              <div className="md:grid md:h-full md:grid-cols-2 md:justify-between">
                <h4 className="font-inter text-heading-lg text-primary-light md:col-span-2">
                  {recentTitle}
                </h4>

                <div className="md:col-span-2 md:mt-4 md:flex md:flex-col md:justify-between">
                  <motion.a
                    href={recentLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={buttonCustomHover}
                    className="flex w-full justify-center gap-2 rounded-xl border border-transparent bg-js-yellow py-4 text-center text-body uppercase tracking-widest text-primary-dark md:self-end"
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
                  </motion.a>
                </div>
              </div>
            </motion.article>
          </motion.div>
        </motion.div>

        {/* Article section for mobile viewports */}
        <motion.article className="md:hidden">
          <h4 className="my-4 font-inter text-heading-sm text-primary-dark dark:text-primary-light">
            {recentTitle}
          </h4>

          <a
            target="_blank"
            href={recentLink}
            rel="noopener noreferrer"
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
        </motion.article>
      </div>

      <aside className="my-6 rounded-xl bg-primary-dark p-6 text-primary-light dark:bg-primary-light dark:text-primary-dark lg:p-8 lg:py-14">
        <span className="text-heading-md tracking-widest text-js-yellow lg:p-8">
          New
        </span>

        <motion.ul
          initial="initial"
          whileInView="animate"
          variants={articlesVariants}
          viewport={{ amount: "some" }}
          className="mt-6 grid-cols-3 space-y-10 divide-y divide-js-yellow lg:grid lg:gap-6 lg:space-y-0 lg:divide-y-0 lg:divide-x"
        >
          {articlesDisplay}
        </motion.ul>
      </aside>

      <div className="rounded-lg bg-main-tools-pattern p-6">
        <span className="text-heading-sm font-normal text-primary-dark dark:text-primary-light">
          Did you like my articles? Then the{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://medium.com/subscribe/@kens_visuals"
            className="animate-pulse border-b-2 border-b-teal-700 bg-teal-900 bg-clip-text font-bold text-transparent hover:text-primary-dark dark:bg-main-tools-pattern--text hover:dark:text-primary-light"
          >
            subscription button
          </a>{" "}
          is waiting for you
        </span>
      </div>
    </Section>
  );
}
