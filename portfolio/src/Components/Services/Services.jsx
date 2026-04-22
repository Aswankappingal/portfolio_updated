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
            WHAT I OFFER
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
            Ideate.
          </motion.h2>
          <motion.h2 
            className={styles.grey}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 }
            }}
          >
            Create.
          </motion.h2>
          <motion.h2 
            className={styles.white}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 }
            }}
          >
            Deliver.
          </motion.h2>
        </div>
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
