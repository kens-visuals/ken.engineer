import Head from "next/head";

import Container from "../components/Container";
import { siteConfig } from "../utils/config";

const SUPPORT_EMAIL = "ken@nersisyan.dev";

export default function DisciplinesSupport() {
  return (
    <div className="relative min-h-screen w-full bg-primary-dark font-departure text-primary-light">
      <Head>
        <title>Disciplines — Support | {siteConfig.name}</title>
        <meta name="description" content="Support for the Disciplines iOS app." />
      </Head>

      <Container>
        <main className="flex min-h-[80vh] flex-col items-center justify-center px-4 py-20 text-center">
          <h1 className="text-4xl font-bold text-primary-light md:text-5xl">
            Disciplines — Support
          </h1>
          <a
            href={`mailto:${SUPPORT_EMAIL}`}
            className="mt-8 text-xl font-semibold text-js-yellow underline underline-offset-4 transition-colors hover:text-js-yellow/90"
          >
            {SUPPORT_EMAIL}
          </a>
        </main>
      </Container>
    </div>
  );
}
