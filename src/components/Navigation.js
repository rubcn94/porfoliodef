import React from 'react';
import { NavLink } from 'react-router-dom';
import { AnimatedComponent } from './AnimatedComponent';

const Navigation = () => {
  return (
    <AnimatedComponent>
      <nav>
        <ul>
          <li><NavLink to="/">Inicio</NavLink></li>
          <li><NavLink to="/about">Sobre mí</NavLink></li>
          <li><NavLink to="/projects">Proyectos</NavLink></li>
          <li><NavLink to="/skills">Habilidades</NavLink></li>
          <li><NavLink to="/blog">Blog</NavLink></li>
          <li><NavLink to="/contact">Contacto</NavLink></li>
        </ul>
      </nav>
    </AnimatedComponent>
  );
};

export default Navigation;