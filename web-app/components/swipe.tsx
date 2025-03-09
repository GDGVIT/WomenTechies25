"use client"

import { useEffect, useRef, useState } from "react"

export default function SwipeAnimation() {
  const containerRef = useRef<HTMLDivElement>(null)
  const stickyRef = useRef<HTMLDivElement>(null)
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const container = containerRef.current
    const sticky = stickyRef.current
    if (!container || !sticky) return

    // Handle scroll to calculate animation progress
    const handleScroll = () => {
      if (!container) return

      const containerRect = container.getBoundingClientRect()

      // Calculate how far we've scrolled into the section
      const containerTop = containerRect.top
      const viewportHeight = window.innerHeight

      // Progress is negative when we haven't reached the section yet
      // Progress is 0 when we're at the start of the section
      // Progress is 2.5 when we're at the end of the section (250vh total)
      const rawProgress = -containerTop / viewportHeight

      // We want to animate during the second half of the scroll
      // So we map 1-2.5 to 0-1 for our animation progress
      // This gives us 150vh of animation space
      const animationProgress = Math.max(0, Math.min(1, (rawProgress - 1) / 1.5))

      setScrollProgress(animationProgress)
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll() // Initial calculation

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  // Calculate styles based on scroll progress
  // Make the hand appear faster by completing opacity by 30% of the scroll
  const handOpacity = Math.min(1, scrollProgress * 3.33)

  // Hand movement - starts from bottom left and moves to right
  const handTranslateX = scrollProgress * 120 // Move further horizontally (0% to 120%)
  const handTranslateY = (1 - scrollProgress) * 50 // Start 50% down, move up to 0%

  // Cards movement - follows the hand but with a slight delay
  const cardsTranslateX = Math.max(0, (scrollProgress - 0.1) * 120) // Slight delay before moving

  return (
    <div
      ref={containerRef}
      style={{
        position: "relative",
        width: "100%",
        height: "250vh", // Changed to 250vh as requested
      }}
    >
      <div
        ref={stickyRef}
        style={{
          position: "sticky",
          top: 0,
          width: "100%",
          height: "100vh",
          overflow: "hidden",
          backgroundColor: "#000",
        }}
      >
        <div
          style={{
            position: "relative",
            width: "100%",
            height: "100%",
          }}
        >
          {/* Cards container - moves with hand but with slight delay */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              transform: `translateX(${cardsTranslateX - 50}%)`,
              transition: "transform 0.05s ease-out", // Faster transition
            }}
          >
            {/* DevJams Card */}
            <div
              style={{
                position: "relative",
                margin: "0 1rem",
                transform: "rotate(-6deg)",
              }}
            >
              <img
                src="/public/swipe/devjams.svg"
                alt="DevJams 2024"
                style={{
                  objectFit: "contain",
                  height: "400px",
                  width: "300px",
                }}
              />
            </div>

            {/* Hexathon Card */}
            <div
              style={{
                position: "relative",
                margin: "0 1rem",
                transform: "rotate(3deg)",
              }}
            >
              <img
                src="/public/swipe/hexathon.svg"
                alt="Hexathon"
                style={{
                  objectFit: "contain",
                  height: "400px",
                  width: "300px",
                }}
              />
            </div>

            {/* Women Techies Card */}
            <div
              style={{
                position: "relative",
                margin: "0 1rem",
                transform: "rotate(6deg)",
              }}
            >
              <img
                src="/public/swipe/women-techies.svg"
                alt="Women Techies 2025"
                style={{
                  objectFit: "contain",
                  height: "400px",
                  width: "300px",
                }}
              />
            </div>
          </div>

          {/* Hand - fades in and moves from bottom left to right */}
          <div
            style={{
              position: "absolute",
              opacity: handOpacity,
              transform: `translate(${handTranslateX}%, ${handTranslateY}%)`,
              transition: "transform 0.05s ease-out", // Faster transition
              left: "-20%", // Start from left of screen
              bottom: "0", // Start from bottom
              width: "50%", // Adjust based on your hand image proportions
              height: "100vh",
            }}
          >
            <img
              src="/public/swipe/hand.svg"
              alt="Swiping Hand"
              style={{
                objectFit: "contain",
                objectPosition: "left bottom", // Align to bottom left
                width: "100%",
                height: "100%",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

