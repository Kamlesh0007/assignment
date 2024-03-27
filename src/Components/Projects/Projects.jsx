import React from "react";
import ProjectItems from "./ProjectItems";
import "./Projects.css";
import TestimonialSection from "../Testimonials/Testmonials";

const Projects = ({
  data,
  isOpen,
  setIsOpen,
  setActiveModalContent,
  setSequence,
}) => {
  return (
    <>
      <div className="project-style-one-area default-padding" id="projects">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="heading-left">
                <h4 className="sub-title">Recent Work</h4>
                <h2 className="title">Showcasing My Projects</h2>
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row mt--50">
            {data &&
              data.projects.map((project, index) => (
                <ProjectItems
                  key={index}
                  category={project.techStack[index % 4]}
                  title={project.title}
                  imageSrc={project.image.url}
                  isOpen={isOpen}
                  setIsOpen={setIsOpen}
                  setActiveModalContent={setActiveModalContent}
                  data={data.projects}
                  setSequence={setSequence}
                  sequence={project.sequence}
                />
              ))}
          </div>
        </div>
      </div>
      <TestimonialSection data={data} />
    </>
  );
};

export default Projects;
