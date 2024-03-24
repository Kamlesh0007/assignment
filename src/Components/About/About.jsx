import React, { useRef } from "react";

import "./About.css";
import image800x800 from "../../assets/img/800x800.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faRocket,
  faGraduationCap,
} from "@fortawesome/free-solid-svg-icons";

import {
  faLaravel,
  faReact,
  faHtml5,
  faWordpress,
  faWordpressSimple,
} from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";
const About = ({ data, DefaultHome }) => {
  
  if (!data) return null;
  console.log(DefaultHome);
  return (
    <>
      {
        DefaultHome ? (
          <div className="about-style-one-area default-padding" id="about">
            <div className="container">
              <div className="row">
                <div className="col-lg-5">
                  <div className="about-style-one-thumb">
                    <img src={data.about.avatar.url} alt="Image Not found" />
                    <div className="curve-text">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 150 150"
                        version="1.1"
                      >
                        <path
                          id="textPath"
                          d="M 0,75 a 75,75 0 1,1 0,1 z"
                        ></path>
                        <text>
                          <textPath href="#textPath">
                            Years of experience
                          </textPath>
                        </text>
                      </svg>
                      <h4>{data.about.exp_year}</h4>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 offset-lg-1 mt-50">
                  <div className="about-style-one-info">
                    <h3 className="sub-title">About Me</h3>
                    <h2 className="title">{data.about.subTitle}</h2>
                    <p>{data.about.description}</p>
                    {/* Biography */}
                    <div className="about-item">
                      <h3> Biography</h3>
                      <ul className="biography-table">
                        <li>
                          <h5>Name</h5>
                          <p>{data.about.name}</p>
                        </li>
                        <li>
                          <h5>Birthday</h5>
                          <p>24 March, 1996</p>
                        </li>
                        <li>
                          <h5>Email</h5>
                          <p>{data.email}</p>
                        </li>
                        <li>
                          <h5>Phone</h5>
                          <p>{data.about.phoneNumber}</p>
                        </li>
                      </ul>
                    </div>
                    {/* End Biography */}

                    {/* Personal Skill */}
                    <div className="about-item">
                      <h3> Personal Skill</h3>
                      <ul className="skill-items mt-10">
                        {data.skills.map((skill, index) => (
                          <li key={index}>
                            <div className="icon">
                              <img src={skill.image.url} />
                            </div>
                            <div className="content">
                              <span>{skill.percentage}%</span>
                              <h5>{skill.name}</h5>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                    {/* End Personal Skill */}

                    {/* Education */}
                    <div className="about-item">
                      <h3> Education</h3>
                      <ul className="education-table">
                        <li>
                          <h4>AS - Science &amp; Information</h4>
                          <h5>SuperKing College</h5>
                          <span>2001 - 2005</span>
                          <p>
                            The training provided by universities in order to
                            prepare people to work in various sectors of the
                            economy or areas of culture.
                          </p>
                        </li>
                        <li>
                          <h4>Sr. Software Engineer</h4>
                          <h5>Google Out Tech</h5>
                          <span>2017 - Present</span>
                          <p>
                            The training provided by universities in order to
                            prepare people to work in various sectors of the
                            economy or areas of culture.
                          </p>
                        </li>
                      </ul>
                    </div>
                    {/* End Education */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          /*About Section2 */
          <div className="about-style-one-area default-padding" id="about">
            <div className="container">
              <div className="row">
                <div className="col-lg-5">
                  <div className="about-style-two-thumb text-center">
                    <img src={image800x800} alt="Image Not Found" />
                    <div className="info">
                      <h3>James Baker</h3>
                      <Link to="mailto:abc@example.com">hello@ventix.me</Link>
                      <p>55 Main Street, New York City</p>
                      <ul className="achivement">
                        <li>
                          <div className="icon">
                            <FontAwesomeIcon
                              className="fa-html"
                              icon={faWordpress}
                            />
                          </div>
                          <div className="info">
                            <h5>WordPress Developer</h5>
                            <p>Top Rated – Upwork</p>
                          </div>
                        </li>
                        <li>
                          <div className="icon">
                            <FontAwesomeIcon
                              className="fa-html"
                              icon={faHtml5}
                            />
                          </div>
                          <div className="info">
                            <h5>Senior HTML Developer</h5>
                            <p>Level Two Seller - Fiverr</p>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 offset-lg-1 mt-50">
                  <div className="about-style-one-info">
                    <h3 className="sub-title">About Me</h3>
                    <h2 className="title">
                      I can develop <br /> that help people
                    </h2>
                    <p>
                      I'm creative designer based in USA, and I'm very
                      passionate and dedicated to my work. Since all Weblium
                      templates are developed on the basis of a deep study of
                      the niche and harmoniously combine the most current trends
                      in web design, sometimes it’s enough to simply choose a
                      template, add your own unique content and get a beautiful
                      website with the perfect navigation for your type of
                      busin.
                    </p>
                    <div className="about-item">
                      <h3>Biography</h3>
                      <ul className="biography-table">
                        <li>
                          <h5>Name</h5>
                          <p>Md Sohag Miah</p>
                        </li>
                        <li>
                          <h5>Birthday</h5>
                          <p>24 March, 1994</p>
                        </li>
                        <li>
                          <h5>Email</h5>
                          <p>richard@hello.com</p>
                        </li>
                        <li>
                          <h5>Skype</h5>
                          <p>program540</p>
                        </li>
                      </ul>
                    </div>
                    <div className="about-item">
                      <h3>Personal Skill</h3>
                      <ul className="skill-items mt-10">
                        <li>
                          <div className="icon">
                            <FontAwesomeIcon
                              className="fa-laravel"
                              icon={faLaravel}
                            />
                          </div>
                          <div className="content">
                            <span>75%</span>
                            <h5>Object oriented programming</h5>
                          </div>
                        </li>
                        <li>
                          <div className="icon">
                            <FontAwesomeIcon
                              className="fa-react"
                              icon={faReact}
                            />
                          </div>
                          <div className="content">
                            <span>90%</span>
                            <h5>Front-End with React</h5>
                          </div>
                        </li>
                        <li>
                          <div className="icon">
                            <FontAwesomeIcon
                              className="fa-html"
                              icon={faHtml5}
                            />
                          </div>
                          <div className="content">
                            <span>89%</span>
                            <h5>Advance frontend development</h5>
                          </div>
                        </li>
                      </ul>
                    </div>
                    <div className="about-item">
                      <h3>Education</h3>
                      <ul className="education-table">
                        <li>
                          <h4>AS - Science &amp; Information</h4>
                          <h5>SuperKing College</h5>
                          <span>2001 - 2005</span>
                          <p>
                            The training provided by universities in order to
                            prepare people to work in various sectors of the
                            economy or areas of culture.
                          </p>
                        </li>
                        <li>
                          <h4>Sr. Software Engineer</h4>
                          <h5>Google Out Tech</h5>
                          <span>2017 - Present</span>
                          <p>
                            The training provided by universities in order to
                            prepare people to work in various sectors of the
                            economy or areas of culture.
                          </p>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )
        /*End About Section2 */
      }
    </>
  );
};

export default About;
