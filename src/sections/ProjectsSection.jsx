import React from 'react';
import ProjectCard from '../components/ProjectCard';
import { projects } from '../data/siteData';

export default function ProjectsSection() {
  return (
    <section className="projects section" id="work">
      <div className="container">
        <div className="section-head section-head--split">
          <div>
            <h2 className="section-title">Projetos</h2>
          </div>
        </div>

        <div className="projects__grid">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} className={project.layoutClass} />
          ))}
        </div>
      </div>
    </section>
  );
}
