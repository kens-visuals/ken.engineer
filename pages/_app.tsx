import { useEffect } from "react";
import type { AppProps } from "next/app";

import "../styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    // disable browser's scroll restoration
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    // scroll to top on load
    window.scrollTo(0, 0);
  }, []);

  return <Component {...pageProps} />;
}
