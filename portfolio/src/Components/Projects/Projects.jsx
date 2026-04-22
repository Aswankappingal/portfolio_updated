import React from 'react';
import { motion } from 'framer-motion';
import styles from './Projects.module.scss';

const Projects = () => {
  const projects = [
    { 
      title: 'Karthika Ecommerce Web App', 
      description: 'Full stack e-commerce platform with admin dashboard and secure payment integration.', 
      tags: ['React', 'Express.js', 'Firebase', 'Node.js'] 
    },
    { 
      title: 'Tharawat Marketplace', 
      description: 'B2B & B2C marketplace with real-time data handling and RESTful API architecture.', 
      tags: ['React', 'Express.js', 'Firebase', 'REST API'] 
    },
    { 
      title: 'First Logic Meta Lab Website', 
      description: 'Modern, interactive company website with responsive design and high performance.', 
      tags: ['React', 'UI/UX', 'Responsive'] 
    },
    { 
      title: 'Personal Portfolio', 
      description: 'Fully responsive portfolio with custom SCSS styling and smooth animations.', 
      tags: ['React', 'SCSS', 'Framer Motion'] 
    },
    { 
      title: 'Kairali Doors and Interiors', 
      description: 'Interactive website focused on user engagement and custom interior pages.', 
      tags: ['HTML', 'CSS', 'JavaScript'] 
    },
    { 
      title: 'TimeXert Watches', 
      description: 'E-commerce app using MERN stack with real-time updates and secure authentication.', 
      tags: ['MongoDB', 'Express', 'React', 'Node.js'] 
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="projects" className={styles.projects}>
      <motion.div 
        className={styles['section-header']}
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2>PROJECTS</h2>
      </motion.div>
      <motion.div 
        className={styles['projects-grid']}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {projects.map((project, index) => (
          <motion.div 
            key={index} 
            className={styles['project-card']}
            variants={itemVariants}
            whileHover={{ y: -10, borderColor: '#ffffff' }}
          >
            <div className={styles['card-content']}>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className={styles['project-tags']}>
                {project.tags.map(tag => <span key={tag}>{tag}</span>)}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Projects;
