import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import './Reviews.css';

function Reviews() {
  return (
    <>
    <Navbar/>
    <div className='views'>
        <h2 className='reviews'>Reviews</h2>
    </div>
    <Footer/>
    </>
  )
}

export default Reviews;