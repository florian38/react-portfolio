// Import necessary libraries and components
import React from 'react';

//Import style
import "./footer.css";

//Import icon
import { FiTwitter, FiGithub, FiLinkedin } from 'react-icons/fi';

//Component Footer
const Footer = () => {
  return (
    <footer className="footer">
        <div className="footer__container container">
            <h1 className="footer__title">Florian Ekoue</h1>
            <ul className="footer__list">
                <li>
                    <a href="#about" className="footer__link">A propos</a>
                </li>
                <li>
                    <a href="#portfolio" className="footer__link">Projets</a>
                </li>
                <li>
                    <a href="#qualification" className="footer__link">Parcours</a>
                </li>
            </ul>
            <div className="footer__social">
                <a href="https://www.github.com/kmaalig" className="home__social-icon" target="_blank" rel="noreferrer">
                    <FiGithub />
                </a>
                <a href="https://www.linkedin.com/in/kmaalig/" className="home__social-icon" target="_blank" rel="noreferrer" >
                    <FiLinkedin />
                </a>    
            </div>
            <span className="footer__copy"></span>
        </div>
    </footer>
  );
}

export default Footer;