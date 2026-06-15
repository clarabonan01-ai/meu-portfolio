import React, { useEffect, useState } from "react";
import { navLinks } from "../data/siteData";

export default function Navbar({ isDarkMode, setIsDarkMode }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState(navLinks[0].label);

  function toggleMenu() {
    setMenuOpen((current) => !current);
  }

  function closeMenu() {
    setMenuOpen(false);
  }

  // Função para alternar o tema guardando a escolha no navegador
  const toggleTheme = () => {
    setIsDarkMode((prevMode) => {
      const nextMode = !prevMode;
      // Salva 'dark' ou 'light' de acordo com o próximo estado
      localStorage.setItem("theme", nextMode ? "dark" : "light");
      return nextMode;
    });
  };

  useEffect(() => {
    function handleScroll() {
      const sections = navLinks
        .map((link) => {
          const sectionId = link.href.replace("#", "");
          return document.getElementById(sectionId);
        })
        .filter(Boolean);

      const scrollPosition = window.scrollY + 120;

      for (const section of sections) {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;

        if (
          scrollPosition >= sectionTop &&
          scrollPosition < sectionTop + sectionHeight
        ) {
          const matchedLink = navLinks.find(
            (link) => link.href === `#${section.id}`,
          );

          if (matchedLink && matchedLink.label !== activeLink) {
            setActiveLink(matchedLink.label);
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [activeLink]);

  return (
    <nav className="navbar">
      <div className="container navbar__content">
        <div className="brand">Clara Bonan Vianna</div>

        <div className="navbar__links">
          {navLinks.map((link) => (
            <a
              key={link.label}
              className={
                activeLink === link.label
                  ? "navbar__link navbar__link--active"
                  : "navbar__link"
              }
              href={link.href}
            >
              {link.label}
            </a>
          ))}
        </div>

        <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
          <button
            onClick={toggleTheme}
            className="theme-toggle"
            type="button"
            aria-label="Trocar tema"
          >
          </button>

          <button
            className="navbar__menu-button"
            onClick={toggleMenu}
            aria-label="Abrir menu"
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            type="button"
          >
            {menuOpen ? "✕" : "☰"}
          </button>

          <button
            className="button button--primary button--small"
            type="button"
          >
            Entre em Contato
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="navbar__mobile-menu" id="mobile-navigation">
          {navLinks.map((link) => (
            <a
              key={link.label}
              className={
                activeLink === link.label
                  ? "navbar__mobile-link navbar__mobile-link--active"
                  : "navbar__mobile-link"
              }
              href={link.href}
              onClick={closeMenu}
            >
              {link.label}
            </a>
          ))}

          <button
            className="button button--primary navbar__mobile-button"
            type="button"
          >
            Entre em Contato
          </button>
        </div>
      )}
    </nav>
  );
}
