import React from 'react';
import {Link} from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <nav className='navbar'>
      <div className='navbar-container-lo'>
        <Link className='navbar-logo' to="/">
            LDPF
        </Link>
      </div>
      <div className='navbar-container-li'>
        <div className='ulist'>
          <Link to="/" className='nav-links'>Home</Link>
          <Link to="/Projects" className='nav-links'>Projects</Link>
          <Link to="/Upload" className='nav-links'>Upload</Link>
          <button className='btn1'><Link to="/Login" className='btnlink'>LOGIN</Link></button>
          <button className='btn2'><Link to="/Signup" className='btnlink'>SIGN UP</Link></button>
        </div> 
      </div>
    </nav>
  )
}

export default Navbar;
