import Head from 'next/head';

// Components
import Container from '../components/Container';
import Header from '../components/Header';
import About from '../components/About';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Articles from '../components/Articles';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

interface PostsTypes {
  items: [
    {
      title: string;
      pubDate: string;
      link: string;
      thumbnail: string;
    }
  ];
}

export default function Home({ posts }: { posts: PostsTypes }) {
  return (
    <div className="bg-primary relative min-h-screen bg-primary-light font-jakarta selection:bg-js-yellow selection:text-primary-light dark:bg-primary-dark">
      <Head>
        {/* Replace this with next-seo */}
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Container>
        <Header />

        <main className="mt-20 min-h-screen">
          <About />

          <Skills />

          <Projects />

          <Articles posts={posts} />

          <Contact />
        </main>

        <Footer />
      </Container>
    </div>
  );
}

export async function getStaticProps() {
  const res = await fetch(
    'https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fmedium.com%2Ffeed%2F%40kens_visuals'
  );
  const posts = await res.json();

  return {
    props: {
      posts,
    },
  };
}
