import React from "react"
import { useEffect, useState } from "react"
import { useRive } from "@rive-app/react-canvas"
import HighlightText from "./HighlightText"
const HeroSection: React.FC = () => {
  const [isDesktop, setIsDesktop] = useState(false)

  useEffect(() => {
    const checkIfDesktop = () => {
      setIsDesktop(window.innerWidth >= 1024)
    }
    checkIfDesktop()
    window.addEventListener("resize", checkIfDesktop)
    return () => window.removeEventListener("resize", checkIfDesktop)
  }, [])

  const { RiveComponent: Mushroom } = useRive({
    src: "/public/hero/mushroom.riv",
    autoplay: true,
  })

  const { RiveComponent: Plant } = useRive({
    src: "/public/hero/plant.riv",
    autoplay: true,
  })

  return (
    <div className="relative w-full h-[100vh] bg-background overflow-hidden">
      {/* Title Section */}
      <div className="absolute top-[15vh] left-[8%] z-20">
      <h1 className="font-mono">
  <span className="block text-4xl lg:text-6xl xl:text-8xl leading-none font-heading text-pink-200">
    WOMEN
  </span>
  <div className="flex items-center">
    <HighlightText text="TECHIES" className="font-heading text-4xl lg:text-6xl xl:text-8xl leading-none text-pink-200" animationDuration={1.5} />
    <span className="text-4xl lg:text-6xl xl:text-8xl leading-none font-heading text-pink-200 ml-2">'25</span>
  </div>
</h1>

        <a
          href="#register"
          className="inline-flex items-center mt-8 px-6 py-2 border border-[#7CFFC4] text-[#7CFFC4] hover:bg-[#7CFFC4]/10 transition-colors duration-300 font-mono text-lg"
        >
          REGISTER NOW
          <span className="ml-4">-&gt;</span>
        </a>
      </div>

      {/* Center Content */}
      <div className="absolute left-[10vw] bottom-0  w-full max-w-[90%] lg:max-w-[60%] aspect-[1.5/1] z-999">
        <div className="relative w-full h-full">
          <img
            src="/public/hero/textbox.svg"
            alt="Text scrolls"
            className="absolute top-[20vh] left-[25vw] w-[30vw] object-contain"
          />
          <img
            src="/public/hero/girl.svg"
            alt="Girl with VR headset"
            className="absolute left-1/2 bottom-0  lg:w-[20vw] h-auto"
          />
        </div>
      </div>

      {/* Left Side Elements - Desktop Only */}
      {isDesktop && (
  <div className="absolute bottom-[10vh] left-0 z-200 hidden lg:flex gap-[5vw]">
    <div className="relative w-[25vw] aspect-square">
      <Mushroom className="absolute inset-0" />
    </div>
    <div className="relative w-[25vw]  aspect-square">
      <Plant className="absolute -left-[30vw] -bottom-[48vh] inset-0" />
    </div>
  </div>
)}
      {/* Right Side Elements - Desktop Only */}
      {isDesktop && (
        <div className="absolute bottom-[10vh] right-[5%] z-20 hidden lg:block">
          <img src="/public/hero/flowers.svg" alt="Flowers" className="w-[12vw]  h-auto" />
        </div>
      )}

      {/* Base Water Element */}
      <div className="absolute bottom-0 left-0 right-0 z-10">
        <img src="/public/hero/water.svg" alt="Water base" className=" w-[100vw] lg:w-[80vw] h-[15vh] object-contain" />
      </div>
    </div>
  )
}

export default HeroSection

