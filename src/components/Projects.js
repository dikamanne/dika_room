import React from 'react';
import "../styles/Projects.css";
import FolderOpenRoundedIcon from "@mui/icons-material/FolderOpenRounded";
import FadeInSection from "./FadeInSection";
import Carousel from "react-bootstrap/Carousel";
import ExternalLinks from "./ExternalLinks";

class Projects extends React.Component {
  constructor() {
    super();
    this.state = {
      view: "carousel" // 'carousel' or 'grid'
    };
  }

  toggleView = () => {
    this.setState((prevState) => ({
      view: prevState.view === "carousel" ? "grid" : "carousel"
    }));
  };

  render() {
    const { view } = this.state;

    const Projects = {
      "Family Income Educational Attainment Case Study": {
        title: "Family Income Educational Attainment Case Study",
        desc: "How did total family income influence pre-pandemic educational attainment in the US, controlling for factors such as school type, family structure, etc.?",
        techStack: ["STATA"],
        link: "https://github.com/dikamanne/Family-Income-Educational-Attainment-Case-Study",
        open: "https://docs.google.com/document/d/1CouLOKFdHgc4YHCB95cKCwHOz3iBLHlaHvcPBRqzlnE/edit?usp=sharing",
        image: "/images/data_viz.png"
      }
    };


    return (
      <div id="projects">
        <div className="section-header">
          <span className="section-title">projects</span>
        </div>

        <div className="view-toggle-container">
        <button
          className={`view-toggle-btn ${this.state.view === "carousel" ? "active" : ""}`}
          onClick={() => this.setState({ view: "carousel" })}
        >
        Carousel View
        </button>
        <button
          className={`view-toggle-btn ${this.state.view === "grid" ? "active" : ""}`}
          onClick={() => this.setState({ view: "grid" })}
        >
        Grid View
        </button>
      </div>

        {view === "carousel" && (
          <Carousel>
            {Object.keys(Projects).map((key) => (
              <Carousel.Item key={key}>
                <img
                  className="d-block w-100"
                  src={Projects[key].image}
                  alt={key}
                />
                <div className="caption-bg">
                  <Carousel.Caption>
                    <h3>{Projects[key].title}</h3>
                    <p>{Projects[key].desc}</p>
                    <span className="techStack">{Projects[key].techStack}</span>
                    <ExternalLinks
                      githubLink={Projects[key].link}
                      openLink={Projects[key].open}
                    />
                  </Carousel.Caption>
                </div>
              </Carousel.Item>
            ))}
          </Carousel>
        )}

{view === "grid" && (
          <div className="notion-gallery-container">
            <div className="notion-gallery-grid">
              {Object.keys(Projects).map((key, i) => (
                <FadeInSection key={key} delay={`${i + 1}00ms`}>
                  <div className="notion-card">
                    {/* Image section */}
                    {Projects[key].image && (
                      <div className="notion-card__image-container">
                        <img 
                          src={Projects[key].image} 
                          alt={Projects[key].title}
                          className="notion-card__image"
                        />
                      </div>
                    )}
                    
                    {/* Content section */}
                    <div className="notion-card__content">
                      {/* Title */}
                      <h3 className="notion-card__title">
                        {Projects[key].title}
                      </h3>
                      
                      {/* Description */}
                      <p className="notion-card__description">
                        {Projects[key].desc}
                      </p>
                      
                      {/* Tech Stack Tags */}
                      {Projects[key].techStack && (
                        <div className="notion-card__tags">
                          {Projects[key].techStack.map((tech, index) => (
                            <span 
                              key={index}
                              className="notion-card__tag"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      )}
                      
                      {/* External Links */}
                      <div className="notion-card__links">
                        <ExternalLinks
                          githubLink={Projects[key].link}
                          openLink={Projects[key].open}
                        />
                      </div>
                    </div>
                  </div>
                </FadeInSection>
              ))}
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default Projects;
