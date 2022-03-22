import React from 'react';
import './Footer.css';
import logo from '../../assets/logo_footer.svg'

const Footer = () => (
  <div>
    <div className="footer">
      <div className='footer__links'>
        <div className='footer_links_logo'>
          <img src={logo} />
        </div>
        <a href=''>Home</a>
        <a href=''>What would we do</a>
        <a href=''>Our investments</a>
        <a href=''>First project</a>
        <a href=''>About us</a>
        <a href=''>Our team</a>
      </div>
      <div className='footer__offices'>
        <div>Our offices</div>
        <div className='footer__offices__cities'>
          <a href=''>Singapore</a>
          <a href=''>Australia</a>
          <a href=''>Mumbai</a>
        </div>
      </div>
    </div>
    <div className='copyright'>
      <p>Copyright &#169; 2021 Venturastic Fund's Pre Ltd</p>
      <p>Powered by Venturastic Fund's Pvt Ltd</p>
    </div>
  </div>
);

export default Footer;
