import Head from "next/head";

import Container from "../components/Container";
import Header from "../components/Header";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
// import Articles from '../components/Articles';
import Contact from "../components/Contact";

// interface PostsTypes {
//   items: [
//     {
//       title: string;
//       pubDate: string;
//       link: string;
//       thumbnail: string;
//     }
//   ];
// }

export default function Home() {
  return (
    <div className="bg-primary relative min-h-screen bg-primary-light font-departure dark:bg-primary-dark">
      <Head>
        <title>Ken&apos;s Portfolio</title>
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

// export async function getStaticProps() {
//   const res = await fetch(
//     'https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fmedium.com%2Ffeed%2F%40kens_visuals'
//   );
//   const posts = await res.json();

//   return { props: { posts } };
// }
