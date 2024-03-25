import React, { useState, useRef, useEffect } from "react";
import { Link, NavLink,useLocation } from "react-router-dom";
import logo from "../../assets/img/logo-icon.png";
import menu from "../../assets/img/menu-white.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

import "./SideBar.css";

const SideNavbar = ({
  data,
  page,
  setIsDarkMode,
  isDarkMode,
  scrollToSection,
  isDefaultHome,
  setIsDefaultHome, aboutRef
}) => {
  const location = useLocation();
  const navRef = useRef(null);
  const [showIcons, setShowIcons] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const defaultHome = localStorage.getItem("defaulthome");
  const toggleIcons = () => {
    console.log("hit");
    setShowIcons(!showIcons);
  };
  const toggleNav = () => {
    setIsExpanded(!isExpanded);
    if (showDropdown) {
      setShowDropdown(false);
    }
    setIsClicked(false);
  };
  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const handleLinkClick = (id) => {
    setIsClicked(true);
    setTimeout(() => setIsClicked(false), 500); // Hide after 1 second
    setIsExpanded(!isExpanded);
    if (
      id !== undefined &&
      (page === "/HomeOnepage" || page === "/HomeOnepage2" || page === "/HomeOnpageLight")
    ) {
      scrollToSection(id);
      console.log("section moved");
    } 
   
  };

  useEffect(()=>{
    if (page === "/" ||page === "/HomeOnepage" || page === "/HomeOnpageLight") {
      localStorage.setItem("defaulthome", true);
      setIsDefaultHome(true);
    }else if (page === "/HomeLight2" ||page === "/HomeOnepage2" ) {
      localStorage.setItem("defaulthome", false);
      console.log("index-2");
      setIsDefaultHome(false);
    }

    // Check if default home exists in local storage before removing Remove default home from local storage only if it exists and if one of the specific links is clicked
    const specificLinks = [
      "/",
      "/HomeOnepage",
      "/HomeLight",
      "/HomeOnpageLight",
    ];
    
      specificLinks.forEach(link => {
        if (link === page) {
          localStorage.removeItem("defaulthome");
          setIsDefaultHome(true);
        }
      });
  },[location.pathname])
  const scrollToTop = () => {
      // Scroll to the top of the page
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    };
  


  return (
    <div className="side-navbar-items">
      <div className="nav-wrapper">
        <div className="side-navbar">
          <div className="side-nav-menu">
            <Link
              to={
                page === "/HomeOnepage2"
                ? "/HomeOnepage2":
                page === "/HomeLight2"
                  ? "/HomeLight2"
                  : page === "/HomeOnepage"
                    ? "/HomeOnepage"
                    : page === "/HomeOnpageLight"
                      ? defaultHome
                        ? "/Home2"
                        : "/HomeOnpageLight"

                      : isDarkMode
                        ? "/"
                        : "/HomeLight"
              }
              onClick={()=>{scrollToTop()}}
              className="smooth-menu"
            >
              <img src={logo} alt="Logo" />
            </Link>
          </div>
          <div className="nav-toggle" onClick={toggleNav}>
            <img src={menu} alt="" />
          </div>
          <div className={`author-social ${showIcons ? "show-icons" : ""}`}>
            <input
              type="checkbox"
              id="toggle"
              className="share-toggle"
              hidden
            />
            <label
              htmlFor="toggle"
              className="share-button"
              onClick={toggleIcons}
            >
              <FontAwesomeIcon icon={faPlus} />
            </label>

            {data &&
              data.social_handles.map((socialIcon, index) => (
                <Link
                  key={index}
                  to={socialIcon.url}
                  className={`share-icon ${socialIcon.icon}`}
                >
                  <img src={socialIcon.image.url} />
                </Link>
              ))}
          </div>
        </div>
      </div>
      <div className="container">
        <div
          className={`nav-side ${isExpanded ? "expanded" : "hide"}`}
          ref={navRef}
        >
          <div className="nav-items simple-menu">
            <div className="nav-toggle" onClick={toggleNav}>
              {" "}
              <FontAwesomeIcon
                icon={faPlus}
                style={{ transform: "rotate(45deg)" }}
              />
            </div>

            <div
              className={`nav-item dropdown ${isExpanded ? "visible" : "hide"}`}
            >
              <Link
                className={` smooth-menu home ${isClicked ? "clicked " : ""}`}
                onClick={() => {
                  handleLinkClick();
scrollToTop();
           
                }}
                to={
                  page === "/HomeOnepage2"
                  ? "/HomeOnepage2":
                  page === "/HomeLight2"
                    ? "/HomeLight2"
                    : page === "/HomeOnepage"
                      ? "/HomeOnepage"
                      : page === "/HomeOnpageLight"
                        ? defaultHome
                          ? "/Home2"
                          : "/HomeOnpageLight"

                        : isDarkMode
                          ? "/"
                          : "/HomeLight"
                }

              >
                Home
              </Link>
              <Link className="dropdown-toggle" onClick={toggleDropdown}>
                {" "}
                <FontAwesomeIcon icon={faPlus} />
              </Link>
              <ul className={`dropdown-menu ${showDropdown ? "show" : ""}`}>
                <li>
                  <Link
                    to="/"
                    onClick={() => {
                      handleLinkClick();
                      setIsDarkMode(true);
                    }}
                  >
                    Home vCard
                  </Link>
                </li>
                <li>
                  <Link
                    to="/HomeOnepage"
                    onClick={() => {
                      handleLinkClick();
                      setIsDarkMode(true);
                    }}
                  >
                    Home Onepage
                  </Link>
                </li>
                <li>
                  <Link
                    to="/HomeLight"
                    onClick={() => {
                      handleLinkClick();
                      setIsDarkMode(false);
                    }}
                  >
                    Home vCard Light
                  </Link>
                </li>
                <li>
                  <Link
                    to="/HomeOnpageLight"
                    onClick={() => {
                      handleLinkClick();
                      setIsDarkMode(false);
                    }}
                  >
                    Home Onepage Light
                  </Link>
                </li>
                <li>
                  <Link
                    to="/Home2"
                    onClick={() => {
                      handleLinkClick();
                      setIsDarkMode(true);
                    }}
                  >
                    Home Two vCard
                  </Link>
                </li>
                <li>
                  <Link to="/HomeOnepage2"
                    onClick={() => {
                      handleLinkClick();
                      setIsDarkMode(true);
                    }} >Home Two Onepage</Link>
                </li>
                <li>
                  <Link to="/HomeLight2" onClick={() => {
                    handleLinkClick();
                    setIsDarkMode(false);
                  }}
                  >Home Two vCard Light</Link>
                </li>
                <li>
                  <Link to="/HomeOnepage2"
                    onClick={() => {
                      handleLinkClick();
                      setIsDarkMode(false);
                    }}>Home Two Onepage Light</Link>
                </li>
              </ul>
              <div className="nav-item-wrapper"></div>
            </div>
            <div
              className={`nav-item dropdown ${isExpanded ? "visible" : "hide"}`}
            >
              <Link
                className={` smooth-menu ${isClicked ? "clicked" : ""}`}
                onClick={() => handleLinkClick("services")}
                to={
                  page === "/HomeOnepage"
                    ? "/HomeOnepage"
                    : page === "/HomeOnpageLight"
                      ? "/HomeOnpageLight"
                      : page === "/HomeOnepage2"
                        ? "/HomeOnepage2"
                        : "/services"
                }

              >
                Services
              </Link>
              <div className="nav-item-wrapper"></div>
            </div>
            <div
              className={`nav-item dropdown ${isExpanded ? "visible" : "hide"}`}
            >
              <Link
                className={` smooth-menu ${isClicked ? "clicked" : ""}`}
                onClick={() => handleLinkClick("about")}
                to={
                  page === "/HomeOnepage"
                    ? "/HomeOnepage"
                    : page === "/HomeOnpageLight"
                      ? "/HomeOnpageLight"
                      : page === "/HomeOnepage2"
                        ? "/HomeOnepage2"
                        : "/about"
                }

              >
                About
              </Link>
              <div className="nav-item-wrapper"></div>
            </div>
            <div
              className={`nav-item dropdown ${isExpanded ? "visible" : "hide"}`}
            >
              <Link
                className={` smooth-menu ${isClicked ? "clicked" : ""}`}
                onClick={() => handleLinkClick("projects")}
                to={
                  page === "/HomeOnepage"
                    ? "/HomeOnepage"
                    : page === "/HomeOnpageLight"
                      ? "/HomeOnpageLight"
                      : page === "/HomeOnepage2"
                        ? "/HomeOnepage2"
                        : "/projects"
                }

              >
                Portfolio
              </Link>
              <div className="nav-item-wrapper"></div>
            </div>
            <div
              className={`nav-item dropdown ${isExpanded ? "visible" : "hide"}`}
            >
              <Link
                className={` smooth-menu ${isClicked ? "clicked" : ""}`}
                onClick={() => handleLinkClick("blog")}
                to={
                  page === "/HomeOnepage"
                    ? "/HomeOnepage"
                    : page === "/HomeOnpageLight"
                      ? "/HomeOnpageLight"
                      : page === "/HomeOnepage2"
                        ? "/HomeOnepage2"
                        : "/blog"
                }

              >
                Blog
              </Link>

              <div className="nav-item-wrapper"></div>
            </div>
            <div
              className={`nav-item dropdown ${isExpanded ? "visible" : "hide"}`}
            >
              <Link
                to={
                  page === "/HomeOnepage"
                    ? "/HomeOnepage"
                    : page === "/HomeOnpageLight"
                      ? "/HomeOnpageLight"
                      : page === "/HomeOnepage2"
                        ? "/HomeOnepage2"
                        : "/contact"
                }

                className={` smooth-menu ${isClicked ? "clicked" : ""}`}
                onClick={() => handleLinkClick("contact")}
              >
                Contact
              </Link>
              <div className="nav-item-wrapper"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideNavbar;
