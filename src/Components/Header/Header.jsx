import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import logoLight from '../../assets/img/logo-light.png'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'; 

function Header() {
    return (
        <header>
            {/* Start Navigation */}
            <nav className="navbar mobile-sidenav onepage-menu mobile-nav-only attr-border navbar-sticky navbar-default validnavs navbar-fixed dark no-background">
                <div className="container d-flex justify-content-between align-items-center">
                    {/* Start Header Navigation */}
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#navbar-menu">
                        <FontAwesomeIcon icon={faBars} className="fa-light" />

                        </button>
                        {/* <Link to="/" className="navbar-brand">
                            <img src={logoLight} className="logo" alt="Logo" />
                        </Link> */}
                    </div>
                    {/* End Header Navigation */}
                    {/* Collect the nav links, forms, and other content for toggling */}
                    <div className="collapse navbar-collapse" id="navbar-menu">
                        <img src={logoLight} alt="Logo" />
                        <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#navbar-menu">
                            <FontAwesomeIcon icon={faTimes} />
                        </button>
                        <ul className="nav navbar-nav navbar-right" data-in="fadeInDown" data-out="fadeOutUp">
                            {/* <li>
                                <Link to="/"  className="smooth-menu">Home</Link>
                            </li>
                            <li>
                                <Link to="/"  className="smooth-menu">About</Link>
                            </li>
                            <li>
                                <Link to="/"  className="smooth-menu">Services</Link>
                            </li>
                            <li>
                                <Link to="/"  className="smooth-menu">Portfolio</Link>
                            </li>
                            <li>
                                <Link to="/"  className="smooth-menu">Blog</Link>
                            </li>
                            <li>
                                <Link to="/"  className="smooth-menu">Contact</Link>
                            </li> */}
                        </ul>
                    </div>
                    {/* Main Nav */}
                </div>
                {/* Overlay screen for menu */}
                <div className="overlay-screen"></div>
                {/* End Overlay screen for menu */}
            </nav>
            {/* End Navigation */}
            
        </header>
    );
}

export default Header;
