import React from 'react';
import './Home.css';
import resume from '../../assets/Madhumitha_A_Resume.pdf'; 
import profilePic from '../../assets/home.png'; // Add your photo path here

const Home = () => {
  return (
    <div className="home-container">
      <div className="profile">
        <img src={profilePic} alt="Madhumitha Andavar" className="profile-pic" />
      </div>
      <div className="content">
        <h1>Hi, I'm Madhumitha Andavar 👋</h1>
        <p>
          I’m currently pursuing a <strong>BTech in Information Technology</strong> at 
          <strong> Bannari Amman Institute of Technology</strong>. I’m passionate about technology, 
          coding, and building innovative solutions. 
        </p>
        <p>
          As a <strong>full-stack developer</strong>, I enjoy working on both the frontend and backend of web 
          applications, ensuring seamless integration and user-friendly interfaces.
        </p>
        <p>
          I thrive in problem-solving environments, and I constantly challenge myself to enhance my skills. 
          Whether it's debugging complex code or designing efficient systems, I always aim to deliver 
          high-quality solutions.
        </p>
        <a href={resume} download className="resume-button">Download My Resume</a>
      </div>
    </div>
  );
};

export default Home;
