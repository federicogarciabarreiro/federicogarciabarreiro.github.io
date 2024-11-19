import { iconType } from "../types";
import React from "react";

import { Card } from "@nextui-org/card";
import { CSharpIcon,
         GDScriptIcon,
         GodotIcon,
         UnityIcon,
         VSCodeIcon,
         ReactIcon,
         HTMLIcon, 
         CSSIcon,
         JavascriptIcon,
         FastAPIIcon, 
         PythonIcon, 
         SupabaseIcon, 
         OpenAIIcon,
         NetbeansIcon, 
         JavaIcon,
         GMakerIcon
   } from "@/components/icons";

let color: string = "#9ca3af";

const cardStyle = {
  width: "50px",
  height: "50px",
  backgroundColor: "rgba(0, 0, 0, 0)",
  boxShadow: "none",
  display: "flex",
  justifyContent: "center",
  alignItems: "center"
};

export const techonologyIconList: iconType[] = [
  {
    name: "Unity",
    icon: (
      <Card style={cardStyle}>
      <UnityIcon 
         color={color}
         transform="scale(0.25)"
       />
     </Card>
    ),
  },
  {
    name: "C#",
    icon: (
      <Card style={cardStyle}>
      <CSharpIcon 
         color={color}
         transform="scale(0.5)"
       />
     </Card>
    ),
  },
  {
    name: "Godot",
    icon: (
      <Card style={cardStyle}>
       <GodotIcon 
          color={color}
          transform="scale(0.25)"
        />
      </Card>
    ),
  },
  {
    name: "GDScript",
    icon: (
      <Card style={cardStyle}>
       <GDScriptIcon 
          color={color}
          transform="scale(0.25)"
        />
      </Card>
    ),
  },   
  {
    name: "React",
    icon: (
      <Card style={cardStyle}>
       <ReactIcon 
          color={color}
          transform="scale(0.25)"
        />
      </Card>
    ),
  }, 
  {
    name: "HTML",
    icon: (
      <Card style={cardStyle}>
       <HTMLIcon 
          color={color}
          transform="scale(0.25)"
        />
      </Card>
    ),
  },
  {
    name: "CSS",
    icon: (
      <Card style={cardStyle}>
       <CSSIcon 
          color={color}
          transform="scale(0.25)"
        />
      </Card>
    ),
  },
  {
    name: "Javascript",
    icon: (
      <Card style={cardStyle}>
       <JavascriptIcon 
          color={color}
          transform="scale(0.25)"
        />
      </Card>
    ),
  },
  {
    name: "FastAPI",
    icon: (
      <Card style={cardStyle}>
       <FastAPIIcon 
          color={color}
          transform="scale(0.25)"
        />
      </Card>
    ),
  },
  {
    name: "Python",
    icon: (
      <Card style={cardStyle}>
       <PythonIcon 
          color={color}
          transform="scale(0.25)"
        />
      </Card>
    ),
  }, 
  {
    name: "OpenAI",
    icon: (
      <Card style={cardStyle}>
       <OpenAIIcon 
          color={color}
          transform="scale(0.25)"
        />
      </Card>
    ),
  },
  {
    name: "Supabase",
    icon: (
      <Card style={cardStyle}>
       <SupabaseIcon 
          color={color}
          transform="scale(0.25)"
        />
      </Card>
    ),
  },
  {
    name: "VSCode",
    icon: (
      <Card style={cardStyle}>
       <VSCodeIcon 
          color={color}
          transform="scale(0.25)"
        />
      </Card>
    ),
  },
  {
    name: "Netbeans",
    icon: (
      <Card style={cardStyle}>
       <NetbeansIcon 
          color={color}
          transform="scale(0.25)"
        />
      </Card>
    ),
  },
  {
    name: "Java",
    icon: (
      <Card style={cardStyle}>
       <JavaIcon 
          color={color}
          transform="scale(0.25)"
        />
      </Card>
    ),
  }
];
