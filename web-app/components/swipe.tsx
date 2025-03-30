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

  const isMobile = () => {
    if (typeof window !== "undefined") {
      return window.innerWidth < 768
    }
    return false
  }


  return (
    
        <> 
        {isMobile() ? (
        // Mobile view - not sticky, 100vh height
        <div ref={containerRef} className="h-[400vh] relative bg-background">
            <motion.div
              className="sticky top-0 h-screen w-full overflow-hidden flex items-end justify-center align-middle"
              style={{ opacity: stickyOpacity }}
            >
              <div className="absolute w-full h-full md:w-[100%] flex items-center justify-center pb-16">



          <motion.div
            className="flex-col  gap-10 relative z-10  justify-center align-center"
            style={{
              opacity: cardsOpacity,
              y: cardsY,
              x: cardsX,
            }}
          > 
            <motion.div 
              className="relative top-40 w-60 h-80 sm:w-50 sm:h-80 md:w-100 md:h-150 md: rounded-lg overflow-hidden"
              style={{ rotate: card1Rotate,opacity:opacity1
                
               }}
              
            >
              <img 
                src="/swipe/card1-mobile.png" 
                alt="DevJams 2024" 
                className="w-full h-full sm:w-50 sm:h-80 md:w-100 md:h-150 object-cover" 
              />
            </motion.div> 
            <motion.div 
              className="w-60 h-80 sm:w-50 sm:h-80 md:w-100 md:h-150 rounded-lg overflow-hidden relative z-10 "
              style={{ rotate: card2Rotate,opacity:opacity2 }}
            >
              <img 
                src="/swipe/card2-mobile.png" 
                alt="Hexathon" 
                className="w-full h-full sm:w-50 sm:h-80 md:w-100 md:h-150 object-cover" 
              />
            </motion.div> 
            <motion.div 
              className="relative bottom-10 w-60 h-80 sm:w-50 sm:h-80 md:w-100 md:h-150 rounded-lg overflow-hidden z-20 -rotate-15"
              style={{ rotate: card3Rotate,opacity:opacity3 }}
            >
              <img 
                src="/swipe/card3-mobile.png" 
                alt="Women Techies 2025" 
                className="w-full h-full sm:w-50 sm:h-80 md:w-100 md:h-150 object-cover" 
              />
            </motion.div>
          </motion.div> 
          <motion.div
            className="absolute bottom-0 left-[10%] w-[200%] h-[100%] sm:h-300 sm:w-400 md:w-[90%] md:h-[90%] z-20 pointer-events-none origin-bottom-left"
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
          ) : (

            <div ref={containerRef} className="h-[400vh] relative bg-background">
            <motion.div
              className="sticky top-0 h-screen w-full overflow-hidden flex items-end justify-center align-middle"
              style={{ opacity: stickyOpacity }}
            >
              <div className="absolute w-full h-full md:w-[100%] flex items-center justify-center pb-16">



          <motion.div
            className="flex gap-4 relative z-10 mb-8 justify-center align-center"
            style={{
              opacity: cardsOpacity,
              y: cardsY,
              x: cardsX,
            }}
          > 
            <motion.div 
              className="w-100 h-150 sm:w-50 sm:h-80 md:w-100 md:h-150 md: rounded-lg overflow-hidden relative"
              style={{ rotate: card1Rotate,opacity:opacity1
                
               }}
              
            >
              <img 
                src="/swipe/devjams-jpeg.jpg" 
                alt="DevJams 2024" 
                className="w-full h-full sm:w-50 sm:h-80 md:w-100 md:h-150 object-cover" 
              />
            </motion.div> 
            <motion.div 
              className="w-110 h-160 sm:w-50 sm:h-80 md:w-100 md:h-150 rounded-lg overflow-hidden relative "
              style={{ rotate: card2Rotate,opacity:opacity3 }}
            >
              <img 
                src="/swipe/wt-jpeg.jpg" 
                alt="Hexathon" 
                className="w-full h-full sm:w-50 sm:h-80 md:w-100 md:h-150 object-cover" 
              />
            </motion.div> 
            <motion.div 
              className="w-100 h-150 sm:w-50 sm:h-80 md:w-100 md:h-150 rounded-lg overflow-hidden relative "
              style={{ rotate: card3Rotate,opacity:opacity2 }}
            >
              <img 
                src="/swipe/hex-jpeg.jpg" 
                alt="Women Techies 2025" 
                className="w-full h-full sm:w-50 sm:h-80 md:w-100 md:h-150 object-cover" 
              />
            </motion.div>
          </motion.div> 
          <motion.div
            className="absolute bottom-0 left-[30%] w-[100%] h-[150%] sm:h-300 sm:w-400 md:w-[90%] md:h-[90%] z-20 pointer-events-none origin-bottom-left"
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
</> )}


export default ScrollAnimation