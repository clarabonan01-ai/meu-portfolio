import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HeroSection from "./sections/HeroSection";
import ProjectsSection from "./sections/ProjectsSection";
import ServicesSection from "./sections/ServicesSection";
import ContactSection from "./sections/ContactSection";

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    // Busca se já existe um tema salvo no navegador
    const savedTheme = localStorage.getItem("theme");

    // Se o usuário já escolheu algo antes, usa essa escolha
    if (savedTheme) {
      return savedTheme === "dark";
    }

    // Se for a primeira vez acessando, o padrão continua sendo escuro (true)
    return true;
  });

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, [isDarkMode]);

  return (
    <>
      <Navbar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />

      <main className="page-shell">
        <HeroSection />
        <ProjectsSection />
        <ServicesSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
