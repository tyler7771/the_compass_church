import React from 'react';
import { withRouter, Link } from 'react-router';

const Footer = () => {
  return (
    <footer>
      <div className="mission-statement">
        <span>Making disciples of Jesus Christ for the transformation of the world</span>
      </div>
      <div className="footer-links">
        <div className="social-media-links">
          <a href="http://thecompass.church/feed/" target="_blank"><span className="fa fa-rss-square"></span></a>
          <a href="https://www.facebook.com/thecompasschurch.selma" target="_blank"><span className="fa fa-facebook-square"></span></a>
          <a href="https://www.facebook.com/thecompasschurch.yorktown" target="_blank"><span className="fa fa-facebook-square"></span></a>
          <a href="https://vimeo.com/thecompasschurch" target="_blank"><span className="fa fa-vimeo-square"></span></a>
        </div>
        <p>Copyright <span className="fa fa-copyright"></span> 2017 The Compass Church</p>
      </div>
    </footer>
  );
};

export default Footer;
