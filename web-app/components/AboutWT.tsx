"use client"

import type React from "react"
import { useRef, useState } from "react"
import { motion, useScroll, useTransform } from "framer-motion"

const AboutSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const sectionRef = useRef<HTMLDivElement>(null)
  const [isAnimating, setIsAnimating] = useState(false)

  // Track scroll progress within the entire container (section + buffer)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  })

  // Transform scroll progress to opacity values
  const leftFillOpacity = useTransform(scrollYProgress, [0, 0.5], [0, 1])
  const rightFillOpacity = useTransform(scrollYProgress, [0, 0.5], [0, 1])

  return (
    <div
      ref={containerRef}
      className="about-section-container"
      style={{
        position: "relative",
        height: "200vh", // Main section (100vh) + buffer section (100vh)
      }}
    >
      <div
        ref={sectionRef}
        className="about-section"
        style={{
          position: "sticky",
          top: 0,
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
          initial={{ opacity: 0 }}
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
          initial={{ opacity: 0 }}
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

        {/* Animation indicator */}
        <motion.div
          style={{
            position: "absolute",
            top: "5%",
            right: "5%",
            backgroundColor: "rgba(255, 255, 255, 0.2)",
            padding: "8px 12px",
            borderRadius: "4px",
            color: "white",
            zIndex: 10,
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: scrollYProgress.get() > 0 ? 1 : 0 }}
        >
          Scroll to reveal the scene
        </motion.div>
      </div>
    </div>
  )
}

export default AboutSection

