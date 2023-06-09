import React from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";
import "./navbar.css";

const CustomLink = ({ to, pageName }) => {
  const resolved = useResolvedPath(to);
  const isActive = useMatch({ path: resolved.pathname, end: true });
  return (
    <li className={`item ${isActive ? "active" : ""}`}>
      <Link to={to}>{pageName}</Link>
    </li>
  );
};

const Navbar = () => {
  return (
    <nav className="app__navbar">
      <Link className="app__header" to="/">
      ÆY Insurance 
      </Link>
      <ul className="nav__list">
        <CustomLink to="/projects" pageName="Services" />
        <CustomLink to="/contact" pageName="Blog" />
        <CustomLink to="/about" pageName="About" />
        
      
      </ul>
    </nav>
  );
};

export default Navbar;
