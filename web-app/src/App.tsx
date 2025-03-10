
import './App.css'
import Navbar from '../components/Navbar'
import FaqSection from "../components/FaqSection"
import HeroSection from '../components/Hero'
import AboutVIT from '../components/aboutgdsc/AboutVIT'
import AboutSection from '../components/AboutWT'
import DinoScroll from '../components/dino-scroll/horizontal-scroll-dino'
import ContactSection from "../components/Contact"
import SwipeAnimation from "../components/swipe"
import Spons from "../components/Spons/Spons"
function App() {
  return (
    <>
    <div className=" bg-background">
      <Navbar />
      <HeroSection/>
      <SwipeAnimation/>
      <AboutVIT/>
      <Spons/>
      <FaqSection />
      <AboutSection />
      <div className="App">
      
      <DinoScroll/>
    </div>
    <ContactSection/>
      
      </div>
      </>
  )
}

export default App
