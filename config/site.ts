export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "",
  description: "",
  navItems: [
    {
      label: "Sobre mi",
      href: "/about",
    },
    {
      label: "Estudios",
      href: "/studies",
    },
    {
      label: "Trabajos",
      href: "/jobs",
    },
    {
      label: "Contacto",
      href: "/contact",
    }
  ],
  navMenuItems: [
    {
      label: "Profile",
      href: "/profile",
    }
  ],
  links: {
    github: "https://github.com/federicogarciabarreiro",
    linkedin: "https://www.linkedin.com/in/fedegarbar",
    instagram: "https://www.instagram.com/fedeegb",
  },
};
