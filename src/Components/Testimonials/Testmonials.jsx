import React, { useEffect } from "react";

import image1 from "/assets/img/800x800.png";
import image2 from "/assets/img/brand/1.png";
import image3 from "/assets/img/brand/2.png";
import image4 from "/assets/img/brand/4.png";
import image5 from "/assets/img/brand/5.png";
import image6 from "/assets/img/brand/3.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import "./Testimonials.css";
import "swiper/css";

import { Autoplay } from "swiper/modules";

const Testimonial = ({ imageSrc, content, name, position }) => {
  return (
    <div className="swiper-slide">
      <div className="testimonial-style-one">
        <div className="item">
          <div className="thumb">
            <img src={imageSrc} alt="Image Not Found" />
          </div>
          <div className="content">
            <p>{`"${content}"`}</p>
          </div>
          <div className="provider">
            <div className="rating">
              {[...Array(5)].map((_, index) => (
                <FontAwesomeIcon key={index} icon={faStar} />
              ))}
            </div>
            <div className="info">
              <h4>{name}</h4>
              <span>{position}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Brand = () => {
  return (
    <div className="brand-style-one-area default-padding-bottom text-center">
      <div className="container">
        <div className="brand-heading">
          <div className="row">
            <h3>
              Trusted By <strong>10K+ </strong> Customers
            </h3>
          </div>
        </div>
        <div className="brand-style-one">
          <div className="row">
            <div className="col-lg-10 offset-lg-1">
              <div className="brand5col swiper">
                <div className="swiper-wrapper align-center">
                  <Swiper
                    modules={[Autoplay]}
                    slidesPerView={5}
                    spaceBetween={30}
                    loop={true}
                    breakpoints={{
                      768: {
                        slidesPerView: 3,
                        spaceBetween: 40,
                      },
                      992: {
                        slidesPerView: 4,
                        spaceBetween: 60,
                      },
                      1199: {
                        slidesPerView: 5,
                        spaceBetween: 90,
                      },
                    }}
                    pagination={{ clickable: true }}
                  >
                    <SwiperSlide>
                      <img src={image2} alt="Thumb" />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img src={image3} alt="Thumb" />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img src={image4} alt="Thumb" />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img src={image5} alt="Thumb" />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img src={image6} alt="Thumb" />
                    </SwiperSlide>
                  </Swiper>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const TestimonialSection = ({ data }) => {
  console.log(data);

  return (
    <>
      <div className="testimonial-style-one-area default-padding-bottom">
        <div className="container">
          <div className="testimonial-style-one-box">
            <div className="row">
              <div className="col-lg-8 offset-lg-2">
                <div className="site-heading text-center">
                  <h4 className="sub-title">Testimonials</h4>
                  <h2 className="title">Customers feedback</h2>
                  <div className="devider"></div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-10 offset-lg-1">
                <Swiper
                  modules={[Autoplay]}
                  slidesPerView={1}
                  spaceBetween={30}
                  loop={true}
                  autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                  }}
                  pagination={{ clickable: true }}
                >
                  {data &&
                    data.testimonials.map((testimonial, index) => (
                      <SwiperSlide key={index}>
                        <Testimonial
                          name={testimonial.name}
                          imageSrc={testimonial.image.url}
                          content={testimonial.review}
                          position={testimonial.position}
                        />
                      </SwiperSlide>
                    ))}
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Brand />
    </>
  );
};

export default TestimonialSection;
