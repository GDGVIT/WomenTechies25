import React from "react"
import { useRef, useState, useEffect } from "react"
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion"

export default function ScrollAnimationSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const [scrollProgress, setScrollProgress] = useState(0)
  const [animationComplete, setAnimationComplete] = useState(false)
  const [initialLoad, setInitialLoad] = useState(true)

  // Track scroll position
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  })

  // Update local scroll progress state
  useEffect(() => {
    const unsubscribe = scrollYProgress.onChange((value) => {
      setScrollProgress(value)
    })
    return () => unsubscribe()
  }, [scrollYProgress])

  // Handle initial load animation
  useEffect(() => {
    if (initialLoad) {
      const timer = setTimeout(() => {
        setInitialLoad(false)
      }, 1000)
      return () => clearTimeout(timer)
    }
  }, [initialLoad])

  // Determine when animation is complete
  useEffect(() => {
    if (scrollProgress >= 0.95 && !animationComplete) {
      setAnimationComplete(true)
    }
  }, [scrollProgress, animationComplete])

  // Lock body scroll during animation
  useEffect(() => {
    if (!animationComplete && !initialLoad) {
      document.body.style.overflow = "hidden"

      // Force scroll position to stay at the section
      const handleScroll = () => {
        if (sectionRef.current) {
          window.scrollTo(0, sectionRef.current.offsetTop)
        }
      }

      window.addEventListener("scroll", handleScroll)
      return () => {
        window.removeEventListener("scroll", handleScroll)
      }
    } else {
      document.body.style.overflow = ""
    }
  }, [animationComplete, initialLoad])

  // Animation progress mapped to scroll
  const animationProgress = useTransform(scrollYProgress, [0, 0.95], [0, 1])

  // Map different elements to different parts of the animation sequence
  const leftChar1X = useTransform(animationProgress, [0.2, 0.5], [-200, 0])
  const leftChar1Opacity = useTransform(animationProgress, [0.2, 0.4], [0, 1])

  const leftChar2X = useTransform(animationProgress, [0.3, 0.6], [-200, 0])
  const leftChar2Opacity = useTransform(animationProgress, [0.3, 0.5], [0, 1])

  const rightChar1X = useTransform(animationProgress, [0.2, 0.5], [200, 0])
  const rightChar1Opacity = useTransform(animationProgress, [0.2, 0.4], [0, 1])

  const rightChar2X = useTransform(animationProgress, [0.3, 0.6], [200, 0])
  const rightChar2Opacity = useTransform(animationProgress, [0.3, 0.5], [0, 1])

  const meshOpacity = useTransform(animationProgress, [0.1, 0.3], [0, 1])

  const centerCharY = useTransform(animationProgress, [0, 0.2], [20, 0])
  const centerCharOpacity = useTransform(animationProgress, [0, 0.15], [0, 1])

  const textY = useTransform(animationProgress, [0.6, 0.8], [30, 0])
  const textOpacity = useTransform(animationProgress, [0.6, 0.8], [0, 1])

  // Star animation variants
  const starVariants = {
    animate: (i: number) => ({
      opacity: [0.4, 1, 0.4],
      scale: [1, 1.2, 1],
      transition: {
        repeat: Number.POSITIVE_INFINITY,
        duration: 2 + i * 0.5,
        ease: "easeInOut",
        delay: i * 0.2,
      },
    }),
  }

  return (
    <div ref={sectionRef} className="relative w-full h-[100vh] overflow-hidden bg-[#121212]">
      {/* Progress indicator */}
      {!animationComplete && !initialLoad && (
        <div className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-white text-sm">
          Scroll to reveal all characters ({Math.round(animationProgress.get() * 100)}%)
        </div>
      )}

      {/* Stars background */}
      <div className="absolute inset-0 z-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            custom={i}
            variants={starVariants}
            animate="animate"
            className="absolute rounded-full bg-white"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: `${Math.random() * 3 + 1}px`,
              height: `${Math.random() * 3 + 1}px`,
            }}
          />
        ))}
      </div>

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
      <div
        ref={containerRef}
        className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full max-w-[1600px] h-[60vh] flex items-end justify-center"
      >
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
              src="/placeholder.svg?height=300&width=200"
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
              src="/placeholder.svg?height=350&width=180"
              alt="Lady standing"
              className="w-full h-full object-contain"
            />
          </div>
        </motion.div>

        {/* Center character - little girl with laptop */}
        <motion.div
          className="absolute bottom-0 left-1/2 transform -translate-x-1/2 z-30 h-[25%] sm:h-[30%] md:h-[40%]"
          style={{
            y: centerCharY,
            opacity: centerCharOpacity,
          }}
        >
          <div className="relative w-[150px] sm:w-[200px] md:w-[250px] h-[120px] sm:h-[160px] md:h-[200px]">
            <img
              src="/placeholder.svg?height=200&width=250"
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
          className="absolute bottom-0 right-[5%] sm:right-[10%] z-20 h-[35%] sm:h-[45%] md:h-[60%]"
          style={{
            x: rightChar2X,
            opacity: rightChar2Opacity,
          }}
        >
          {/* Woman sitting at desk with laptop */}
          <div className="relative w-[150px] sm:w-[200px] md:w-[250px] h-[180px] sm:h-[240px] md:h-[300px]">
            <img
              src="/placeholder.svg?height=300&width=250"
              alt="Woman at desk"
              className="w-full h-full object-contain"
            />
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <AnimatePresence>
        {!initialLoad && !animationComplete && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white text-center"
          >
            <p className="text-sm mb-2">Scroll to continue</p>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}
              className="w-6 h-10 border-2 border-white rounded-full mx-auto flex justify-center"
            >
              <motion.div
                animate={{ y: [0, 15, 0] }}
                transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}
                className="w-1.5 h-3 bg-white rounded-full mt-1"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

