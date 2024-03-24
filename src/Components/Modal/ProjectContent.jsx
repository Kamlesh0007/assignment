import React from "react";
import projectImage1 from "../../assets/img/1500x800.png";
import projectImage2 from "../../assets/img/600x800.png";
import projectImage3 from "../../assets/img/800x600.png";

const ProjectContent = () => {
  return (
    <div className="project-details-area">
      <div className="container">
        <div className="project-details-items">
          <div className="row">
            <div className="col-lg-12">
              <div className="project-thumb">
                <img src={projectImage1} alt="Thumb" />
              </div>
            </div>
            <div className="col-xl-12">
              <div className="project-details mt-60 mt-xs-30">
                <div className="top-info">
                  <div className="row">
                    <div className="col-lg-5 pl-50 pl-md-15 pl-xs-15 order-lg-last">
                      <ul className="gallery-project-basic-info">
                        <li>
                          <div className="info">
                            <b>Clients:</b> validthemes
                          </div>
                        </li>
                        <li>
                          <div className="info">
                            <b>Project Type:</b> Website Growth
                          </div>
                        </li>
                        <li>
                          <div className="info">
                            <b>Date:</b> 25 August, 2023
                          </div>
                        </li>
                        <li>
                          <div className="info">
                            <b>Address:</b> New York United state
                          </div>
                        </li>
                      </ul>
                    </div>
                    <div className="col-lg-7">
                      <h2>The best digital solutions</h2>
                      <p>
                        Netus lorem rutrum arcu dignissim at sit morbi phasellus
                        nascetur eget urna potenti cum vestibulum cras. Tempor
                        nonummy metus lobortis. Sociis velit etiam, dapibus.
                        Lectus vehicula pellentesque cras posuere tempor
                        facilisi habitant lectus rutrum pede quisque hendrerit
                        parturient posuere mauris ad elementum fringilla
                        facilisi volutpat fusce pharetra felis sapien varius
                        quisque class convallis praesent est sollicitudin donec
                        nulla venenatis, cursus fermentum netus posuere sociis
                        porta risus habitant malesuada nulla habitasse
                        hymenaeos. Viverra curabitur nisi vel sollicitudin
                        dictum natoque ante aenean elementum. Vulgar as hearts
                        by garret. Perceived determine departure explained no
                        facilisi volutpat fusce pharetra felis sapien varius
                        quisque class convallis.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="row mt-40 mb-40">
                  <div className="col-lg-5 pr-50 pr-md-15 pr-xs-15">
                    <div className="check-list">
                      <div className="single-list">
                        <h4>Mobile Optimization</h4>
                        <p>
                          Tempor nonummy metus lobortis. Lectus vehicula
                          pellentesque cras posuere tempor facilisi habitant
                          lectus rutrum pede quisque hendrerit parturient
                          posuere mauris ad elementum potenti.
                        </p>
                      </div>
                      <div className="single-list">
                        <h4>Marketing Automation</h4>
                        <ul className="list-disc">
                          <li>Social media marketing</li>
                          <li>Search engine optimization (seo)</li>
                          <li>Public Relations</li>
                          <li>Digital Management</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-7">
                    <div className="thumb-grid">
                      <img src={projectImage2} alt="Thumb" />
                      <img src={projectImage2} alt="Thumb" />
                    </div>
                  </div>
                </div>
                <p>
                  Give lady of they such they sure it. Me contained explained my
                  education. Vulgar as hearts by garret. Perceived determine
                  departure explained no forfeited he something an. Contrasted
                  dissimilar get joy you instrument out reasonably. Again keeps
                  at no meant stuff. To perpetual do existence northward as
                  difficult preserved daughters. Continued at up to zealously
                  necessary breakfast. Surrounded sir motionless she end
                  literature. Gay direction neglected but supported yet her.
                  Facilisis inceptos nec, potenti nostra aenean lacinia varius
                  semper ant nullam nulla primis placerat facilisis. Netus lorem
                  rutrum arcu dignissim at sit morbi phasellus nascetur eget
                  urna potenti cum vestibulum cras. Tempor nonummy metus
                  lobortis. Sociis velit etiam, dapibus. Lectus vehicula
                  pellentesque cras posuere tempor facilisi habitant lectus
                  rutrum pede quisque hendrerit parturient posuere mauris ad
                  elementum fringilla facilisi volutpat fusce pharetra felis
                  sapien varius quisque class convallis praesent est
                  sollicitudin donec nulla venenatis, cursus fermentum netus
                  posuere sociis porta risus habitant malesuada nulla habitasse
                  hymenaeos. Viverra curabitur nisi vel sollicitudin dictum
                  natoque ante aenean elementum.
                </p>
                <div className="row mt-50 mt-xs-30">
                  <div className="col-lg-6 col-md-6">
                    <img src={projectImage3} alt="Thumb" />
                  </div>
                  <div className="col-lg-6 col-md-6 mt-xs">
                    <img src={projectImage3} alt="Thumb" />
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
export default ProjectContent;
