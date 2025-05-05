import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <div className='navbar'>
      <Link to="/">
        <img 
          src="https://bloggytalky.com/wp-content/uploads/2017/07/create-a-free-logo-design-logo-designs-design-a-free-logo-design-a-free-logo-alltech-just-free-logo-design.png" 
          alt="logo" 
          className='logo'
        />
      </Link>
      <ul>
        <li><Link to="/Manifesto">Manifesto</Link></li>
        <li><Link to="/Discover">Discover</Link></li>
      </ul>
    </div>
  );
};

export default Navbar;
