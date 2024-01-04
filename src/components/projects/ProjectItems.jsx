// Import necessary libraries and components
import React from 'react';

//Import icon
import { HiOutlineArrowSmRight } from "react-icons/hi";

//Import style
import { motion } from 'framer-motion';

//Component Project Item
const ProjectItems = ({item}) => {
  return (
        <motion.div 
            className="project__card" 
            key={item.id} 
            initial={{
                opacity: 0,
                y: 50,
            }}
            whileInView={{
                opacity: 1,
                y: 0,
                transition: {
                duration: 0.3,
                delay: 0.2,
                },
            }}
            >
            <img className="project__img" src={item.image} alt="" />
            <h3 className="project__title">{item.title}</h3>
            <a href={item.link} className="project__button">
                Demo <HiOutlineArrowSmRight className="project__button-icon" />
            </a>
        </motion.div>
    );
}

export default ProjectItems;