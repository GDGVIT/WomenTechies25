"use client"

import type React from "react"
import { useEffect, useRef } from "react"
import { motion, useAnimation, useInView } from "framer-motion"

const ContactSection: React.FC = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.3 })
  const handControls = useAnimation()
  const mobileControls = useAnimation()

  useEffect(() => {
    if (isInView) {
      handControls.start({
        x: ["0%", "10%"],
        transition: { duration: 2, ease: "easeInOut", repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" },
      })

      mobileControls.start({
        x: ["0%", "-10%"],
        transition: { duration: 2, ease: "easeInOut", repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" },
      })
    }
  }, [isInView, handControls, mobileControls])

  return (
    <section
      ref={ref}
      className="relative w-full aspect-[16/9] bg-black text-white overflow-hidden"
      style={{ maxHeight: "1080px" }}
    >
      {/* Background Grid with gradient overlay */}
      <div className="absolute inset-0 z-0">
        <img src="/grid.svg" alt="Background Grid" className="w-full h-full object-cover" />
        <div className="absolute bottom-0 w-full h-1/4 bg-gradient-to-t from-teal-900/30 to-transparent"></div>
      </div>

      <div className="relative z-10 w-full h-full max-w-[1920px] mx-auto">
        {/* Hand SVG - Positioned to overlap with text */}
        <motion.div animate={handControls} className="absolute left-[15%] top-[25%] w-[500px]">
          <img src="/contactHand.svg" alt="Hand reaching out" className="w-full h-auto" />
        </motion.div>

        {/* Mobile SVG - Positioned to the right */}
        <motion.div animate={mobileControls} className="absolute right-[15%] top-[25%] w-[500px]">
          <img src="/contactMobile.svg" alt="Hand holding mobile" className="w-full h-auto" />
        </motion.div>

        {/* Content Container */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[800px] px-8">
          <h2 className="text-[4rem] leading-tight font-bold text-pink-300 tracking-wider mb-16">
            GET IN TOUCH
            <br />
            WITH US.
          </h2>

          <div className="space-y-8">
            <div className="flex justify-between items-center">
              <span className="text-3xl font-bold tracking-wide">DHRUV SHAH</span>
              <span className="text-2xl">+91 73495 65553</span>
            </div>
            <div className="h-px bg-gradient-to-r from-[#e2c4c4] to-[#97e7e7]"></div>
            <div className="flex justify-between items-center">
              <span className="text-3xl font-bold tracking-wide">SANVI CHAVAN</span>
              <span className="text-2xl">+91 73495 65553</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactSection

