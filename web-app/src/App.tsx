import React from "react"
import "./App.css"
import Navbar from "../components/Navbar"
import { useEffect } from "react"
import HeroSection from "../components/Hero"
import AboutGDSC from "../components/AboutGDSC"
import AboutSection from "../components/AboutWT"
import SwipeAnimation from "../components/swipe"
import Sponsors from "../components/Sponsors"
import FaqSection from "../components/FaqSection"
import DinoScroll from "../components/dino-scroll/horizontal-scroll-dino"
import ContactSection from "../components/Contact"

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
        <Navbar />
        <main>
          <section id="home" aria-label="Hero Section">
            <HeroSection />
          </section>

          <section id="about" aria-label="About Section">
            <AboutSection />
            <AboutGDSC />
          </section>

          <SwipeAnimation />
          <Sponsors />

          <section id="faq" aria-label="FAQ Section">
            <FaqSection />
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

