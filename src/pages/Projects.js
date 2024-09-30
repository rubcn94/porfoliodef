import React from 'react';

const Projects = () => {
  return (
    <div className="projects">
      <h2>Mis Proyectos</h2>
      <div className="project-container">
        <div className="project-card">
          <h3>Proyecto 1</h3>
          <p>Una aplicación web innovadora para gestión de tareas utilizando React y Node.js.</p>
          <a href="#" target="_blank" rel="noopener noreferrer">Ver Proyecto</a>
        </div>
        <div className="project-card">
          <h3>Proyecto 2</h3>
          <p>Plataforma de e-commerce desarrollada con tecnologías modernas y enfoque en UX.</p>
          <a href="#" target="_blank" rel="noopener noreferrer">Ver Proyecto</a>
        </div>
        <div className="project-card">
          <h3>Proyecto 3</h3>
          <p>Sistema de análisis de datos en tiempo real utilizando Python y machine learning.</p>
          <a href="#" target="_blank" rel="noopener noreferrer">Ver Proyecto</a>
        </div>
      </div>
    </div>
  );
};

export default Projects;