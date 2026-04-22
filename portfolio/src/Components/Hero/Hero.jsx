import React from 'react';
import { motion } from 'framer-motion';
import styles from './Hero.module.scss';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const lineVariants = {
    hidden: { width: 0 },
    visible: { 
      width: "40px",
      transition: { duration: 0.8, delay: 0.2 }
    }
  };

  return (
    <section id="hero" className={styles.hero}>
      <motion.div 
        className={styles['hero-content']}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className={styles['subheader-wrapper']}>
          <motion.span 
            className={styles.line} 
            variants={lineVariants}
          />
          <motion.p className={styles.subheader} variants={itemVariants}>
            FULLSTACK SOFTWARE ENGINEER
          </motion.p>
        </div>

        <div className={styles['main-title']}>
          <motion.h1 className={styles.white} variants={itemVariants}>
            Design.
          </motion.h1>
          <motion.h1 className={styles.grey} variants={itemVariants}>
            Develop.
          </motion.h1>
          <motion.h1 className={styles.white} variants={itemVariants}>
            Deploy.
          </motion.h1>
        </div>

        <motion.p className={styles.description} variants={itemVariants}>
          Hi, I'm Aswin.K. I build high-performance web applications <br />
          with a focus on clean code and exceptional user experience. <br />
          Currently specializing in the MERN stack..
        </motion.p>

        <motion.div className={styles['hero-btns']} variants={itemVariants}>
          <motion.button 
            className={styles['cta-button']}
            whileHover={{ x: 10 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
            onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}
          >
            EXPLORE MY WORK 
            <span className={styles.arrow}>→</span>
          </motion.button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
