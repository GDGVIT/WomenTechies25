import React from "react"
import { useEffect, useRef } from "react"
import HighlightText from "./HighlightText"

export default function ContactSection() {
  const containerRef = useRef<HTMLDivElement>(null)

  // This effect ensures the SVGs maintain their relative positions
  useEffect(() => {
    const handleResize = () => {
      const container = containerRef.current
      if (!container) return

      // Get viewport dimensions
      const vw = window.innerWidth
      const vh = window.innerHeight

      // Base scale on the smaller dimension to ensure it fits
      let scale = Math.min(vw / 1920, vh / 1080) * 0.9

      // Ensure minimum scale for very small screens
      scale = Math.max(scale, 0.3)

      // Apply the scale transformation
      container.style.transform = `scale(${scale})`
    }

    // Initial call
    handleResize()

    // Add resize listener
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return (
    <section className="relative w-full overflow-hidden bg-background py-16 md:py-24 min-h-[100vh] xl:h-[120vh]">
  
      <div className="absolute -bottom-[90vh] xl:-bottom-[100vh] inset-0 z-0  ">
        <img src="/contact/grid.svg" alt="Background grid" className="h-full w-full object-contain" />
      </div>
      <div className="absolute -left-48 top-[40vh] z-0">
        <img src="/contact/cloud_left.jpg" alt="Background grid" className="h-full max-w-[20vw] object-contain" />
      </div>
      <div className="absolute -right-28 top-[30vh] z-0">
        <img src="/contact/cloud_right.jpg" alt="Background grid" className="h-full max-w-[20vw] object-contain" />
      </div>


      <div
        className="absolute -top-14 -left-80 w-[400px] h-[400px] md:w-[600px] md:h-[600px] rounded-[607px] bg-[rgba(101,158,162,0.32)]"
        style={{ filter: "blur(120px)" }}
      ></div>

      <div
        className="absolute -top-28 -right-80 w-[300px] h-[300px] md:w-[500px] md:h-[500px] rounded-[607px] bg-[rgba(101,158,162,0.32)]"
        style={{ filter: "blur(120px)" }}
      ></div>

      <div
        className="absolute -bottom-80 -right-80 w-[350px] h-[350px] md:w-[550px] md:h-[550px] rounded-[607px] bg-[rgba(101,158,162,0.32)]"
        style={{ filter: "blur(120px)" }}
      ></div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-full flex flex-col">
        <h2 className="mb-16 mt-20 xl:mt-48 text-4xl font-bold text-white md:text-5xl lg:text-6xl">
          <span>GET IN </span>
          <HighlightText text="TOUCH" className="font-heading" animationDuration={1.5} />
          <br />
          <HighlightText text="WITH" className="font-heading" animationDuration={1.5} />
          <span> US.</span>
        </h2>

        {/* SVG Container - This is the wrapper that centers the content */}
        <div className="relative flex-grow flex items-center justify-center mt-[30vh] xl:mt-0">
          {/* Fixed size container that will be scaled as a unit */}
          <div
            ref={containerRef}
            className="absolute origin-center"
            style={{
              width: "1920px",
              height: "1080px",
              transformOrigin: "center center",
            }}
          >
            {/* SVG Group - Positioned exactly as on 1920x1080 screen */}
            <div className="absolute" style={{ left: "100px", top: "300px" }}>
              <img src="/contact/left.svg" alt="Laptop with left hand and thread" className="h-auto w-[1152px]" />
            </div>

            <div className="absolute" style={{ right: "100px", top: "-350px" }}>
              <img src="/contact/right.svg" alt="Right hand with laptop" className="h-auto w-[960px]" />
            </div>

            <div className="absolute" style={{ right: "255px", top: "645px", zIndex: -1 }}>
              <img src="/contact/tag.svg" alt="Contact information tag" className="h-auto w-[518px]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

