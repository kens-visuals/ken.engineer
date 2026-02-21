export const disciplinesData = {
  title: "Disciplines",
  tagline: "iOS Productivity App with Focus & Screen Blocking",
  description:
    "A full iOS productivity app built from scratch — covering tasks, habits, goals, timers, and focus sessions — designed around a discipline-first philosophy. Onboarding quiz personalizes the experience. Premium subscription flow, Home Screen widgets, and deep Apple-native integrations included.",
  links: {
    linkedin: "https://www.linkedin.com/", // replace with actual LinkedIn post URL
    twitter: "https://x.com/", // replace with actual X/Twitter URL
  },
  techStack: [
    { id: "1", name: "React Native", iconKey: "ReactNative" },
    { id: "2", name: "React Native Reanimated", iconKey: "Reanimated" },
    { id: "3", name: "AsyncStorage", iconKey: "AsyncStorage" },
    { id: "4", name: "Screen Time API", iconKey: "ScreenTimeAPI" },
    { id: "5", name: "RevenueCat", iconKey: "RevenueCat" },
  ],
  highlights: [
    {
      id: "h1",
      label: "Screen Time API",
      detail:
        "Integrated Apple Screen Time API with Device Activity Monitor & Shield Configuration to block distracting apps during focus sessions.",
    },
    {
      id: "h2",
      label: "Live Activities",
      detail:
        "Delivered Live Activities for the active timer and Home Screen widgets for habit & quick-access overviews with real-time sync.",
    },
    {
      id: "h3",
      label: "RevenueCat Paywall",
      detail:
        "Shipped a full premium subscription flow — paywall, tier-gated features, and a self-serve Customer Center.",
    },
    {
      id: "h4",
      label: "Analytics Dashboard",
      detail:
        "Multi-tab analytics covering task completion, habit rates, timer sessions, and focus data with export and benchmark comparisons.",
    },
  ],
};
