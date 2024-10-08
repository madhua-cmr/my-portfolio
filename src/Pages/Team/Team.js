import React from 'react';
import './Team.css';
import vive from '../../assets/viveka.jpg'
import madhu from '../../assets/madhu.jpg'
import abi from '../../assets/abi.jpg'
import swetha from '../../assets/swetha.jpg'
const teamData = [
  {
    name: 'Madhumitha A',
    role: 'Full-Stack Developer',
    image: madhu,
    description: 'Expert in developing web applications using MERN stack. Passionate about problem-solving and coding.',
  },
  {
    name: 'Viveka C',
    role: 'UI/UX Designer',
    image: vive,
    description: 'Creative designer with a passion for crafting intuitive and user-friendly interfaces for web and mobile applications.',
  },
  {
    name: 'Abinaya K',
    role: 'Backend Developer',
    image: abi,
    description: 'Specializes in creating scalable and efficient backend systems using Node.js, MongoDB, and Express.',
  },
  {
    name: 'Swetha S',
    role: 'Frontend Developer',
    image: swetha,
    description: 'Focused on creating responsive, visually appealing user interfaces with expertise in React and Angular.',
  },
];

const Team = () => {
  return (
    <div className="team-container">
      <h1>Meet Our Team</h1>
      <div className="team-grid">
        {teamData.map((member, index) => (
          <div className="team-card" key={index}>
            <img src={member.image} alt={member.name} className="team-image" />
            <div className="team-content">
              <h2>{member.name}</h2>
              <h3>{member.role}</h3>
              <p>{member.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
