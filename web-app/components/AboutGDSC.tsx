import React from "react";
import { useRef } from "react";
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
          <h1 className="font-['VCR_OSD_Mono'] text-[#F3C3F0] text-6xl md:text-7xl lg:text-8xl">ABOUT</h1>
          <HighlightText
            text="GDSC-VIT"
            className="font-['VCR_OSD_Mono'] text-[#F3C3F0]  text-6xl md:text-7xl lg:text-8xl"
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

function BackgroundElements() {
  return (
    <>
      <div className="absolute bottom-0 w-full h-[32vw] z-[1] opacity-70">
        <div className="w-full h-full bg-[url('/aboutgdsc/grid.svg')] bg-contain bg-no-repeat bg-bottom"></div>
      </div>

      {/* Left cloud */}
      <div className="absolute bottom-[30vh] w-[100vw] h-[100vh] z-[7]">
        <div className="absolute top-0 left-[-150px] w-[600px] h-full bg-[url('/aboutgdsc/cloud_left.jpg')] bg-contain bg-no-repeat opacity-60"></div>
      </div>
      <div className="absolute z-[3] w-[100vw] h-[100vh]">
        <div className="absolute top-[20px] left-[20px] w-[100px] h-[100px] bg-[url('/aboutgdsc/Ellipse-31.png')] bg-contain bg-no-repeat"></div>
      </div>

      {/* Right cloud */}
      <div className="absolute top-0 z-[4] w-[100vw] h-[30vh]">
        <div className="absolute top-0 right-[-100px] w-[500px] h-[400px] bg-[url('/aboutgdsc/cloud_right.jpg')] bg-contain bg-no-repeat opacity-20"></div>
      </div>

      <div className="hidden lg:block absolute top-64 z-[5] w-[100vw] h-[100vh]">
        <div className="absolute w-[100px] h-[100px] bg-[url('/aboutgdsc/square_left.jpg')] bg-contain bg-no-repeat"></div>
      </div>

      <div className="absolute bottom-28 right-40 z-[6] w-fit h-fit">
        <div className="w-[30px] h-[30px] bg-[url('/aboutgdsc/rects.png')] bg-contain bg-no-repeat"></div>
      </div>

      <div className=" absolute top-58 right-0 z-[6] w-fit h-fit">
        <div className="absolute top-[10%] right-0 w-[50px] h-[50px] bg-[url('/aboutgdsc/diamonds_right.png')] bg-contain bg-no-repeat"></div>
      </div>

      <div className="absolute top-0 right-18 z-[2] w-30 h-30">
        <div className="w-[150px] h-[200px] bg-[url('/aboutgdsc/star.svg')] bg-contain bg-no-repeat"></div>
      </div>

      <div className="absolute top-30 right-0 z-[2] w-30 h-30">
        <div className="w-[150px] h-[200px] bg-[url('/aboutgdsc/circle.svg')] bg-contain bg-no-repeat"></div>
      </div>

      <div className="hidden lg:block absolute top-1/2 left-[10%] z-[2] w-fit h-fit">
        <div className="w-[10px] h-[50px] bg-[url('/aboutgdsc/yellowdiamonds.svg')] bg-contain bg-no-repeat"></div>
      </div>
      <div className="hidden lg:block absolute top-1/2 right-[10%] z-[2] w-fit h-fit">
        <div className="w-[10px] h-[50px] bg-[url('/aboutgdsc/pinkdiamonds.svg')] bg-contain bg-no-repeat"></div>
      </div>
    </>
  );
}