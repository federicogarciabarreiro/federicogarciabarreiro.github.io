import { ReactSVG, UnitySVG } from "@/components/ui/icons";
import { ProjectType } from "../types";
import { GodotIcon, GodotSVG } from "@/components/icons";

export const ProjectList: ProjectType[] = [
  {
    icon:  <ReactSVG
    color="#FFFFFF"
    size={22}
  />,
    title: "Porfolio",
    subtitle: "Porfolio actualizado al año 2024.",
    technologies: [
      {
        name: "Visual Studio Code",
        icon: (<></>),
      },
      {
        name: "React",
        icon: (<></>),
      },
      {
        name: "Astro",
        icon: (<></>),
      },
      {
        name: "Typescript",
        icon: (<></>),
      },
      {
        name: "Tailwind",
        icon: (<></>),
      },
      {
        name: "GitHub",
        icon: (<></>),
      },
      {
        name: "GitHub Pages",
        icon: (<></>),
      }
    ],
    description:
      "Porfolio actualizado al año 2024.",
    imgUrl: "/images/porfolio.webp",
    videoUrl: "",
    githubUrl: "https://github.com/federicogarciabarreiro/federicogarciabarreiro.github.io",
    websiteUrl: "https://federicogarciabarreiro.github.io/",
  },
  {
    icon:  <GodotSVG
    color="#FFFFFF"
    size={25}
  />,
    title: "Sediento",
    subtitle: "Juego del tipo puzzle, diseñado para la Indie Spain Jam 2023.",
    technologies: [
      {
        name: "Godot Engine",
        icon: (<></>),
      },
      {
        name: "Godot Script",
        icon: (<></>),
      },
      {
        name: "Game Jam",
        icon: (<></>),
      },
      {
        name: "Diseño de personajes",
        icon: (<></>),
      },
      {
        name: "Animacion",
        icon: (<></>),
      },
      {
        name: "Aseprite",
        icon: (<></>),
      },
      {
        name: "GitHub",
        icon: (<></>),
      }
    ],
    description:
      "Despiertas en una misteriosa habitación, junto a tu ser querido, pero algo está terriblemente mal. Debes explorar la habitación, resolver enigmas y abrir candados para escapar antes de que caiga la noche. Cada segundo cuenta, y el tiempo se agota rápidamente. ¿Podrás descubrir la verdad oculta detrás de esta pesadilla antes de que sea demasiado tarde?",
    imgUrl: "/images/sediento_0.webp",
    videoUrl: "",
    githubUrl: "https://github.com/federicogarciabarreiro/",
    websiteUrl: "https://fedeegb.itch.io/sediento",
  },
  {
    icon:  <UnitySVG
    color="#FFFFFF"
    size={22}
  />,
    title: "Sparkle",
    subtitle: "Juego del tipo runner 2D, diseñado de manera integral durante la carrera.",
    technologies: [
      {
        name: "Unity Engine",
        icon: (<></>),
      },
      {
        name: "Lenguaje C#",
        icon: (<></>),
      },
      {
        name: "LINQ",
        icon: (<></>),
      },
      {
        name: "Design Patterns",
        icon: (<></>),
      },
      {
        name: "Diseño y modelado de personajes",
        icon: (<></>),
      },
      {
        name: "Animacion",
        icon: (<></>),
      },
      {
        name: "3DS Max",
        icon: (<></>),
      },
      {
        name: "MS Visual Studio",
        icon: (<></>),
      },
      {
        name: "GitHub",
        icon: (<></>),
      }
    ],
    description:
      "¡Sumérgete en Sparkle y ayuda a dos hermanos separados por fuerzas desconocidas! Con el poder de manipular el tiempo y el espacio, enfrentarán desafíos sobrenaturales y oscuros enemigos en su misión por reunirse y cambiar el destino del universo. ¡La aventura comienza ahora!",
    imgUrl: "/images/sparkle_0.webp",
    videoUrl: "",
    githubUrl: "https://github.com/federicogarciabarreiro/",
    websiteUrl: "",
  },
  {
    icon:  <UnitySVG
    color="#FFFFFF"
    size={22}
  />,
    title: "Creamy Land",
    subtitle: "Juego del tipo plataforma 3D, diseñado como proyecto final de grado para la carrera de videojuegos en equipo.",
    technologies: [
      {
        name: "Unity Engine",
        icon: (<></>),
      },
      {
        name: "Lenguaje C#",
        icon: (<></>),
      },
      {
        name: "Diseño de personajes",
        icon: (<></>),
      },
      {
        name: "Animacion",
        icon: (<></>),
      },
      {
        name: "Adobe Illustrator",
        icon: (<></>),
      },
      {
        name: "MS Visual Studio",
        icon: (<></>),
      },
      {
        name: "GitHub",
        icon: (<></>),
      }
    ],
    description:
      "¡Encarna a los valientes hermanos Leafcream y Firecream en Creamy Land! Corre a través de un mundo helado lleno de desafíos para rescatar a la princesa Lovecream. Supera obstáculos, recoge premios y restaura la paz en este dulce reino. ¡Tu aventura comienza ahora!",
    imgUrl: "/images/creamyland_0.webp",
    videoUrl: "",
    githubUrl: "https://github.com/federicogarciabarreiro/",
    websiteUrl: "",
  },
  {
    icon:  <UnitySVG
    color="#FFFFFF"
    size={22}
  />,
    title: "Switch",
    subtitle: "Juego del tipo runner 3D, diseñado en grupo durante mi carrera en el año 2020.",
    technologies: [
      {
        name: "Unity Engine",
        icon: (<></>),
      },
      {
        name: "Lenguaje C#",
        icon: (<></>),
      },
      {
        name: "MS Visual Studio",
        icon: (<></>),
      },
      {
        name: "GitHub",
        icon: (<></>),
      }
    ],
    description:
      "¡Desafía tus reflejos en Switch! Controla una nave que se desplaza a toda velocidad a través de un tubo infinito, cambiando de dirección con un solo clic. El entorno responde al ritmo de la música, creando una experiencia visual y auditiva única. ¿Cuánto tiempo podrás mantener el ritmo y esquivar los obstáculos?",
    imgUrl: "/images/switch_0.webp",
    videoUrl: "",
    githubUrl: "https://github.com/federicogarciabarreiro/",
    websiteUrl: "",
  }
];
