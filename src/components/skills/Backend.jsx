// Import necessary libraries and components
import React from "react";

//Import icon
import { HiCheckBadge } from "react-icons/hi2";

//Import style
import { motion } from 'framer-motion';

//Component Backend
const Backend = () => {
    return(
        <motion.div 
        className="skills__content"
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
        <h3 className="skills__title">Côté Backend</h3>
        <div className="skills__box">
            <div className="skills__group">
                <div className="skills__data">
                    <HiCheckBadge />
                    <div>
                        <h3 className="skills__name">Java</h3>
                        <span className="skills__level">Basique</span>
                    </div>
                </div>
                <div className="skills__data">
                    <HiCheckBadge />
                    <div>
                        <h3 className="skills__name">MySQL</h3>
                        <span className="skills__level">Basique</span>
                    </div>
                </div>
            </div>
            <div className="skills__group">
                <div className="skills__data">
                    <HiCheckBadge />
                    <div>
                        <h3 className="skills__name">Node.js</h3>
                        <span className="skills__level">Basique</span>
                    </div>
                </div>
                <div className="skills__data">
                    <HiCheckBadge />
                    <div>
                        <h3 className="skills__name">Git</h3>
                        <span className="skills__level">Basique</span>
                    </div>
                </div>
            </div>
            <div className="skills__group">
                <div className="skills__data">
                    <HiCheckBadge />
                    <div>
                        <h3 className="skills__name">PHP</h3>
                        <span className="skills__level">Basique</span>
                    </div>
                </div>
                
            </div>
        </div>
    </motion.div>
    );
}

export default Backend;