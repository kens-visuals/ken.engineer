export interface ProjectsDataTypes {
  title: string;
  screenshot: string;
  description: string;
  code: string;
  liveSite: string;
  techStack: {
    id: number;
    img: string;
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
      {
        id: 1,
        img: "/assets/logos/nextjs.png",
      },
      {
        id: 2,
        img: "/assets/logos/typescript.png",
      },
      {
        id: 3,
        img: "/assets/logos/tailwindcss.png",
      },
      {
        id: 4,
        img: "/assets/logos/react-query.png",
      },
      {
        id: 5,
        img: "/assets/logos/firebase.png",
      },
      {
        id: 6,
        img: "/assets/logos/framer-motion.png",
      },
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
      {
        id: 1,
        img: "/assets/logos/nextjs.png",
      },
      {
        id: 2,
        img: "/assets/logos/tailwindcss.png",
      },
      {
        id: 3,
        img: "/assets/logos/firebase.png",
      },
    ],
  },
  {
    title: "Pomodoro PWA",
    screenshot: "/assets/pomodoro-app-screenshot.png",
    description: `Multi-theme pomodoro app, with sound effects that notify you when your time is up, so you can actually focus on your tasks. Instead of going back and forth to see if this technique of focusing actually works`,
    code: "https://github.com/kens-visuals/pomodoro-app",
    liveSite: "https://pomodoro-app-mu-seven.vercel.app/",
    techStack: [
      {
        id: 1,
        img: "/assets/logos/nextjs.png",
      },
      {
        id: 2,
        img: "/assets/logos/typescript.png",
      },
      {
        id: 3,
        img: "/assets/logos/tailwindcss.png",
      },
    ],
  },
];
