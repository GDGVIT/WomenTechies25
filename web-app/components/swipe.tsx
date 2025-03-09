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
  const cardsOpacity = useTransform(scrollYProgress, [0, 0.05], [0, 1])
  const cardsY = useTransform(scrollYProgress, [0, 0.05], [50, 0])
   
  const card1Rotate = -10
  const card2Rotate = 5
  const card3Rotate = 15
  
  const handInitialY = useTransform(scrollYProgress, [0.05, 0.15], ["95%", "80%"])
   
  const handMidY = useTransform(scrollYProgress, [0.15, 0.3], ["80%", "50%"])
   
  const handPushX = useTransform(scrollYProgress, [0.3, 0.5], ["0%", "40%"])
  const cardsX = useTransform(scrollYProgress, [0.3, 0.5], ["0%", "100%"])
   
  const handFinalY = useTransform(scrollYProgress, [0.5, 0.7], ["50%", "0%"])
   
  const handY = useTransform(
    scrollYProgress,
    [0.05, 0.15, 0.15, 0.3, 0.3, 0.5, 0.5, 0.7],
    ["95%", "80%", "80%", "50%", "50%", "50%", "50%", "0%"]
  )
   
  const handOpacity = useTransform(scrollYProgress, [0.05, 0.1, 0.8, 0.9], [0, 1, 1, 0])
   
  const stickyOpacity = useTransform(scrollYProgress, [0.9, 1], [1, 0])

  return (
    <div ref={containerRef} className="h-[300vh] relative bg-background">
      <motion.div
        className="sticky top-0 h-screen w-full overflow-hidden flex items-end justify-center"
        style={{ opacity: stickyOpacity }}
      >
        <div className="relative w-full h-full flex items-end justify-center pb-16">
 
          <motion.div
            className="flex gap-4 relative z-10 mb-8"
            style={{
              opacity: cardsOpacity,
              y: cardsY,
              x: cardsX,
            }}
          > 
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