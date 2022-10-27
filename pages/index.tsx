import Head from 'next/head';
import About from '../components/About';

// Components
import Container from '../components/Container';
import Footer from '../components/Footer';
import Projects from '../components/Projects';
import Skills from '../components/Skills';

export default function Home() {
  return (
    <div className="bg-primary relative min-h-screen bg-primary-light font-jakarta selection:bg-js-yellow selection:text-primary-light dark:bg-primary-dark">
      <Head>
        {/* Replace this with next-seo */}
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Container>
        <header className="my-40">
          <h1 className="text-6xl text-heading-lg leading-tight text-primary-dark dark:text-primary-light">
            <span className="text-js-yellow">Front-End Engineer</span> of Your
            Dreams
          </h1>
        </header>

        <main className="mt-20 min-h-screen">
          <About />

          <Skills />

          <Projects />
        </main>

        <Footer />
      </Container>
    </div>
  );
}
