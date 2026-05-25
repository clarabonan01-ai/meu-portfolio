import React from 'react';
export default function HeroSection() {
  return (
    <section className="hero section" id="about">
      <div className="container hero__grid">
        <div className="hero__content">
          <p className="section-label">UX/UI &amp; Front-end Atelier</p>
          <h1 className="hero__title">
            Projetando e <br />
            <span>Desenvolvendo</span> <br />
            Experiências.
          </h1>
          <p className="hero__description">
            Combino desenvolvimento front-end com pensamento em UX/UI para criar interfaces bonitas, funcionais e com propósito.
          </p>
          <div className="hero__actions">
            <button className="button button--primary" type="button">
              Projetos
            </button>
            <a className="button-link" href="#contact">
              Baixar CV
            </a>
          </div>
        </div>

        <div className="hero__visual">
          <div className="hero__image glass-card">
            <img
              src="../../imgs/clara.jpg"
              alt="Workspace with warm tones and a premium desk setup"
            />
          </div>
          <div className="hero__floating-card glass-card">
            <p className="hero__floating-label">Perfil</p>
            <h3>Interfaces com propósito <br />
                e código bem pensado</h3>
          </div>
        </div>
      </div>
    </section>
  );
}
