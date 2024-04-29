import React, { useState } from "react";
import { Switch } from "@nextui-org/react";
import { MoonIcon } from "./MoonIcon";
import { SunIcon } from "./SunIcon";
import { useTheme } from "next-themes";

export default function ThemeSwitcher() {
  const [themeChanged, setThemeChanged] = useState(false);
  const { setTheme } = useTheme();

  const toggleTheme = () => {
    if (!themeChanged) {
      setTheme("dark");
      setThemeChanged(true);
    } else {
      setTheme("light");
      setThemeChanged(false);
    }
  };

  return (
    <Switch
      defaultSelected
      size="lg"
      color="secondary"
      thumbIcon={({ isSelected, className }) =>
        isSelected ? (
          <SunIcon className={className} />
        ) : (
          <MoonIcon className={className} />
        )
      }
      onChange={toggleTheme}
    >
    </Switch>
  );
}
