import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import logoLight from "/assets/img/logo-light.png";
import logodark from "/assets/img/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

function Header({isDarkMode}) {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    console.log("SDSDw");
    setShowMenu(!showMenu);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <header>
      {/* Start Navigation */}
      <nav className="navbar mobile-sidenav onepage-menu mobile-nav-only attr-border navbar-sticky navbar-default validnavs navbar-fixed dark no-background">
        <div className="container d-flex justify-content-between align-items-center">
          {/* Start Header Navigation */}
          <div className={`navbar-header ${showMenu ? "hide" : ""}`}>
            <button
              type="button"
              className="navbar-toggle"
              data-toggle="collapse"
              data-target="#navbar-menu"
              onClick={toggleMenu}
            >
              <FontAwesomeIcon icon={faBars} className="fa-light" />
            </button>
            <Link to="/" className="navbar-brand">
              {isDarkMode?<img src={logoLight} className="logo" alt="Logo" />:<img src={logodark} className="logo" alt="Logo" />}
            </Link>
          </div>
          {/* End Header Navigation */}
          {/* Collect the nav links, forms, and other content for toggling */}
          <div
            className={`collapse navbar-collapse collapse-mobile ${
              showMenu ? "show" : ""
            }`}
            id="navbar-menu"
          >
  {isDarkMode?<img src={logoLight} className="logo" alt="Logo" />:<img src={logodark} className="logo" alt="Logo" />}
            <button
              type="button"
              className="navbar-toggle"
              onClick={toggleMenu}
            >
              <FontAwesomeIcon icon={faTimes} />
            </button>
            <ul
              className="nav navbar-nav navbar-right"
              data-in="fadeInDown"
              data-out="fadeOutUp"
            >
              <li>
                <Link to="/" className="smooth-menu" onClick={toggleMenu}>
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="smooth-menu" onClick={toggleMenu}>
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="smooth-menu"
                  onClick={toggleMenu}
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="/projects"
                  className="smooth-menu"
                  onClick={toggleMenu}
                >
                  Portfolio
                </Link>
              </li>
              <li>
                <Link to="/blog" className="smooth-menu" onClick={toggleMenu}>
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="smooth-menu"
                  onClick={toggleMenu}
                >
                  Contact
                </Link>
              </li>
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
