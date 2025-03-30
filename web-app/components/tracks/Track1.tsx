import React from "react";
import { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

export default function Track1() {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  return (
    <div
      ref={ref}
      className="relative overflow-hidden bg-background py-16 md:py-24 min-h-screen"
    >
      {/* Blur shape -  bottom right  */}
      <div
        className="absolute   -bottom-[24vh] -right-[12vw] w-[30vw] min-w-[400px] h-[40vw] max-w-[500px] max-h-[500px] opacity-35"
        style={{
          borderRadius: "447px",
          border: "19px solid #CCF193",
          background: "#CCB0C1",
          filter: "blur(72.55000305175781px)",
        }}
        aria-hidden="true"
      />

      {/* Blur shape -top left*/}
      <div
        className="absolute -top-[10vh] -left-[12vw] w-[40vw] min-w-[300px] h-[40vw] min-h-[400px] max-w-[500px] max-h-[500px] opacity-20"
        style={{
          borderRadius: "752px",
          background: "#659EA2",
          filter: "blur(100px)",
        }}
        aria-hidden="true"
      />

      <div className="container mx-auto px-4 z-9999">
        <div className="flex flex-col items-center gap-12 md:flex-row md:items-center md:justify-between md:mt-24 md:ml-24">
           
          <motion.div
            className="w-full md:w-1/2"
            initial="hidden"
            animate={controls}
            variants={{
              hidden: { x: -100, opacity: 0 },
              visible: {
                x: 0,
                opacity: 1,
                transition: {
                  duration: 0.8,
                  ease: "easeOut",
                },
              },
            }}
          >
            <div className="mb-4 w-28    border-t-4 border-white" />
            <h3 className="mb-4 text-lg md:text-xl font-bold text-white">
              TRACK #01
            </h3>
            <p className="mb-6 text-base md:text-lg lg:text-xl text-white max-w-xl leading-relaxed">
            Diversity and Inclusion

This track is about building tech that makes digital spaces more accessible and inclusive. Projects can focus on assistive tools or platforms that help bridge social and digital gaps. The aim is to create solutions that ensure equal participation and representation.
<br />
<br />  
This track is for anyone looking to create tools that make development faster and more efficient. Some examples could be plugins, extensions, or automation tools that improve coding, debugging, and workflow management.
            </p>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white xl:text-5xl">
              Dev Tools
            </h2>
          </motion.div>

          <motion.div
  className="w-full md:w-3/4" 
  initial="hidden"
  animate={controls}
  variants={{
    hidden: { x: 100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        delay: 0.2,
      },
    },
  }}
>
  <div className="relative mx-auto max-w-lg p-8">  
    
    <img
      src="/tracks/track1.svg"
      alt="Development Tools Illustration"
      width={900}  
      height={900}  
      loading="lazy"
      className="relative z-10 h-full w-full object-contain"
    />
  </div>
</motion.div>

        </div>
      </div>
    </div> 
  );
}
