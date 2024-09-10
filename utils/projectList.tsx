import { ExpressSVG, MongoDBSVG, MongooseSVG, SwaggerSVG, TypescriptSVG } from "@/components/ui/icons";
import { ProjectType } from "../types";

export const ProjectList: ProjectType[] = [
  {
    icon:  <TypescriptSVG
    color="#3178C6"
    size={16}
  />,
    title: "Shop API",
    subtitle: "E-commerse back-end",
    technologies: [
      {
        name: "Express",
        icon: (
          <ExpressSVG
            color="#000000"
            size={16}
          />
        ),
      },
      {
        name: "MongoDB",
        icon: (
          <MongoDBSVG
            color="#47A248"
            size={16}
          />
        ),
      },
      {
        name: "Mongoose",
        icon: (
          <MongooseSVG
            color="#880000"
            size={16}
          />
        ),
      },
      {
        name: "Swagger",
        icon: (
          <SwaggerSVG
            color="#85EA2D"
            size={16}
          />
        ),
      },
    ],
    description:
      "Backed e-commerce project that allows to manage users, categories, coupons and products with the endpoints ready to play with. Includes swagger docs.",
    imgUrl: "/videos/shop-api.webp",
    videoUrl: "",
    githubUrl: "https://github.com/leomirandaa/shop-API.git",
    websiteUrl: "NONE",
  }
];
