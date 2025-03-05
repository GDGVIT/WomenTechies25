"use client"

import type React from "react"
import { useEffect, useRef, useState } from "react"
import { motion, useScroll, useTransform } from "framer-motion"

const AboutSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [isAnimating, setIsAnimating] = useState(false)

  // Track scroll progress within the section
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  })

  // Transform scroll progress to opacity values (0 to 1)
  const leftFillOpacity = useTransform(scrollYProgress, [0.3, 0.5], [0, 1])
  const rightFillOpacity = useTransform(scrollYProgress, [0.4, 0.6], [0, 1])

  // Simple scroll lock implementation
  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return

      const rect = sectionRef.current.getBoundingClientRect()
      const isVisible = rect.top < window.innerHeight && rect.bottom > 0

      if (isVisible) {
        const progress = scrollYProgress.get()

        // Only lock scroll during the animation phase
        if (progress > 0.25 && progress < 0.65 && !isAnimating) {
          setIsAnimating(true)
        } else if ((progress <= 0.25 || progress >= 0.65) && isAnimating) {
          setIsAnimating(false)
        }
      }
    }

    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [isAnimating, scrollYProgress])

  return (
    <div
      ref={sectionRef}
      className="about-section"
      style={{
        position: "relative",
        height: "100vh",
        width: "100%",
        backgroundColor: "#121212",
        overflow: "hidden",
      }}
    >
      {/* Stars/sparkles */}
      <div className="stars" style={{ position: "absolute", width: "100%", height: "100%", zIndex: 1 }}>
        {[...Array(10)].map((_, i) => (
          <div
            key={i}
            style={{
              position: "absolute",
              width: Math.random() * 10 + 5 + "px",
              height: Math.random() * 10 + 5 + "px",
              backgroundColor: "white",
              borderRadius: "50%",
              left: Math.random() * 100 + "%",
              top: Math.random() * 100 + "%",
              opacity: Math.random() * 0.5 + 0.5,
            }}
          />
        ))}
      </div>

      {/* Hanging lights */}
      <div style={{ position: "absolute", top: 0, right: "10%", zIndex: 1 }}>
        {[...Array(3)].map((_, i) => (
          <div
            key={i}
            style={{
              position: "absolute",
              right: i * 80 + "px",
              width: "2px",
              height: 100 + i * 20 + "px",
              backgroundColor: "white",
            }}
          >
            <div
              style={{
                position: "absolute",
                bottom: 0,
                left: "50%",
                transform: "translateX(-50%)",
                width: "40px",
                height: "15px",
                backgroundColor: "white",
                borderRadius: "50%",
              }}
            />
          </div>
        ))}
      </div>

      {/* Floor SVG */}
      <img
        src="/aboutWT/floor.svg"
        alt="Floor"
        style={{
          position: "absolute",
          bottom: 0,
          width: "100%",
          zIndex: 2,
        }}
      />

      {/* Left SVG (outline) */}
      <img
        src="/aboutWT/left1.svg"
        alt="Left outline"
        style={{
          position: "absolute",
          left: "5%",
          bottom: "10%",
          height: "70%",
          zIndex: 3,
        }}
      />

      {/* Left SVG (filled with animated opacity) */}
      <motion.img
        src="/aboutWT/left1filled.svg"
        alt="Left filled"
        style={{
          position: "absolute",
          left: "5%",
          bottom: "10%",
          height: "70%",
          zIndex: 4,
          opacity: leftFillOpacity,
        }}
      />

      {/* Center 1 SVG */}
      <img
        src="/aboutWT/centre1.svg"
        alt="Center 1"
        style={{
          position: "absolute",
          left: "25%",
          bottom: "15%",
          height: "40%",
          zIndex: 3,
        }}
      />

      {/* Center 2 SVG (girl with laptop and woman behind) */}
      <img
        src="/aboutWT/centre2.svg"
        alt="Center 2"
        style={{
          position: "absolute",
          right: "25%",
          bottom: "10%",
          height: "50%",
          zIndex: 3,
        }}
      />

      {/* Right SVG (outline) */}
      <img
        src="/aboutWT/right1.svg"
        alt="Right outline"
        style={{
          position: "absolute",
          right: "5%",
          bottom: "10%",
          height: "70%",
          zIndex: 3,
        }}
      />

      {/* Right SVG (filled with animated opacity) */}
      <motion.img
        src="/aboutWT/right1filled.svg"
        alt="Right filled"
        style={{
          position: "absolute",
          right: "5%",
          bottom: "10%",
          height: "70%",
          zIndex: 4,
          opacity: rightFillOpacity,
        }}
      />

      {/* Text content */}
      <div
        style={{
          position: "absolute",
          top: "20%",
          left: "50%",
          transform: "translateX(-50%)",
          maxWidth: "600px",
          color: "white",
          zIndex: 5,
          textAlign: "center",
          padding: "0 20px",
        }}
      >
        <h2 style={{ marginBottom: "1rem", fontSize: "2rem" }}>A 36-hour adrenaline-fueled hackathon</h2>
        <p style={{ fontSize: "1.2rem", lineHeight: 1.6 }}>
          Celebrating the unstoppable force of female coders as they innovate, collaborate, and push the limits of
          technology. A space to create, compete, and inspire the future of tech.
        </p>
      </div>

      {/* Scroll indicator */}
      <motion.div
        style={{
          position: "absolute",
          bottom: "5%",
          left: "50%",
          transform: "translateX(-50%)",
          color: "white",
          zIndex: 5,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
        animate={{
          y: [0, 10, 0],
        }}
        transition={{
          y: { repeat: Number.POSITIVE_INFINITY, duration: 1.5 },
        }}
      >
        <p>Scroll to reveal</p>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M12 5V19M12 19L5 12M12 19L19 12"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </motion.div>
    </div>
  )
}

export default AboutSection

