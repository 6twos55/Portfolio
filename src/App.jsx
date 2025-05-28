import React, { useEffect } from 'react';
import "./Styles/App.scss";
import LandingPage from "./Views/LandingPage";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import { Routes, Route } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

import { SkillsContextProvider } from "./Hooks/SkillsContextProvider";

const App = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <SkillsContextProvider>
      <div className="app-Container">
        <Header />
        <main>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="*" element = {<h1 style={{textAlign: 'center'}}>Nothing here</h1>}/>
        </Routes>
        </main>
        <Footer />
      </div>
    </SkillsContextProvider>
  );
}

export default App;
