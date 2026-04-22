import React from 'react';
import styles from './Contact.module.scss';

const Contact = () => {
  return (
    <section id="contact" className={styles.contact}>
      <div className={styles['section-header']}>
        <h2>GET IN TOUCH</h2>
      </div>
      <div className={styles['contact-content']}>
        <p>Let's collaborate on something amazing.</p>
        <div className={styles['contact-links']}>
          <a href="mailto:aswinkoppan0@gmail.com" className={styles['email-link']}>aswinkoppan0@gmail.com</a>
          <p className={styles.phone}>+91 9539316375</p>
          <p className={styles.location}>Perinthalmanna, Malappuram, Kerala</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
