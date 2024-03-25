import React from "react";
import { Link } from "react-router-dom";
import Typewriter from "typewriter-effect";
import profileImage from "/assets/img/illustration/5.png";
import bgImage from "/assets/img/shape/8.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import hand from "/assets/img/shape/harnd.png";
import {
  faFacebookF,
  faBehance,
  faDribbble,
} from "@fortawesome/free-brands-svg-icons";
const Home2 = () => {
  return (
    <div
      className="banner-style-two-area default-padding"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="personal-social">
        <ul>
          <li className="facebook">
            <a href="#">
              <FontAwesomeIcon icon={faFacebookF} />
            </a>
          </li>
          <li className="behance">
            <a href="#">
              <FontAwesomeIcon icon={faBehance} />
            </a>
          </li>
          <li className="dribbble">
            <a href="#">
              <FontAwesomeIcon icon={faDribbble} />
            </a>
          </li>
        </ul>
      </div>
      <div
        className="author-thumb"
        style={{ backgroundImage: `url(${profileImage})` }}
      ></div>
      <div className="container">
        <div className="banner-top">
          <div className="row">
            <div className="col-lg-7 pr-50">
              <div className="information">
                <div className="content">
                  <h2>
                    Hey{" "}
                    <img
                      src={hand}
                      alt="image not found"
                    />
                    , I'm <br />
                    Richard Brian
                  </h2>
                  <h3 className="title">
                    <span className="header-caption" id="page-top">
                      <Typewriter
                        options={{
                          strings: [
                            "Senior Web Developer",
                            "Professional & Expert Coder",
                            "UI/UX Desiging Expert",
                          ],
                          autoStart: true,
                          loop: true,
                        }}
                      />
                    </span>
                  </h3>
                  <Link
                    to="/contact"
                    className="btn-standard btn-new mt-10 smooth-menu"
                  >
                    Hire me Now
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home2;
