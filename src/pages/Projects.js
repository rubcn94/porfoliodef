import React from 'react';
import ProjectCard from '../components/ProjectCard';
import { projects } from '../utils/data';

const Projects = () => {
  return (
    <div className="projects">
      <h2>Mis Proyectos</h2>
      <div className="project-grid">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;