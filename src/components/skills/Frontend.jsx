// Import necessary libraries and components
import React from "react";

//Import icon
import { HiCheckBadge } from "react-icons/hi2";

//Import style
import { motion } from 'framer-motion';

//Component Front
const Frontend = () => {
    return (
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
            delay: 0.2,
            },
        }}
        >
            <h3 className="skills__title">Côté Front</h3>
            <div className="skills__box">
                <div className="skills__group">
                    <div className="skills__data">
                        <HiCheckBadge />
                        <div>
                            <h3 className="skills__name">HTML</h3>
                            <span className="skills__level">Avancé</span>
                        </div>
                    </div>
                    <div className="skills__data">
                        <HiCheckBadge />
                        <div>
                            <h3 className="skills__name">CSS</h3>
                            <span className="skills__level">Avancé</span>
                        </div>
                    </div>
                </div>
                <div className="skills__group">
                    <div className="skills__data">
                        <HiCheckBadge />
                        <div>
                            <h3 className="skills__name">JavaScript</h3>
                            <span className="skills__level">Intermédiaire</span>
                        </div>
                    </div>
                    <div className="skills__data">
                        <HiCheckBadge />
                        <div>
                            <h3 className="skills__name">React</h3>
                            <span className="skills__level">Intermédiaire</span>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}

export default Frontend;