import Head from 'next/head';

import { DefaultSeo } from 'next-seo';

// Components
import Container from '../components/Container';
import Header from '../components/Header';
import About from '../components/About';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Articles from '../components/Articles';
import Contact from '../components/Contact';

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
        {/* <DefaultSeo
          openGraph={{
            locale: 'en_US',
            url: 'https://www.ken.engineer/',
            title: 'Ken’s Portfolio',
            description:
              'Portfolio website of front-end engineer Ken Nersisyan',
            images: [
              {
                url: 'https://mugshotbot.com/m/vkMROGu0',
                alt: 'Ken’s Portfolio',
              },
            ],
            siteName: 'ken.engineer',
          }}
          twitter={{
            handle: '@kens_visuals',
            site: '@kens_visuals',
            cardType: 'summary_large_image',
          }}
        /> */}
        <meta
          name="description"
          content="Portfolio website of front-end engineer Ken Nersisyan"
        />
        <meta name="author" content="Ken Nersisyan" />
        <meta property="og:title" content="Ken's Portfolio" />
        <meta property="og:url" content="https://www.ken.engineer/" />
        <meta property="og:image" content="https://mugshotbot.com/m/vkMROGu0" />
        <meta property="twitter:card" content="summary_large_image" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Container>
        <Header />

        <main>
          <About />

          <Skills />

          <Projects />

          <Articles posts={posts} />

          <Contact />
        </main>
      </Container>
    </div>
  );
}

export async function getStaticProps() {
  const res = await fetch(
    'https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fmedium.com%2Ffeed%2F%40kens_visuals'
  );
  const posts = await res.json();

  return { props: { posts } };
}
