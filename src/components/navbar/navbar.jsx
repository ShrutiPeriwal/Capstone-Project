import React from 'react'

const navbar = () => {
  return (
    <>
        <nav className="navbar-main">
            <div className="navbar-logo">
                <h2>
                    <span>E-</span>commerce
                    <span> W</span>ebsite
                </h2>
            </div>

            <div className="navbar-menu">
                <ol>
                    <li>
                        <a href="#">Hats</a>
                    </li>
                    <li>
                        <a href="#">Shoes</a>
                    </li>
                    <li>
                        <a href="#">Dresses</a>
                    </li>
                    <li>
                        <a href="#">T-shirts</a>
                    </li>
                </ol>
            </div>
        </nav>
    </>
  )
}

export default navbar