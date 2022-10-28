export default function Contact() {
  return (
    <section className="my-60">
      <h3 className="text-heading-lg text-primary-dark dark:text-primary-light">
        <span className="text-js-yellow underline">Contact</span> me.
      </h3>

      <div className="mt-4 rounded-xl bg-primary-dark p-6 text-heading-md text-primary-light dark:bg-primary-light dark:text-primary-dark">
        <span>Nothing personal, it’s just business</span>

        <a
          href="mailto:karapet.nersisyan@yahoo.com"
          className="mt-8 block rounded-xl bg-js-yellow p-4 text-center text-heading-sm font-normal"
        >
          Say hello!
        </a>
      </div>
    </section>
  );
}
