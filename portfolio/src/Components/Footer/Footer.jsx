import React from 'react';
import styles from './Footer.module.scss';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles['footer-container']}>
        <p>&copy; {new Date().getFullYear()} ASWIN.K. All rights reserved.</p>
        <div className={styles['social-links']}>
          <a href="https://linkedin.com/in/aswin-k" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="https://github.com/aswin-portfolio" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="mailto:aswinkoppan0@gmail.com">Email</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
