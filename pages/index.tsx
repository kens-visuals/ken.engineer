import Head from "next/head";

import Container from "../components/Container";
import Header from "../components/Header";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import { siteConfig } from "../utils/config";

export default function Home() {
  return (
    <div className="bg-primary relative min-h-screen overflow-x-hidden bg-primary-dark font-departure">
      <Head>
        <title>{siteConfig.title}</title>
      </Head>

      <Container>
        <Header />

        <main>
          <About />

          <Skills />

          <Projects />

          {/* <Articles posts={posts} /> */}

          <Contact />
        </main>
      </Container>
    </div>
  );
}
