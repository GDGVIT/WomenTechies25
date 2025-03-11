
import './App.css'
import Navbar from '../components/Navbar'
import FaqSection from "../components/FaqSection"
import HeroSection from '../components/Hero"
import AboutGDSC from '../components/AboutGDSC'
import AboutSection from '../components/AboutWT'
import DinoScroll from '../components/dino-scroll/horizontal-scroll-dino'
import ContactSection from "../components/Contact"
import SwipeAnimation from "../components/swipe"
import Spons from "../components/spons/Spons"
function App() {
  return (
    <>
    <div className=" bg-background">
      <Navbar />
      <HeroSection/>
      <AboutSection />
      <AboutGDSC/>
      <SwipeAnimation/>
      {/* <AboutVIT/> */}
      
      <Spons/>
      <FaqSection />
      
      
      <DinoScroll/>

    <ContactSection/>
    </div>
    
      </>
  )
}

export default App
