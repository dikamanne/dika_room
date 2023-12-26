// src/HelloWorld.js

import '/Users/dikamanne/dika_room/src/components/home.css';
import React from 'react';
import Typewriter from './Typewriter';
import About from './About';
import Experience from './Experience';
import Projects from './Projects';


const HomePage = () => {
  const showLinks = () => {
    const hiddenList = document.querySelector('.hiddenList');
    hiddenList.classList.add('show');
  };

  return (
    <div className="IntroText">
      <h1>
         <Typewriter text="dika manne" delay={100} onAnimationEnd={showLinks} />
      </h1>
      <ul className="hiddenList">
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#projects">Projects</a></li>
      </ul>

      <About />
      <Experience />
      <Projects />
    </div>
  );
};

export default HomePage;
