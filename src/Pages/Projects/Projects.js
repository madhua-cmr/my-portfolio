import React from 'react';
import './Projects.css';
import mou from '../../assets/mou.jpeg'
import art from '../../assets/art.jpeg';
import portfolio from '../../assets/portfolio.jpeg'
const projectsData = [
  {
    title: 'MoU Management System',
    description: 'A full-stack web application to manage Memorandum of Understanding (MoU) between organizations. Features include filtering, adding, renewing MoUs, and more.',
    image: mou,// Add your project images to the public folder
    link: '/projects/mou-management',
  },
  {
    title: 'Art shopping website',
    description: 'A responsive Art shopping website built with React and Node.js. Includes features such as product listing, cart management, and secure checkout.',
    image: art,
    link: 'https://github.com/madhua-cmr/art-shopping-app',
  },
  {
    title: 'Personal portfolio',
    description: 'Personal Portfolio Website using the MERN stack (MongoDB, Express.js, React.js, and Node.js) to showcase my skills, projects, and experiences',
    image: portfolio,
    link: '/projects/task-management',
  },
];

const Projects = () => {
  return (
    <div className="projects-container">
      <h1>My Projects</h1>
      <div className="projects-grid">
        {projectsData.map((project, index) => (
          <div className="project-card" key={index}>
            <img src={project.image} alt={project.title} className="project-image" />
            <div className="project-content">
              <h2>{project.title}</h2>
              <p>{project.description}</p>
              <a href={project.link} className="project-link">View More</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
