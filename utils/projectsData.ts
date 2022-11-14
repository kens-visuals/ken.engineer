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
    title: 'Markdown Notes PWA',
    screenshot: '/assets/markdown-notes-app-screenshot.png',
    description: `Simple markdown app that can be used to keep your notes safe and easy
      accessible everywhere. Trust me it’s more secure than a Swiss bank,
      nobody will know your deepest secrets.`,
    code: 'https://github.com/kens-visuals/markdown-notes-app',
    liveSite: 'https://markdown-notes-app-delta.vercel.app/',
    techStack: [
      {
        id: 1,
        img: '/assets/logos/nextjs.png',
      },
      {
        id: 2,
        img: '/assets/logos/tailwindcss.png',
      },
      {
        id: 3,
        img: '/assets/logos/firebase.png',
      },
    ],
  },
  {
    title: 'Pomodoro PWA',
    screenshot: '/assets/pomodoro-app-screenshot.png',
    description: `Multi-theme pomodoro app, with sound effects that notify you when your time is up, so you can actually focus on your tasks. Instead of going back and forth to see if this technique of focusing actually works`,
    code: 'https://github.com/kens-visuals/pomodoro-app',
    liveSite: 'https://pomodoro-app-mu-seven.vercel.app/',
    techStack: [
      {
        id: 1,
        img: '/assets/logos/nextjs.png',
      },
      {
        id: 2,
        img: '/assets/logos/typescript.png',
      },
      {
        id: 3,
        img: '/assets/logos/tailwindcss.png',
      },
    ],
  },
  {
    title: 'Calculator PWA',
    screenshot: '/assets/calculator-app-screenshot.png',
    description: `Multi theme calulator that can be easily added to your phone or tablet 
      to replace the boring calculators. Count your multi millions with themed calculator, or don't, 
      it's your millions you should decide`,
    code: 'https://github.com/kens-visuals/calculator-app',
    liveSite: 'https://kens-visuals.github.io/calculator-app/',
    techStack: [
      {
        id: 1,
        img: '/assets/logos/react.png',
      },
      {
        id: 2,
        img: '/assets/logos/tailwindcss.png',
      },
    ],
  },
];
