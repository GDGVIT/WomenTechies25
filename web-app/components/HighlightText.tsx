import React, { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"

interface HighlightTextProps {
  text: string
  className?: string
}

const HighlightText: React.FC<HighlightTextProps> = ({
  text,
  className = "text-3xl md:text-4xl xl:text-6xl font-bold font-heading",
}) => {
  const [isInView, setIsInView] = useState(false)
  const textRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsInView(true)
        }
      },
      { threshold: 0.5 }
    )

    if (textRef.current) {
      observer.observe(textRef.current)
    }

    return () => {
      if (textRef.current) {
        observer.unobserve(textRef.current)
      }
    }
  }, [])

  return (
    <div 
      className="relative inline-block overflow-hidden" 
      ref={textRef}
    >
      {/* Actual text */}
      <span className={className}>{text}</span>

      {/* Animated highlight */}
      <motion.div
        className="absolute left-0 top-0 h-full bg-[#FAC6F7] -z-10"
        initial={{ width: "0%" }}
        animate={
          isInView
            ? { width: ["0%", "75%", "100%"] } 
            : { width: "0%" }
        }
        transition={{
          duration: 2,
          ease: "easeInOut",
          times: [0, 0.8, 1], 
          // ^ 80% of the animation is spent going from 0% to 75%, 
          // then the final 20% goes from 75% to 100%.
        }}
      />
    </div>
  )
}

export default HighlightText
