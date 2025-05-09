import React from "react"
import { useEffect, useState } from "react"
import { useRive } from "@rive-app/react-canvas"
import { motion, useSpring } from "framer-motion"
import HighlightText from "./HighlightText"
import AtomIcon from "./AtomIcon"

const HeroSection: React.FC = () => {
  const [isDesktop, setIsDesktop] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  const textboxX = useSpring(0, { stiffness: 50, damping: 30 })
  const textboxY = useSpring(0, { stiffness: 50, damping: 30 })

  useEffect(() => {
    const checkIfDesktop = () => {
      setIsDesktop(window.innerWidth >= 1024)
    }
    checkIfDesktop()
    window.addEventListener("resize", checkIfDesktop)
    return () => window.removeEventListener("resize", checkIfDesktop)
  }, [])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = e.clientX / window.innerWidth - 0.5
      const y = e.clientY / window.innerHeight - 0.5

      setMousePosition({ x, y })

      textboxX.set(x * 50)
      textboxY.set(y * 50)
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [textboxX, textboxY])

  const { RiveComponent: Mushroom } = useRive({
    src: "/hero/mushroom.riv",
    autoplay: true,
  })

  const { RiveComponent: Plant } = useRive({
    src: "/hero/plant.riv",
    autoplay: true,
  })

  return (
    <div className="relative w-full h-[100vh] overflow-hidden">
      <div className="absolute inset-0 -z-10 flex items-end">
        <img
          src="/hero/grid.svg"
          alt="Background Grid"
          loading="eager"
          className="w-full h-auto object-cover opacity-50"
        />
        <img
          src="/hero/bottomshape.svg"
          alt="Bottom Shape Right"
          loading="lazy"
          className="absolute bottom-0 right-0 w-[40vw] h-auto object-cover transform scale-x-[-1]"
        />
        <img
          src="/hero/bottomshape.svg"
          alt="Bottom Shape Left"
          loading="lazy"
          className="absolute top-0 left-0 w-[25vw] h-auto object-cover"
        />
        <img
          src="/hero/pixelleft.svg"
          alt="Pixel Decoration Left"
          loading="lazy"
          className="absolute top-[60%] left-10 w-[23px] h-auto object-cover"
        />
        <img
          src="/hero/pixelright.svg"
          alt="Pixel Decoration Right"
          loading="lazy"
          className="absolute top-[60%] right-10 w-[15px] h-auto object-cover"
        />
        <div className="absolute top-[30vh] right-0 w-[25vw] h-[25vw]">
          <AtomIcon />
        </div>

        {/* Gradient Blurs */}
        <div
          className="absolute -top-[10vh] -left-[17vw] w-[30vw] min-w-[400px] h-[40vw] max-w-[500px] max-h-[500px] opacity-35"
          style={{
            borderRadius: "447px",
            border: "19px solid #CCF193",
            background: "#CCB0C1",
            filter: "blur(72.55000305175781px)",
          }}
          aria-hidden="true"
        />
        <div
          className="absolute -top-[20vh] left-[7vw] w-[40vw] min-w-[300px] h-[40vw] min-h-[400px] max-w-[500px] max-h-[500px] opacity-20"
          style={{
            borderRadius: "752px",
            background: "#659EA2",
            filter: "blur(100px)",
          }}
          aria-hidden="true"
        />
        <div
          className="absolute top-0 -right-[10vw] w-[10vw] min-w-[200px] h-[40vw] max-w-[500px] max-h-[500px] opacity-35"
          style={{
            borderRadius: "752px",
            background: "#FFFFFF",
            filter: "blur(100px)",
          }}
          aria-hidden="true"
        />
        <div
          className="absolute -bottom-[30vh] left-0 w-[5vw] min-w-[100px] h-[40vw] max-w-[500px] max-h-[500px] opacity-35"
          style={{
            borderRadius: "352px",
            background: "#FFFFFF",
            filter: "blur(100px)",
          }}
          aria-hidden="true"
        />

        <div className="absolute bottom-[2vh] left-[17%] w-full md:w-[90vw] lg:w-[80vw] h-[15vh]">
          <img
            src="/hero/water.svg"
            alt="Water base"
            loading="lazy"
            className="absolute bottom-0 z-9999 object-contain mx-auto"
          />
        </div>
        <div className="absolute bottom-[3vh] left-0 w-full md:w-[90vw] lg:w-[80vw] h-[15vh]">
          <img
            src="/hero/waterleft.svg"
            alt="Water base left"
            loading="lazy"
            className="absolute bottom-0 z-9999 object-contain mx-auto"
          />
        </div>

        <div className="absolute top-0 left-0 right-0 w-full">
          <img
            src="/hero/moon.png"
            alt="Moon"
            loading="lazy"
            className="absolute top-[5vh] right-[15%] w-[25vw] xl:w-[15vw] max-w-[150px] h-auto"
          />
          <img
            src="/hero/cloud.svg"
            alt="Cloud 1"
            loading="lazy"
            className="absolute top-[20vh] left-1/3 w-[7vw] h-[3vh]"
          />
          <img
            src="/hero/cloud.svg"
            alt="Cloud 2"
            loading="lazy"
            className="absolute top-[30vh] right-[25%] w-[7vw] h-[3vh]"
          />
        </div>
      </div>

      <div className="absolute top-[15vh] md:top-[15vh] left-[8%] z-20">
        <h1 className="font-mono">
          <span className="block text-white text-4xl sm:text-5xl lg:text-6xl xl:text-8xl leading-none font-heading text-pink-200">
            WOMEN
          </span>
          <div className="flex items-center -ml-5">
            <HighlightText
              text="TECHIES"
              className="text-white font-heading text-4xl sm:text-5xl lg:text-6xl xl:text-8xl leading-none text-pink-200"
              animationDuration={1.5}
            />
            <span className="text-white text-5xl sm:text-5xl lg:text-4xl xl:text-8xl leading-none font-heading text-pink-200 ml-2">
              '25
            </span>
          </div>
          <div>
      <a
          href="https://tally.so/r/nPrvO1"
          // className="inline-flex items-center mt-6 md:mt-8 px-4 md:px-6 py-2 border border-[#7CFFC4] text-[#7CFFC4] hover:text-[#181c1afc] transition-colors duration-300 font-mono text-base md:text-lg"
          className="bg-gradient-to-r inline-flex items-center mt-6 md:mt-8 px-4 md:px-6 py-2 border border-[#7CFFC4] text-[#7CFFC4] hover:text-[#181c1afc] hover:from-[#74b799] hover:to-[rgb(58,174,213)] transition-colors duration-300 font-heading text-lg xl:text-2xl md:text-lg"
        >
          IDEA SUBMISSION
          <span className="ml-2 md:ml-4">-&gt;</span>
          
        </a>
      </div>
        </h1>
      </div>
      

      <div
        className="absolute left-1/2 -translate-x-1/2 z-9999 flex items-center justify-center 
        lg:bottom-[2vh] lg:translate-y-0 
        bottom-[15vh] md:bottom-[20vh] translate-y-1/2"
      >
        <div className="relative w-[50vw] sm:w-[40vw] md:w-[35vw] lg:w-[30vw] flex items-center justify-center">
          <img
            src="/hero/girl.svg"
            alt="Girl with VR headset"
            loading="eager"
            className="w-[68vw] xl:w-[18vw] z-999 object-contain"
          />

          {/* textbox overlay with parallax effect */}
          <motion.img
            src="/hero/text-roll-left.svg"
            alt="Text scrolls"
            className="absolute -top-[20%] left-[5%] xl:-top-[25%] xl:left-[17%] -translate-x-1/2 w-[20vw] xl:w-[10vw] object-contain z-9999"
            style={{
              x: textboxX,
              y: textboxY,
            }}
          />
          <motion.img
            src="/hero/text-roll-right.svg"
            alt="Text scrolls"
            className="absolute -top-[20%] -right-[40%] xl:-top-[30%] xl:-right-[23%] -translate-x-1/2 w-[20vw] xl:w-[10vw] object-contain z-0"
            style={{
              x: textboxX,
              y: textboxY,
            }}
          />
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 z-10 w-full">
        <div className="absolute bottom-0 left-0 z-20">
          {isDesktop ? (
            <>
              <div className="relative">
                <div className="absolute bottom-[3vh] xl:bottom-[6vh] left-0">
                  <Mushroom className="w-[25vw] h-[25vw]" />
                </div>
                <div className="absolute -bottom-[20vw] left-[15vw]">
                  <Plant className="w-[25vw] h-[50vw]" />
                </div>
              </div>
            </>
          ) : (
            // mobile version with only mushroom
            <div className="absolute bottom-[5vh] left-0">
              <Mushroom className="w-[30vw] h-[30vw]" />
            </div>
          )}
        </div>

        {isDesktop && (
          <>
            <div className="absolute bottom-[5vh] right-[5%] z-20">
              <img src="/hero/Flowers.svg" alt="Flowers" className="w-[12vw] h-auto" loading="lazy" />
            </div>
            <div className="absolute bottom-[0vh] right-[30%] z-20">
              <img src="/hero/plantright.svg" alt="Plant Right" className="w-[5vw] h-auto" loading="lazy" />
            </div>
          </>
        )}
      </div>
    </div>
  )
}

export default HeroSection
