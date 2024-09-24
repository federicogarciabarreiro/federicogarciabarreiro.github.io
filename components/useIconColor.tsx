import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

export const useIconColor = () => {
  const { resolvedTheme } = useTheme();
  const [iconColor, setIconColor] = useState((resolvedTheme === "light" ? "white" : "black"));

  useEffect(() => {
    setIconColor(resolvedTheme === "light" ? "black" : "white");
  }, [resolvedTheme]);

  return iconColor;
};
