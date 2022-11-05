import type { AppProps } from 'next/app';
import { DefaultSeo } from 'next-seo';
import '../styles/globals.css';

// Contexts
import { ThemeProvider } from 'next-themes';
import { ThemeToggleProvider } from '../contexts/ThemeContext';

import SEO from '../next-seo.config';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider
      enableSystem
      enableColorScheme
      defaultTheme="system"
      attribute="class"
    >
      <ThemeToggleProvider>
        <DefaultSeo {...SEO} />
        <Component {...pageProps} />
      </ThemeToggleProvider>
    </ThemeProvider>
  );
}
