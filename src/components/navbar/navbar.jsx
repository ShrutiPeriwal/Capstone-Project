import React, { useState } from "react";
import "./navbar.css";
import { FiLogIn } from "react-icons/fi";
import { BsLinkedin } from "react-icons/bs";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const [showMediaIcons, setShowMediaIcons] = useState(false);
  return (
    <>
      <nav className="navbar-main">
        <div className="navbar-logo">
          <h2>
            <span> W</span>ebsite
          </h2>
        </div>

        <div
          className={
            showMediaIcons ? "navbar-menu mobile-navbar-menu" : "navbar-menu"
          }
        >
          <ul>
            <li>
              <a href="#" >Hats</a>
            </li>
            <li>
              <a href="#" >Jackets</a>
            </li>
            <li>
              <a href="#" >Shoes</a>
            </li>
            <li>
              <a href="#">Tops</a>
            </li>
          </ul>
        </div>

        <div className="navbar-media">
          <ul className="media">
            <li>
              <a href="#">
                <FiLogIn className="login" />
              </a>
            </li>
            <li>
              <a href="#">
                <AiOutlineShoppingCart className="cart" />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/shruti-periwal-11400b213/"
                target="_blank"
              >
                <BsLinkedin className="linklin" />
              </a>
            </li>
          </ul>

          {/* hamburget menu start  */}
          <div className="hamburger-menu">
            <a href="#" onClick={() => setShowMediaIcons(!showMediaIcons)}>
              <GiHamburgerMenu />
            </a>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
