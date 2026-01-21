import React, { useState } from "react";
import './css/header.css';

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => setMenuOpen(!menuOpen);

    return (
        <header className="header" role="banner"> 
            <div className="container">
                <div className="navbar">
                    <div className="logo">
                        <a href="/" className="logo">
                            Coast <span>Jobs</span>
                        </a>
                    </div>

                    {/* Hamburger Icon */}
                    <div className="menu-icon" onClick={toggleMenu} role="button" aria-label="Toggle menu">
                        <div className={`bar ${menuOpen ? 'open' : ''}`}></div>
                        <div className={`bar ${menuOpen ? 'open' : ''}`}></div>
                        <div className={`bar ${menuOpen ? 'open' : ''}`}></div>
                    </div>

                    <nav role="navigation" className={menuOpen ? "active" : ""}>
                        <ul id="MenuItems" role="menu">
                            <li role="none">
                                <a href="/#home" role="menuitem">Home</a>
                            </li>
                            <li role="none">
                                <a href="/#jobs" role="menuitem">Jobs</a>
                            </li>
                            <li role="none">
                                <a href="/#employers" role="menuitem">About Us</a>
                            </li>
                            <li role="none">
                                <a href="/#contact" role="menuitem">Services</a>
                            </li>
                        </ul>
                    </nav>

                    <div className="btn-container">
                        <a href="" className="btn"><span>Post a Job</span></a>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
