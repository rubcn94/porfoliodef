import React from 'react';
import { motion } from 'framer-motion';

const EnhancedProjectCard = ({ title, description, image, link, technologies }) => {
  return (
    <motion.div
      className="project-card"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <img src={image} alt={title} className="project-image" />
      <h3>{title}</h3>
      <p>{description}</p>
      <div className="technologies">
        {technologies.map((tech, index) => (
          <motion.img
            key={index}
            src={tech.icon}
            alt={tech.name}
            title={tech.name}
            className="tech-icon"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          />
        ))}
      </div>
      <a href={link} target="_blank" rel="noopener noreferrer" className="project-link">Ver proyecto</a>
    </motion.div>
  );
};

export default EnhancedProjectCard;