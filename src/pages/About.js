import React from 'react';
import TestimonialCard from '../components/TestimonialCard';
import { testimonials } from '../utils/data';
import { AnimatedComponent } from '../components/AnimatedComponent';

const About = () => {
  return (
    <AnimatedComponent>
      <div className="about">
        <h2>Sobre mí</h2>
        <p>Soy un desarrollador fullstack con experiencia en React, Node.js y bases de datos SQL y NoSQL. Me apasiona crear aplicaciones web eficientes y escalables.</p>

        <h3>Testimonios</h3>
        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>
      </div>
    </AnimatedComponent>
  );
};

export default About;