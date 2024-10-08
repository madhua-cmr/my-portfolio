import React from 'react';
import './About.css'; // Make sure to create or modify this CSS file for styles
import profilePhoto from '../../assets/madhu.jpg'; // Replace with your actual photo path

const About = () => {
  return (
    <div className="about-container">
      <h1 className="about-title">About Me</h1>
      <div className="about-card">
      <img src={profilePhoto} alt="Madhumitha" className="profile-photo" />
        <div className="about-description">
          <p>
            Hi! I'm Madhumitha, a passionate full-stack developer currently pursuing a BTech degree in Information Technology at Bannari Amman Institute of Technology. I have a strong foundation in web development and a keen interest in creating dynamic and responsive web applications.
          </p>
          <p>
            My journey in technology has equipped me with skills in various programming languages and frameworks, including JavaScript, React, Node.js, and MongoDB. I thrive on solving complex problems and am always eager to learn new technologies to enhance my skill set.
          </p>
          <p>
            When I’m not coding, I love exploring new ideas and collaborating with others in the tech community. I'm committed to continuous learning and growth in this ever-evolving field.
          </p>
        </div>
      </div>
      
    </div>
  );
};

export default About;
