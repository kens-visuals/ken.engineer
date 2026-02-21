export interface ProjectsDataTypes {
  title: string;
  screenshot: string;
  description: string;
  code: string;
  liveSite: string;
  techStack: {
    id: number;
    name: string;
    iconKey: string;
  }[];
}

export const projectsData: ProjectsDataTypes[] = [
  {
    title: "Game Zone: Social Media",
    screenshot: "/assets/game-zone-screenshot.png",
    description: `The biggest social social media platform for gamers. Well, maybe not in our universe, but it sure is in an alternate universe. Anyhow, I'd suggest you join the gamers club now!`,
    code: "https://github.com/kens-visuals/game-zone",
    liveSite: "https://game-zone-kens-visuals.vercel.app/",
    techStack: [
      { id: 1, name: "Next.js", iconKey: "NextJs" },
      { id: 2, name: "TypeScript", iconKey: "TypeScript" },
      { id: 3, name: "Tailwind CSS", iconKey: "TailwindCSS" },
      { id: 4, name: "React Query", iconKey: "ReactQuery" },
      { id: 5, name: "Firebase", iconKey: "Firebase" },
      { id: 6, name: "Framer Motion", iconKey: "FramerMotion" },
    ],
  },
  {
    title: "Markdown Notes PWA",
    screenshot: "/assets/markdown-notes-app-screenshot.png",
    description: `Simple markdown app that can be used to keep your notes safe and easy
      accessible everywhere. Trust me it’s more secure than a Swiss bank,
      nobody will know your deepest secrets.`,
    code: "https://github.com/kens-visuals/markdown-notes-app",
    liveSite: "https://markdown-notes-app-delta.vercel.app/",
    techStack: [
      { id: 1, name: "Next.js", iconKey: "NextJs" },
      { id: 2, name: "Tailwind CSS", iconKey: "TailwindCSS" },
      { id: 3, name: "Firebase", iconKey: "Firebase" },
    ],
  },
];
