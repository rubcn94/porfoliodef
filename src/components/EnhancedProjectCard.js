import React from 'react';

const EnhancedProjectCard = ({ title, description, image, link, technologies }) => {
  return (
    <div className="project-card">
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
      <div className="technologies">
        {technologies.map((tech, index) => (
          <span key={index} className="tech-tag">{tech}</span>
        ))}
      </div>
      <a href={link} target="_blank" rel="noopener noreferrer">Ver proyecto</a>
    </div>
  );
};

export default EnhancedProjectCard;