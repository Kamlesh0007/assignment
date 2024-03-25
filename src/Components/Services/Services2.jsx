import React, { useState, useEffect } from "react";
import CountUp from "react-countup";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Autoplay, Navigation } from "swiper/modules";
import {
  faChevronLeft,
  faChevronRight,
  faCheckSquare,
} from "@fortawesome/free-solid-svg-icons";

const ExpertiseItem = ({ iconSrc, title, initialValue }) => {
  return (
    <div className="expterise-item">
      <div className="top">
        <div className="icon">
          <img src={iconSrc} alt="Image Not Found" />
        </div>
        <div className="fun-fact">
          <div className="counter">
            <CountUp start={0} end={initialValue} duration={2.5} delay={0}>
              {({ countUpRef }) => <span ref={countUpRef} />}
            </CountUp>
            %
          </div>
        </div>
      </div>
      <div className="bottom">
        <h4>{title}</h4>
      </div>
    </div>
  );
};

const ExpertiseSection = () => {
  const expertiseItems = [
    {
      iconSrc: "/assets/img/icon/figma.png",
      title: "UI / UX Design",
      initialValue: 90,
    },
    {
      iconSrc: "/assets/img/icon/wordpress.png",
      title: "WordPress",
      initialValue: 87,
    },
    {
      iconSrc: "/assets/img/icon/react.png",
      title: "React JS",
      initialValue: 76,
    },
    {
      iconSrc: "/assets/img/icon/python.png",
      title: "Python",
      initialValue: 95,
    },
    {
      iconSrc: "/assets/img/icon/ruby.png",
      title: "Ruby",
      initialValue: 78,
    },
  ];

  return (
    <div className="expertise-area default-padding-top">
      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            <div className="heading-left mb-60">
              <h4 className="sub-title">Personal Skill</h4>
              <h2 className="title">Check my expertise</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="expertise-items">
              {expertiseItems.map((item, index) => (
                <ExpertiseItem
                  key={index}
                  iconSrc={item.iconSrc}
                  title={item.title}
                  initialValue={item.initialValue}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const ServiceSlider = () => {
  const slideItems = [
    {
      text: "Website design",
      icon: "D",
      bgImage: 'url("/assets/img/800x800.png")',
      description:
        "Bndulgence diminution so discovered mr apartments. Are off under folly death wrote cause her way spite. Plan upon yet way get cold spot its week. Almost do am or limits hearts. Resolve parties but why she shewing. She sang know now",
      services: [
        "Ongoing Website Maintenance",
        "WordPress Support",
        "Social Media Management",
      ],
    },
    {
      text: "Graphics design",
      icon: "U",
      bgImage: 'url("/assets/img/800x800.png")',
      description:
        "Technical diminution so discovered mr apartments. Are off under folly death wrote cause her way spite. Plan upon yet way get cold spot its week. Almost do am or limits hearts. Resolve parties but why she shewing. She sang know now",
      services: [
        "UI and Interactive Design",
        "Motion Graphics and Animation",
        "Typographic Design",
      ],
    },
  ];

  return (
    <div className="services-style-two-area default-padding">
      <div className="container">
        <div className="service-box">
          <div className="row">
            <div className="col-lg-8">
              <div className="heading-left mb-60">
                <h4 className="sub-title">What I do</h4>
                <h2 className="title">My Specializations</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="service-style-two-items">
                <div className="services-style-two-carousel swiper">
                  <Swiper
                    modules={[Autoplay, Navigation]}
                    slidesPerView={1}
                    navigation={{
                      prevEl: ".services-button-prev",
                      nextEl: ".services-button-next",
                    }}
                    loop={true}
                    autoplay={true}
                    className="swiper-wrapper"
                  >
                    {slideItems.map((item, index) => (
                      <SwiperSlide key={index}>
                        <div className="services-style-two swiper-slide">
                          <div className="row">
                            <div className="col-lg-5">
                              <h2
                                className="bg-text"
                                style={{ backgroundImage: item.bgImage }}
                              >
                                {item.icon}
                              </h2>
                            </div>
                            <div className="col-lg-7 pl-50 pl-md-15 pl-xs-15">
                              <div className="services-two-info">
                                <h2>{item.text}</h2>
                                <p>{item.description}</p>
                                <ul className="service-list mt-30">
                                  {item.services.map((service, idx) => (
                                    <li key={idx}>
                                      {" "}
                                      <FontAwesomeIcon icon={faCheckSquare} />
                                      {service}
                                    </li>
                                  ))}
                                </ul>
                                <Link
                                  to="#contact"
                                  className="btn btn-md circle btn-theme effect smooth-menu"
                                >
                                  Hire Now
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                  <div className="services-nav">
                    <div className="nav-items">
                      <div className="services-button-prev">
                        <FontAwesomeIcon icon={faChevronLeft} />
                      </div>
                      <div className="services-button-next">
                        <FontAwesomeIcon icon={faChevronRight} />
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
  );
};

const Services2 = () => {
  return (
    <>
      <ExpertiseSection />
      <ServiceSlider />
    </>
  );
};
export default Services2;
