import React from 'react';

export default function ProjectCard({ project, className = '' }) {
  return (
    <article className={`project-card ${className}`.trim()}>
      <div className="project-card__image-wrap">
        <img className="project-card__image" src={project.image} alt={project.alt} />
      </div>

      <div className="project-card__content glass-card">
        <div>
          <p className="project-card__eyebrow">{project.category}</p>
          <h3 className="project-card__title">{project.title}</h3>
        </div>
        <span className="project-card__year">{project.year}</span>
      </div>
    </article>
  );
}
