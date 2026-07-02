"use client";

import { useEffect, useState, createContext } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { SkillsContextProvider } from "../Hooks/SkillsContextProvider";

export const ThemeContext = createContext();

export default function Providers({ children }) {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setTheme(savedTheme);
    }
    
    AOS.init();
    AOS.refresh();
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <SkillsContextProvider>
        {children}
      </SkillsContextProvider>
    </ThemeContext.Provider>
  );
}
