import React from 'react';

const ProjectCard = ({ title, description, image, link }) => {
  return (
    <div className="project-card">
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
      <a href={link} target="_blank" rel="noopener noreferrer">Ver proyecto</a>
    </div>
  );
};

export default ProjectCard;