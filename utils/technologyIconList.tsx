import { iconType } from "../types";
import {
  JavascriptSVG,
  MongoDBSVG
} from "../_components/ui/icons";

let color: string = "#9ca3af";
export const techonologyIconList: iconType[] = [
  {
    name: "JavaScript",
    icon: (
      <JavascriptSVG
        color={color}
        size={35}
      />
    ),
  },
  {
    name: "MongoDB",
    icon: (
      <MongoDBSVG
        color={color}
        size={35}
      />
    ),
  },
];
