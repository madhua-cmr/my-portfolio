import React from "react";
import "./Header.css";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <nav className="navbar">
      <Link to="/" className="title">
        MADHUMITHA
      </Link>

      <ul  className="nav">
        <li>
          
          <NavLink  to="/about">About</NavLink>
        </li>
        <li>
          
          <NavLink to="/skills">Skills</NavLink>
        </li>
        <li>
          <NavLink to="/projects">Projects</NavLink>
        </li>
        <li>
          <NavLink to="/team">Team</NavLink>
        </li>
        <li>
          <NavLink to="/contact">Contact</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
