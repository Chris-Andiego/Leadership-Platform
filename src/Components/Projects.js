import React from 'react';
import Navbar from './Navbar';
import './Projects.css';
import Footer from './Footer';
import {Link} from 'react-router-dom';

function Projects() {
  return (
    <>
    <Navbar/>
    <div className='project-container'>
      <div className='project-title'>
        <h1 >Projects</h1>
      </div>
      <div className='project-design'> 
        <div className='project1'>
          <p className='projectName'>Project 1</p>
          <button className='button1'><Link to="/Upload" className='rev'>EDIT</Link></button><button className='button2'><Link to="/reviews" className='rev'>REVIEWS</Link></button>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  )
}

export default Projects;