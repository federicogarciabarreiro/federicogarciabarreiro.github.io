import { UnitySVG } from "@/components/ui/icons";
import { ProjectType } from "../types";

export const ProjectList: ProjectType[] = [
  {
    icon:  <UnitySVG
    color="#47A248"
    size={16}
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
      }
    ],
    description:
      "Despiertas en una misteriosa habitación, junto a tu ser querido, pero algo está terriblemente mal. Debes explorar la habitación, resolver enigmas y abrir candados para escapar antes de que caiga la noche. Cada segundo cuenta, y el tiempo se agota rápidamente. ¿Podrás descubrir la verdad oculta detrás de esta pesadilla antes de que sea demasiado tarde?",
    imgUrl: "/images/sediento.webp",
    videoUrl: "/videos/sediento.mp4",
    githubUrl: "https://github.com/federicogarciabarreiro/",
    websiteUrl: "https://fedeegb.itch.io/sediento",
  },
  {
    icon:  <UnitySVG
    color="#47A248"
    size={16}
  />,
    title: "Creamy Land",
    subtitle: "Juego del tipo runner, diseñado de manera integral durante la carrera.",
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
        name: "Carrera",
        icon: (<></>),
      }
    ],
    description:
      "¡Encarna a los valientes hermanos Leafcream y Firecream en Creamy Land! Corre a través de un mundo helado lleno de desafíos para rescatar a la princesa Lovecream. Supera obstáculos, recoge premios y restaura la paz en este dulce reino. ¡Tu aventura comienza ahora!",
    imgUrl: "/images/sediento.webp",
    videoUrl: "/videos/sediento.mp4",
    githubUrl: "https://github.com/federicogarciabarreiro/",
    websiteUrl: "",
  }
];
