import React from 'react';
import './Footer.css';

const Footer = () => {

  const currentYear = new Date().getFullYear();

  return (
    <div className='content'>
      <footer className="footer">
      <p>&copy; {currentYear} FreshFood. All rights reserved.</p>
    </footer>
    </div>
  );
};

export default Footer;
