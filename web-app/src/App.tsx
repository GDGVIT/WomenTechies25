import "./App.css";
import Navbar from "../components/Navbar";
import { useEffect } from "react";
import FaqSection from "../components/FaqSection";
import HeroSection from "../components/Hero";
import AboutGDSC from "../components/AboutGDSC";
import AboutSection from "../components/AboutWT";
import DinoScroll from "../components/dino-scroll/horizontal-scroll-dino";
import ContactSection from "../components/Contact";
import SwipeAnimation from "../components/swipe";
import Spons from "../components/spons/Spons";

function App() {


  return (
    <>
      <div className="custom-cursor bg-background">
        <Navbar />
        <div id="home">
          <HeroSection />
        </div>

        <div id="about">
          <AboutSection />
          <AboutGDSC />
        </div>

        <SwipeAnimation />
        <Spons />

        <div id="faq">
          <FaqSection />
        </div>

        <DinoScroll />

        <div id="contact">
          <ContactSection />
        </div>
      </div>
    </>
  );
}

export default App;
