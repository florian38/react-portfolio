// Import necessary libraries and components
import React from "react";

//Import style
import "./home.css";
import { motion } from 'framer-motion';

//Import component
import Social from "./Social";
import Data from "./Data";
import Scroll from "./Scroll";

//Component Home
const Home = () => {
    return (
        <motion.section 
            className="home section" 
            id="home" 
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
            <div className="home__container container grid">
                <div className="home__content grid">
                    <Social />
                    <div className="home__img"></div>
                    <Data />
                </div>
                <Scroll />
            </div> 
        </motion.section>
    )
}

export default Home;