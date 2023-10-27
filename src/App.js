
import './App.css';
import Home from './components/home';
import { Route, Routes, BrowserRouter } from 'react-router-dom'; // Note the change from Router to BrowserRouter

import About from './components/about';
import Contact from './components/contact';
import Project from './components/project';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Project />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
