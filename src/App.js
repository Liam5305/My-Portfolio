import React, { useState } from "react";

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
              <li><NavLink to ="/about-page">About Me</NavLink></li>
              <li><NavLink to ="/my-education">My Education</NavLink></li>
              <li><NavLink to ="/contact-me">Contact Me</NavLink></li>
            </ul>
          </div>
        </div>
        <div className="content">
          <Routes>
            <Route exact path="/" element={<LandingPage />} />
            <Route path="/about-page" element={<AboutPage />} />
            <Route path="/my-education" element={<EducationPage />} />
            <Route path="/contact-me" element={<ContactPage />} />
          </Routes>
        </div>
      </HashRouter>
    </>  
  )
}

export default App;
