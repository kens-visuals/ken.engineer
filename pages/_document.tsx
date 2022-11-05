import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&family=Plus+Jakarta+Sans:wght@400;700&display=swap"
          rel="stylesheet"
        />

        {/* <!-- HTML Meta Tags --> */}
        <meta name="title" content="Ken Nersisyan –– Portfolio" />
        <meta
          name="description"
          content="Portfolio website of front-end engineer Ken Nersisyan"
        />

        {/* <!-- Facebook Meta Tags --> */}
        <meta property="og:url" content="https://www.ken.engineer/" />
        <meta property="og:title" content="Ken Nersisyan –– Portfolio" />
        <meta
          property="og:description"
          content="Portfolio website of front-end engineer Ken Nersisyan"
        />
        <meta
          property="og:image"
          content="https://raw.githubusercontent.com/kens-visuals/ken.engineer/main/public/assets/seo-img.png"
        />

        {/* <!-- Twitter Meta Tags --> */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="ken.engineer" />
        <meta property="twitter:url" content="https://www.ken.engineer/" />
        <meta name="twitter:title" content="Ken Nersisyan –– Portfolio" />
        <meta
          name="twitter:description"
          content="Portfolio website of front-end engineer Ken Nersisyan"
        />
        <meta
          name="twitter:image"
          content="https://raw.githubusercontent.com/kens-visuals/ken.engineer/main/public/assets/seo-img.png"
        />

        {/* Favicon */}
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
