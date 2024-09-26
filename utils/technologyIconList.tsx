import { iconType } from "../types";
import React from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUnity } from '@fortawesome/free-brands-svg-icons';
import { faCuttlefish } from '@fortawesome/free-brands-svg-icons';
import { Card } from "@nextui-org/card";

let color: string = "#9ca3af";
let cardSize = { width: "50px", height: "50px"};

export const techonologyIconList: iconType[] = [
  {
    name: "Unity",
    icon: (
      <Card style={cardSize}>
        <FontAwesomeIcon
          icon={faUnity}
          color={color}
          fixedWidth={true}
          size="1x"
          transform="shrink-4"
        />
      </Card>
    ),
  },
  {
    name: "C#",
    icon: (
      <Card style={cardSize}>
        <FontAwesomeIcon
          icon={faCuttlefish}
          color={color}
          fixedWidth={true}
          size="1x"
          transform="shrink-4"
        />
      </Card>
    ),
  },
  {
    name: "C#",
    icon: (
      <Card style={cardSize}>
        <FontAwesomeIcon
          icon={faCuttlefish}
          color={color}
          fixedWidth={true}
          size="1x"
          transform="shrink-4"
        />
      </Card>
    ),
  },
  {
    name: "C#",
    icon: (
      <Card style={cardSize}>
        <FontAwesomeIcon
          icon={faCuttlefish}
          color={color}
          fixedWidth={true}
          size="1x"
          transform="shrink-4"
        />
      </Card>
    ),
  },
  {
    name: "C#",
    icon: (
      <Card style={cardSize}>
        <FontAwesomeIcon
          icon={faCuttlefish}
          color={color}
          fixedWidth={true}
          size="1x"
          transform="shrink-4"
        />
      </Card>
    ),
  },
  {
    name: "C#",
    icon: (
      <Card style={cardSize}>
        <FontAwesomeIcon
          icon={faCuttlefish}
          color={color}
          fixedWidth={true}
          size="1x"
          transform="shrink-4"
        />
      </Card>
    ),
  },
  {
    name: "C#",
    icon: (
      <Card style={cardSize}>
        <FontAwesomeIcon
          icon={faCuttlefish}
          color={color}
          fixedWidth={true}
          size="1x"
          transform="shrink-4"
        />
      </Card>
    ),
  },
  {
    name: "C#",
    icon: (
      <Card style={cardSize}>
        <FontAwesomeIcon
          icon={faCuttlefish}
          color={color}
          fixedWidth={true}
          size="1x"
          transform="shrink-4"
        />
      </Card>
    ),
  }
];
