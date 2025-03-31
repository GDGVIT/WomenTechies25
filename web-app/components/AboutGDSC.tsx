import React from "react";
import { useRef } from "react";
import { useEffect, useState } from "react"
import { useSpring } from "framer-motion"
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import HighlightText from "./HighlightText";
export default function AboutGDSC() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Transform scroll progress to section indices (0-4)
  const activeSection = useTransform(
    scrollYProgress,
    [0, 0.15, 0.3, 0.45, 0.6,0.8],
    [0, 1, 2, 3, 4, 5]
  );

  return (
    <div ref={containerRef} className="relative h-[300vh]  w-full">
      <div className="sticky top-0 h-screen w-full overflow-hidden">

        <BackgroundElements />

        <div className="relative z-10 flex flex-col justify-center h-full w-full px-4">
      <div className="max-w-2xl mx-auto   w-full">
       
        <div className="mb-12 ">
          <h1 className="font-['VCR_OSD_Mono'] text-white text-6xl md:text-7xl lg:text-8xl">ABOUT</h1>
          <HighlightText
            text="GDSC-VIT"
            className="font-['VCR_OSD_Mono'] text-white  text-6xl md:text-7xl lg:text-8xl"
          />
        </div>
        <div className="text-xl md:text-2xl lg:text-3xl text-[#8080807d] text-left font-Raleway relative">
        <TextSection
            activeSection={activeSection}
            sectionIndex={0}
            regularText=""
emphasisText=""
            emphasisColor=""
            afterText=""
            
          />
          
          
          
          
          
          <TextSection
            activeSection={activeSection}
            sectionIndex={1}
            regularText=" "
            emphasisText="Fueled by curiosity and a bit of chaos,"
            emphasisColor="white"
            afterText=" "
          />

          <TextSection
            activeSection={activeSection}
            sectionIndex={2}
            regularText=" we are a "
            emphasisText="community of"
            emphasisColor="white"
            afterText=" "
          />

          <TextSection
            activeSection={activeSection}
            sectionIndex={2}
            regularText=""
            emphasisText="coders"
            emphasisColor="#78BFC2"
            afterText=" who love to push limits,"
            imageUrl="/aboutgdsc/body2.svg"
            imagePosition=" left-[30%] md:left-16 -top-3 md:top-3 mt-16"
          />

          <TextSection
            activeSection={activeSection}
            sectionIndex={3}
            regularText=""
            emphasisText="designers who"
            emphasisColor="white"
            afterText=" "
          />

          <TextSection
            activeSection={activeSection}
            sectionIndex={3}
            regularText=""
            emphasisText="bring ideas to life"
            emphasisColor="#FFE29D"
            afterText=", and"
            imageUrl="/aboutgdsc/body3.svg"
            imagePosition="left-4 md:left-[40%] top-36 -mt-8"
          />

          <TextSection
            activeSection={activeSection}
            sectionIndex={4}
            regularText=""
            emphasisText=" managers who turn"
            emphasisColor="white"
            afterText=" "
          />

          <TextSection
            activeSection={activeSection}
            sectionIndex={4}
            regularText=""
            emphasisText="vision into reality"
            emphasisColor="#F0C0ED"
            afterText="."
            imageUrl="/aboutgdsc/body4.svg"
            imagePosition="right-[45%] top-[70%] -mt-8"
          />

          <div className="mt-8">
            <TextSection
              activeSection={activeSection}
              sectionIndex={5}
              regularText="Through hackathons, sprints, and late-night builds,"
              emphasisText=""
              emphasisColor="white"
              afterText=" "
            />

            <TextSection
              activeSection={activeSection}
              sectionIndex={5}
              regularText=""
              emphasisText="we build crazy things that matter."
              emphasisColor="#F0C0ED"
              afterText=""
            />
          </div>
        </div>
      
    
          </div>
        </div>
      </div>
    </div>
  );
}

interface TextSectionProps {
  activeSection: MotionValue<number>;
  sectionIndex: number;
  regularText: string;
  emphasisText: string;
  emphasisColor: string;
  afterText: string;
  imageUrl?: string;
  imagePosition?: string;
}

function TextSection({
  activeSection,
  sectionIndex,
  regularText,
  emphasisText,
  emphasisColor,
  afterText,
  imageUrl,
  imagePosition = "right-0 top-0",
}: TextSectionProps) {
  const color = useTransform(activeSection, (value) =>
    Math.floor(value) === sectionIndex ? emphasisColor : "#8080807d"
  );

  const opacity = useTransform(activeSection, (value) =>
    Math.floor(value) === sectionIndex ? 1 : 0
  );

  return (
    <span className="inline">
      {regularText}
      <motion.span
        style={{
          color: color,
          fontStyle: emphasisText ? "italic" : "normal",
        }}
        className="font-['Raleway'] transition-colors duration-300"
      >
        {emphasisText}
      </motion.span>
      {afterText}

      {imageUrl && (
        <motion.div
          className={`absolute ${imagePosition} w-[180px] h-[400px] bg-contain bg-no-repeat z-20 pointer-events-none`}
          style={{
            backgroundImage: `url(${imageUrl})`,
            opacity: opacity,
          }}
        />
      )}
    </span>
  );
}

const BackgroundElements: React.FC = () => {
  
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0})
  
    const textboxX = useSpring(0, { stiffness: 50, damping: 30 })
    const textboxY = useSpring(0, { stiffness: 50, damping: 30 })
    useEffect(() => {

      const handleMouseMove = (e: MouseEvent) => {
        const x = e.clientX / window.innerWidth - 0.5
        const y = e.clientY / window.innerHeight - 0.5
        const x1 = e.clientX / window.innerWidth - 0.1
        const y1 = e.clientY / window.innerHeight - 0.1
  
        setMousePosition({ x, y })
  
        textboxX.set(x * 50)
        textboxY.set(y * 50)
        
      }
      
  
      window.addEventListener("mousemove", handleMouseMove)
      return () => window.removeEventListener("mousemove", handleMouseMove)
    }, [textboxX, textboxY])

  return (
    <>
    
    

      <div className="absolute bottom-0 w-full h-[32vw] z-[1] opacity-70">
        <div className="w-full h-full bg-[url('/aboutgdsc/grid.svg')] bg-contain bg-no-repeat bg-bottom"></div>
      </div>

      {/* Left cloud */}
      <motion.img
                  
                  alt="Text scrolls"
                  className="absolute top-0 left-[-150px] w-[600px] h-full bg-[url('/aboutgdsc/cloud_left.jpg')] bg-contain bg-no-repeat opacity-60"
                  style={{
                    x: textboxX,
                    y: textboxY,
                  }}
                />

<motion.img
                  src="/aboutgdsc/Ellipse-31.png"
                  alt="Text scrolls"
                  className="absolute top-[20px] left-[20px] w-[100px] h-[100px] bg-[url('/aboutgdsc/Ellipse-31.png')] bg-contain bg-no-repeat"
                  style={{
                    x: textboxX,
                    y: textboxY,
                  }}
                />

<motion.img
                  src="/aboutgdsc/Ellipse-31.png"
                  alt="Text scrolls"
                  className="absolute top-0 right-[-100px] w-[500px] h-[400px]  bg-contain bg-no-repeat opacity-20"
                  style={{
                    x: textboxX,
                    y: textboxY,
                  }}
                />
      
      
<motion.img
                  src="/aboutgdsc/square_left.jpg"
                  alt="Text scrolls"
                  className="hidden lg:block absolute top-64 z-[5] w-[100px] h-[100px]  bg-contain bg-no-repeat"
                  style={{
                    x: textboxX,
                    y: textboxY,
                  }}
                />

<motion.img
                  src="/aboutgdsc/rects.png"
                  alt="Text scrolls"
                  className="absolute bottom-28 right-40 z-[6] w-[30px] h-[30px] bg-contain bg-no-repeat"
                  style={{
                    x: textboxX,
                    y: textboxY,
                  }}
                />

      

<motion.img
                  src="/aboutgdsc/diamonds_right.png"
                  alt="Text scrolls"
                  className="absolute top-58 right-0 z-[6] w-[50px] h-[50px] bg-contain bg-no-repeat"
                  style={{
                    x: textboxX,
                    y: textboxY,
                  }}
                />

      
<motion.img
                  src="/aboutgdsc/star.svg"
                  alt="Text scrolls"
                  className="absolute top-0 right-18 z-[2] w-[150px] h-[200px] bg-contain bg-no-repeat"
                  style={{
                    x: textboxX,
                    y: textboxY,
                  }}
                />
      
      <motion.img
                  src="/aboutgdsc/circle.svg"
                  alt="Text scrolls"
                  className="absolute top-30 right-0 z-[2] w-[150px] h-[200px] bg-contain bg-no-repeat"
                  style={{
                    x: textboxX,
                    y: textboxY,
                  }}
                />
      <motion.img
                  src="/aboutgdsc/yellowdiamonds.svg"
                  alt="Text scrolls"
                  className="absolute top-1/2 left-[10%] z-[2] w-[10px] h-[50px] bg-contain bg-no-repeat"
                  style={{
                    x: textboxX,
                    y: textboxY,
                  }}
                />

      
<motion.img
                  src="/aboutgdsc/pinkdiamonds.svg"
                  alt="Text scrolls"
                  className="absolute hidden lg:block absolute top-1/2 right-[10%] z-[2] w-[10px] h-[50px] bg-contain bg-no-repeat"
                  style={{
                    x: textboxX,
                    y: textboxY,
                  }}
                />
      
      
    </>
  );
}