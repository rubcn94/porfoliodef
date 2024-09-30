import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav>
      <ul>
        <li><NavLink to="/">Inicio</NavLink></li>
        <li><NavLink to="/about">Sobre mí</NavLink></li>
        <li><NavLink to="/projects">Proyectos</NavLink></li>
        <li><NavLink to="/skills">Habilidades</NavLink></li>
        <li><NavLink to="/contact">Contacto</NavLink></li>
      </ul>
    </nav>
  );
};

export default Navigation;