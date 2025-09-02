import { ReactNode } from "react";

// Icon component interface
interface IconProps {
  className?: string;
  size?: number;
  ariaHidden?: boolean;
}

// Base icon component
function Icon({
  className = "",
  size = 24,
  ariaHidden = true,
  children,
}: IconProps & { children: ReactNode }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className={className}
      width={size}
      height={size}
      aria-hidden={ariaHidden}
    >
      {children}
    </svg>
  );
}

// Navigation icons
export function ExternalLinkIcon({ className, size, ariaHidden }: IconProps) {
  return (
    <Icon className={className} size={size} ariaHidden={ariaHidden}>
      <polygon points="20 15 20 22 19 22 19 23 2 23 2 22 1 22 1 5 2 5 2 4 11 4 11 6 3 6 3 21 18 21 18 15 20 15" />
      <polygon points="23 1 23 9 21 9 21 5 20 5 20 6 19 6 19 7 18 7 18 8 17 8 17 9 16 9 16 10 15 10 15 11 14 11 14 12 13 12 13 13 12 13 12 14 11 14 11 15 10 15 10 16 9 16 9 17 7 17 7 15 8 15 8 14 9 14 9 13 10 13 10 12 11 12 11 11 12 11 12 10 13 10 13 9 14 9 14 8 15 8 15 7 16 7 16 6 17 6 17 5 18 5 18 4 19 4 19 3 15 3 15 1 23 1" />
    </Icon>
  );
}

export function HamburgerIcon({ className, size, ariaHidden }: IconProps) {
  return (
    <Icon className={className} size={size} ariaHidden={ariaHidden}>
      <rect x="1" y="11" width="22" height="2" />
      <rect x="1" y="19" width="22" height="2" />
      <rect x="1" y="3" width="22" height="2" />
    </Icon>
  );
}

export function CloseIcon({ className, size, ariaHidden }: IconProps) {
  return (
    <Icon className={className} size={size} ariaHidden={ariaHidden}>
      <path d="m22,2v-1H2v1h-1v20h1v1h20v-1h1V2h-1Zm-1,19H3V3h18v18Z" />
      <polygon points="15 13 16 13 16 14 17 14 17 15 18 15 18 16 17 16 17 17 16 17 16 18 15 18 15 17 14 17 14 16 13 16 13 15 11 15 11 16 10 16 10 17 9 17 9 18 8 18 8 17 7 17 7 16 6 16 6 15 7 15 7 14 8 14 8 13 9 13 9 11 8 11 8 10 7 10 7 9 6 9 6 8 7 8 7 7 8 7 8 6 9 6 9 7 10 7 10 8 11 8 11 9 13 9 13 8 14 8 14 7 15 7 15 6 16 6 16 7 17 7 17 8 18 8 18 9 17 9 17 10 16 10 16 11 15 11 15 13" />
    </Icon>
  );
}

// Social media icons
export function GitHubIcon({ className, size, ariaHidden }: IconProps) {
  return (
    <Icon className={className} size={size} ariaHidden={ariaHidden}>
      <polygon points="23 9 23 15 22 15 22 17 21 17 21 19 20 19 20 20 19 20 19 21 18 21 18 22 16 22 16 23 15 23 15 18 14 18 14 17 15 17 15 16 17 16 17 15 18 15 18 14 19 14 19 9 18 9 18 6 16 6 16 7 15 7 15 8 14 8 14 7 10 7 10 8 9 8 9 7 8 7 8 6 6 6 6 9 5 9 5 14 6 14 6 15 7 15 7 16 9 16 9 18 7 18 7 17 6 17 6 16 4 16 4 17 5 17 5 19 6 19 6 20 9 20 9 23 8 23 8 22 6 22 6 21 5 21 5 20 4 20 4 19 3 19 3 17 2 17 2 15 1 15 1 9 2 9 2 7 3 7 3 5 4 5 4 4 5 4 5 3 7 3 7 2 9 2 9 1 15 1 15 2 17 2 17 3 19 3 19 4 20 4 20 5 21 5 21 7 22 7 22 9 23 9" />
    </Icon>
  );
}

export function LinkedInIcon({ className, size, ariaHidden }: IconProps) {
  return (
    <Icon className={className} size={size} ariaHidden={ariaHidden}>
      <path d="m22,2v-1H2v1h-1v20h1v1h20v-1h1V2h-1Zm-9,10v8h-3v-11h3v1h1v-1h4v1h1v10h-3v-8h-3Zm-9-4v-3h3v3h-3Zm3,1v11h-3v-11h3Z" />
    </Icon>
  );
}

export function XIcon({ className, size, ariaHidden }: IconProps) {
  return (
    <Icon className={className} size={size} ariaHidden={ariaHidden}>
      <path d="m15.5,10v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1v-1h-3v1h-1v1h-1v1h-1v1h-1v1h-1v1h-2v-1h-1v-1h-1v-2h-1v-1h-1v-1H1.5v1h1v1h1v1h1v2h1v1h1v2h1v1h1v2h1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h3v-1h1v-1h1v-1h1v-1h1v-1h1v-1h2v1h1v1h1v2h1v1h1v1h7v-1h-1v-1h-1v-1h-1v-2h-1v-1h-1v-2h-1v-1h-1v-2h-1v-1h1Zm0,4v1h1v2h1v1h1v2h-3v-2h-1v-1h-1v-1h-1v-2h-1v-1h-1v-1h-1v-2h-1v-1h-1v-2h-1v-1h-1v-2h3v1h1v2h1v1h1v2h1v1h1v1h1v2h1Z" />
    </Icon>
  );
}

export function DiscordIcon({ className, size, ariaHidden }: IconProps) {
  return (
    <Icon className={className} size={size} ariaHidden={ariaHidden}>
      <path d="M22,11V8H21V6H20V5H18V4H15V5H9V4H6V5H4V6H3V8H2v3H1v7H3v1H5v1H7V18H6V17H8v1H9v1h6V18h1V17h2v1H17v2h2V19h2V18h2V11ZM9,15H7V14H6V12H7V11H9v1h1v2H9Zm9-1H17v1H15V14H14V12h1V11h2v1h1Z" />
    </Icon>
  );
}

// Action icons
export function EmailIcon({ className, size, ariaHidden }: IconProps) {
  return (
    <Icon className={className} size={size} ariaHidden={ariaHidden}>
      <path d="m21,5v-1H3v1H1v14h1v1h20v-1h1V5h-2Zm-11,7v-1h-1v-1h-1v-1h-1v-1h-1v-1h-1v-1h14v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-2v-1h-1Zm-6-5v1h1v1h1v1h1v1h1v1h1v1h1v1h1v1h2v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1v11H3V7h1Z" />
    </Icon>
  );
}

export function FileIcon({ className, size, ariaHidden }: IconProps) {
  return (
    <Icon className={className} size={size} ariaHidden={ariaHidden}>
      <polygon points="1 15 1 13 12 13 12 8 13 8 13 9 14 9 14 10 15 10 15 11 16 11 16 12 17 12 17 13 18 13 18 15 17 15 17 16 16 16 16 17 15 17 15 18 14 18 14 19 13 19 13 20 12 20 12 15 1 15" />
      <polygon points="23 6 23 22 22 22 22 23 7 23 7 22 6 22 6 16 8 16 8 21 21 21 21 8 16 8 16 3 8 3 8 12 6 12 6 2 7 2 7 1 18 1 18 2 19 2 19 3 20 3 20 4 21 4 21 5 22 5 22 6 23 6" />
    </Icon>
  );
}

export function WritingIcon({ className, size, ariaHidden }: IconProps) {
  return (
    <Icon className={className} size={size} ariaHidden={ariaHidden}>
      <path d="M23.5049 7.5012V9.50166H22.5047V10.5019H21.5045V9.50166H20.5043V8.50143H19.504V7.5012H20.5043V6.50098H22.5047V7.5012H23.5049Z" />
      <path d="M21.5046 10.5019V11.5021H20.5044V12.5024H19.5041V13.5026H18.5039V14.5028H17.5037V15.5031H16.5035V16.5033H15.5032V17.5035H14.503V18.5037H11.5023V15.5031H12.5025V14.5028H13.5028V13.5026H14.503V12.5024H15.5032V11.5021H16.5035V10.5019H17.5037V9.50169H18.5039V8.50146H19.5041V9.50169H20.5044V10.5019H21.5046Z" />
      <path d="M17.5036 2.50023V1.5H2.50023V2.50023H1.5V22.5048H2.50023V23.505H17.5036V22.5048H18.5039V16.5034H17.5036V17.5036H16.5034V18.5039H15.5032V19.5041H10.502V14.503H11.5023V13.5027H12.5025V12.5025H13.5027V11.5023H14.503V10.502H15.5032V9.50182H16.5034V8.50159H17.5036V7.50136H18.5039V2.50023H17.5036ZM16.5034 5.50091H3.50045V4.50068H16.5034V5.50091ZM14.503 8.50159H3.50045V7.50136H14.503V8.50159ZM8.50159 17.5036H3.50045V16.5034H8.50159V17.5036ZM3.50045 14.503V13.5027H9.50182V14.503H3.50045ZM3.50045 11.5023V10.502H12.5025V11.5023H3.50045Z" />
    </Icon>
  );
}

export function ImageIcon({ className, size, ariaHidden }: IconProps) {
  return (
    <Icon className={className} size={size} ariaHidden={ariaHidden}>
      <polygon points="9 6 9 9 8 9 8 10 5 10 5 9 4 9 4 6 5 6 5 5 8 5 8 6 9 6" />
      <path d="m22,2v-1H2v1h-1v20h1v1h20v-1h1V2h-1Zm-5,12v1h1v1h1v1h1v1h1v3h-13v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1v1h1Zm3,1v-1h-1v-1h-1v-1h-1v-1h-1v-1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v-1h-1v-1h-1v-1h-1v-1h-1V3h18v12h-1Zm-15,3v1h1v1h1v1H3v-4h1v1h1Z" />
    </Icon>
  );
}

export function CodeIcon({ className, size, ariaHidden }: IconProps) {
  return (
    <Icon className={className} size={size} ariaHidden={ariaHidden}>
      <polygon points="15 4 16 4 16 6 15 6 15 9 14 9 14 12 13 12 13 14 12 14 12 17 11 17 11 20 10 20 10 21 9 21 9 20 8 20 8 18 9 18 9 15 10 15 10 12 11 12 11 10 12 10 12 7 13 7 13 4 14 4 14 3 15 3 15 4" />
      <polygon points="23 11 23 13 22 13 22 14 21 14 21 15 20 15 20 16 19 16 19 17 17 17 17 15 18 15 18 14 19 14 19 13 20 13 20 11 19 11 19 10 18 10 18 9 17 9 17 7 19 7 19 8 20 8 20 9 21 9 21 10 22 10 22 11 23 11" />
      <polygon points="7 7 7 9 6 9 6 10 5 10 5 11 4 11 4 13 5 13 5 14 6 14 6 15 7 15 7 17 5 17 5 16 4 16 4 15 3 15 3 14 2 14 2 13 1 13 1 11 2 11 2 10 3 10 3 9 4 9 4 8 5 8 5 7 7 7" />
    </Icon>
  );
}

export function LiveIcon({ className, size, ariaHidden }: IconProps) {
  return (
    <Icon className={className} size={size} ariaHidden={ariaHidden}>
      <path d="m22,9v-2h-1v-2h-1v-1h-1v-1h-2v-1h-2v-1h-6v1h-2v1h-2v1h-1v1h-1v2h-1v2h-1v7h1v1h1v2h1v1h1v1h2v1h2v1h6v-1h2v-1h2v-1h1v-1h1v-2h1v-2h1v-6h-1Zm-1,1v4h-3v-4h3Zm-5-6h1v1h2v2h1v1h-3v-3h-1v-1Zm-2,14v2h-1v1h-2v-1h-1v-2h-1v-2h6v2h-1Zm2-8v4h-8v-4h8Zm-7-4h1v-2h1v-1h2v1h1v2h1v2h-6v-2Zm-5,1h1v-2h2v-1h1v1h-1v3h-3v-1Zm-1,7v-4h3v4h-3Zm2,5v-2h-1v-1h3v3h1v1h-1v-1h-2Zm14-2v2h-2v1h-1v-1h1v-3h3v1h-1Z" />
    </Icon>
  );
}

// Social media icons with names for easy mapping
export const socialIcons = {
  github: GitHubIcon,
  linkedin: LinkedInIcon,
  x: XIcon,
  discord: DiscordIcon,
  medium: EmailIcon, // Using email icon as placeholder for Medium
};

// Navigation icons
export const navIcons = {
  externalLink: ExternalLinkIcon,
  hamburger: HamburgerIcon,
  close: CloseIcon,
};

// Action icons
export const actionIcons = {
  email: EmailIcon,
  file: FileIcon,
  writing: WritingIcon,
  image: ImageIcon,
  code: CodeIcon,
  live: LiveIcon,
};
