"use client"

import { useRef, useState, useEffect, useCallback } from "react"
import { motion, useTransform, useMotionValue, useSpring } from "framer-motion"

interface HorizontalRevealSectionProps {
  onAnimationComplete?: () => void
  id: string
  nextSectionId?: string
  prevSectionId?: string
}

export default function HorizontalRevealSection({
  onAnimationComplete,
  id,
  nextSectionId,
  prevSectionId,
}: HorizontalRevealSectionProps) {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [isInView, setIsInView] = useState(false)
  const [scrollDirection, setScrollDirection] = useState<"up" | "down" | null>(null)
  const lastScrollY = useRef(0)
  const [hasNavigated, setHasNavigated] = useState(false)
  const [isAnimating, setIsAnimating] = useState(false)
  const [isAnimationComplete, setIsAnimationComplete] = useState(false)
  const initialScrollY = useRef(0)
  const wheelEvents = useRef<WheelEvent[]>([])
  const accumulatedDelta = useRef(0)

  // Animation progress value (0-100)
  const scrollProgress = useMotionValue(0)

  // Create a spring-based animation for smoother transitions
  const smoothProgress = useSpring(scrollProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })

  // Map animation progress to element properties
  // Center character stays in place but fades in first
  const centerCharOpacity = useTransform(smoothProgress, [0, 10], [1, 1]) // Always visible

  // Left characters move from left to right
  const leftChar1X = useTransform(smoothProgress, [10, 40], [-300, 0])
  const leftChar1Opacity = useTransform(smoothProgress, [10, 30], [0, 1])

  const leftChar2X = useTransform(smoothProgress, [20, 50], [-300, 0])
  const leftChar2Opacity = useTransform(smoothProgress, [20, 40], [0, 1])

  // Right characters move from right to left
  const rightChar1X = useTransform(smoothProgress, [10, 40], [300, 0])
  const rightChar1Opacity = useTransform(smoothProgress, [10, 30], [0, 1])

  const rightChar2X = useTransform(smoothProgress, [20, 50], [300, 0])
  const rightChar2Opacity = useTransform(smoothProgress, [20, 40], [0, 1])

  // Mesh ground fades in
  const meshOpacity = useTransform(smoothProgress, [5, 25], [0, 1])

  // Text fades in last
  const textY = useTransform(smoothProgress, [60, 80], [30, 0])
  const textOpacity = useTransform(smoothProgress, [60, 80], [0, 1])

  // Determine scroll direction
  const updateScrollDirection = useCallback(() => {
    const currentScrollY = window.scrollY

    if (currentScrollY > lastScrollY.current) {
      setScrollDirection("down")
    } else if (currentScrollY < lastScrollY.current) {
      setScrollDirection("up")
    }

    lastScrollY.current = currentScrollY
  }, [])

  // Set up intersection observer to detect when section is visible
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        const wasInView = isInView
        setIsInView(entry.isIntersecting)

        // Reset navigation state when section comes back into view
        if (entry.isIntersecting) {
          setHasNavigated(false)

          // If we're newly entering the view, start animation and lock scroll
          if (!wasInView) {
            setIsAnimating(true)
            initialScrollY.current = window.scrollY
            document.body.style.overflow = "hidden"
            document.body.style.height = "100vh"
          }
        } else if (wasInView && !entry.isIntersecting && isAnimationComplete) {
          // If we're leaving the view and animation is complete, unlock scroll
          setIsAnimating(false)
          document.body.style.overflow = ""
          document.body.style.height = ""
        }
      },
      {
        threshold: 0.8, // Trigger when most of the section is visible
        rootMargin: "-10% 0px", // Slightly reduce the effective viewport
      },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
      // Clean up scroll lock if component unmounts
      document.body.style.overflow = ""
      document.body.style.height = ""
    }
  }, [isInView, isAnimationComplete])

  // Handle wheel events to control animation progress
  const handleWheel = useCallback(
    (e: WheelEvent) => {
      if (!isInView || isAnimationComplete) return

      e.preventDefault()

      // Store wheel events for smoother animation
      wheelEvents.current.push(e)

      // Process wheel events in animation frame for better performance
      if (wheelEvents.current.length === 1) {
        requestAnimationFrame(() => {
          const events = [...wheelEvents.current]
          wheelEvents.current = []

          // Calculate total delta
          let totalDelta = 0
          events.forEach((event) => {
            totalDelta += event.deltaY
          })

          // Accumulate delta for smoother progress
          accumulatedDelta.current += totalDelta * 0.05

          // Clamp accumulated delta
          accumulatedDelta.current = Math.max(0, Math.min(100, accumulatedDelta.current))

          // Update progress
          scrollProgress.set(accumulatedDelta.current)

          // Check if animation is complete
          if (accumulatedDelta.current >= 95) {
            setIsAnimationComplete(true)

            if (onAnimationComplete) {
              onAnimationComplete()
            }

            // Navigate to next section
            if (nextSectionId && !hasNavigated) {
              setHasNavigated(true)
              setTimeout(() => {
                document.body.style.overflow = ""
                document.body.style.height = ""
                setIsAnimating(false)

                const nextSection = document.getElementById(nextSectionId)
                if (nextSection) {
                  nextSection.scrollIntoView({ behavior: "smooth" })
                }
              }, 300)
            }
          }
        })
      }
    },
    [isInView, isAnimationComplete, scrollProgress, onAnimationComplete, nextSectionId, hasNavigated],
  )

  // Set up wheel event listener with passive: false to allow preventDefault
  useEffect(() => {
    const options = { passive: false }

    if (isAnimating && !isAnimationComplete) {
      window.addEventListener("wheel", handleWheel, options)
    }

    return () => {
      window.removeEventListener("wheel", handleWheel as EventListener)
    }
  }, [handleWheel, isAnimating, isAnimationComplete])

  // Reset scroll position when animation starts
  useEffect(() => {
    if (isAnimating && !isAnimationComplete && sectionRef.current) {
      window.scrollTo({
        top: initialScrollY.current,
        behavior: "instant",
      })
    }
  }, [isAnimating, isAnimationComplete])

  return (
    <div ref={sectionRef} id={id} className="relative w-full h-[100vh] overflow-hidden bg-[#121212]">
      {/* Progress indicator (only visible during development) */}
      {process.env.NODE_ENV === "development" && (
        <div className="fixed top-4 left-4 z-50 bg-black/50 backdrop-blur-sm rounded-full px-4 py-2 text-white text-sm">
          Progress: {Math.round(scrollProgress.get())}%{isAnimating ? " (Locked)" : ""}
        </div>
      )}

      {/* Text content */}
      <motion.div
        className="absolute top-[20%] left-1/2 transform -translate-x-1/2 text-center z-20 text-white w-full px-4"
        style={{
          y: textY,
          opacity: textOpacity,
        }}
      >
        <h2 className="text-2xl md:text-3xl font-light mb-2">A 36 hour adrenaline fueled hack.</h2>
        <p className="text-xl md:text-2xl font-light">Promoting the unstoppable force of female coders.</p>
      </motion.div>

      {/* Main container for illustrations */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full max-w-[1600px] h-[60vh] flex items-end justify-center">
        {/* Mesh ground */}
        <motion.div className="absolute bottom-0 w-full h-[40%] z-10" style={{ opacity: meshOpacity }}>
          <div className="w-full h-full bg-[url('/placeholder.svg?height=400&width=1920')] bg-no-repeat bg-cover bg-center"></div>
        </motion.div>

        {/* Left side characters */}
        <motion.div
          className="absolute bottom-0 left-[5%] sm:left-[10%] z-20 h-[40%] sm:h-[60%]"
          style={{
            x: leftChar1X,
            opacity: leftChar1Opacity,
          }}
        >
          {/* Girl with hat */}
          <div className="relative w-[120px] sm:w-[150px] md:w-[200px] h-[180px] sm:h-[225px] md:h-[300px]">
            <img
              src="/tempImages/girl1left.png"
              alt="Girl with hat"
              className="w-full h-full object-contain"
            />
          </div>
        </motion.div>

        <motion.div
          className="absolute bottom-0 left-[20%] sm:left-[25%] z-20 h-[45%] sm:h-[70%]"
          style={{
            x: leftChar2X,
            opacity: leftChar2Opacity,
          }}
        >
          {/* Lady standing */}
          <div className="relative w-[110px] sm:w-[140px] md:w-[180px] h-[220px] sm:h-[270px] md:h-[350px]">
            <img
              src="/tempImages/girl2left.png"
              alt="Lady standing"
              className="w-full h-full object-contain"
            />
          </div>
        </motion.div>

        {/* Center character - little girl with laptop */}
        <motion.div
          className="absolute bottom-0 left-1/2 transform -translate-x-1/2 z-30 h-[25%] sm:h-[30%] md:h-[40%]"
          style={{
            opacity: centerCharOpacity,
          }}
        >
          <div className="relative w-[150px] sm:w-[200px] md:w-[250px] h-[120px] sm:h-[160px] md:h-[200px]">
            <img
              src="/tempImages/girllaptop.png"
              alt="Little girl with laptop"
              className="w-full h-full object-contain"
            />
          </div>
        </motion.div>

        {/* Right side characters */}
        <motion.div
          className="absolute bottom-0 right-[20%] sm:right-[25%] z-20 h-[30%] sm:h-[40%] md:h-[50%]"
          style={{
            x: rightChar1X,
            opacity: rightChar1Opacity,
          }}
        >
          {/* Woman doing something with her hair */}
          <div className="relative w-[130px] sm:w-[170px] md:w-[220px] h-[170px] sm:h-[220px] md:h-[280px]">
            <img
              src="/placeholder.svg?height=280&width=220"
              alt="Woman with hair"
              className="w-full h-full object-contain"
            />
          </div>
        </motion.div>

        <motion.div
          className="absolute bottom-10 right-[5%] sm:right-[10%] z-20 h-[35%] sm:h-[45%] md:h-[60%]"
          style={{
            x: rightChar2X,
            opacity: rightChar2Opacity,
          }}
        >
          {/* Woman sitting at desk with laptop */}
          <div className="relative w-[150px] sm:w-[200px] md:w-[250px] h-[180px] sm:h-[240px] md:h-[300px]">
            <img
              src="/tempImages/womenlaptop.png"
              alt="Woman at desk"
              className="w-full h-full object-contain"
            />
          </div>
        </motion.div>
      </div>
    </div>
  )
}

