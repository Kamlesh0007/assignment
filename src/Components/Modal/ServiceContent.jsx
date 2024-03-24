import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import image1 from "../../assets/img/1500x800.png";
import icon1 from "../../assets/img/icon/1.png";
import icon2 from "../../assets/img/icon/2.png";
import {
  faChevronDown,
  faChevronUp,
  faCheckSquare,
} from "@fortawesome/free-solid-svg-icons";

const ServiceContent = () => {
  const [expandedIndex, setExpandedIndex] = useState(0);

  const toggleAccordion = (index) => {
    console.log("trigg");
    setExpandedIndex(index === expandedIndex ? -1 : index);
  };

  const accordionData = [
    {
      title: "Business Innovation",
      content:
        "Bennings appetite disposed me an at subjects an. To no indulgence diminution so discovered mr apartments. Are off under folly death wrote cause her way spite. Plan upon yet way. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains. pleasures have to be repudiated and annoyances accepted. Nam libero tempore, cum soluta nobis est elig endi optio cumque",
    },
    {
      title: "Search Engine Optimization",
      content:
        "Bennings appetite disposed me an at subjects an. To no indulgence diminution so discovered mr apartments. Are off under folly death wrote cause her way spite. Plan upon yet way. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains. pleasures have to be repudiated and annoyances accepted. Nam libero tempore, cum soluta nobis est elig endi optio cumque",
    },
    {
      title: "Thinking Differently",
      content:
        "Bennings appetite disposed me an at subjects an. To no indulgence diminution so discovered mr apartments. Are off under folly death wrote cause her way spite. Plan upon yet way. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains. pleasures have to be repudiated and annoyances accepted. Nam libero tempore, cum soluta nobis est elig endi optio cumque",
    },
  ];
  return (
    <>
      <div className="services-details-area">
        <div className="container">
          <div className="services-details-items">
            <div className="row">
              <div class="col-xl-12 services-single-content">
                <div className="service-single-thumb">
                  <img src={image1} alt="Thumb" />
                </div>
                <h2>Best influencer marketing services</h2>
                <p>
                  We denounce with righteous indige nation and dislike men who
                  are so beguiled and demo realized by the charms of pleasure of
                  the moment, so blinded by desire, that they cannot foresee the
                  pain and trouble that are bound to ensue cannot foresee. These
                  cases are perfectly simple and easy to distinguish. In a free
                  hour, when our power of choice is untrammelled data structures
                  manages data in technology.
                </p>
                <div class="features mt-40 mt-xs-30 mb-30 mb-xs-20">
                  <div class="row">
                    <div class="col-lg-5 col-md-6">
                      <div class="content">
                        <h3>Included Services</h3>
                        <ul class="feature-list-item">
                          <li>
                            {" "}
                            <FontAwesomeIcon icon={faCheckSquare} />
                            Monthly SEO Task
                          </li>
                          <li>
                            {" "}
                            <FontAwesomeIcon icon={faCheckSquare} />
                            24/7 Alltime Supporting
                          </li>
                          <li>
                            {" "}
                            <FontAwesomeIcon icon={faCheckSquare} />
                            Turbo Boosting
                          </li>
                          <li>
                            {" "}
                            <FontAwesomeIcon icon={faCheckSquare} />
                            Expert Team Members
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div class="col-lg-7 col-md-6 mt-xs-30">
                      <div class="content">
                        <h3>The Challange</h3>
                        <p>
                          Temporibus autem quibusdam et aut officiis debitis aut
                          rerum necessitatibus saepe eveniet ut et voluptates
                          repudiandae sint et molestiae non recusandae. Itaque
                          earum rerum hic tenetur a sapiente delectus, ut aut
                          reiciendis voluptatibus maiores alias. consequatur aut
                          perferendis doloribus.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <h3>What we do?</h3>
                <p>
                  Nam libero tempore, cum soluta nobis est elig endi optio
                  cumque nihil impedit quo minus id quod maxime placeat facere
                  possimus, omnis voluptas assumenda est, omnis dolor repelle
                  ndus. Temporibus autem quibusdam et aut officiis debitis aut
                  rerum necessitatibus saepe eveniet ut et voluptates
                  repudiandae sint et molestiae non recusandae. Itaque earum
                  rerum hic tenetur a sapiente delectus, ut aut reiciendis
                  voluptatibus maiores alias. consequatur aut perferendis
                  doloribus asperiores repellat. The wise man therefore always
                  holds in these matters to this principle of selection: he
                  rejects pleasures to secure other greater pleasures, or else
                  he endures pains to avoid worse pains. pleasures have to be
                  repudiated and annoyances accepted.
                </p>

                <div class="faq-style-one mt-40">
                  <h2 class="mb-20">Any Questions find here.</h2>
                  <div className="accordion" id="faqAccordion">
                    {accordionData.map((item, index) => (
                      <AccordionItem
                        key={index}
                        title={item.title}
                        content={item.content}
                        isOpen={index === expandedIndex}
                        onClick={() => toggleAccordion(index)}
                      />
                    ))}
                  </div>
                </div>

                <div class="services-more mt-40">
                  <h2 class="mb-20">Most popular services</h2>
                  <div class="row">
                    <div class="col-md-6">
                      <div class="item">
                        <img src={icon1} alt="Image Not Found" />
                        <h4>
                          <a href="#">Friendly Interface</a>
                        </h4>
                        <p>
                          These cases are perfectly simple and easy to
                          distinguish. In a free hour, when our power.
                        </p>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="item">
                        <img src={icon2} alt="Image Not Found" />
                        <h4>
                          <a href="#">Strong Encryption</a>
                        </h4>
                        <p>
                          These cases are perfectly simple and easy to
                          distinguish. In a free hour, when our power.
                        </p>
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

export default ServiceContent;

const AccordionItem = ({ title, content, isOpen, onClick }) => {
  return (
    <div className="accordion-item">
      <h2 className="accordion-header" onClick={onClick}>
        {title}
        <FontAwesomeIcon icon={isOpen ? faChevronUp : faChevronDown} />
      </h2>
      {isOpen && (
        <div className="accordion-collapse collapse show">
          <div className="accordion-body">
            <p>{content}</p>
          </div>
        </div>
      )}
    </div>
  );
};
