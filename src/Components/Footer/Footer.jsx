import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <div className="footer-container">
       <footer className='footer'>
        <div className='navbar2'>
          <div className="logo">
            <span>audiophile</span>
          </div>
          <ul>
            <li>Home</li>
            <li>Headphones</li>
            <li>Speakers</li>
            <li>Earphones</li>
          </ul>
        </div>
        <div className="footer-text">
          <p>
            Audiophile is an all in one stop to fulfill your audio needs. We're a small team
            of music lovers and sound specialists who are devoted to helping you get the
            most out of personal audio. Come and visit our demo facility-we're open 7
            days a week.
          </p>
          <span>Copyright 2021. All Rights Reserved</span>
      </div>
    </footer>
    </div>
   
  );
}

export default Footer;
