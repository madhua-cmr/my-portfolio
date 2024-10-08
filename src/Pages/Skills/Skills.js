import React from 'react';
import './Skills.css';

//Import your skill images
import cImage from '../../assets/c.png';
import javaImage from '../../assets/java.png';
import htmlImage from '../../assets/html.png';
import cssImage from '../../assets/css.png';
import jsImage from '../../assets/js.png';
import reactImage from '../../assets/react.png';
import nodeImage from '../../assets/node.png';
import mongoImage from '../../assets/mongodb.png';

const Skills = () => {
  const skills = [
    { name: 'C Programming', image: cImage },
    { name: 'Java', image: javaImage },
    { name: 'HTML', image: htmlImage },
    { name: 'CSS', image: cssImage },
    { name: 'JavaScript', image: jsImage },
    { name: 'React', image: reactImage },
    { name: 'Node.js', image: nodeImage },
    { name: 'MongoDB', image: mongoImage },
  ];

  return (
    <div className="skills-container">
      <h1>My Skills</h1>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div className="skill-card" key={index}>
            <img src={skill.image} alt={skill.name} className="skill-image" />
            <h3>{skill.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
