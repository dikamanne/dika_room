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
      "Policy + Data Analysis Mini Report": {
        title: "policy + data analysis mini report",
        desc: "A policy + data analysis mini report",
        techStack: "STATA",
        link: "https://github.com/dikamanne",
        open: "https://github.com/dikamanne",
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
          <div className="project-container">
            <ul className="projects-grid">
              {Object.keys(Projects).map((key, i) => (
                <FadeInSection key={key} delay={`${i + 1}00ms`}>
                  <li className="projects-card">
                    <div className="card-header">
                      <div className="folder-icon">
                        <FolderOpenRoundedIcon style={{ fontSize: 35 }} />
                      </div>
                      <ExternalLinks
                        githubLink={Projects[key].link}
                        openLink={Projects[key].open}
                      />
                    </div>

                    <div className="card-title">{key}</div>
                    <div className="card-desc">{Projects[key].desc}</div>
                    <div className="card-tech">{Projects[key].techStack}</div>
                  </li>
                </FadeInSection>
              ))}
            </ul>
          </div>
        )}
      </div>
    );
  }
}

export default Projects;
