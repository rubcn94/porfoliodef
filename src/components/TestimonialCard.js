import React from 'react';

const TestimonialCard = ({ name, company, text }) => {
  return (
    <div className="testimonial">
      <p>{text}</p>
      <p><strong>{name}</strong>, {company}</p>
    </div>
  );
};

export default TestimonialCard;