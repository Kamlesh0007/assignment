import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWordpress, faReact } from "@fortawesome/free-brands-svg-icons";
import { faSquareArrowUpRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import "./Services.css";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import Services2 from "./Services2";
const ServiceItem = ({
  icon,
  title,
  description,
  projects,
  isOpen,
  setIsOpen,
  setActiveModalContent
}) => {
  return (
    <div className="service-style-one col-lg-6 col-md-6">
      <div className="service-style-one-item">
        <div className="thumb">
          <img src={icon} />
        </div>
        <div className="info">
          <h4>
            <Link to={"#"}>{title}</Link>
          </h4>
          <p>{description}</p>
          <div className="bottom">
            <span>{projects}</span>
            <Link to={"#"}>
              {" "}
              <FontAwesomeIcon
                onClick={() => {
                  console.log("hitted");
                  setIsOpen(!isOpen);
                  setActiveModalContent("service");
                }}
                icon={faSquareArrowUpRight}
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

const Services = ({ data, isOpen, setIsOpen, setActiveModalContent,
  DefaultHome  }) => {
  const [activeTab, setActiveTab] = useState("monthly");

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <>
    {DefaultHome?(<>
      <div
        className="services-style-one-area pt-120 pt-xs-50 pb-70 pb-xs-0"
        id="services"
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-8 offset-lg-2">
              <div className="site-heading text-center">
                <h4 className="sub-title">What i do</h4>
                <h2 className="title">My Specializations</h2>
                <div className="devider"></div>
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row">
            {data &&
              data.services.map((service, index) => (
                <ServiceItem
                  key={index}
                  icon={service.image.url}
                  title={service.name}
                  description={service.desc}
                  projects={service.charge}
                  isOpen={isOpen}
                  setIsOpen={setIsOpen}
                  setActiveModalContent={setActiveModalContent}
                />
              ))}
          </div>
        </div>
      </div>
      <div className="service-style-one col-lg-12 col-md-6">
        <div className="service-style-one-item button">
          <Link className="hire-btn" to="#">
            hire me
          </Link>
        </div>
      </div>
    
      
      </>):(
          <Services2 />
      
      )}
      <div className="pricing-style-one-area default-padding-bottom">
        <div className="container">
          <div className="row align-center">
            <div className="col-lg-12 col-xl-4">
              <div className="pricing-left">
                <h4 className="sub-title">Pricing</h4>
                <h2 className="title">The best pricing plans</h2>
                <ul className="list-rating mt-50">
                  <li>
                    Seller communication level
                    <div className="rating">
                      <FontAwesomeIcon icon={faStar} /> 4.9
                    </div>
                  </li>
                  <li>
                    Recommend to a friend
                    <div className="rating">
                      <FontAwesomeIcon icon={faStar} /> 5
                    </div>
                  </li>
                  <li>
                    Deliver on time
                    <div className="rating">
                      <FontAwesomeIcon icon={faStar} /> 5
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-12 col-xl-7 offset-xl-1">
              <div className="pricing-style-one-items">
                <div
                  className="nav nav-tabs pricing-tab-navs"
                  id="nav-tab"
                  role="tablist"
                >
                  <button
                    className={`nav-link ${
                      activeTab === "monthly" ? "active" : ""
                    }`}
                    onClick={() => handleTabChange("monthly")}
                  >
                    <span>Monthly</span>
                  </button>
                  <button
                    className={`nav-link ${
                      activeTab === "yearly" ? "active" : ""
                    }`}
                    onClick={() => handleTabChange("yearly")}
                    s
                  >
                    <span>Yearly</span>
                  </button>
                </div>

                <div
                  className="tab-content pricing-tab-content"
                  id="nav-tabContent"
                >
                  <div
                    className="tab-pane fade show active"
                    id="tab1"
                    role="tabpanel"
                    aria-labelledby="nav-id-1"
                  >
                    <div className="row">
                      <div className="col-lg-6 col-md-6">
                        <div
                          className={`pricing-style-one  ${
                            activeTab === "yearly" ? "active" : ""
                          }`}
                        >
                          <FontAwesomeIcon icon={faWordpress} />
                          <h4>WordPress Development</h4>
                          <ul>
                            <li>1 Page with Elementor</li>
                            <li>Design Customization</li>
                            <li>Responsive Design</li>
                          </ul>
                          <div className="price">
                            <h2>
                              <sup>$</sup>48
                            </h2>
                          </div>
                          <Link
                            className="btn mt-25 btn-sm circle btn-border light"
                            to="#"
                          >
                            Order Now
                          </Link>
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6">
                        <div
                          className={`pricing-style-one  ${
                            activeTab === "monthly" ? "active" : ""
                          }`}
                        >
                          <FontAwesomeIcon icon={faReact} />
                          <h4>Static frontend design</h4>
                          <ul>
                            <li>2 Page with React JS</li>
                            <li>Design implement</li>
                            <li>Responsive Design</li>
                          </ul>
                          <div className="price">
                            <h2>
                              <sup>$</sup>24
                            </h2>
                          </div>
                          <Link
                            className="btn mt-25 btn-sm circle btn-dark"
                            to="#"
                          >
                            Order Now
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
