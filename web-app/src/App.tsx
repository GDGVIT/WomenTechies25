
import './App.css'
import FaqSection from "../components/FaqSection"
// import AnimatedSection from '../components/AboutWT'
import Dummy from '../components/dummy'
import AboutSection from '../components/AboutWT'
function App() {
  return (
    <>
    <div className=" bg-background">
      <FaqSection />
      <div className="App">
      <AboutSection />
    </div>
      <Dummy />
      </div>
      </>
  )
}

export default App
