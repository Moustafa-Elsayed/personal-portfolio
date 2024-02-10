"use client";
import React from "react";
import { useTheme } from "next-themes";
import NightlightRoundIcon from '@mui/icons-material/NightlightRound';
import LightModeIcon from '@mui/icons-material/LightMode';
const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();
  return (
    <button
      onClick={() => (theme == "dark" ? setTheme("light") : setTheme("dark"))}
    >
      {theme === "light" ? (
        <LightModeIcon sx={{ color: "black" }} />
      ) : (
        <NightlightRoundIcon sx={{ color: "white" }} />
      )}
    </button>
  );
};
           
export default ThemeToggle;
