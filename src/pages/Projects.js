import React from 'react';
import EnhancedProjectCard from '../components/EnhancedProjectCard';
import { projects } from '../utils/data';

const Projects = () => {
  return (
    <div className="projects">
      <h2>Mis Proyectos</h2>
      <div className="project-grid">
        {projects.map((project, index) => (
          <EnhancedProjectCard key={index} {...project} />
        ))}
      </div>
      {/* Reemplazar los enlaces problemáticos con botones o enlaces válidos */}
      <button onClick={() => window.location.href = '/otro-proyecto'}>Otro Proyecto</button>
      <button onClick={() => alert('Click en proyecto')}>Acción aquí</button>
      {/* Si realmente necesitas un enlace oculto, usa un href válido */}
      <a href="/" style={{display: 'none'}}>Link oculto</a>
    </div>
  );
};

export default Projects;