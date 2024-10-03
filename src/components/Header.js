import React from 'react';
import Navigation from './Navigation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

const Header = () => {
  return (
    <header>
      <div className="nav-container">
        <h1>Mi Portfolio</h1>
        <Navigation />
        <div className="social-icons">
          <a href="https://www.linkedin.com/in/tu-perfil" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a href="https://github.com/rubcn94" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;