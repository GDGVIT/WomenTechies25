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
  const touchStartY = useRef<number | null>(null)
  const accumulatedDelta = useRef(0)
  const animationFrameId = useRef<number | null>(null)
  const isScrollLocked = useRef(false)

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

  // Function to lock scroll
  const lockScroll = useCallback(() => {
    if (!isScrollLocked.current) {
      initialScrollY.current = window.scrollY
      document.body.style.overflow = "hidden"
      document.body.style.position = "fixed"
      document.body.style.top = `-${initialScrollY.current}px`
      document.body.style.width = "100%"
      isScrollLocked.current = true
    }
  }, [])

  // Function to unlock scroll
  const unlockScroll = useCallback(() => {
    if (isScrollLocked.current) {
      document.body.style.overflow = ""
      document.body.style.position = ""
      document.body.style.top = ""
      document.body.style.width = ""
      window.scrollTo(0, initialScrollY.current)
      isScrollLocked.current = false
    }
  }, [])

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

  // Complete animation and navigate
  const completeAnimationAndNavigate = useCallback(() => {
    if (isAnimationComplete || hasNavigated) return

    setIsAnimationComplete(true)

    if (onAnimationComplete) {
      onAnimationComplete()
    }

    // Navigate to next section
    if (nextSectionId) {
      setHasNavigated(true)
      setTimeout(() => {
        unlockScroll()
        setIsAnimating(false)

        const nextSection = document.getElementById(nextSectionId)
        if (nextSection) {
          nextSection.scrollIntoView({ behavior: "smooth" })
        }
      }, 300)
    } else {
      unlockScroll()
      setIsAnimating(false)
    }
  }, [isAnimationComplete, hasNavigated, onAnimationComplete, nextSectionId, unlockScroll])

  // Set up intersection observer to detect when section is visible
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        const wasInView = isInView
        setIsInView(entry.isIntersecting)

        // Reset navigation state when section comes back into view
        if (entry.isIntersecting) {
          if (isAnimationComplete) {
            // If animation was already completed, just make sure scroll is unlocked
            unlockScroll()
          } else {
            // Reset state for new animation
            setHasNavigated(false)
            accumulatedDelta.current = 0
            scrollProgress.set(0)

            // If we're newly entering the view, start animation and lock scroll
            if (!wasInView) {
              setIsAnimating(true)
              lockScroll()
            }
          }
        } else if (wasInView && !entry.isIntersecting && isAnimationComplete) {
          // If we're leaving the view and animation is complete, unlock scroll
          setIsAnimating(false)
          unlockScroll()
        }
      },
      {
        threshold: 0.7, // Trigger when most of the section is visible
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
      unlockScroll()
    }
  }, [isInView, isAnimationComplete, lockScroll, unlockScroll, scrollProgress.set])

  // Process accumulated wheel/touch events
  const processEvents = useCallback(() => {
    if (animationFrameId.current) {
      cancelAnimationFrame(animationFrameId.current)
    }

    animationFrameId.current = requestAnimationFrame(() => {
      animationFrameId.current = null

      if (!isAnimating || isAnimationComplete) return

      const events = [...wheelEvents.current]
      wheelEvents.current = []

      // Calculate total delta
      let totalDelta = 0
      events.forEach((event) => {
        totalDelta += event.deltaY
      })

      // Apply sensitivity factor - adjust for desired speed
      const sensitivity = 0.04
      accumulatedDelta.current += totalDelta * sensitivity

      // Clamp accumulated delta
      accumulatedDelta.current = Math.max(0, Math.min(100, accumulatedDelta.current))

      // Update progress
      scrollProgress.set(accumulatedDelta.current)

      // Check if animation is complete
      if (accumulatedDelta.current >= 95) {
        completeAnimationAndNavigate()
      }
    })
  }, [isAnimating, isAnimationComplete, scrollProgress, completeAnimationAndNavigate])

  // Handle wheel events to control animation progress
  const handleWheel = useCallback(
    (e: WheelEvent) => {
      if (!isInView || !isAnimating || isAnimationComplete) return

      e.preventDefault()

      // Store wheel events for smoother animation
      wheelEvents.current.push(e)

      // Only process events if we're not already processing
      if (wheelEvents.current.length === 1) {
        processEvents()
      }
    },
    [isInView, isAnimating, isAnimationComplete, processEvents],
  )

  // Handle touch events for mobile
  const handleTouchStart = useCallback(
    (e: TouchEvent) => {
      if (!isInView || !isAnimating || isAnimationComplete) return
      touchStartY.current = e.touches[0].clientY
    },
    [isInView, isAnimating, isAnimationComplete],
  )

  const handleTouchMove = useCallback(
    (e: TouchEvent) => {
      if (!isInView || !isAnimating || isAnimationComplete || touchStartY.current === null) return

      e.preventDefault()

      const touchY = e.touches[0].clientY
      const deltaY = touchStartY.current - touchY

      // Create a synthetic wheel event
      const syntheticEvent = {
        deltaY: deltaY * 2, // Amplify touch movement
      } as WheelEvent

      wheelEvents.current.push(syntheticEvent)
      touchStartY.current = touchY

      // Process events
      if (wheelEvents.current.length === 1) {
        processEvents()
      }
    },
    [isInView, isAnimating, isAnimationComplete, processEvents],
  )

  const handleTouchEnd = useCallback(() => {
    touchStartY.current = null
  }, [])

  // Set up event listeners
  useEffect(() => {
    const options = { passive: false }

    if (isAnimating && !isAnimationComplete) {
      // Wheel events for desktop
      window.addEventListener("wheel", handleWheel, options)

      // Touch events for mobile
      window.addEventListener("touchstart", handleTouchStart, options)
      window.addEventListener("touchmove", handleTouchMove, options)
      window.addEventListener("touchend", handleTouchEnd)
    }

    return () => {
      window.removeEventListener("wheel", handleWheel as EventListener)
      window.removeEventListener("touchstart", handleTouchStart as EventListener)
      window.removeEventListener("touchmove", handleTouchMove as EventListener)
      window.removeEventListener("touchend", handleTouchEnd)

      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current)
      }
    }
  }, [handleWheel, handleTouchStart, handleTouchMove, handleTouchEnd, isAnimating, isAnimationComplete])

  // Add keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isInView || !isAnimating || isAnimationComplete) return

      if (e.key === "ArrowDown" || e.key === "PageDown" || e.key === "Space") {
        e.preventDefault()
        accumulatedDelta.current += 5
        accumulatedDelta.current = Math.min(100, accumulatedDelta.current)
        scrollProgress.set(accumulatedDelta.current)

        if (accumulatedDelta.current >= 95) {
          completeAnimationAndNavigate()
        }
      } else if (e.key === "ArrowUp" || e.key === "PageUp") {
        e.preventDefault()
        accumulatedDelta.current -= 5
        accumulatedDelta.current = Math.max(0, accumulatedDelta.current)
        scrollProgress.set(accumulatedDelta.current)
      }
    }

    window.addEventListener("keydown", handleKeyDown)

    return () => {
      window.removeEventListener("keydown", handleKeyDown)
    }
  }, [isInView, isAnimating, isAnimationComplete, scrollProgress, completeAnimationAndNavigate, scrollProgress.set])

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
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-light mb-2">A 36 hour adrenaline fueled hack.</h2>
        <p className="text-xl md:text-2xl lg:text-3xl font-light">Promoting the unstoppable force of female coders.</p>
      </motion.div>

      {/* Main container for illustrations */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full max-w-[1600px] h-[70vh] flex items-end justify-center">
        {/* Mesh ground */}
        <motion.div className="absolute bottom-0 w-full h-[40%] z-10" style={{ opacity: meshOpacity }}>
          <div className="w-full h-full bg-[url('/tempImages/mesh.png')] bg-no-repeat bg-cover bg-center"></div>
        </motion.div>

        {/* Left side characters */}
        <motion.div
          className="absolute bottom-0 left-[5%] sm:left-[10%] z-20 h-[50%] sm:h-[65%] md:h-[75%]"
          style={{
            x: leftChar1X,
            opacity: leftChar1Opacity,
          }}
        >
          {/* Girl with hat */}
          <div className="relative w-[150px] sm:w-[180px] md:w-[240px] lg:w-[280px] h-[225px] sm:h-[270px] md:h-[360px] lg:h-[420px]">
            <img src="/tempImages/girl1left.png" alt="Girl with hat" className="w-full h-full object-contain" />
          </div>
        </motion.div>

        <motion.div
          className="absolute bottom-0 left-[20%] sm:left-[25%] z-20 h-[55%] sm:h-[75%] md:h-[85%]"
          style={{
            x: leftChar2X,
            opacity: leftChar2Opacity,
          }}
        >
          {/* Lady standing */}
          <div className="relative w-[140px] sm:w-[170px] md:w-[220px] lg:w-[260px] h-[280px] sm:h-[340px] md:h-[440px] lg:h-[520px]">
            <img src="/tempImages/girl2left.png" alt="Lady standing" className="w-full h-full object-contain" />
          </div>
        </motion.div>

        {/* Center character - little girl with laptop */}
        <motion.div
          className="absolute bottom-0 left-1/2 transform -translate-x-1/2 z-30 h-[35%] sm:h-[40%] md:h-[50%] lg:h-[55%]"
          style={{
            opacity: centerCharOpacity,
          }}
        >
          <div className="relative w-[180px] sm:w-[240px] md:w-[300px] lg:w-[350px] h-[150px] sm:h-[200px] md:h-[250px] lg:h-[290px]">
            <img
              src="/tempImages/girllaptop.png"
              alt="Little girl with laptop"
              className="w-full h-full object-contain"
            />
          </div>
        </motion.div>

        {/* Right side characters */}
        <motion.div
          className="absolute bottom-0 right-[20%] sm:right-[25%] z-20 h-[40%] sm:h-[50%] md:h-[60%] lg:h-[65%]"
          style={{
            x: rightChar1X,
            opacity: rightChar1Opacity,
          }}
        >
          {/* Woman doing something with her hair */}
          <div className="relative w-[160px] sm:w-[200px] md:w-[260px] lg:w-[300px] h-[210px] sm:h-[260px] md:h-[340px] lg:h-[390px]">
            <img src="/tempImages/girl1right.png" alt="Woman with hair" className="w-full h-full object-contain" />
          </div>
        </motion.div>

        <motion.div
          className="absolute bottom-10 right-[5%] sm:right-[10%] z-20 h-[45%] sm:h-[55%] md:h-[70%] lg:h-[75%]"
          style={{
            x: rightChar2X,
            opacity: rightChar2Opacity,
          }}
        >
          {/* Woman sitting at desk with laptop */}
          <div className="relative w-[180px] sm:w-[240px] md:w-[300px] lg:w-[350px] h-[220px] sm:h-[290px] md:h-[360px] lg:h-[420px]">
            <img src="/tempImages/womenlaptop.png" alt="Woman at desk" className="w-full h-full object-contain" />
          </div>
        </motion.div>
      </div>
    </div>
  )
}

