import { Html, Head, Main, NextScript } from "next/document";

import { siteConfig, socialLinks } from "../utils/config";

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
        <meta
          name="title"
          content={`${siteConfig.name} –– ${siteConfig.title}`}
        />
        <meta name="description" content={siteConfig.description} />

        {/* <!-- Facebook Meta Tags --> */}
        <meta property="og:url" content={siteConfig.url} />
        <meta
          property="og:title"
          content={`${siteConfig.name} –– ${siteConfig.title}`}
        />
        <meta property="og:description" content={siteConfig.description} />
        <meta
          property="og:image"
          content={`${siteConfig.url}${siteConfig.ogImage}`}
        />

        {/* <!-- Twitter Meta Tags --> */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content={siteConfig.domain} />
        <meta property="twitter:url" content={siteConfig.url} />
        <meta
          name="twitter:title"
          content={`${siteConfig.name} –– ${siteConfig.title}`}
        />
        <meta name="twitter:description" content={siteConfig.description} />
        <meta
          name="twitter:image"
          content={`${siteConfig.url}${siteConfig.ogImage}`}
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
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content={siteConfig.name} />
        <meta
          name="keywords"
          content="front-end developer, React, Next.js, TypeScript, portfolio"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: siteConfig.name,
              jobTitle: "Front-End Engineer",
              url: siteConfig.url,
              sameAs: [socialLinks.github, socialLinks.linkedin],
            }),
          }}
        />
      </body>
    </Html>
  );
}
