import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { RxHamburgerMenu } from "react-icons/rx";
import { FaWindowClose } from "react-icons/fa";
// import hamburger from '../assets/hamburger.png'
import './Navbar.css'

const Navbar = () => {
    let [showHamburger, setShowHamburger] = useState(false);

    function handleClick() {
        setShowHamburger(!showHamburger);
    }

    return (

        <div className="nav-container" >
            <h1 style={{ color: "#00ff2f", fontSize: "40px" }}>
                S<span style={{ color: "white", fontSize: "30px" }}>uhail</span>
            </h1>
            <div className="nav-for-ham">
            <ul className={`nav-links-container ${showHamburger ? 'show' : ''}`}>
                    <NavLink to="/" className="navbar-links" >
                        <li className='navbar-links-name'>Home</li>
                    </NavLink>
                    <NavLink to="/projects" className="navbar-links">
                        <li className='navbar-links-name'>Projects</li>
                    </NavLink>
                    <NavLink to="/about" className="navbar-links" >
                        <li className='navbar-links-name'>About</li>
                    </NavLink>
                    <NavLink to="/contact" className="navbar-links" >
                        <li className='navbar-links-name'>Contact</li>
                    </NavLink>
                </ul>
                    
                <div className="nav-hamburger" onClick={handleClick}>
                    {
                        showHamburger ? (<FaWindowClose />) : (<RxHamburgerMenu />)
                    }
                </div>
            </div>
        </div>


    )
}

export default Navbar