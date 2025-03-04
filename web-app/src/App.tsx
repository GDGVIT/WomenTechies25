
import './App.css'
import FaqSection from "../components/FaqSection"
import HorizontalRevealSection from '../components/AboutWT'
import Dummy from '../components/dummy'
function App() {
  return (
    
    <div className="container bg-background">
      <div className=' text-red-500 bg-background font-heading'>
        Blah blah blah
      </div>
      <FaqSection />
      {/* <ScrollAnimationSection id="scroll-animation-section" />
       */}
       <HorizontalRevealSection id="animation-section" />
      <Dummy />
      </div>
    
  )
}

export default App
