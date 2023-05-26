import React from 'react';
import {FaTwitter, FaFacebook, FaYoutube, FaGoogle} from 'react-icons/fa';
import './Footer.css';

function Footer() {
  return (
    <>
        <footer>
            <div className='Footer-container'>
                <FaFacebook className='fb'/>
                <FaTwitter className='twit'/>
                <FaYoutube className='yt'/>
                <FaGoogle className='google'/>
                <p className='web'>www.leadership_platform.co.ke</p>
            </div>
        </footer>
    </>
  )
}

export default Footer;