import { DefaultSeoProps } from 'next-seo';

const SEO: DefaultSeoProps = {
  title: "Ken's Portfolio",
  description: 'Portfolio website of front-end engineer Ken Nersisyan',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.ken.engineer/',
    siteName: 'ken.engineer',
    images: [
      {
        url: 'https://raw.githubusercontent.com/kens-visuals/ken.engineer/main/public/assets/seo-img.png',
        alt: 'Ken Nersisyan',
      },
    ],
  },
  twitter: {
    handle: '@kens_visuals',
    site: '@kens_visuals',
    cardType: 'summary_large_image',
  },
};

export default SEO;
