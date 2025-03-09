import React from "react"
import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"

const ScrollAnimation: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null)

  // Get scroll progress for the entire section
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  })

  // Cards initial position and appearance
  const cardsOpacity = useTransform(scrollYProgress, [0, 0.05], [0, 1])
  const cardsY = useTransform(scrollYProgress, [0, 0.05], [50, 0])
  
  // Card rotation values - matching the angled appearance in the images
  const card1Rotate = -10
  const card2Rotate = 5
  const card3Rotate = 15

  // Hand animation phases
  // Phase 1: Initial appearance (just fingertips) - 5-15% of scroll
  const handInitialY = useTransform(scrollYProgress, [0.05, 0.15], ["95%", "80%"])
  
  // Phase 2: Hand continues to appear until 50% visible - 15-30% of scroll
  const handMidY = useTransform(scrollYProgress, [0.15, 0.3], ["80%", "50%"])
  
  // Phase 3: Hand pushes cards to the right - 30-50% of scroll
  const handPushX = useTransform(scrollYProgress, [0.3, 0.5], ["0%", "40%"])
  const cardsX = useTransform(scrollYProgress, [0.3, 0.5], ["0%", "100%"])
  
  // Phase 4: Full hand becomes visible - 50-70% of scroll
  const handFinalY = useTransform(scrollYProgress, [0.5, 0.7], ["50%", "0%"])
  
  // Combine all hand Y movements
  const handY = useTransform(
    scrollYProgress,
    [0.05, 0.15, 0.15, 0.3, 0.3, 0.5, 0.5, 0.7],
    ["95%", "80%", "80%", "50%", "50%", "50%", "50%", "0%"]
  )
  
  // Hand opacity
  const handOpacity = useTransform(scrollYProgress, [0.05, 0.1, 0.8, 0.9], [0, 1, 1, 0])
  
  // Sticky section control
  const stickyOpacity = useTransform(scrollYProgress, [0.9, 1], [1, 0])

  return (
    <div ref={containerRef} className="h-[400vh] relative bg-black">
      <motion.div
        className="sticky top-0 h-screen w-full overflow-hidden flex items-end justify-center"
        style={{ opacity: stickyOpacity }}
      >
        <div className="relative w-full h-full flex items-end justify-center pb-16">
          {/* Cards - positioned at the bottom with rotation */}
          <motion.div
            className="flex gap-4 relative z-10 mb-8"
            style={{
              opacity: cardsOpacity,
              y: cardsY,
              x: cardsX,
            }}
          >
            {/* DevJams Card */}
            <motion.div 
              className="w-64 h-96 rounded-lg overflow-hidden relative"
              style={{ rotate: card1Rotate }}
            >
              <img 
                src="/public/swipe/devjams.svg" 
                alt="DevJams 2024" 
                className="w-full h-full object-cover" 
              />
            </motion.div>

            {/* Hexathon Card */}
            <motion.div 
              className="w-64 h-96 rounded-lg overflow-hidden relative"
              style={{ rotate: card2Rotate }}
            >
              <img 
                src="/public/swipe/hexathon.svg" 
                alt="Hexathon" 
                className="w-full h-full object-cover" 
              />
            </motion.div>

            {/* Women Techies Card */}
            <motion.div 
              className="w-64 h-96 rounded-lg overflow-hidden relative"
              style={{ rotate: card3Rotate }}
            >
              <img 
                src="/public/swipe/wt.svg" 
                alt="Women Techies 2025" 
                className="w-full h-full object-cover" 
              />
            </motion.div>
          </motion.div>

          {/* Hand SVG - with precise animation based on screenshots */}
          <motion.div
            className="absolute bottom-0 left-0 w-[200%] h-[200%] z-20 pointer-events-none origin-bottom-left"
            style={{
              y: handY,
              x: handPushX,
              opacity: handOpacity,
            }}
          >
            <img 
              src="/public/swipe/hand.svg" 
              alt="Hand swiping" 
              className="w-full h-full object-contain origin-bottom-left" 
            />
          </motion.div>
        </div>
      </motion.div>
    </div>
  )
}

export default ScrollAnimation