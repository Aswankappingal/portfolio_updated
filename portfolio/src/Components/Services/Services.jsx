import React from 'react';
import { motion } from 'framer-motion';
import styles from './Services.module.scss';

const Services = () => {
  const services = [
    { title: 'Web Development', description: 'Building fast, responsive, and scalable web applications.' },
    { title: 'UI/UX Design', description: 'Crafting intuitive and engaging user interfaces.' },
    { title: 'SEO Optimization', description: 'Improving your visibility and search engine ranking.' },
  ];

  return (
    <section id="services" className={styles.services}>
      <motion.div 
        className={styles['section-header']}
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
      >
        <h2>SERVICES</h2>
      </motion.div>
      <div className={styles['services-grid']}>
        {services.map((service, index) => (
          <motion.div 
            key={index} 
            className={styles['service-card']}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
          >
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Services;
