import React from "react";
import { Typewriter } from 'react-simple-typewriter';
import "../styles/Intro.css";
import FadeInSection from "./FadeInSection";

class Intro extends React.Component {
  render() {
    return (
      <div id="intro">
        <div className="intro-title">
        <Typewriter
          words={['dika manne']}
            typeSpeed={120}
            cursor
            cursorStyle="|"
        />
        </div>

        <FadeInSection>
          <div className="intro-subtitle">
            developer | data analyst | mapper
          </div>
        </FadeInSection>
      </div>
    );
  }
}

export default Intro;
