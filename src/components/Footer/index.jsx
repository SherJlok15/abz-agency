import React from 'react';
import Fade from 'react-reveal/Fade';
import './Footer.scss';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="page_container">
          <div className="footer-container">
            <Fade bottom>
              © abz.agency specially for the test task
            </Fade>
          </div>
      </div>
    </footer>
  )
}

export default Footer;
