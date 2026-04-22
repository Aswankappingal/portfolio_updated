import React from 'react';
import { motion } from 'framer-motion';
import styles from './Experience.module.scss';

const Experience = () => {
  const experiences = [
    {
      role: 'Full Stack Developer',
      company: 'First Logic Meta Lab Pvt Ltd',
      period: 'October 2023 - Present',
      location: 'Perinthalmanna, Malappuram',
      points: [
        'Specialized in creating dynamic and interactive user interfaces using React.js.',
        'Spearheaded the development of dynamic user interfaces, optimizing for performance and scalability.',
        'Engaged in cross-functional collaboration to deliver robust applications alignment with project goals.'
      ]
    },
    {
      role: 'MERN Stack Developer (Intern)',
      company: 'Synclovis Systems Pvt Ltd',
      period: 'June 2023 - February 2024',
      location: 'Kochi, Kerala',
      points: [
        'Completed 7 months of comprehensive MERN stack training, achieving proficiency in MongoDB, Express.js, React, and Node.js.',
        'Gained hands-on experience by collaborating on real-world projects.'
      ]
    }
  ];

  return (
    <section id="experience" className={styles.experience}>
      <motion.div 
        className={styles['section-header']}
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
      >
        <h2>EXPERIENCE</h2>
      </motion.div>
      <div className={styles['experience-timeline']}>
        {experiences.map((exp, index) => (
          <motion.div 
            key={index} 
            className={styles['exp-item']}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2 }}
          >
            <div className={styles['exp-header']}>
              <div className={styles.role}>
                <h3>{exp.role}</h3>
                <h4>{exp.company}</h4>
              </div>
              <div className={styles.meta}>
                <span className={styles.period}>{exp.period}</span>
                <span className={styles.location}>{exp.location}</span>
              </div>
            </div>
            <ul className={styles['exp-points']}>
              {exp.points.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
