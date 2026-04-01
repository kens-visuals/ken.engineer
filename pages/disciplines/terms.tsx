import Head from "next/head";

import DisciplinesLegalShell from "../../components/DisciplinesLegalShell";
import { siteConfig } from "../../utils/config";

const CONTACT_EMAIL = "ken@nersisyan.dev";

export default function DisciplinesTerms() {
  return (
    <div className="relative min-h-screen w-full bg-primary-dark font-departure text-primary-light">
      <Head>
        <title>Disciplines — Terms of Use | {siteConfig.name}</title>
        <meta
          name="description"
          content="Terms of Use for the Disciplines productivity app."
        />
      </Head>

      <DisciplinesLegalShell>
        <article>
            <h1 className="text-3xl font-bold text-primary-light md:text-4xl">
              Terms of Use
            </h1>
            <p className="mt-2 text-sm text-accent-grey-dark">
              <strong className="text-accent-grey-dark">Last updated:</strong>{" "}
              March 2026
            </p>

            <p className="mt-8 text-lg leading-relaxed text-accent-grey-dark">
              By using Disciplines (&quot;the app&quot;), you agree to these terms.
            </p>

            <hr className="my-10 border-white/10" />

            <section>
              <h2 className="text-xl font-bold text-primary-light md:text-2xl">
                1. Use of the App
              </h2>
              <ul className="mt-4 list-disc space-y-3 pl-6 text-accent-grey-dark">
                <li>
                  You may use the app for personal, non-commercial use in
                  accordance with these terms and the App Store (or Google Play)
                  terms.
                </li>
                <li>
                  You are responsible for your use of the app and any content you
                  create (tasks, habits, etc.). Do not use the app for anything
                  illegal or to harm others.
                </li>
              </ul>
            </section>

            <hr className="my-10 border-white/10" />

            <section>
              <h2 className="text-xl font-bold text-primary-light md:text-2xl">
                2. Account and Data
              </h2>
              <ul className="mt-4 list-disc space-y-3 pl-6 text-accent-grey-dark">
                <li>
                  Your data is stored on your device. You are responsible for
                  backing it up if you want to keep it. We are not liable for loss
                  of data due to device failure, uninstall, or your actions.
                </li>
                <li>
                  If you use backup or sync features, you must comply with the
                  terms of the service you use (e.g. iCloud, Google).
                </li>
              </ul>
            </section>

            <hr className="my-10 border-white/10" />

            <section>
              <h2 className="text-xl font-bold text-primary-light md:text-2xl">
                3. Subscriptions (Disciplines Pro)
              </h2>
              <ul className="mt-4 list-disc space-y-3 pl-6 text-accent-grey-dark">
                <li>
                  Disciplines Pro is a subscription that unlocks additional
                  features. Payment and renewal are handled by Apple or Google.
                  Their terms and refund policies apply.
                </li>
                <li>
                  Subscription automatically renews unless you cancel before the
                  end of the current period. You can manage or cancel in your
                  device&apos;s subscription settings.
                </li>
                <li>
                  We may change subscription pricing or features with notice.
                  Continued use after changes means you accept them.
                </li>
              </ul>
            </section>

            <hr className="my-10 border-white/10" />

            <section>
              <h2 className="text-xl font-bold text-primary-light md:text-2xl">
                4. Intellectual Property
              </h2>
              <p className="mt-4 leading-relaxed text-accent-grey-dark">
                The app, its design, and content we provide are owned by us or our
                licensors. You may not copy, modify, or reverse-engineer the app
                except as allowed by law.
              </p>
            </section>

            <hr className="my-10 border-white/10" />

            <section>
              <h2 className="text-xl font-bold text-primary-light md:text-2xl">
                5. Disclaimers
              </h2>
              <ul className="mt-4 list-disc space-y-3 pl-6 text-accent-grey-dark">
                <li>
                  The app is provided &quot;as is.&quot; We do not guarantee it
                  will be error-free or uninterrupted. We are not liable for any
                  indirect, incidental, or consequential damages arising from your
                  use of the app.
                </li>
                <li>
                  The app is not a substitute for professional advice (e.g.
                  medical, legal, financial). Use your own judgment.
                </li>
              </ul>
            </section>

            <hr className="my-10 border-white/10" />

            <section>
              <h2 className="text-xl font-bold text-primary-light md:text-2xl">
                6. Termination
              </h2>
              <p className="mt-4 leading-relaxed text-accent-grey-dark">
                You may stop using the app at any time. We may suspend or
                discontinue the app or your access if you breach these terms or
                for other reasons we deem necessary.
              </p>
            </section>

            <hr className="my-10 border-white/10" />

            <section>
              <h2 className="text-xl font-bold text-primary-light md:text-2xl">
                7. Changes to Terms
              </h2>
              <p className="mt-4 leading-relaxed text-accent-grey-dark">
                We may update these terms. The updated version will be shown in
                the app. Continued use after changes means you accept the new
                terms.
              </p>
            </section>

            <hr className="my-10 border-white/10" />

            <section>
              <h2 className="text-xl font-bold text-primary-light md:text-2xl">
                8. Contact
              </h2>
              <p className="mt-4 leading-relaxed text-accent-grey-dark">
                For questions about these terms:{" "}
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="font-semibold text-js-yellow underline underline-offset-4 hover:text-js-yellow/90"
                >
                  {CONTACT_EMAIL}
                </a>
              </p>
            </section>
        </article>
      </DisciplinesLegalShell>
    </div>
  );
}
