import React from "react";
import SideNavbar from "../SideBar/SideBar";
import { Link } from "react-router-dom";
import Header from "../Header/Header";
import harndImage from "/assets/img/shape/harnd.png";
import figmaIcon from "/assets/img/icon/figma.png";
import wordpressIcon from "/assets/img/icon/wordpress.png";
import laptopImage from "/assets/img/shape/laptop.png";

const Home = ({ data }) => {
  return (
    <>
      <div className="banner-style-one-area default-padding">
        <div className="container">
          <div className="banner-top">
            <div className="row align-center">
              <div className="col-lg-7 pr-50 pr-md-15 pr-xs-15">
                <div className="information">
                  <div className="content">
                    <h2>
                      Hey <img src={harndImage} alt="image not found" />, I'm{" "}
                      <br />
                      {data && data.about ? data.about.name : ""}
                    </h2>
                    <p>{data && data.about ? data.about.subTitle : " "}</p>
                    <Link
                      to="/contact"
                      className="btn-standard btn-new mt-10 smooth-menu"
                    >
                      Hire me Now
                    </Link>
                  </div>
                  <div className="profile-grid">
                    <ul>
                      <li>
                        <Link to="/services" className="smooth-menu">
                          Services
                          <div className="icon-list">
                            <img src={figmaIcon} alt="Image not Found" />
                            <img src={wordpressIcon} alt="Image not Found" />
                          </div>
                        </Link>
                      </li>
                      <li>
                        <Link to="/projects" className="smooth-menu">
                          Projects
                          <img src={laptopImage} alt="Image Not Found" />
                        </Link>
                      </li>
                      <li>
                        <Link to="/about" className="smooth-menu">
                          About
                          <strong>A</strong>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-5">
                <div className="thumb">
                  {data && data.about ? (
                    <img src={data.about.avatar.url} alt="Image Not Found" />
                  ) : (
                    ""
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
