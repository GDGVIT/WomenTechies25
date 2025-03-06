"use client"

import type React from "react"
import { useRef, useState, useEffect } from "react"
import { easeInOut, motion, useScroll, useTransform } from "framer-motion"

const AboutSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const sectionRef = useRef<HTMLDivElement>(null)
  const [isMobile, setIsMobile] = useState(false)
  const [isTablet, setIsTablet] = useState(false)
  const [isScrolling, setIsScrolling] = useState(false)

  // Check for mobile/tablet on mount and window resize
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768)
      setIsTablet(window.innerWidth >= 768 && window.innerWidth < 1024)
    }

    // Initial check
    checkScreenSize()

    // Add event listener
    window.addEventListener("resize", checkScreenSize)

    // Cleanup
    return () => window.removeEventListener("resize", checkScreenSize)
  }, [])

  // Function to calculate responsive sizes based on screen width
  const getResponsiveSize = (baseSize: number) => {
    if (isMobile) return baseSize * 0.5 // Increased from 0.4
    if (isTablet) return baseSize * 0.7 // Increased from 0.6
    return baseSize * 0.85 // Increased from 0.75
  }

  // Track scroll progress within the entire container (section + buffer)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  })

  // Set up scroll detection
  useEffect(() => {
    const unsubscribe = scrollYProgress.onChange((value) => {
      setIsScrolling(value > 0.01)
    })

    return () => unsubscribe()
  }, [scrollYProgress])

  const leftFillOpacity = useTransform(
    scrollYProgress,
    [0, 0.02, 0.04, 0.06, 0.08, 0.1, 0.12, 0.14, 0.16, 0.18, 0.2, 0.22, 0.24, 0.26, 0.28, 0.3],
    [0, 0.066, 0.133, 0.2, 0.266, 0.333, 0.4, 0.466, 0.533, 0.6, 0.666, 0.733, 0.8, 0.866, 0.933, 1],
    { ease: easeInOut }
  );
  
  const rightFillOpacity = useTransform(
    scrollYProgress,
    [0, 0.02, 0.04, 0.06, 0.08, 0.1, 0.12, 0.14, 0.16, 0.18, 0.2, 0.22, 0.24, 0.26, 0.28, 0.3],
    [0, 0.066, 0.133, 0.2, 0.266, 0.333, 0.4, 0.466, 0.533, 0.6, 0.666, 0.733, 0.8, 0.866, 0.933, 1],
    { ease: easeInOut }
  );
  
  const textOpacity = useTransform(
    scrollYProgress,
    [0, 0.02, 0.04, 0.06, 0.08, 0.1, 0.12, 0.14, 0.16, 0.18, 0.2, 0.22, 0.24, 0.26, 0.28, 0.3],
    [0, 0.066, 0.133, 0.2, 0.266, 0.333, 0.4, 0.466, 0.533, 0.6, 0.666, 0.733, 0.8, 0.866, 0.933, 1],
    { ease: easeInOut }
  );

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
        className="about-section bg-background"
        style={{
          position: "sticky",
          top: 0,
          height: "100vh",
          width: "100%",
          
          overflow: "hidden",
        }}
      >
        {/* Stars/sparkles */}
        <div className="stars" style={{ position: "absolute", width: "100%", height: "100%", zIndex: 1 }}>
          {[...Array(isMobile ? 6 : 10)].map((_, i) => (
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

        {/* Ceiling lights SVG */}
        <motion.img
          src="/aboutWT/ceilinglights.svg"
          alt="Ceiling Lights"
          style={{
            position: "absolute",
            top: 0,
            right: "5%",
            width: getResponsiveSize(400) + "px",
            zIndex: 1,
            opacity: textOpacity,
          }}
          initial={{ opacity: 0, y: -10 }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            opacity: { duration: 2, ease: "easeOut" },
            y: {
              type: "spring",
              stiffness: 100,
              damping: 10,
              mass: 1,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "mirror",
              repeatDelay: 2,
            },
          }}
        />

        {/* Bookshelf SVG */}
        <motion.img
          src="/aboutWT/bookshelf.svg"
          alt="Bookshelf"
          style={{
            position: "absolute",
            top: "10%",
            left: "7%",
            width: getResponsiveSize(360) + "px",
            zIndex: 1,
            opacity: textOpacity,
          }}
          initial={{ opacity: 0, y: -10 }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            opacity: { duration: 2, ease: "easeOut" },
            y: {
              type: "spring",
              stiffness: 80,
              damping: 12,
              mass: 1.2,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "mirror",
              repeatDelay: 2.5,
            },
          }}
        />

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

        {/* Conditional rendering based on mobile/desktop */}
        {!isMobile ? (
          <>
            {/* Left SVG (outline) */}
            <img
              src="/aboutWT/left1.svg"
              alt="Left outline"
              style={{
                position: "absolute",
                left: "7%",
                bottom: "12%", // Adjusted for better spacing
                height: getResponsiveSize(600) + "px",
                zIndex: 3,
              }}
            />

            {/* Left SVG (filled with animated opacity) */}
            <motion.img
              src="/aboutWT/left1filled.svg"
              alt="Left filled"
              style={{
                position: "absolute",
                left: "7%",
                bottom: "12%", // Adjusted for better spacing
                height: getResponsiveSize(600) + "px",
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
                left: isTablet ? "22%" : "21%",
                bottom: isTablet ? "14%" : "12%",
                height: getResponsiveSize(420) + "px",
                zIndex: 3,
              }}
            />

            {/* Center 2 SVG (girl with laptop and woman behind) */}
            <img
              src="/aboutWT/centre2.svg"
              alt="Center 2"
              style={{
                position: "absolute",
                right: isTablet ? "22%" : "30%",
                bottom: isTablet ? "14%" : "12%",
                height: getResponsiveSize(450) + "px",
                zIndex: 3,
              }}
            />

            {/* Right SVG (outline) */}
            <img
              src="/aboutWT/right1.svg"
              alt="Right outline"
              style={{
                position: "absolute",
                right: "7%",
                bottom: "12%", // Adjusted for better spacing
                height: getResponsiveSize(550) + "px",
                zIndex: 3,
              }}
            />

            {/* Right SVG (filled with animated opacity) */}
            <motion.img
              src="/aboutWT/right1filled.svg"
              alt="Right filled"
              style={{
                position: "absolute",
                right: "7%",
                bottom: "12%", // Adjusted for better spacing
                height: getResponsiveSize(550) + "px",
                zIndex: 4,
                opacity: rightFillOpacity,
              }}
              initial={{ opacity: 0 }}
            />
          </>
        ) : (
          // Mobile layout with better spacing
          <>
            <img
              src="/aboutWT/left1.svg"
              alt="Left outline"
              style={{
                position: "absolute",
                left: "2%",
                bottom: "18%", // Increased to prevent overlap
                height: getResponsiveSize(450) + "px",
                zIndex: 3,
              }}
            />
            <motion.img
              src="/aboutWT/left1filled.svg"
              alt="Left filled"
              style={{
                position: "absolute",
                left: "2%",
                bottom: "18%", // Increased to prevent overlap
                height: getResponsiveSize(450) + "px",
                zIndex: 4,
                opacity: leftFillOpacity,
              }}
              initial={{ opacity: 0 }}
            />
            <img
              src="/aboutWT/right1.svg"
              alt="Right outline"
              style={{
                position: "absolute",
                right: "2%",
                bottom: "18%", // Increased to prevent overlap
                height: getResponsiveSize(450) + "px",
                zIndex: 3,
              }}
            />
            <motion.img
              src="/aboutWT/right1filled.svg"
              alt="Right filled"
              style={{
                position: "absolute",
                right: "2%",
                bottom: "18%", // Increased to prevent overlap
                height: getResponsiveSize(450) + "px",
                zIndex: 4,
                opacity: rightFillOpacity,
              }}
              initial={{ opacity: 0 }}
            />
          </>
        )}

        {/* Text content */}
        <motion.div
          style={{
            position: "absolute",
            top: isMobile ? "22%" : "20%", // Reduced top position on mobile
            left: "50%",
            transform: "translateX(-50%)",
            minWidth: isMobile ? "90%" : isTablet ? "80%" : "40%",
            color: "white",
            zIndex: 5,
            textAlign: "center",
            padding: "0 20px",
            height: isMobile ? "auto" : "auto", // Auto height
            maxHeight: isMobile ? "20vh" : "auto", // Limit height on mobile
            opacity: textOpacity,
          }}
          initial={{ opacity: 0 }}
        >
         
          <p className="font-Raleway"
            style={{
              fontSize: isMobile ? "0.9rem" : isTablet ? "1.1rem" : "1.2rem",
              lineHeight: isMobile ? 1.4 : 1.6,
            }}
          >
            A 36-hour adrenaline-fueled hackathon. Celebrating the unstoppable force of female coders as they innovate, collaborate, and push the limits of
            technology. A space to create, compete, and inspire the future of tech.
          </p>
        </motion.div>

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
            y: { repeat: Number.POSITIVE_INFINITY, duration: 1.5, ease: "easeInOut" },
          }}
        >
          <p style={{ fontSize: isMobile ? "0.9rem" : "1rem" }}>Scroll to reveal</p>
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
            fontSize: isMobile ? "0.8rem" : "1rem",
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: isScrolling ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        >
          Scroll to reveal the scene
        </motion.div>
      </div>
    </div>
  )
}

export default AboutSection

