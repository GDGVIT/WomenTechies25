import React from "react"
import { useRef, useEffect, useState } from "react"
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
      { threshold: 0.5 },
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
    <div className="relative" ref={textRef}>
      {/* Text */}
      <span className={className}>{text}</span>

      {/* Highlight background */}
      <motion.div
        className="absolute inset-0 bg-[#FAC6F7] -z-10"
        initial={{ width: 0 }}
        animate={{ width: isInView ? "100%" : 0 }}
        transition={{
          duration: 1.5,
          ease: "easeInOut",
          delay: 0.2,
        }}
      />
    </div>
  )
}

export default HighlightText

