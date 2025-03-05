
import './App.css'
import FaqSection from "../components/FaqSection"
import HorizontalRevealSection from '../components/AboutWT'
import Dummy from '../components/dummy'
function App() {
  return (
    <>
    <div className=" bg-background">
      <FaqSection />
       <HorizontalRevealSection id="animation-section" />
      <Dummy />
      </div>
      </>
  )
}

export default App
