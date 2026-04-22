import React from 'react';
import { motion } from 'framer-motion';
import styles from './About.module.scss';

const About = () => {
  return (
    <section id="about" className={styles.about}>
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
            WHO I AM
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
            Think.
          </motion.h2>
          <motion.h2 
            className={styles.grey}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 }
            }}
          >
            Solve.
          </motion.h2>
          <motion.h2 
            className={styles.white}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 }
            }}
          >
            Evolve.
          </motion.h2>
        </div>
      </motion.div>
      <div className={styles['about-content']}>
        <motion.div 
          className={styles['about-text']}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <p className={styles.summary}>
            Skilled Full Stack Developer with 1.5 years of professional experience, proficient in building dynamic and scalable web applications using React and Node.js. Experienced in designing and implementing robust frontend and backend solutions, ensuring seamless user experiences and efficient server-side performance.
          </p>
          
          <div className={styles.education}>
            <h3>Education</h3>
            <div className={styles['edu-item']}>
              <h4>Bachelor of Computer Application (BCA)</h4>
              <p>Al Shifa College of Arts and Science, Perinthalmanna</p>
              <span>June 2020 - March 2023</span>
            </div>
            <div className={styles['edu-item']}>
              <h4>Computer Science</h4>
              <p>GHSS Melattur, Perinthalmanna</p>
              <span>June 2018 - March 2020</span>
            </div>
          </div>
        </motion.div>
        
        <motion.div 
          className={styles.skills}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h3>Core Technical Skills</h3>
          <div className={styles['skills-grid']}>
            <div className={styles['skill-cat']}>
              <h4>Frontend</h4>
              <ul>
                {['HTML5', 'CSS3', 'SCSS', 'JavaScript', 'React.js', 'Tailwind CSS', 'Bootstrap', 'Material UI'].map(skill => (
                  <li key={skill}>{skill}</li>
                ))}
              </ul>
            </div>
            <div className={styles['skill-cat']}>
              <h4>Backend & Tools</h4>
              <ul>
                {['Node.js', 'Express.js', 'MongoDB', 'RESTful APIs', 'JWT', 'Git', 'Firebase'].map(skill => (
                  <li key={skill}>{skill}</li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
