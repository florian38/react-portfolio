// Import necessary libraries and components
import React from 'react';

//Import icon
import { HiOutlineDesktopComputer, HiOutlineTerminal, HiOutlineSparkles } from "react-icons/hi";

//Import style
import { motion } from 'framer-motion';

//Component Info
const Info = () => {
  return (
    <div className="about__info grid">
        <motion.div 
          className="about__box"
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
            <HiOutlineDesktopComputer className="about__icon" />
            <h3 className="about__title">Experience</h3>
            <span className="about__subtitle">3 Ans</span>
        </motion.div>
        <motion.div  
          className="about__box"
          initial={{
            opacity: 0,
            y: 50,
          }}
          whileInView={{
              opacity: 1,
              y: 0,
              transition: {
              duration: 1,
              delay: 0.5,
              },
          }}
          >
            <HiOutlineTerminal className="about__icon" />
            <h3 className="about__title">Projet</h3>
            <span className="about__subtitle">3+ Projets</span>
        </motion.div >
        <motion.div  
          className="about__box"
          initial={{
            opacity: 0,
            y: 50,
          }}
          whileInView={{
              opacity: 1,
              y: 0,
              transition: {
              duration: 1,
              delay: 0.6,
              },
          }}>
            <HiOutlineSparkles className="about__icon" />
            <h3 className="about__title">Disponibilité</h3>
            <span className="about__subtitle">Dès maintenant</span>
        </motion.div>
    </div>
  );
}

export default Info;