import React from "react";
import Intro from "./components/Intro";
import Experience from "./components/Experience";
import About from "./components/About";
import Projects from "./components/Projects";
import NavBar from "./components/NavBar";
import './App.css';
import "./styles/Global.css";
import 'rsuite/dist/rsuite.min.css';



function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <div id="content">
        <Intro></Intro>
        <About></About>
        <Experience></Experience>
        <Projects></Projects>
      
      </div>
    </div>
  );
}

export default App;
