import React, { useState } from "react";
import "./navbar.css";
import { FiLogIn } from "react-icons/fi";

import { AiOutlineShoppingCart } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";

import ControlledCarousel from '../Slider/slider';
import CardComponent from '../card/card';


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
              <a href="/ecommercewebsite/src/components/signin/signin.jsx">
                <FiLogIn className="login" />
              </a>
            </li>
            <li>
              <a href="#">
                <AiOutlineShoppingCart className="cart" />
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
      <ControlledCarousel />
      <h3 className="heading">Top Selling Products</h3>
      <CardComponent />
    </>
  );
};

export default Navbar;
