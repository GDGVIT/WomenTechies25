
import './App.css'
import FaqSection from "../components/FaqSection"
// import AnimatedSection from '../components/AboutWT'
import Dummy from '../components/dummy'
import AboutSection from '../components/AboutWT'
import DinoScroll from '../components/dino-scroll/horizontal-scroll-dino'
function App() {
  return (
    <>
    <div className=" bg-background">
      <FaqSection />
      <div className="App">
      <AboutSection />
      <DinoScroll/>
    </div>
      <Dummy />
      </div>
      </>
  )
}

export default App
