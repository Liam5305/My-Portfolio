import * as React from "react";

import {
  Routes,
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";

import LandingPage from "./pages/LandingPage"
import AboutPage from "./pages/AboutPage"
import EducationPage from "./pages/EducationPage"
import ContactPage from "./pages/ContactPage"

function App() {
  return (
    <>
      <HashRouter>
        <div>
          <div className="header">
            <ul className="nav">
              <li><NavLink to ="/">Home</NavLink></li>
              <li><NavLink to ="/about">About Me</NavLink></li>
              <li><NavLink to ="/experience">My Experience</NavLink></li>
              <li><NavLink to ="/contact">Contact Me</NavLink></li>
            </ul>
          </div>
        </div>
        <div className="content">
          <Routes>
            <Route exact path="/" element={<LandingPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/experience" element={<EducationPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </div>
      </HashRouter>
    </>  
  )
}

export default App;
