// Import necessary libraries and components
import React from 'react';

//Import component
import Projects from './Projects';

//Import style
import "./projects.css";
import { motion } from 'framer-motion';

//Component Portfolio
const Portfolio = () => {
  return (
    <motion.section 
      className="portfolio section" 
      id="portfolio"
      initial={{
        opacity: 0,
        y: 50,
      }}
      whileInView={{
          opacity: 1,
          y: 0,
          transition: {
          duration: 1,
          delay: 0.4,
          },
      }}
      >
        <h2 className="section__title">Portfolio</h2>
        <span className="section__subtitle">Mes récents projets</span>

        <Projects />
    </motion.section>
  );
}

export default Portfolio;