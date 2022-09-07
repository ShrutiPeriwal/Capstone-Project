import React from 'react';
import './navbar.css';
import { FiLogIn } from 'react-icons/fi';
import { BsLinkedin } from 'react-icons/bs';
import {AiOutlineShoppingCart } from 'react-icons/ai';

const navbar = () => {
  return (
    <>
        <nav className="navbar-main">
            <div className="navbar-logo">
                <h2>
                    <span> W</span>ebsite
                </h2>
            </div>

            <div className="navbar-menu">
                <ul>
                    <li>
                        <a href="#">Hats</a>
                    </li>
                    <li>
                        <a href="#">Jackets</a>
                    </li>
                    <li>
                        <a href="#">Shoes</a>
                    </li>
                    <li>
                        <a href="#">Tops</a>
                    </li>
                </ul>
            </div>

            <div className="navbar-media">
                <ul className="media">
                     <li>
                        <a href="#"><FiLogIn /></a>
                    </li> 
                     <li>
                        <a href="#"><AiOutlineShoppingCart /></a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/in/shruti-periwal-11400b213/" target="_blank
                        
                        "><BsLinkedin /></a>
                    </li>
                </ul>
            </div>
        </nav>
    </>
  )
}

export default navbar;