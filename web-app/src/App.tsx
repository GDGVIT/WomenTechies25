import React from "react"
import "./App.css"
import { useEffect } from "react"

import HeroSection from "../components/Hero"
import AboutGDSC from "../components/AboutGDSC"
import AboutSection from "../components/AboutWT"
import SwipeAnimation from "../components/swipe"
import Sponsors from "../components/Sponsors"
import FaqSection from "../components/FaqSection"
import ContactSection from "../components/Contact"
import DinoScroll from "../components/DinoScroll"
import Tracks from '../pages/tracks.tsx'

function App() {
  useEffect(() => {
    // Preload critical assets
    const preloadImages = ["/hero/girl.svg", "/hero/textbox.svg", "/hero/grid.svg"]

    preloadImages.forEach((src) => {
      const img = new Image()
      img.src = src
    })
  }, [])

  return (
    <>
      <div className="custom-cursor bg-background">
    
        <main>
          <section id="home" aria-label="Hero Section">
            <HeroSection />
          </section>

          <section id="about" aria-label="About Section">
            <AboutSection />
            <SwipeAnimation />
            <AboutGDSC />
          </section>

          
          <Sponsors />

          <section id="faq" aria-label="FAQ Section">
            <FaqSection />
          </section>
          <section id="tracks" aria-label="Tracks Section">
          <Tracks />
          </section>
          
          <DinoScroll />

          <section id="contact" aria-label="Contact Section">
            <ContactSection />
          </section>
        </main>
      </div>
    </>
  )
}

export default App
