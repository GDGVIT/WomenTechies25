
import './App.css'
import Navbar from '../components/Navbar'
import FaqSection from "../components/FaqSection"
// import AnimatedSection from '../components/AboutWT'
import Dummy from '../components/dummy'
import AboutSection from '../components/AboutWT'
import DinoScroll from '../components/dino-scroll/horizontal-scroll-dino'
import ContactSection from "../components/Contact"
function App() {
  return (
    <>
    <div className=" bg-background">
      <Navbar />
      <Dummy />
      <FaqSection />
      <div className="App">
      <AboutSection />
      <DinoScroll/>
    </div>
    <ContactSection/>
      
      </div>
      </>
  )
}

export default App
