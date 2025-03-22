
import './App.css'
import Navbar from '../components/Navbar'
import FaqSection from "../components/FaqSection"
import HeroSection from '../components/Hero'
import AboutGDSC from '../components/AboutGDSC'
import AboutSection from '../components/AboutWT'
import DinoScroll from '../components/dino-scroll/horizontal-scroll-dino'
import ContactSection from "../components/Contact"
import SwipeAnimation from "../components/swipe"
// import Spons from "../components/spons/Spons"
import SponsorsSection from "../components/Sponsors"
function App() {
  return (
    <>
    <div className="custom-cursor bg-background">
      <Navbar />
      <HeroSection/>
      <AboutSection />
      <AboutGDSC/>
      <SwipeAnimation/>
      {/* <AboutVIT/> */}
      
      {/* <Spons/>
       */}
      <SponsorsSection/>
      <FaqSection />
      
      
      <DinoScroll/>

    <ContactSection/>
    </div>
    
      </>
  )
}

export default App
