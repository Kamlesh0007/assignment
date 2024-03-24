import React from "react";
import { Link } from "react-router-dom";

const ProjectItems = ({
  category,
  title,
  imageSrc,
  link,
  isOpen,
  setIsOpen,
  setActiveModalContent,
}) => {
  return (
    <div className="col-lg-6 item-center">
      <div className="portfolio-style-one">
        <div className="thumb-zoom">
          <img src={imageSrc} alt="Image Not Found" />
        </div>
        <div className="pf-item-info">
          <div className="content-info">
            <span>{category}</span>

            <h2
              onClick={() => {
                console.log("hitted");
                setIsOpen(!isOpen);
                setActiveModalContent("project");
              }}
            >
              <Link to={link}>{title}</Link>
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectItems;
