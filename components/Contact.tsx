import { motion } from 'framer-motion';

// Components
import Section from './Section';

// Animations
import { buttonHover } from '../utils/animations';

const buttonCustomHover = {
  ...buttonHover,
  y: -3,
  scale: 1,
  borderColor: '#FFD369',
};

export default function Contact() {
  return (
    <Section id="contact">
      <h3 className="text-heading-lg text-primary-dark dark:text-primary-light">
        <span className="text-js-yellow underline">Contact</span> me.
      </h3>

      <div className="mt-6 rounded-xl bg-primary-dark p-6 dark:bg-primary-light">
        <span className="text-heading-md font-normal text-primary-light dark:text-primary-dark ">
          Nothing personal, it’s just business.
        </span>

        <p className="mt-2 max-w-lg text-accent-grey-dark">
          I’d love to have a chat to see how I can help you. The best first step
          is for us to discuss your project. Then we can move forward from
          there.
        </p>

        <motion.a
          whileHover={buttonCustomHover}
          transition={{ duration: 0.3 }}
          href="mailto:karapet.nersisyan@yahoo.com"
          className="mt-8 block rounded-xl border border-transparent bg-js-yellow p-4 text-center text-heading-sm text-primary-dark"
        >
          Say Hello!
        </motion.a>
      </div>
    </Section>
  );
}
