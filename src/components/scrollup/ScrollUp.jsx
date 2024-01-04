// Import necessary libraries and components
import React from 'react';

//Import style
import './scrollup.css';

//Import icon
import { HiOutlineArrowSmUp } from "react-icons/hi";

const ScrollUp = () => {
    window.addEventListener("scroll", function () {
        const scrollUp = document.querySelector(".scrollup");
        if(this.scrollY >= 560) scrollUp.classList.add("show-scroll");
        else scrollUp.classList.remove("show-scroll");
    });
  
    return (
    <a href="#" className="scrollup"><HiOutlineArrowSmUp className="scrollup__icon"/></a>
  );
}

export default ScrollUp;