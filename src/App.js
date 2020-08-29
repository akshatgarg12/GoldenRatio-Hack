import React from 'react';
import './App.css';
import HomeSection from './components/Sections/Home';
import IntroSection from './components/Sections/Intro';
import ArchitectureSection from './components/Sections/Architecture';
import FacesSection from './components/Sections/faces';
import LogoSection from './components/Sections/Logo';
import MobileChat from './components/Mobile';
import Paintings from './components/Sections/Paintings';
import AboutSection from './components/Sections/About';
import ArticleLinks from './components/Sections/ArticleLinks';

export default function App() {
  return (
    <div className="App">
    <HomeSection />
    <AboutSection />
    <IntroSection />
     <section id="examples-section">
      <ArchitectureSection />
      <FacesSection />
      <LogoSection />
      <Paintings />
      <MobileChat />
     </section>
     <ArticleLinks />
     <div className="footer-div">
      <p>Created with <span role="img">❤️</span> by Akshat Garg</p>
      <div className="icons">
        <a href="https://github.com/akshatgarg12"><i class="fab fa-github"></i></a>
        <a href="https://www.linkedin.com/in/akshat-garg-ba1ab0183/"><i class="fab fa-linkedin"></i></a>
      </div>
     </div>
    </div>
  );
}


