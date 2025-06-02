import { useEffect, createContext, useState } from "react";
import "./Styles/App.scss";
import LandingPage from "./Views/LandingPage";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import { Routes, Route } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

import { SkillsContextProvider } from "./Hooks/SkillsContextProvider";

export const ThemeContext = createContext();

const App = () => {
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    return savedTheme || "dark";
  });

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  useEffect(() => {
    document.body.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <SkillsContextProvider>
        <div className="app-Container" data-theme={theme}>
          <Header />
          <main>
            <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route
                path="*"
                element={<h1 style={{ textAlign: "center" }}>Nothing here</h1>}
              />
            </Routes>
          </main>
          <Footer />
        </div>
      </SkillsContextProvider>
    </ThemeContext.Provider>
  );
};

export default App;
