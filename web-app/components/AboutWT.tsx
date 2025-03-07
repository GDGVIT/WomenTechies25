import React from "react"
import { useRef, useState, useEffect } from "react"
import { easeInOut, motion, useScroll, useTransform } from "framer-motion"
import AtomIcon from "./AtomAboutWT"
const AboutSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const sectionRef = useRef<HTMLDivElement>(null)
  const [isMobile, setIsMobile] = useState(false)
  const [isTablet, setIsTablet] = useState(false)
  const [isScrolling, setIsScrolling] = useState(false)
 
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768)
      setIsTablet(window.innerWidth >= 768 && window.innerWidth < 1024)
    }
 
    checkScreenSize()
 
    window.addEventListener("resize", checkScreenSize)
 
    return () => window.removeEventListener("resize", checkScreenSize)
  }, [])
 
  const getResponsiveSize = (baseSize: number) => {
    if (isMobile) return baseSize * 0.5  
    if (isTablet) return baseSize * 0.7  
    return baseSize * 0.85  
  }
 
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  })
 
  useEffect(() => {
    const unsubscribe = scrollYProgress.onChange((value) => {
      setIsScrolling(value > 0.01)
    })

    return () => unsubscribe()
  }, [scrollYProgress])

  const leftFillOpacity = useTransform(
    scrollYProgress,
    [0, 0.05, 0.1, 0.15, 0.2, 0.25, 0.3, 0.35, 0.4, 0.45, 0.5, 0.55, 0.6, 0.65, 0.7, 0.75, 0.8, 0.85, 0.9, 0.95, 1], 
    [0, 0.05, 0.11, 0.18, 0.26, 0.35, 0.42, 0.49, 0.56, 0.63, 0.69, 0.75, 0.81, 0.86, 0.91, 0.95, 0.98, 0.99, 1, 1, 1], 
    { ease: easeInOut }
  );
  
  const rightFillOpacity = useTransform(
    scrollYProgress,
    [0, 0.05, 0.1, 0.15, 0.2, 0.25, 0.3, 0.35, 0.4, 0.45, 0.5, 0.55, 0.6, 0.65, 0.7, 0.75, 0.8, 0.85, 0.9, 0.95, 1], 
    [0, 0.05, 0.11, 0.18, 0.26, 0.35, 0.42, 0.49, 0.56, 0.63, 0.69, 0.75, 0.81, 0.86, 0.91, 0.95, 0.98, 0.99, 1, 1, 1], 
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
        height: "225vh", 
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
        <div
        className="absolute left-[10%] top-[30%] xl:left-[35%] xl:top-[30%] w-[300px] h-[400px] rounded-full -z-10">
          <AtomIcon />
        </div>
        {/* Stars/sparkles */}
        <div className="stars" style={{ position: "absolute", width: "100%", height: "100%", zIndex: 1 }}>
          {[
            { top: "55%", left: "5%" },
            { top: "23%", left: "25%" },
            { top: "35%", left: "35%" },
            { top: "21%", right: "15%" },
            { top: "10%", right: "25%" },
            { top: "30%", right: "35%" },
            { top: "15%", left: "50%", transform: "translateX(-50%)" },
          ].map((style, index) => (
            <img
              key={index}
              src="/aboutWT/star.svg"
              alt="Star"
              style={{ position: "absolute", width: "30px", height: "30px", objectFit: "cover", ...style }}
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
              repeatDelay: 0.5,
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
                bottom: "12%",  
                height: getResponsiveSize(600) + "px",
                zIndex: 3,
              }}
            />

            {/* Left SVG */}
            <motion.img
              src="/aboutWT/left1filled.svg"
              alt="Left filled"
              style={{
                position: "absolute",
                left: "7%",
                bottom: "12%",  
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

            {/* Center 2 SVG  */}
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
                bottom: "12%",  
                height: getResponsiveSize(550) + "px",
                zIndex: 3,
              }}
            />

            {/* Right SVG   */}
            <motion.img
              src="/aboutWT/right1filled.svg"
              alt="Right filled"
              style={{
                position: "absolute",
                right: "7%",
                bottom: "12%",  
                height: getResponsiveSize(550) + "px",
                zIndex: 4,
                opacity: rightFillOpacity,
              }}
              initial={{ opacity: 0 }}
            />
          </>
        ) : (
          // Mobile layout 
          <>
            <img
              src="/aboutWT/left1.svg"
              alt="Left outline"
              style={{
                position: "absolute",
                left: "2%",
                bottom: "10%", 
                height: getResponsiveSize(600) + "px",
                zIndex: 3,
              }}
            />
            <motion.img
              src="/aboutWT/left1filled.svg"
              alt="Left filled"
              style={{
                position: "absolute",
                left: "2%",
                bottom: "10%", 
                height: getResponsiveSize(600) + "px",
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
                bottom: "10%", 
                height: getResponsiveSize(500) + "px",
                zIndex: 3,
              }}
            />
            <motion.img
              src="/aboutWT/right1filled.svg"
              alt="Right filled"
              style={{
                position: "absolute",
                right: "2%",
                bottom: "10%",
                height: getResponsiveSize(500) + "px",
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

      

       
      </div>
    </div>
  )
}

export default AboutSection

