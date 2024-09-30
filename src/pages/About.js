import React from 'react';
import { motion } from 'framer-motion';
import TestimonialCard from '../components/TestimonialCard';
import { testimonials } from '../utils/data';

const About = () => {
  return (
    <section className="about">
      <h2>Sobre Mí</h2>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        Soy un desarrollador fullstack apasionado por crear soluciones innovadoras...
      </motion.p>

      <h3>Testimonios</h3>
      <div className="testimonials-grid">
        {testimonials.map((testimonial, index) => (
          <TestimonialCard key={index} {...testimonial} />
        ))}
      </div>
    </section>
  );
};

export default About;