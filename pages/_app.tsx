import type { AppProps } from 'next/app';
import '../styles/globals.css';

// Contexts
import { ThemeProvider } from 'next-themes';
import { ThemeToggleProvider } from '../contexts/ThemeContext';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider
      enableSystem
      enableColorScheme
      defaultTheme="system"
      attribute="class"
    >
      <ThemeToggleProvider>
        <Component {...pageProps} />
      </ThemeToggleProvider>
    </ThemeProvider>
  );
}
