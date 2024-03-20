
import React, { useState, useRef  } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from "../../assets/img/logo-icon.png"
import menu from "../../assets/img/menu-white.svg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import './SideBar.css';
import { gsap } from 'gsap';

const SideNavbar = () => {
    const navRef = useRef(null);
    const [showIcons, setShowIcons] = useState(false);
    const [isExpanded, setIsExpanded] = useState(false);
    const [isClicked, setIsClicked] = useState(false);

    const toggleIcons = () => {
        console.log("hit");
        setShowIcons(!showIcons);
    };
    const toggleNav = () => {
        setIsExpanded(!isExpanded);

        setIsClicked(false);
    };

    const handleLinkClick = () => {
        setIsClicked(true);
        setTimeout(() => setIsClicked(false), 500); // Hide after 1 second
        setIsExpanded(!isExpanded);
    };
    // const animateNav = () => {
    //     const navSide = navRef.current;
    //     const t1 = gsap.timeline();

    //     if (isExpanded) {
    //         t1.to(navSide, { width: "45%", duration: 1, ease: 'expo.inOut' })
    //           .staggerTo(navSide.querySelectorAll(".nav-item > a"), 0.6, { top: "0px", ease: 'expo.inOut' }, 0.1, "-=0.8")
    //           .staggerTo(navSide.querySelectorAll(".nav-item a.dropdown-toggle"), 0.6, { top: "5px", ease: 'expo.inOut' }, 0.1, "-=0.6");
    //     } else {
    //         t1.reverse();
    //     }
    // };


    return (
     
            <div className="side-navbar-items">
                <div className="nav-wrapper">
                    <div className="side-navbar">
                        <div className="side-nav-menu">
                            <Link to="/" className="smooth-menu">
                                <img src={logo} alt="Logo" />
                            </Link>
                        </div>
                        <div className="nav-toggle" onClick={toggleNav}>
                            <img src={menu} alt="" />
                        </div>
                        <div className={`author-social ${showIcons ? 'show-icons' : ''}`}  >
                            <input type="checkbox" id="toggle" className="share-toggle" hidden />
                            <label htmlFor="toggle" className="share-button"  onClick={toggleIcons}>
                                <FontAwesomeIcon icon={ faPlus} />
                            </label>

        
                                    <Link to="/" className="share-icon facebook">
                                        <FontAwesomeIcon icon={faFacebookF} />
                                   </Link>
                                   <Link to="/" className="share-icon twitter">
                                        <FontAwesomeIcon icon={faTwitter} />
                                   </Link>
                                   <Link to="/" className="share-icon instagram">
                                        <FontAwesomeIcon icon={faInstagram} />
                                   </Link>
                      
                        </div>


                    </div>
                </div>
                <div className="container">
                <div className={`nav-side ${isExpanded ? 'expanded' : 'hide'}`} ref={navRef}>
                    <div className="nav-items simple-menu">

                        <div className="nav-toggle">                   <FontAwesomeIcon icon={ faPlus} style={{ transform: 'rotate(45deg)' }}/></div>


                        <div  className={`nav-item dropdown ${isExpanded ? 'visible' : 'hide'}`}>
                            <Link className={` smooth-menu home ${isClicked ? 'clicked ' : ''}`} onClick={handleLinkClick} to="/">Home</Link>
                            <Link className="dropdown-toggle" >        <FontAwesomeIcon icon={ faPlus} /></Link>
                            <ul className="dropdown-menu">
                                <li><Link>Home vCard</Link></li>
                                <li><Link >Home Onepage</Link></li>
                                <li><Link>Home vCard Light</Link></li>
                                <li><Link>Home Onepage Light</Link></li>
                                <li><Link>Home Two vCard</Link></li>
                                <li><Link>Home Two Onepage</Link></li>
                                <li><Link>Home Two vCard Light</Link></li>
                                <li><Link>Home Two Onepage Light</Link></li>
                            </ul>
                            <div className="nav-item-wrapper"></div>
                        </div>
                        <div className={`nav-item dropdown ${isExpanded ? 'visible' : 'hide'}`}>
                            <Link className={` smooth-menu ${isClicked ? 'clicked' : ''}`} onClick={handleLinkClick} >Services</Link>
                            <div className="nav-item-wrapper"></div>
                        </div>
                        <div className={`nav-item dropdown ${isExpanded ? 'visible' : 'hide'}`}>
                            <Link className={` smooth-menu ${isClicked ? 'clicked' : ''}`} onClick={handleLinkClick} >About</Link>
                            <div className="nav-item-wrapper"></div>
                        </div>
                        <div className={`nav-item dropdown ${isExpanded ? 'visible' : 'hide'}`}>
                            <Link className={` smooth-menu ${isClicked ? 'clicked' : ''}`} onClick={handleLinkClick} >Portfolio</Link>
                            <div className="nav-item-wrapper"></div>
                        </div>
                        <div className={`nav-item dropdown ${isExpanded ? 'visible' : 'hide'}`}>
                            <Link className={` smooth-menu ${isClicked ? 'clicked' : ''}`} onClick={handleLinkClick} >Blog</Link>
                            
                            <div className="nav-item-wrapper"></div>
                        </div>
                        <div className={`nav-item dropdown ${isExpanded ? 'visible' : 'hide'}`}>
                            <Link to="/contact" className={` smooth-menu ${isClicked ? 'clicked' : ''}`} onClick={handleLinkClick} >Contact</Link>
                            <div className="nav-item-wrapper"></div>
                        </div>

                    </div>
                </div>
            </div>
            </div>
    
    );
}

export default SideNavbar;
