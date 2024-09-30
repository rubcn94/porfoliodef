import React from 'react';
import SkillBar from '../components/SkillBar';
import { skills } from '../utils/data';

const Skills = () => {
  return (
    <div className="skills">
      <h2>Mis Habilidades</h2>
      {skills.map((skill, index) => (
        <SkillBar key={index} {...skill} />
      ))}
    </div>
  );
};

export default Skills;