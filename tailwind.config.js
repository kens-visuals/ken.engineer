/** @type {import('tailwindcss').Config} */
module.exports = {
  // darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary-dark": "#1C1C1C",
        "primary-light": "#FFF7F0",
        "js-yellow": "#FFD369",
        "accent-grey-dark": "#B5A99D",
        "accent-grey-light": "#5E607A",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        departure: ["DepartureMono", "monospace"],
        jakarta: ["Plus Jakarta Sans", "sans-serif"],
      },
      fontSize: {
        "heading-lg": [
          "3.5rem",
          {
            lineHeight: "4.375rem",
            fontWeight: "800",
          },
        ],
        "heading-md": [
          "2.5rem",
          {
            lineHeight: "3.1875rem",
            fontWeight: "800",
          },
        ],
        "heading-sm": [
          "2rem",
          {
            lineHeight: "2.5rem",
            fontWeight: "800",
          },
        ],
        body: [
          "1.125rem",
          {
            lineHeight: "1.75rem",
            fontWeight: "400",
          },
        ],
      },
      backgroundImage: {
        shape: "url(../public/assets/image-preview.png)",
        "nav-pattern": `linear-gradient(
          180deg, 
          rgba(28, 28, 28, .1) 5%, 
          rgba(28, 28, 28, .9) 65%
        );`,
        // Main Tools - Neutral slate with subtle warmth
        "main-tools-pattern": `linear-gradient(
          107.51deg,
          rgba(148, 163, 184, 0.12) 5.37%,
          rgba(148, 163, 184, 0.04) 93.02%
        );`,
        "main-tools-pattern--text": `linear-gradient(
          107.51deg,
          rgba(148, 163, 184, 0.85) 5.37%,
          rgba(148, 163, 184, 0.95) 93.02%
        );`,
        // Learning Tools - Neutral blue-grey
        "learning-tools-pattern": `linear-gradient(
          106.91deg, 
          rgba(100, 116, 139, 0.12) 11.91%, 
          rgba(100, 116, 139, 0.04) 85.49%
        );`,
        "learning-tools-pattern--text": `linear-gradient(
          106.91deg, 
          rgba(100, 116, 139, 0.85) 11.91%, 
          rgba(100, 116, 139, 0.95) 85.49%
        );`,
        // UI/UX - Neutral teal-grey
        "uiux-tools-pattern": `linear-gradient(153.09deg, 
          rgba(113, 113, 122, 0.12) 4.6%, 
          rgba(113, 113, 122, 0.04) 91.98%
        );`,
        "uiux-tools-pattern--text": `linear-gradient(153.09deg, 
          rgba(113, 113, 122, 0.85) 4.6%, 
          rgba(113, 113, 122, 0.95) 91.98%
        );`,
        // Apps - Neutral stone
        "apps-pattern": `linear-gradient(
          155.86deg,
          rgba(120, 113, 108, 0.12) 6.48%,
          rgba(120, 113, 108, 0.04) 92.62%
        );`,
        "apps-pattern--text": `linear-gradient(
          155.86deg,
          rgba(120, 113, 108, 0.85) 6.48%,
          rgba(120, 113, 108, 0.95) 92.62%
        );`,
        // Resume - Neutral zinc
        "resume-pattern": `linear-gradient(104.87deg, 
          rgba(113, 113, 122, 0.12) 11.03%, 
          rgba(113, 113, 122, 0.04) 91.28%
        );`,
        "resume-pattern--text": `linear-gradient(104.87deg, 
          rgba(113, 113, 122, 0.85) 11.03%, 
          rgba(113, 113, 122, 0.95) 91.28%
        );`,
        // Other Tools - Neutral cool-grey
        "other-tools-pattern": `linear-gradient(
          152.06deg,
          rgba(100, 116, 139, 0.12) -0.6%,
          rgba(100, 116, 139, 0.04) 85.46%
        );`,
        "other-tools-pattern--text": `linear-gradient(
          152.06deg,
          rgba(100, 116, 139, 0.85) -0.6%,
          rgba(100, 116, 139, 0.95) 92.62%
        );`,
      },
      gridTemplateRows: {
        "mobile-row-layout":
          "repeat(2, minmax(12rem, auto)) repeat(4, minmax(10rem, auto))",
        "tablet-row-layout": "repeat(3, minmax(10rem, auto))",
        "desk-row-layout": "repeat(2, minmax(10rem, auto))",
      },
    },
  },
  plugins: [],
};
