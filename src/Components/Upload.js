import React from 'react';
import Navbar from './Navbar';
import './Upload.css';
import Footer from './Footer';

  function Upload() {
    return (
      <>
      <Navbar/>
      <div className='uploads'>
        <div className='upload-design'>
          <div className='upload-container'>
            <div>
              <h1 className='title'>Upload Projects</h1>
              <div className='inpts'>
                <div>
                  <input type='text' placeholder='Project Name' className='name'/>
                </div>
                <div className='second'>
                  <input type='text' placeholder='Project Description' className='name'/>
                </div>
                <div className='second'>
                  <input type='text' placeholder='Project Budget' className='name'/>
                </div> 
                <div className='btn'>
                  <button>SUBMIT</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </>
    )
  }

  export default Upload;