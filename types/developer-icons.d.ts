/**
 * Type declaration for developer-icons package.
 * The package's dist/main.d.ts only re-exports from './icons' which doesn't resolve
 * in some setups; at runtime the exports exist. This declares them for TypeScript.
 */
declare module "developer-icons" {
  import type { SVGProps } from "react";
  export interface DeveloperIconProps extends Partial<SVGProps<SVGSVGElement>> {
    size?: number;
  }
  export type IconComponent = (props: DeveloperIconProps) => JSX.Element;

  export const JavaScript: IconComponent;
  export const TypeScript: IconComponent;
  export const React: IconComponent;
  export const NextJs: IconComponent;
  export const ReactQuery: IconComponent;
  export const Redux: IconComponent;
  export const NodeJs: IconComponent;
  export const ExpressJsDark: IconComponent;
  export const TailwindCSS: IconComponent;
  export const Sass: IconComponent;
  export const ThreeJsDark: IconComponent;
  export const Firebase: IconComponent;
  export const Git: IconComponent;
  export const Jest: IconComponent;
  export const Storybook: IconComponent;
  export const Figma: IconComponent;
  export const OpenAI: IconComponent;
  export const ClaudeAI: IconComponent;
  export const HTML5: IconComponent;
  export const CSS3: IconComponent;
  export const ESLint: IconComponent;
  export const VisualStudioCode: IconComponent;
  export const Notion: IconComponent;
  export const MongoDB: IconComponent;
  export const Supabase: IconComponent;
}
