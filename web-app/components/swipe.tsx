import React from "react"
import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"

const ScrollAnimation: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  }) 
  const cardsOpacity = useTransform(scrollYProgress, [0, 0.05], [0, 1])
  const cardsY = useTransform(scrollYProgress, [0.75, 0.9], ["0%", "-100%"])
   
  const card1Rotate = -10
  const card2Rotate = 5
  const card3Rotate = 15
  
  // const handInitialY = useTransform(scrollYProgress, [0.05, 0.15,0.5,0.7,0.9], ["95%", "80%","70%","60%","50%"])
   
  // const handMidY = useTransform(scrollYProgress, [0.35, 0.8], ["80%", "50%"])
   
  const handPushX = useTransform(scrollYProgress, [0.7,1], ["-20%","90%"])
  const cardsX = useTransform(scrollYProgress, [0.75, 0.9], ["0%", "150%"])
  const rotate=useTransform(scrollYProgress, [0.7, 0.9], ["0deg", "20deg"])
   
  // const handFinalY = useTransform(scrollYProgress, [0.7, 0.9], ["30%", "0%"])
   
  const handY = useTransform(
    scrollYProgress,
    [ 0.7, 0.8, 0.9, 0.95, 1],
    [ "100%", "0%", "-10%", "-20%", "-20%"]
  )
   
  const handOpacity = useTransform(scrollYProgress, [0.4,0.5, 1], [1, 1, 1])
   
  const stickyOpacity = useTransform(scrollYProgress, [0.9, 1], [1, 0])
  const opacity1 = useTransform(scrollYProgress, [0.1, 0.15], [0, 1]);
  const opacity2 = useTransform(scrollYProgress, [0.2, 0.25], [0, 1]);
  const opacity3 = useTransform(scrollYProgress, [0.4, 0.45], [0, 1]);

  return (
    <div ref={containerRef} className="h-[500vh] relative bg-background">
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
              className="w-100 h-150 rounded-lg overflow-hidden relative"
              style={{ rotate: card1Rotate,opacity:opacity1
                
               }}
              
            >
              <img 
                src="/swipe/devjams.svg" 
                alt="DevJams 2024" 
                className="w-full h-full object-cover" 
              />
            </motion.div> 
            <motion.div 
              className="w-110 h-160 rounded-lg overflow-hidden relative"
              style={{ rotate: card2Rotate,opacity:opacity3 }}
            >
              <img 
                src="/swipe/wt.svg" 
                alt="Hexathon" 
                className="w-full h-full object-cover" 
              />
            </motion.div> 
            <motion.div 
              className="w-100 h-150 rounded-lg overflow-hidden relative "
              style={{ rotate: card3Rotate,opacity:opacity2 }}
            >
              <img 
                src="/swipe/hexathon.svg" 
                alt="Women Techies 2025" 
                className="w-full h-full object-cover" 
              />
            </motion.div>
          </motion.div> 
          <motion.div
            className="absolute bottom-0 left-100 w-[100%] h-[150%] z-20 pointer-events-none origin-bottom-left"
            style={{
              y: handY,
              x: handPushX,
              // opacity: handOpacity,
              rotate:rotate
              
            }}
          >
            <img 
              src="/swipe/hand.svg" 
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