
import './App.css'
import FaqSection from "../components/FaqSection"
import  ScrollAnimationSection  from "../components/AboutWT"
import Dummy from '../components/dummy'
function App() {
  return (
    <>
      <div className=' text-red-500 bg-background font-heading'>
        Blah blah blah
      </div>
      <FaqSection />
      <ScrollAnimationSection id="scroll-animation-section" />
      <Dummy />
    </>
  )
}

export default App
