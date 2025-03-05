"use client"

import type React from "react"
import { useRef, useEffect } from "react"
import { motion, useInView, useAnimation } from "framer-motion"

interface HighlightTextProps {
  text: string
  className?: string
  animationDuration?: number
}

const HighlightText: React.FC<HighlightTextProps> = ({
  text,
  className = "",
  animationDuration = 2, // Default 2 seconds
}) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { once: true, amount: 0.3 })
  const controls = useAnimation()

  // Start animation when in view
  useEffect(() => {
    if (isInView) {
      controls.start("animate")
    }
  }, [isInView, controls])

  // Animation variants - continuous animation from 0 to 100%
  const highlightVariants = {
    initial: { scaleX: 0, originX: 0 },
    animate: {
      scaleX: 1,
      transition: {
        duration: animationDuration,
        ease: "easeInOut",
      },
    },
  }

  return (
    <div ref={containerRef} className={`relative inline-block ${className}`}>
      {/* SVG highlight background */}
      <motion.div
        className="absolute inset-0 z-0"
        initial="initial"
        animate={controls}
        variants={highlightVariants}
        style={{
          width: "100%",
          height: "100%",
          transformOrigin: "left",
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="100%"
          height="100%"
          viewBox="0 0 253 116"
          fill="none"
          preserveAspectRatio="none"
        >
          <rect x="1.40607" y="1.40607" width="248.873" height="113.188" fill="#FAC6F7" fillOpacity="0.5" />
          <line x1="250.987" y1="1.94958" x2="250.987" y2="115.025" stroke="#FAC6F7" strokeWidth="1.5" />
          <rect width="3.18276" height="3.41176" transform="matrix(1 0 0 -1 248.873 116)" fill="#FAC6F7" />
          <rect width="3.18276" height="3.41176" transform="matrix(1 0 0 -1 248.873 3.41177)" fill="#FAC6F7" />
          <line x1="2.11444" y1="1.94958" x2="2.11444" y2="115.025" stroke="#FAC6F7" strokeWidth="1.5" />
          <rect width="3.18276" height="3.41176" transform="matrix(1 0 0 -1 0 116)" fill="#FAC6F7" />
          <rect width="3.18276" height="3.41176" transform="matrix(1 0 0 -1 0 3.41177)" fill="#FAC6F7" />
        </svg>
      </motion.div>

      {/* Text content (stays on top) */}
      <span className="relative z-10">{text}</span>
    </div>
  )
}

export default HighlightText

