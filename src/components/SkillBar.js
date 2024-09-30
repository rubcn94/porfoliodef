import React from 'react';

const SkillBar = ({ skill, percentage }) => {
  return (
    <div className="skill-bar">
      <span className="skill-name">{skill}</span>
      <div className="skill-progress">
        <div className="progress" style={{ width: `${percentage}%` }}></div>
      </div>
    </div>
  );
};

export default SkillBar;