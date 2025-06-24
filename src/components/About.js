import React from "react";
import "../styles/About.css";
import FadeInSection from "./FadeInSection";

class About extends React.Component {
  render() {
    const intro = (
      <p>
        Hi, I’m Dika! A <b>developer</b> and <b>data analyst</b> interested in using my combined
        quantitative and qualitative analysis skills at the intersection of international law,
        its history, postcolonial theory, mapping, and data science. I’m an aspiring scholar and
        developer exploring African governance, legal history, and data-driven policy through code,
        maps, and decolonial frameworks.
      </p>
    );

    const outro = (
      <p>
        I hope to use this information to present ways in which governance and development in Africa
        can be improved.
      </p>
    );

    const tech_stack = [
      "Typescript", "Python", "React.js", "Java", "Javascript ES6+", "R", "STATA"
    ];

    const research_interests = [
      "African Governance and Development",
      "Postcolonial/Decolonial Discourse",
      "International Law/Legal History",
      "Global Indigeneity"
    ];

    return (
      <div id="about">
        <FadeInSection>
          <div className="section-header">
            <span className="section-title"> about me</span>
          </div>

          <div className="about-content">
            <div className="about-description">{intro}</div>

            <div className="about-columns">
              <div className="about-list">
                <h4>Tech Stack:</h4>
                <ul className="tech-stack">
                  {tech_stack.map((tech_item, i) => (
                    <li key={i}>{tech_item}</li>
                  ))}
                </ul>
              </div>
              <div className="about-list">
                <h4>Research Interests:</h4>
                <ul className="research-interests">
                  {research_interests.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="about-description">{outro}</div>
          </div>
        </FadeInSection>
      </div>
    );
  }
}

export default About;
