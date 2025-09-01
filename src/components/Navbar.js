import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">Book Haven</div>
        <ul className="navbar-links">
          <li><NavLink to="/" end className={({isActive}) => isActive ? 'active' : ''}>Home</NavLink></li>
          <li><NavLink to="/about" className={({isActive}) => isActive ? 'active' : ''}>About</NavLink></li>
          <li><NavLink to="/pricing" className={({isActive}) => isActive ? 'active' : ''}>Pricing</NavLink></li>
          <li><NavLink to="/library" className={({isActive}) => isActive ? 'active' : ''}>Library</NavLink></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;