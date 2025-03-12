import React from "react"
import { useRef, useState, useEffect } from "react"
import { easeInOut, motion, useScroll, useTransform } from "framer-motion"

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

    let timeoutId: ReturnType<typeof setTimeout>
    const handleResize = () => {
      clearTimeout(timeoutId)
      timeoutId = setTimeout(checkScreenSize, 100)
    }

    window.addEventListener("resize", handleResize)
    return () => {
      window.removeEventListener("resize", handleResize)
      clearTimeout(timeoutId)
    }
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
    [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1],
    [0, 0.1, 0.25, 0.4, 0.55, 0.7, 0.8, 0.9, 0.95, 0.98, 1],
    { ease: easeInOut },
  )

  const rightFillOpacity = useTransform(
    scrollYProgress,
    [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1],
    [0, 0.1, 0.25, 0.4, 0.55, 0.7, 0.8, 0.9, 0.95, 0.98, 1],
    { ease: easeInOut },
  )

  const textOpacity = useTransform(
    scrollYProgress,
    [0, 0.05, 0.1, 0.15, 0.2, 0.25, 0.3],
    [0, 0.2, 0.4, 0.6, 0.8, 0.9, 1],
    { ease: easeInOut },
  )

  useEffect(() => {
    let rafId: number
    let lastScrollY = window.scrollY
    let ticking = false

    const handleScroll = () => {
      if (!ticking) {
        rafId = requestAnimationFrame(() => {
          if (Math.abs(window.scrollY - lastScrollY) > 5) {
            lastScrollY = window.scrollY
          }
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true })

    return () => {
      window.removeEventListener("scroll", handleScroll)
      cancelAnimationFrame(rafId)
    }
  }, [])

  useEffect(() => {
    if (!containerRef.current) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsScrolling(true)
          } else {
            setIsScrolling(false)
          }
        })
      },
      {
        threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1],
        rootMargin: "0px",
      },
    )

    observer.observe(containerRef.current)

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current)
      }
    }
  }, [])

  return (
    <div
      ref={containerRef}
      className="about-section-container"
      style={{
        position: "relative",
        height: "280vh",
        willChange: "transform",
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
          willChange: "opacity, transform",
        }}
      >
        {/* <div className="absolute left-[10%] top-[30%] xl:left-[35%] xl:top-[30%] w-[300px] h-[400px] rounded-full -z-10">
          <AtomIcon />
        </div> */}

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
              loading="lazy"
              decoding="async"
              style={{ position: "absolute", width: "20px", height: "20px", objectFit: "cover", ...style }}
            />
          ))}
        </div>

        <motion.img
          src="/aboutWT/ceilinglights.svg"
          alt="Ceiling Lights"
          loading="lazy"
          decoding="async"
          style={{
            position: "absolute",
            top: 0,
            right: "5%",
            width: getResponsiveSize(400) + "px",
            zIndex: 1,
            opacity: textOpacity,
            willChange: "opacity, transform",
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
              damping: 5,
              mass: 0.5,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "mirror",
              repeatDelay: 1,
            },
          }}
        />

        <motion.img
          src="/aboutWT/bookshelf.svg"
          alt="Bookshelf"
          loading="lazy"
          decoding="async"
          style={{
            position: "absolute",
            top: "10%",
            left: "7%",
            width: getResponsiveSize(360) + "px",
            zIndex: 1,
            opacity: textOpacity,
            willChange: "opacity, transform",
          }}
          initial={{ opacity: 0, y: -10 }}
          animate={{
            opacity: 1,
            y: 0,
          }}
        />

        <img
          src="/aboutWT/grid.svg"
          alt="Floor"
          loading="lazy"
          decoding="async"
          style={{
            position: "absolute",
            bottom: -100,
            width: "100%",
            zIndex: 2,
          }}
        />

        {!isMobile ? (
          <>
            <img
              src="/aboutWT/left1.svg"
              alt="Left outline"
              loading="lazy"
              decoding="async"
              style={{
                position: "absolute",
                left: "7%",
                bottom: "3vh",
                height: getResponsiveSize(600) + "px",
                zIndex: 3,
              }}
            />

            <motion.img
              src="/aboutWT/left1filled.svg"
              alt="Left filled"
              style={{
                position: "absolute",
                left: "7%",
                bottom: "3vh",
                height: getResponsiveSize(600) + "px",
                zIndex: 4,
                opacity: leftFillOpacity,
                willChange: "opacity",
              }}
              initial={{ opacity: 0 }}
            />

            <img
              src="/aboutWT/centre1.svg"
              alt="Center 1"
              loading="lazy"
              decoding="async"
              style={{
                position: "absolute",
                left: isTablet ? "22%" : "21%",
                bottom: isTablet ? "14%" : "3vh",
                height: getResponsiveSize(420) + "px",
                zIndex: 3,
              }}
            />

            <img
              src="/aboutWT/centre2.svg"
              alt="Center 2"
              loading="lazy"
              decoding="async"
              style={{
                position: "absolute",
                right: isTablet ? "22%" : "30%",
                bottom: isTablet ? "14%" : "3vh",
                height: getResponsiveSize(450) + "px",
                zIndex: 3,
              }}
            />

            <img
              src="/aboutWT/right1.svg"
              alt="Right outline"
              loading="lazy"
              decoding="async"
              style={{
                position: "absolute",
                right: "7%",
                bottom: "3vh",
                height: getResponsiveSize(550) + "px",
                zIndex: 3,
              }}
            />

            <motion.img
              src="/aboutWT/right1filled.svg"
              alt="Right filled"
              style={{
                position: "absolute",
                right: "7%",
                bottom: "3vh",
                height: getResponsiveSize(550) + "px",
                zIndex: 4,
                opacity: rightFillOpacity,
                willChange: "opacity",
              }}
              initial={{ opacity: 0 }}
            />
          </>
        ) : (
          <>
            <img
              src="/aboutWT/left1.svg"
              alt="Left outline"
              loading="lazy"
              decoding="async"
              style={{
                position: "absolute",
                left: "2%",
                bottom: "2vh",
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
                bottom: "2vh",
                height: getResponsiveSize(600) + "px",
                zIndex: 4,
                opacity: leftFillOpacity,
                willChange: "opacity",
              }}
              initial={{ opacity: 0 }}
            />
            <img
              src="/aboutWT/right1.svg"
              alt="Right outline"
              loading="lazy"
              decoding="async"
              style={{
                position: "absolute",
                right: "2%",
                bottom: "2vh",
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
                bottom: "2vh",
                height: getResponsiveSize(500) + "px",
                zIndex: 4,
                opacity: rightFillOpacity,
                willChange: "opacity",
              }}
              initial={{ opacity: 0 }}
            />
          </>
        )}

        <motion.div
          style={{
            position: "absolute",
            top: isMobile ? "22%" : "20%",
            left: "50%",
            transform: "translateX(-50%)",
            minWidth: isMobile ? "90%" : isTablet ? "80%" : "40%",
            color: "white",
            zIndex: 5,
            textAlign: "center",
            padding: "0 20px",
            height: isMobile ? "auto" : "auto",
            maxHeight: isMobile ? "20vh" : "auto",
            opacity: textOpacity,
            willChange: "opacity",
          }}
          initial={{ opacity: 0 }}
        >
         <p
  className="font-Raleway"
  style={{
    fontSize: isMobile ? "0.9rem" : isTablet ? "1.1rem" : "1.2rem",
    lineHeight: isMobile ? 1.4 : 1.6,
    textAlign: isMobile || isTablet ? "center" : "left",
  }}
>
  A 36-hour adrenaline-fueled hackathon. Celebrating the unstoppable force of female coders as they innovate,
  collaborate, and push the limits of technology. A space to create, compete, and inspire the future of tech.
</p>
        </motion.div>
      </div>
    </div>
  )
}

export default AboutSection

