"use client";
import React from "react";
import { useTheme } from "next-themes";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();
  return (
    <button
      onClick={() => (theme == "dark" ? setTheme("light") : setTheme("dark"))}
    >
      {theme === "light" ? (
        <InstagramIcon sx={{ color: "red" }} />
      ) : (
        <LinkedInIcon sx={{ color: "red" }} />
      )}
    </button>
  );
};

export default ThemeToggle;
