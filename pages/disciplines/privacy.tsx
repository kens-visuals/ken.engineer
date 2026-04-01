import Head from "next/head";

import DisciplinesLegalShell from "../../components/DisciplinesLegalShell";
import { siteConfig } from "../../utils/config";

const CONTACT_EMAIL = "ken@nersisyan.dev";
const APPLE_EULA =
  "https://www.apple.com/legal/internet-services/itunes/dev/stdeula/";

export default function DisciplinesPrivacy() {
  return (
    <div className="relative min-h-screen w-full bg-primary-dark font-departure text-primary-light">
      <Head>
        <title>Disciplines — Privacy Policy | {siteConfig.name}</title>
        <meta
          name="description"
          content="Privacy Policy for the Disciplines productivity app."
        />
      </Head>

      <DisciplinesLegalShell>
        <article>
            <h1 className="text-3xl font-bold text-primary-light md:text-4xl">
              Privacy Policy
            </h1>
            <p className="mt-2 text-sm text-accent-grey-dark">
              <strong className="text-accent-grey-dark">Last updated:</strong>{" "}
              March 2026
            </p>

            <p className="mt-8 text-lg leading-relaxed text-accent-grey-dark">
              Disciplines (&quot;we&quot;, &quot;our&quot;, or &quot;the app&quot;)
              is a task and habit management app. This policy describes how we
              handle your information.
            </p>

            <hr className="my-10 border-white/10" />

            <section>
              <h2 className="text-xl font-bold text-primary-light md:text-2xl">
                1. Information We Collect
              </h2>
              <p className="mt-4 font-semibold text-primary-light">
                Data you create in the app:
              </p>
              <p className="mt-2 leading-relaxed text-accent-grey-dark">
                Tasks, habits, routines, goals, focus sessions, and timer data.
                This is stored on your device (and, if you use backup, in your
                chosen cloud account).
              </p>
              <p className="mt-4 font-semibold text-primary-light">
                Device and usage:
              </p>
              <p className="mt-2 leading-relaxed text-accent-grey-dark">
                We may collect anonymous usage data (e.g. feature usage, crashes)
                to improve the app. We do not sell this data.
              </p>
              <p className="mt-4 font-semibold text-primary-light">
                Screen Time / focus sessions:
              </p>
              <p className="mt-2 leading-relaxed text-accent-grey-dark">
                If you use focus sessions with app blocking, the app uses
                Apple&apos;s Screen Time APIs on your device. Blocking rules and
                session data stay on your device unless you export or back up.
              </p>
              <p className="mt-4 font-semibold text-primary-light">
                Subscriptions:
              </p>
              <p className="mt-2 leading-relaxed text-accent-grey-dark">
                If you subscribe to Disciplines Pro, purchase and subscription
                status are processed by the App Store (Apple) or Google Play. We
                receive only non-identifying transaction information necessary to
                unlock Pro features.
              </p>
            </section>

            <hr className="my-10 border-white/10" />

            <section>
              <h2 className="text-xl font-bold text-primary-light md:text-2xl">
                2. How We Use Your Information
              </h2>
              <ul className="mt-4 list-disc space-y-3 pl-6 text-accent-grey-dark">
                <li>
                  To provide and improve the app (tasks, habits, focus sessions,
                  analytics, goals, routines).
                </li>
                <li>To process subscriptions and restore purchases.</li>
                <li>To respond to support or feedback you send us.</li>
              </ul>
            </section>

            <hr className="my-10 border-white/10" />

            <section>
              <h2 className="text-xl font-bold text-primary-light md:text-2xl">
                3. Data Storage and Sharing
              </h2>
              <ul className="mt-4 list-disc space-y-3 pl-6 text-accent-grey-dark">
                <li>
                  Your tasks, habits, and other content are stored locally on your
                  device by default. We do not upload them to our servers unless
                  you use a backup or export feature that you explicitly choose.
                </li>
                <li>
                  We do not sell your personal data. We do not share it with
                  third parties for advertising.
                </li>
                <li>
                  If you contact support (e.g. via email), we use your email only
                  to respond.
                </li>
              </ul>
            </section>

            <hr className="my-10 border-white/10" />

            <section>
              <h2 className="text-xl font-bold text-primary-light md:text-2xl">
                4. Your Choices
              </h2>
              <ul className="mt-4 list-disc space-y-3 pl-6 text-accent-grey-dark">
                <li>
                  You can stop using the app and delete it; local data will be
                  removed with the app.
                </li>
                <li>
                  You can disable analytics or optional features in settings
                  where available.
                </li>
                <li>
                  You can request deletion of any data we hold by contacting us
                  (see Contact below).
                </li>
              </ul>
            </section>

            <hr className="my-10 border-white/10" />

            <section>
              <h2 className="text-xl font-bold text-primary-light md:text-2xl">
                5. Children
              </h2>
              <p className="mt-4 leading-relaxed text-accent-grey-dark">
                The app is not directed at children under 13. We do not knowingly
                collect personal information from children under 13.
              </p>
            </section>

            <hr className="my-10 border-white/10" />

            <section>
              <h2 className="text-xl font-bold text-primary-light md:text-2xl">
                6. Changes
              </h2>
              <p className="mt-4 leading-relaxed text-accent-grey-dark">
                We may update this policy. We will post the updated text in the
                app and, if required by law, notify you of material changes.
              </p>
            </section>

            <hr className="my-10 border-white/10" />

            <section>
              <h2 className="text-xl font-bold text-primary-light md:text-2xl">
                7. Contact
              </h2>
              <p className="mt-4 leading-relaxed text-accent-grey-dark">
                For privacy questions or requests:{" "}
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="font-semibold text-js-yellow underline underline-offset-4 hover:text-js-yellow/90"
                >
                  {CONTACT_EMAIL}
                </a>
              </p>
            </section>

            <hr className="my-10 border-white/10" />

            <section>
              <h2 className="text-xl font-bold text-primary-light md:text-2xl">
                8. Terms of Use (EULA)
              </h2>
              <p className="mt-4 leading-relaxed text-accent-grey-dark">
                By downloading or using Disciplines, you agree to Apple&apos;s
                standard Licensed Application End User License Agreement (EULA),
                available at:{" "}
                <a
                  href={APPLE_EULA}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-js-yellow underline underline-offset-4 hover:text-js-yellow/90"
                >
                  https://www.apple.com/legal/internet-services/itunes/dev/stdeula/
                </a>
              </p>
            </section>
        </article>
      </DisciplinesLegalShell>
    </div>
  );
}
