import React from "react"
import { motion } from "framer-motion"

interface PixelatedFaqProps {
    highlightRef: React.RefObject<HTMLDivElement | null>
  }
const PixelatedFaq: React.FC<PixelatedFaqProps> = ({ highlightRef }) => {
  return (
    <div className="flex items-start">
      <span className="text-gray-400 text-sm mr-4 mt-2">[ WHO ASKS THESE QUESTIONS? ]</span>

      <div className="relative flex items-start" ref={highlightRef}>
        {/* Pixelated FAQs text */}
        <div
          className="relative border-2 border-[#FAC6F7] bg-[#FAC6F7]/20 px-4 py-2"
          style={{
            fontFamily: "monospace",
            letterSpacing: "0.2em",
          }}
        >
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-[40px] font-bold text-[#FAC6F7]"
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
  )
}

export default PixelatedFaq

