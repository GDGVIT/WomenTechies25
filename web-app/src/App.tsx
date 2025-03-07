
import './App.css'
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
      <FaqSection />
      <div className="App">
      <AboutSection />
      <DinoScroll/>
    </div>
    <ContactSection/>
      <Dummy />
      </div>
      </>
  )
}

export default App
