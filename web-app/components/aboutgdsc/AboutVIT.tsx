import React from 'react';
import './AboutVIT.css';
import Heading from './Heading.tsx';
import "./Body.css";
import { useScroll, useTransform, motion, useMotionValueEvent } from "framer-motion";
import { useRef, useState } from "react";
import Body from './Body.tsx';
import './Body.css';
import Images from './images.tsx';

const AboutVIT = () => {
  return (
    <div className="relative bg-neutral-800 z-10">
      

      <Content />

      
    </div>
  );
};

function Content() {
  const [activeClass, setActiveClass] = useState("body");

  const TargetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: TargetRef,
    offset: ["start start", "end end"]
  });

  const classIndex = useTransform(scrollYProgress, [0, 0.2, 0.4, 0.6, 0.8, 1], [0, 1, 2, 3, 4, 5]);

  const bodyClasses = ["body1", "body2", "body3", "body4", "body5"];

  const selectedClass = useTransform(classIndex, (index) => bodyClasses[Math.floor(index)]);

  useMotionValueEvent(scrollYProgress, "change", (value) => {
    setActiveClass(selectedClass.get());
    console.log(activeClass);
  });

  return (
    <section ref={TargetRef} className="relative h-[500vh]">
      <div className="sticky  top-0  h-screen w-full items-center justify-center overflow-hidden">
        <div className='flex-col z-19 content-center justify-center h-full w-full'>
          <center>
          <div className="flex h-full w-full justify-center align-center  ">
            
            <Heading />
          </div>
          </center>
      <div className='flex h-[50vh] w-full '>
          <div className='relative top-0 left-0 w-[20vw] h-full '>
            <div className='yellow'></div>
          </div>
  
          <motion.div
            className="flex w-full h-full justify-center "
            key={selectedClass.get()}
              initial={{ opacity: 0.5 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0.5 }}
              transition={{ duration: 1, ease: "easeInOut", }} // Made transition smoother
          >
            
            
              <Body className={"body "} />
                <Body className={`${activeClass}`} />
                <Images className={`${activeClass}`} />
             
            
                
              

              
            
          </motion.div>

          <div className='relative top-0 right-0 w-[20vw] h-full'>
            <div className='pink'></div>
          </div>

          
        </div>
        </div>
        <div className='absolute bottom-0 z-1 w-full h-full opacity-70'>
          <div className='grid'></div>
        </div>

        <div className='absolute-[50vw] bottom-[30vh] z-7 w-[100vw] h-[100vh]'>
          <div className='cloud_left'></div>
        </div>

        <div className='absolute z-3 w-[100vw] h-[100vh]'>
          <div className='ellipse'></div>
        </div>

        <div className='absolute top-0 z-4 w-[100vw] h-[30vh]'>
          <div className='cloud_right'></div>
        </div>

        <div className='absolute top-64 z-5 w-[100vw] h-[100vh]'>
          <div className='square'></div>
        </div>

        <div className='absolute bottom-28 right-40 z-6 w-fit h-fit'>
          <div className='rects'></div>
        </div>

        <div className='absolute top-58 right-0 z-6 w-fit h-fit'>
          <div className='comb'></div>
        </div>

        <div className='absolute top-0 right-18 z-2 w-30 h-30'>
          <div className='star'></div>
        </div>

        <div className='absolute top-30 right-0 z-2 w-30 h-30'>
          <div className='circle'></div>
        </div>
      </div>
    </section>
  );
}

export default AboutVIT;
