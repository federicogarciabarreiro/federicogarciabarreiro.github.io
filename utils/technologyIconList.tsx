import { iconType } from "../types";
import React from "react";

import { Card } from "@nextui-org/card";
import { CPPIcon, CSharpIcon,
         GDScriptIcon,
         GodotIcon,
         UnityIcon,
         UnrealIcon,
         VSCodeIcon,
         GameIcon,
         WEBFrontendIcon, 
         ReactIcon,
         BootstrapIcon, 
         HTMLIcon, 
         CSSIcon,
         JavascriptIcon, 
         WEBBackendIcon,
         FastAPIIcon, 
         PythonIcon, 
         SupabaseIcon, 
         OpenAIIcon, 
         RaspberryPIIcon, 
         ApplicationIcon,
         NetbeansIcon, 
         JavaIcon, 
         JsonIcon, 
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
         fixedWidth={true}
         transform="shrink-4"
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
         fixedWidth={true}
         transform="shrink-2"
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
          fixedWidth={true}
          transform="shrink-4"
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
          fixedWidth={true}
          transform="shrink-4"
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
          fixedWidth={true}
          transform="shrink-4"
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
          fixedWidth={true}
          transform="shrink-4"
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
          fixedWidth={true}
          transform="shrink-4"
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
          fixedWidth={true}
          transform="shrink-4"
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
          fixedWidth={true}
          transform="shrink-4"
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
          fixedWidth={true}
          transform="shrink-4"
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
          fixedWidth={true}
          transform="shrink-4"
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
          fixedWidth={true}
          transform="shrink-4"
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
          fixedWidth={true}
          transform="shrink-4"
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
          fixedWidth={true}
          transform="shrink-4"
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
          fixedWidth={true}
          transform="shrink-4"
        />
      </Card>
    ),
  }
];
