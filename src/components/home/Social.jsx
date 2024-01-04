// Import necessary libraries and components
import React from "react";

//Import icon
import { FiTwitter, FiGithub, FiLinkedin} from "react-icons/fi";

//Component Social
const Social = () => {
    return (
        <div className="home__social">
            <a href="https://github.com/florian38" className="home__social-icon" target="_blank">
                <FiGithub />
            </a>
            <a href="https://www.linkedin.com/in/florian-ekoue-492941105/" className="home__social-icon" target="_blank">
                <FiLinkedin />
            </a>
        </div> 
    ); 
}

export default Social;