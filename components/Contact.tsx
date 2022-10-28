export default function Contact() {
  return (
    <section className="my-60">
      <h3 className="text-heading-lg text-primary-dark dark:text-primary-light">
        <span className="text-js-yellow underline">Contact</span> me.
      </h3>

      <div className="mt-6 rounded-xl bg-primary-dark p-6 dark:bg-primary-light">
        <span className="text-heading-md font-normal text-primary-light dark:text-primary-dark ">
          Nothing personal, it’s just business.
        </span>

        <p className="mt-2 max-w-lg text-accent-grey-light dark:text-accent-grey-dark">
          I’d love to have a chat to see how I can help you. The best first step
          is for us to discuss your project. Then we can move forward from
          there.
        </p>

        <a
          href="mailto:karapet.nersisyan@yahoo.com"
          className="mt-8 block rounded-xl bg-js-yellow p-4 text-center text-heading-sm text-primary-dark"
        >
          Say Hello!
        </a>
      </div>
    </section>
  );
}
