import Image from 'next/image';
import { motion, Variants } from 'framer-motion';

// Components
import Socials from './Socials';
import Section from './Section';

// Assets
import profile from '../public/assets/profile-img.png';

// Animations
import { fadeIn, buttonHover } from '../utils/animations';

export default function About() {
  const titleVariants: Variants = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        delayChildren: 0.4,
        staggerChildren: 0.2,
      },
    },
  };

  const letterVariants: Variants = {
    initial: { opacity: 0, y: 20 },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        ease: [0.6, 0.01, -0.05, 0.95],
      },
    },
  };

  const buttonVariant: Variants = {
    initial: { opacity: 0, x: -50 },
    animate: {
      opacity: 1,
      x: 0,
      transition: {
        delay: 1.6,
      },
    },
  };

  return (
    <Section id="about">
      <h2 className="text-heading-lg md:text-8xl">
        Hi, I’m{' '}
        <motion.span
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 'all' }}
          variants={titleVariants}
        >
          {'Ken'.split('').map((letter) => (
            <motion.span
              key={letter}
              variants={letterVariants}
              className="inline-block text-js-yellow"
            >
              {letter}
            </motion.span>
          ))}
        </motion.span>
      </h2>

      <motion.div
        initial="initial"
        whileInView="animate"
        variants={titleVariants}
        viewport={{ once: true, amount: 'some' }}
        className="mt-10 md:grid md:grid-cols-2 md:items-center md:gap-8"
      >
        <Image
          alt="Ken Nersisyan"
          height={250}
          width={250}
          src={profile}
          className="flex w-full items-center justify-center rounded-full"
        />

        <motion.div
          initial="initial"
          whileInView="animate"
          variants={fadeIn}
          viewport={{ once: true, amount: 0.3 }}
          className="lg:basis-1/2"
        >
          <h3 className="text-heading-sm lg:text-heading-md">
            ...and I’d love to work on your next project
          </h3>
          <p className="mt-4 mb-8 text-sm text-accent-grey-light dark:text-accent-grey-dark lg:text-body">
            With over 5 years of experience in various front-end projects, I’m
            your one-stop shop for your next million dollar idea. I’m a
            front-end developer who’s madly in love with JavaScript and
            interactive web development. I will help you and your team to achive
            the best possible results for your project.{' '}
          </p>

          <div className="lg:flex lg:items-center lg:justify-between lg:gap-4">
            <Socials />

            <motion.a
              initial="initial"
              whileHover={buttonHover}
              whileInView="animate"
              variants={buttonVariant}
              viewport={{ once: true, amount: 'some' }}
              href="mailto:karapet.nersisyan@yahoo.com"
              target="_blank"
              rel="noopener noreferrer"
              className="my-4 inline-block w-full rounded-full border border-transparent bg-js-yellow p-4 text-center text-2xl font-bold uppercase tracking-widest text-primary-dark md:basis-1/2 lg:p-2.5"
            >
              Hire Me!
            </motion.a>
          </div>
        </motion.div>
      </motion.div>
    </Section>
  );
}
