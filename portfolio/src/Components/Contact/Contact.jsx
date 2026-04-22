import React from 'react';
import { motion } from 'framer-motion';
import styles from './Contact.module.scss';

const Contact = () => {
  return (
    <section id="contact" className={styles.contact}>
      <motion.div 
        className={styles['section-header']}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ staggerChildren: 0.2 }}
      >
        <div className={styles['subheader-wrapper']}>
          <motion.span 
            className={styles.line}
            initial={{ width: 0 }}
            whileInView={{ width: "40px" }}
            transition={{ duration: 0.8 }}
          />
          <motion.p 
            className={styles.subheader}
            variants={{
              hidden: { opacity: 0, y: 10 },
              visible: { opacity: 1, y: 0 }
            }}
          >
            GET IN TOUCH
          </motion.p>
        </div>
        <div className={styles['main-title']}>
          <motion.h2 
            className={styles.white}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 }
            }}
          >
            Connect.
          </motion.h2>
          <motion.h2 
            className={styles.grey}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 }
            }}
          >
            Chat.
          </motion.h2>
          <motion.h2 
            className={styles.white}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 }
            }}
          >
            Collaborate.
          </motion.h2>
        </div>
      </motion.div>
      <motion.div 
        className={styles['contact-content']}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <p className={styles.tagline}>Let's collaborate on something amazing.</p>
        <div className={styles['contact-links']}>
          <a href="mailto:aswinkoppan0@gmail.com" className={styles['email-link']}>aswinkoppan0@gmail.com</a>
          <p className={styles.phone}>+91 9539316375</p>
          <p className={styles.location}>Perinthalmanna, Malappuram, Kerala</p>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
