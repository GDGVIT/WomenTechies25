"use client"

import { useEffect, useRef } from "react"
import { motion, useAnimation, useInView } from "framer-motion"

export default function ContactSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })
  const mainControls = useAnimation()

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible")
    }
  }, [isInView, mainControls])

  return (
    <section
      ref={ref}
      className="relative w-full h-screen bg-background text-white overflow-hidden"
      style={{ maxHeight: "100vh" }}
    >
 
      <div className="absolute inset-0 z-0">
        <img src="/aboutWT/floor.svg" alt="" className="w-full h-full object-cover" aria-hidden="true" />
   
        {/* <div className="absolute bottom-0 w-full h-1/3 bg-gradient-to-t from-teal-900/50 to-transparent"></div> */}
      </div>
      <div
       className="absolute -bottom-32 right-[30%] w-[40vw] h-[200px] rounded-[276px] bg-[#659EA2] blur-[100px] z-10"
         style={{ filter: "blur(100px)" }}
      />
      

      <div className="relative z-10 w-full h-full max-w-[1920px] mx-auto px-4 md:px-12 lg:px-16">
        {/* Hand SVG  */}
        <motion.div
          className="absolute left-0  top-[20%] md:top-[10%] w-[60%]  md:w-[50%] "
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: {
              opacity: 1,
              x: 0,
              transition: { duration: 1, ease: "easeOut" },
            },
          }}
          initial="hidden"
          animate={mainControls}
        >
          <img src="/contactHand.svg" alt="" className="w-full h-auto" aria-hidden="true" />
        </motion.div>

        {/* Mobile SVG  */}
        <motion.div
          className="absolute -right-8 xl:-right-10  top-[20%] md:top-[25%]  w-[50%] md:w-[40%] transform rotate-20"
          variants={{
            hidden: { opacity: 0, x: 50 },
            visible: {
              opacity: 1,
              x: 0,
              transition: { duration: 1, ease: "easeOut" },
            },
          }}
          initial="hidden"
          animate={mainControls}
        >
          <img src="/contactMobile.svg" alt="" className="w-full h-auto" aria-hidden="true" />
        </motion.div>

        {/* Content Container */}
        <div className="absolute left-[10%] md:left-[15%] xl:left-[10%] xl:top-[65%] top-1/2 -translate-y-1/2 w-[80%] md:w-[70%] max-w-[800px]">
          <motion.h2
            className="text-[3rem] sm:text-[4rem] md:text-[5rem] leading-tight font-bold text-pink-300 tracking-wider mb-8 md:mb-16 font-heading"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.8, delay: 0.3 },
              },
            }}
            initial="hidden"
            animate={mainControls}
          >
            GET IN TOUCH
            <br />
            WITH US.
          </motion.h2>

          <motion.div
            className="space-y-6 md:space-y-8"
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.8, delay: 0.5 },
              },
            }}
            initial="hidden"
            animate={mainControls}
          >
            <div className="flex justify-between items-center">
              <span className="text-xl sm:text-2xl md:text-3xl font-bold font-raleway tracking-wide">DHRUV SHAH</span>
              <span className="text-lg sm:text-xl md:text-2xl">+91 73495 65553</span>
            </div>
            <div className="h-px bg-gradient-to-r from-[#e2c4c4] to-[#97e7e7]"></div>
            <div className="flex justify-between items-center">
              <span className="text-xl sm:text-2xl md:text-3xl font-bold font-raleway tracking-wide">SANVI CHAVAN</span>
              <span className="text-lg sm:text-xl md:text-2xl">+91 73495 65553</span>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}

