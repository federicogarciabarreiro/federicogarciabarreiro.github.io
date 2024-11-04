export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "",
  description: "",
  navItems: [
    {
      label: "Sobre mi",
      href: "/",
    },
    {
      label: "Proyectos",
      href: "/projects",
    },
    {
      label: "Contacto",
      href: "/contact",
    }
  ],
  navMenuItems:  [
    {
      label: "Sobre mi",
      href: "/",
    },
    {
      label: "Proyectos",
      href: "/projects",
    },
    {
      label: "Contacto",
      href: "/contact",
    }
  ],
  links: {
    github: "https://github.com/federicogarciabarreiro",
    linkedin: "https://www.linkedin.com/in/fedegarbar",
    instagram: "https://www.instagram.com/fedeegb",
    itchio: "https://fedeegb.itch.io"
  },
};
