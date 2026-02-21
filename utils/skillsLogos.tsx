/**
 * skillsLogos.tsx
 * Uses `developer-icons` React components — no PNG/SVG files needed.
 * Install: npm i developer-icons
 *
 * Icons NOT in developer-icons (Expo, React Native, NativeWind, RevenueCat,
 * Mongoose, AsyncStorage, Framer Motion) are provided as tiny inline SVG
 * fallback components directly below.
 */

import React from "react";
import * as DevIcons from "developer-icons";
import type { ComponentType } from "react";

// ─── Shared icon props shape ─────────────────────────────────────────────────
export type IconProps = { size?: number; className?: string };
export type SkillIcon = { name: string; Icon: ComponentType<IconProps> };

// ─── Inline SVG fallbacks ────────────────────────────────────────────────────

const ExpoIcon = ({ size = 40, className = "" }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 128 128" className={className}>
    <rect width="128" height="128" rx="16" fill="#000020" />
    <path
      d="M26 92 L64 24 L102 92"
      stroke="white"
      strokeWidth="12"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
  </svg>
);

const ReactNativeIcon = ({ size = 40, className = "" }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 256 256" className={className}>
    <circle cx="128" cy="128" r="128" fill="#20232A" />
    <ellipse
      cx="128"
      cy="128"
      rx="40"
      ry="95"
      stroke="#61DAFB"
      strokeWidth="10"
      fill="none"
    />
    <ellipse
      cx="128"
      cy="128"
      rx="40"
      ry="95"
      stroke="#61DAFB"
      strokeWidth="10"
      fill="none"
      transform="rotate(60 128 128)"
    />
    <ellipse
      cx="128"
      cy="128"
      rx="40"
      ry="95"
      stroke="#61DAFB"
      strokeWidth="10"
      fill="none"
      transform="rotate(120 128 128)"
    />
    <circle cx="128" cy="128" r="14" fill="#61DAFB" />
  </svg>
);

const FramerMotionIcon = ({ size = 40, className = "" }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 256 384" className={className}>
    <path d="M0 0h256v128H128L0 0Z" fill="#00BBFF" />
    <path d="M0 128h128l128 128H0V128Z" fill="#0066FF" />
    <path d="M0 256h128L0 384V256Z" fill="#0044CC" />
  </svg>
);

const NativeWindIcon = ({ size = 40, className = "" }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 40 40" className={className}>
    <rect width="40" height="40" rx="8" fill="#0EA5E9" />
    <text
      x="50%"
      y="56%"
      dominantBaseline="middle"
      textAnchor="middle"
      fill="#fff"
      fontSize="13"
      fontWeight="bold"
      fontFamily="monospace"
    >
      NW
    </text>
  </svg>
);

const RevenueCatIcon = ({ size = 40, className = "" }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 40 40" className={className}>
    <rect width="40" height="40" rx="20" fill="#F25A38" />
    <text
      x="50%"
      y="56%"
      dominantBaseline="middle"
      textAnchor="middle"
      fill="#fff"
      fontSize="11"
      fontWeight="bold"
      fontFamily="sans-serif"
    >
      RC
    </text>
  </svg>
);

const MongooseIcon = ({ size = 40, className = "" }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 40 40" className={className}>
    <rect width="40" height="40" rx="8" fill="#880000" />
    <text
      x="50%"
      y="58%"
      dominantBaseline="middle"
      textAnchor="middle"
      fill="#fff"
      fontSize="20"
      fontWeight="bold"
      fontFamily="Georgia, serif"
    >
      M
    </text>
  </svg>
);

const AsyncStorageIcon = ({ size = 40, className = "" }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 40 40" className={className}>
    <rect width="40" height="40" rx="8" fill="#1F2937" />
    <rect x="7" y="9" width="26" height="5" rx="2" fill="#6EE7B7" />
    <rect x="7" y="17" width="26" height="5" rx="2" fill="#6EE7B7" />
    <rect x="7" y="25" width="26" height="5" rx="2" fill="#6EE7B7" />
  </svg>
);

const ReanimatedIcon = ({ size = 40, className = "" }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 40 40" className={className}>
    <rect width="40" height="40" rx="8" fill="#2B2B2B" />
    <path
      d="M12 20h6l-3-8 3 8zm6 0h6l-3-8 3 8z"
      stroke="#61DAFB"
      strokeWidth="1.5"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <circle cx="20" cy="20" r="3" fill="#61DAFB" />
  </svg>
);

const ScreenTimeAPIIcon = ({ size = 40, className = "" }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 40 40" className={className}>
    <rect width="40" height="40" rx="8" fill="#000" />
    <rect x="8" y="6" width="24" height="28" rx="3" fill="none" stroke="#888" strokeWidth="2" />
    <rect x="10" y="8" width="20" height="18" rx="1" fill="#333" />
    <circle cx="20" cy="26" r="2" fill="#666" />
    <path d="M14 12h12M14 16h8" stroke="#555" strokeWidth="1" strokeLinecap="round" />
  </svg>
);

// Wrapper so OpenAI icon is visible on dark backgrounds (library icon is dark)
const OpenAIIcon = ({ size = 40, className = "" }: IconProps) => (
  <span
    className={`flex h-full w-full items-center justify-center rounded-md bg-white/90 p-0.5 ${className}`}
  >
    <DevIcons.OpenAI size={size} className="h-full w-full [&>svg]:h-full [&>svg]:w-full" />
  </span>
);

// Next.js logo is black on dark background — wrap in light background so it's visible
const NextJsIcon = ({ size = 40, className = "" }: IconProps) => (
  <span
    className={`flex h-full w-full items-center justify-center rounded-md bg-white/95 p-0.5 ${className}`}
  >
    <DevIcons.NextJs size={size} className="h-full w-full [&>svg]:h-full [&>svg]:w-full" />
  </span>
);

// ─── Skill arrays ────────────────────────────────────────────────────────────

export const coreStackSkills: SkillIcon[] = [
  { name: "HTML5", Icon: DevIcons.HTML5 },
  { name: "CSS3", Icon: DevIcons.CSS3 },
  { name: "JavaScript", Icon: DevIcons.JavaScript },
  { name: "TypeScript", Icon: DevIcons.TypeScript },
  { name: "React", Icon: DevIcons.React },
  { name: "Next.js", Icon: NextJsIcon },
  { name: "React Query", Icon: DevIcons.ReactQuery },
  { name: "Tailwind CSS", Icon: DevIcons.TailwindCSS },
  { name: "Framer Motion", Icon: FramerMotionIcon },
];

export const mobileSkills: SkillIcon[] = [
  { name: "React Native", Icon: ReactNativeIcon },
  { name: "Expo", Icon: ExpoIcon },
  { name: "NativeWind", Icon: NativeWindIcon },
  { name: "Framer Motion", Icon: FramerMotionIcon },
  { name: "RevenueCat", Icon: RevenueCatIcon },
  { name: "AsyncStorage", Icon: AsyncStorageIcon },
];

export const toolsSkills: SkillIcon[] = [
  { name: "Firebase", Icon: DevIcons.Firebase },
  { name: "MongoDB", Icon: DevIcons.MongoDB },
  { name: "Supabase", Icon: DevIcons.Supabase },
  { name: "Mongoose", Icon: MongooseIcon },
  { name: "Node.js", Icon: DevIcons.NodeJs },
  { name: "Express", Icon: DevIcons.ExpressJsDark },
  { name: "Git", Icon: DevIcons.Git },
  { name: "Jest", Icon: DevIcons.Jest },
  { name: "Storybook", Icon: DevIcons.Storybook },
  { name: "Figma", Icon: DevIcons.Figma },
  { name: "OpenAI", Icon: OpenAIIcon },
  { name: "Claude", Icon: DevIcons.ClaudeAI },
  { name: "SASS / SCSS", Icon: DevIcons.Sass },
  { name: "Redux", Icon: DevIcons.Redux },
  { name: "Three.js", Icon: DevIcons.ThreeJsDark },
  { name: "ESLint", Icon: DevIcons.ESLint },
  { name: "VS Code", Icon: DevIcons.VisualStudioCode },
  { name: "Notion", Icon: DevIcons.Notion },
];

// ─── Project card tech stack: icon key → Component (for use in ProjectCard) ───
export const projectTechIconMap: Record<
  string,
  ComponentType<IconProps>
> = {
  NextJs: NextJsIcon,
  TypeScript: DevIcons.TypeScript,
  TailwindCSS: DevIcons.TailwindCSS,
  ReactQuery: DevIcons.ReactQuery,
  Firebase: DevIcons.Firebase,
  FramerMotion: FramerMotionIcon,
  ReactNative: ReactNativeIcon,
  Expo: ExpoIcon,
  AsyncStorage: AsyncStorageIcon,
  RevenueCat: RevenueCatIcon,
  Reanimated: ReanimatedIcon,
  ScreenTimeAPI: ScreenTimeAPIIcon,
};
