import { useEffect, useState } from "react";
import { useRouter } from "next/router";

interface ColorScheme {
  primary: string;
  accent: string;
  background: string;
  text: string;
}

export default function useUrlColor() {
  const router = useRouter();
  const [colorScheme, setColorScheme] = useState<ColorScheme>({
    primary: "#FFD369", // Default JS Yellow
    accent: "#B5A99D", // Default accent grey
    background: "#1C1C1C", // Default dark background
    text: "#FFF7F0", // Default light text
  });

  useEffect(() => {
    if (!router.isReady) return;

    const { color, theme } = router.query;

    console.log("🔍 URL Debug:", { color, theme, query: router.query });
    console.log("🔍 Full Query Object:", router.query);
    console.log("🔍 Query Keys:", Object.keys(router.query));
    console.log("🔍 Raw URL:", window.location.href);

    // If a specific color is provided in URL, use it
    if (typeof color === "string" && color.length > 0) {
      try {
        // Normalize color - add # if missing
        const normalizedColor = color.startsWith("#") ? color : `#${color}`;

        // Validate hex color (6 characters after #)
        if (/^#[0-9A-F]{6}$/i.test(normalizedColor)) {
          console.log("✅ Valid color found:", normalizedColor);
          setColorScheme((prev) => ({
            ...prev,
            primary: normalizedColor,
            accent: `${normalizedColor}80`, // 50% opacity version for accent
          }));
        } else {
          console.log("❌ Invalid color format:", color);
        }
      } catch (error) {
        console.warn("Invalid color parameter:", color);
      }
    } else {
      console.log("ℹ️ No color parameter found, using default");
    }

    // If theme is specified, apply it
    if (typeof theme === "string") {
      console.log("🎨 Theme found:", theme);
      if (theme === "dark") {
        setColorScheme((prev) => ({
          ...prev,
          background: "#1C1C1C",
          text: "#FFF7F0",
        }));
      } else if (theme === "light") {
        setColorScheme((prev) => ({
          ...prev,
          background: "#FFF7F0",
          text: "#1C1C1C",
        }));
      }
    }
  }, [router.isReady, router.query]);

  // Function to update URL with new color
  const updateUrlColor = (color: string, theme?: string) => {
    const query: any = { color };
    if (theme) query.theme = theme;

    router.push(
      {
        pathname: router.pathname,
        query: { ...router.query, ...query },
      },
      undefined,
      { shallow: true },
    );
  };

  // Function to reset to default colors
  const resetColors = () => {
    const { color, theme, ...otherQuery } = router.query;
    router.push(
      {
        pathname: router.pathname,
        query: otherQuery,
      },
      undefined,
      { shallow: true },
    );
  };

  return {
    colorScheme,
    updateUrlColor,
    resetColors,
    currentColor: router.query.color as string,
    currentTheme: router.query.theme as string,
  };
}
