import React from 'react';
import './Projects.css';
import mou from '../../assets/mou.jpeg'
import art from '../../assets/art.jpeg';
import social from "../../assets/social.jpg";
import portfolio from '../../assets/portfolio.jpeg'
const projectsData = [
  {
    title: 'MoU Management System',
    description: 'A full-stack web application to manage Memorandum of Understanding (MoU) between organizations. Features include filtering, adding, renewing MoUs, and more.',
    image: mou,
    link:'/projects/mou-management',
  },
  {
    title: 'Ecommerce website',
    description: 'A full-stack React.js & Tailwind CSS ecommerce platform with an Admin Panel for managing products, orders, and users. Features include authentication (JWT), cart & checkout, payment integration (Stripe/Razorpay), and real-time order tracking. Built with Node.js, Express, MongoDB, and deployed on Vercel',
    image: art,
    link: 'https://github.com/madhua-cmr/art-shopping-app',
  },  {
    title:'Thread Like App',
    description: 'A full-stack MERN social media platform where users can create posts, like, comment, follow others, and customize profiles. Built with React.js & Tailwind CSS for a modern UI and Node.js, Express, MongoDB for the backend. Supports real-time updates and JWT authentication. Deployed on Vercel & Render.',
    image: social,
    link: '/projects/task-management',
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
              <a href={project.link} className="project-link">Github Link</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
