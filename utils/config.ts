// Site-wide configuration
export const siteConfig = {
  // Basic site info
  name: "Ken Nersisyan",
  title: "Ken's Portfolio",
  description: "Portfolio website of front-end engineer Ken Nersisyan",
  url: "https://www.ken.engineer",
  domain: "ken.engineer",

  // Contact information
  email: "karapet.nersisyan@yahoo.com",

  // SEO images
  ogImage: "/assets/seo-img.png",

  // External links
  externalLinks: {
    credly:
      "https://www.credly.com/badges/46c47d7c-d818-4d7f-b808-5d04ad3053b9/public_url",
    frontendMentor: "https://github.com/kens-visuals/frontend-mentor",
  },

  // Navigation
  navigation: {
    brand: "Ken.Engineer",
    sections: [
      { name: "Skills", path: "/#skills" },
      { name: "Projects", path: "/#projects" },
      { name: "Contact", path: "/#contact" },
    ],
  },

  // Resume
  resume: {
    path: "/resume.pdf",
    name: "Resume",
  },

  // Footer
  footer: {
    copyright: "Designed and Developed by Ken Nersisyan",
  },
};

// Social media links
export const socialLinks = {
  github: "https://github.com/kens-visuals",
  linkedin: "https://www.linkedin.com/in/karo-nersisyan-135118129/",
  x: "https://x.com/kens_visuals",
  discord: "https://discordapp.com/users/kens_visuals#0900",
};

// Social media data for components
export const socials = [
  { name: "GitHub", link: socialLinks.github },
  { name: "LinkedIn", link: socialLinks.linkedin },
  { name: "X", link: socialLinks.x },
  { name: "Discord", link: socialLinks.discord },
];

// Menu items for navigation
export const menuItems = [
  { name: "Skills", path: "/#skills" },
  { name: "Projects", path: "/#projects" },
  { name: "Contact", path: "/#contact" },
  { name: "Resume", path: "/resume.pdf" },
];

// Contact information
export const contactInfo = {
  email: siteConfig.email,
  linkedin: socialLinks.linkedin,
  availability: "Available for new projects",
};
