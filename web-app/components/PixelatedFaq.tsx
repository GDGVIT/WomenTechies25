"use client"

import type React from "react"
import { motion } from "framer-motion"

interface PixelatedFaqProps {
  highlightRef: React.RefObject<HTMLDivElement | null>
}

const PixelatedFaq: React.FC<PixelatedFaqProps> = ({ highlightRef }) => {
  return (
    <>
    
    <div className="flex flex-col items-center relative">
      

      <div className="relative flex items-center" ref={highlightRef}>
        {/* Pixelated FAQs text */}
        <div
          className="relative border-2 border-[#FAC6F7] bg-[#FAC6F7]/20 px-6 py-3"
          style={{
            fontFamily: "monospace",
            letterSpacing: "0.2em",
            boxShadow: "0 0 15px rgba(250, 198, 247, 0.2)",
          }}
        >
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl xl:text-6xl font-bold text-primary font-heading"
          >
            FAQs
          </motion.span>
        </div>

        {/* Speech bubble */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 20,
            delay: 0.5,
          }}
          className="relative ml-4"
        >
          <div className="bg-white rounded-full p-3 w-16 h-16 flex items-center justify-center">
            <p className="text-black font-bold text-xs">
              YES,
              <br />
              AND?
            </p>
          </div>
          <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-white transform rotate-45"></div>
        </motion.div>
      </div>
    </div>
    </>
  )
}

export default PixelatedFaq

