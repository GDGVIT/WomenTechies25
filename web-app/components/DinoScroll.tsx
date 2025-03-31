"use client"

import type React from "react"
import { useRef } from "react"
import { motion, useTransform, useScroll } from "framer-motion"

interface DinoScrollProps {
  className?: string
}

const DinoScroll: React.FC<DinoScrollProps> = ({ className }) => {
  const targetRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: targetRef,
  })

  // Transform values based on scroll progress
  // Text starts with "DO" visible at 15% from left, then scrolls left as user scrolls down
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-80%"])
  const rotate = useTransform(scrollYProgress, [0, 1], ["0deg", "360deg"])

  return (
    <section ref={targetRef} className={`relative h-[300vh] bg-background ${className}`}>
      <div className="sticky top-0 flex-col h-screen w-full items-center justify-center overflow-hidden ">
        {/* Background glows */}
        <div
          className="absolute -bottom-134 -left-80 w-[400px] h-[400px] md:w-[600px] md:h-[600px] rounded-[607px] bg-[rgba(101,158,162,0.32)]"
          style={{ filter: "blur(120px)" }}
        />
        <div
          className="absolute -bottom-98 -right-80 w-[300px] h-[300px] md:w-[500px] md:h-[500px] rounded-[607px] bg-[rgba(101,158,162,0.32)]"
          style={{ filter: "blur(120px)" }}
        />
        <div
          className="absolute -top-45 -right-32 w-[300px] h-[400px] rounded-[276px] bg-[rgba(101,158,162,0.60)] -z-10"
          style={{ filter: "blur(100px)" }}
        />
        <div
        className="absolute   -top-[1vh] -left-[12vw] w-[30vw] min-w-[400px] h-[40vw] max-w-[500px] max-h-[500px] opacity-35"
        style={{
          borderRadius: "447px",
          border: "19px solid #CCF193",
          background: "#CCB0C1",
          filter: "blur(72.55000305175781px)",
        }}
        aria-hidden="true"
      />

        {/* Top section with dinosaurs and wheels */}
        <div className="relative w-full h-[35vh]">
          {/* Front dinosaurs - visible in front with z-index 10 */}
          <div className="absolute left-12 top-10 h-fit w-fit z-10">
            <DinoFront />
          </div>
          {/* Back dinosaurs - positioned behind front dinos with z-index 0 */}
          <div className="absolute left-14 bottom-[75px] h-fit w-fit z-999">
            <DinoBack />
          </div>
          {/* Wheels - animated to rotate as user scrolls */}
          <div className="absolute left-10 bottom-0 h-fit w-fit">
            <div className="flex h-fit w-fit items-center justify-items-center">
              {[0, 1, 2].map((index) => (
                <motion.div
                  key={`top-wheel-${index}`}
                  style={{ rotate }} // Apply rotation animation based on scroll
                  className="flex h-fit w-fit items-center justify-items-center"
                >
                  <Wheel />
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Middle section with scrolling text */}
        <motion.div
          style={{ x }}
          className="relative w-[200vw] h-[30vh] flex justify-left items-center content-center p-20"
        >
          {/* Text starts with "DO" at 15% from left */}
          <h1 className="text-center text-6xl sm:text-7xl md:text-8xl lg:text-10xl xl:text-[12rem] font-heading text-white whitespace-nowrap sm:whitespace-nowrap xs:whitespace-normal">
            DO <span className="text-[#FAC2F7]">CRAZY</span> THINGS <span className="text-[#FAC2F7]">THAT MATTER</span>
          </h1>
        </motion.div>

        {/* Bottom section with inverted dinosaurs and wheels */}
        <div className="relative w-full h-[35vh]">
          {/* Inverted wheels - rotated and flipped vertically */}
          <div className="absolute right-10 top-0 h-fit w-fit">
            <div className="flex h-fit w-fit items-center justify-items-center">
              {[0, 1, 2].map((index) => (
                <motion.div
                  key={`bottom-wheel-${index}`}
                  style={{ rotate }} // Apply same rotation animation
                  className="flex h-fit w-fit items-center justify-items-center z-5 scale-y-[-1]" // Flip vertically
                >
                  <Wheel />
                </motion.div>
              ))}
            </div>
          </div>
          {/* Inverted front dinosaurs - flipped both horizontally and vertically */}
          <div className="absolute right-12 top-19 h-fit w-fit z-10 scale-y-[-1] scale-x-[-1]">
            <DinoFront />
          </div>
          {/* Inverted back dinosaurs - flipped both horizontally and vertically */}
          <div className="absolute right-12 top-19 h-fit w-fit z-0 scale-y-[-1] scale-x-[-1]">
            <DinoBack />
          </div>
        </div>
      </div>
    </section>
  )
}

// Wheel component - renders a wheel image that rotates with scroll
const Wheel: React.FC = () => {
  return (
    <div
      className="wheel w-[100px] h-[100px] bg-contain bg-no-repeat bg-center"
      style={{ backgroundImage: "url(/dino-bike/wheel.png)" }}
    />
  )
}

// DinoBack component - renders the background dinosaurs in a row
const DinoBack: React.FC = () => {
  return (
    <div className="flex">
      {[0, 1, 2].map((index) => (
        <div
          key={`dino-back-${index}`}
          className="thugdino w-[100px] h-[100px] bg-contain bg-no-repeat"
          style={{ backgroundImage: "url(/dino-bike/thug-dino.png)" }}
        />
      ))}
    </div>
  )
}

// DinoFront component - renders the foreground dinosaurs in a row
const DinoFront: React.FC = () => {
  return (
    <div className="flex">
      {[0, 1, 2].map((index) => (
        <div
          key={`dino-front-${index}`}
          className="thugdinofront w-[100px] h-[100px] bg-contain bg-no-repeat"
          style={{ backgroundImage: "url(/dino-bike/thugdinofront.png)" }}
        />
      ))}
    </div>
  )
}

export default DinoScroll

