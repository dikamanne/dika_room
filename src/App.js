import React from "react";
import Intro from "./components/Intro";
import About from "./components/About";
import Projects from "./components/Projects";
import NavBar from "./components/NavBar";
import './App.css';
import "./styles/Global.css";
import 'rsuite/dist/rsuite.min.css';
import Credits from "./components/Credits";



function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <div id="content">
        <Intro></Intro>
        <About></About>
        <Projects></Projects>
        <Credits></Credits>
      
      </div>
    </div>
  );
}

export default App;
