// Import necessary libraries and components
import React from 'react';

//Import style
import "./skills.css";

//Import component
import Frontend from './Frontend';
import Backend from './Backend';

//Import style
import { motion } from 'framer-motion';

//Component Skills
const Skills = () => {
  return (
    <motion.section 
      className="skills section" 
      id="skills"
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
        <h2 className="section__title">Skills</h2>
        <span className="section__subtitle">Mon niveau technique</span>
        <div className="skills__container container grid">
            <Frontend />
            <Backend /> 
        </div>
    </motion.section>
  );
}

export default Skills;