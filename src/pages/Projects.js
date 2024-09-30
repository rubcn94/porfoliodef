import React, { useState, useEffect } from 'react';
import { fetchGitHubProjects } from '../utils/github';
import 'devicon/devicon.min.css';

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function loadProjects() {
      const githubProjects = await fetchGitHubProjects();
      setProjects(githubProjects);
      setIsLoading(false);
    }
    loadProjects();
  }, []);

  if (isLoading) {
    return <div>Loading projects...</div>;
  }

  return (
    <div className="projects">
      <h2>Mis Proyectos</h2>
      <div className="project-container">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <h3>{project.name}</h3>
            <p>{project.description}</p>
            {project.language && (
              <p>
                <i className={`devicon-${project.language.toLowerCase()}-plain colored`}></i>
                {project.language}
              </p>
            )}
            <p>Stars: {project.stars}</p>
            <a href={project.url} target="_blank" rel="noopener noreferrer" className="project-link">
              Ver en GitHub
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;