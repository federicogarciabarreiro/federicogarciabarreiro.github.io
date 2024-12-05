import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

{/*Determine tener un solo color, en este caso white, pero deje la logica preparada para interactuar con ambos por si fuera necesario...*/}

export const useIconColor = () => {
  const { resolvedTheme } = useTheme();
  const [iconColor, setIconColor] = useState((resolvedTheme === "light" ? "white" : "white"));

  useEffect(() => {
    setIconColor(resolvedTheme === "light" ? "white" : "white");
  }, [resolvedTheme]);

  return iconColor;
};
