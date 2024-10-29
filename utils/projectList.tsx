import { PythonSVG, ReactSVG, UnitySVG } from "@/components/ui/icons";
import { ProjectType } from "../types";
import { GodotSVG } from "@/components/icons";

export const ProjectList: ProjectType[] = [
  {
    icon:  <ReactSVG
    color="#FFFFFF"
    size={25}
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
        name: "Vercel",
        icon: (<></>),
      },
      {
        name: "Next.js",
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
      "Porfolio personal desarrollado en React utilizando componentes propios de la libreria NextUI, actualizado al año 2024. El sistema de gestion de contacto se ejecuta en un servidor Next.js alojado en Vercel.",
    imgUrl: "/images/porfolio.webp",
    videoUrl: "",
    githubUrl: "https://github.com/federicogarciabarreiro/federicogarciabarreiro.github.io",
    websiteUrl: "https://federicogarciabarreiro.github.io/",
  },{
    icon:  <PythonSVG
    color="#FFFFFF"
    size={25}
  />,
    title: "Servidor",
    subtitle: "Backend para alojar informacion y realizar solicitudes a diferentes servicios relacionados con los proyectos, actualizado al año 2024.",
    technologies: [
      {
        name: "Visual Studio Code",
        icon: (<></>),
      },
      {
        name: "FastAPI",
        icon: (<></>),
      },
      {
        name: "Python",
        icon: (<></>),
      },
      {
        name: "Uvicorn",
        icon: (<></>),
      },
      {
        name: "Supabase",
        icon: (<></>),
      },
      {
        name: "GitHub",
        icon: (<></>),
      },
      {
        name: "GitHub Codespaces",
        icon: (<></>),
      },
      {
        name: "Vercel",
        icon: (<></>),
      }
    ],
    description:
      "Backend que permite alojar informacion; como datos de usuarios, sistemas de ranking y acciones tomadas por cada jugador. Ademas gestiona solicitudes a diferentes servicios relacionados con cada proyecto. Actualizado al año 2024 y alojado en Vercel.",
    imgUrl: "/images/backend_0.webp",
    videoUrl: "",
    githubUrl: "https://github.com/federicogarciabarreiro/_FastAPIPythonBackendProjects",
    websiteUrl: "https://fast-api-python-backend-one.vercel.app",
  },
  {
    icon:  <UnitySVG
    color="#FFFFFF"
    size={25}
  />,
    title: "Backoffice",
    subtitle: "Backoffice diseñado para realizar operaciones de lectura/escritura a traves de la implementacion del Backend FastAPIPython, actualizado al año 2024.",
    technologies: [
      {
        name: "Visual Studio Code",
        icon: (<></>),
      },
      {
        name: "Unity",
        icon: (<></>),
      },
      {
        name: "C#",
        icon: (<></>),
      },
      {
        name: "UnityWebRequest",
        icon: (<></>),
      },
      {
        name: "GitHub",
        icon: (<></>),
      }
    ],
    description:
      "Backend que permite alojar informacion; como datos de usuarios, sistemas de ranking y acciones tomadas por cada jugador. Ademas gestiona solicitudes a diferentes servicios relacionados con cada proyecto. Actualizado al año 2024 y alojado en Vercel.",
    imgUrl: "/images/backoffice_0.webp",
    videoUrl: "",
    githubUrl: "https://github.com/federicogarciabarreiro/_UnityBackofficeProjects",
    websiteUrl: "",
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
