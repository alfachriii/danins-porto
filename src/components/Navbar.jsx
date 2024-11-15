import React from "react";
import "../App.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";

const Navbar = () => {
  const menu = document.querySelector(".nav-menu");

  const toggleMenu = () => {
    menu.classList.add("flex")
  };

  return (
    <div className="container">
      <div className="navbar">
        <a className="logo" href="#">
          danins.
        </a>
        <div className="nav-menu">
          <ul className="nav-list">
            <li className="btn-close">
              {/* <IoClose /> */}
            </li>
            <li className="nav-item">
              <a href="#about">About</a>
            </li>
            <li className="nav-item">
              <a href="#experience">Experience</a>
            </li>
            {/* <li className="nav-item">
              <a href="#projects">Projects</a>
            </li> */}
            <li className="nav-item">
              <a href="#contact">Contact</a>
            </li>
          </ul>
          {/* <div id="hamburger">
            <GiHamburgerMenu onClick={toggleMenu}/>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
