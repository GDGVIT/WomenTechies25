import Card from "./card";
import React from "react";
import { useScroll, useTransform, motion, useMotionValueEvent } from "framer-motion";
import { useRef, useState } from "react";
import './gradient.css';


const  Spons=()=>{
    
        return (
            <div className="relative bg-[#191C1C] z-10">
              
        
              <Content />
        
              
            </div>
          );
      
}
function Content(){

    const TargetRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: TargetRef,
        offset: ["start start", "end end"]
      });
    
      
        
        const rotate = useTransform(scrollYProgress, [0, 1], ["0deg", "360deg"]);

      return (
        <section ref={TargetRef} className="relative h-[300vh]">
        <div className="absolute top-0 left-0 h-full w-full overflow-hidden">
                <div className="sticky top-0 h-full w-full">      
                        <div className=" gradient absolute top-0 right-[50vh] h-full w-full"></div>
                        <div className="gradient absolute top-[20vh] left-[60vw] h-full w-full"></div>
                </div> 
                <div
        className="absolute -bottom-60 -left-1  0 w-[200px] h-[300px] rounded-[703px] bg-[rgba(101,158,162,0.60)] -z-10"
        style={{ filter: "blur(120px)" }}
      />
      <div
        className="absolute -bottom-36 right-0 w-[300px] h-[300px] rounded-[521px] border-[19px] border-[rgba(204,241,147,0.60)] bg-[rgba(204,176,193,0.40)] -z-10"
        style={{ filter: "blur(72.55px)" }}
      />
                
        </div>   
        <div className="sticky top-0 flex h-[100vh] align-center items-center justify-center overflow-hidden "> 
            
            <div className="sticky top-0 flex-col justify-center h-full w-full align-center items-center ">
                <div className="absolute top-30 flex-col justify-center align-center w-full items-center">
                    <div className="flex gap-10 justify-center m-10 align-center items-center w-full h-full">
                        
                        <h1 className=" relative  text-4xl sm:text-6xl font-heading md:text-7xl lg:text-8xl font-pixel justify-center text-white">
                            OUR 
                            </h1>
                            <h1 className="relative  text-4xl sm:text-6xl font-heading md:text-7xl lg:text-8xl font-pixel text-[#F3C3F0] justify-center">
                            SPONSORS
                            <svg 
                            viewBox="0 0 1007 270" 
                            fill="none" 
                            className="absolute -top-10 -left-12 -bottom-10 -right-11"
                            xmlns="http://www.w3.org/2000/svg">
<motion.path 
initial={{pathLength:0}}
whileInView={{pathLength: 1}}
transition={{ delay: 0.5, duration: 1,
    ease:"easeInOut"
 }}  // Delay of 0.5s
  viewport={{ once: true }}
d="M359.397 21.7752C420.99 13.1977 482.6 7.40486 544.186 4.74983C692.608 -1.64432 846.115 3.45144 956.952 58.9082C972.917 66.8958 989.938 75.1255 998.905 86.8205C1015.07 107.903 993.153 130.877 963.122 145.968C909.223 173.05 802.514 199.112 745.541 210.53C649.635 229.754 512.227 247.445 415.608 256.331C366.296 260.865 316.971 264.016 267.878 265.977C199.651 268.699 136.827 270.433 75.5519 257.005C38.1841 248.817 19.4114 239.362 7.71159 216.291C-1.73124 197.673 1.58319 182.196 18.4041 162.844C54.0136 121.876 126.644 93.2389 189.732 72.9266C239.947 56.7595 301.214 43.304 354.209 34.0687C431.284 20.6354 420.129 26.0622 495.055 15.2126" stroke="#FAC6F7" stroke-width="4" stroke-linecap="round"/>
</svg>
<svg 
                            viewBox="0 0 1007 270" 
                            fill="none" 
                            className="absolute -top-10 -left-10 -bottom-10 -right-10"
                            xmlns="http://www.w3.org/2000/svg">
<motion.path 
initial={{pathLength:0}}
whileInView={{pathLength: 1}}
transition={{ delay: 0.5, duration: 1,
    ease:"easeInOut"
 }}  // Delay of 0.5s
  viewport={{ once: true }}
 d="M359.397 21.7752C420.99 13.1977 482.6 7.40486 544.186 4.74983C692.608 -1.64432 846.115 3.45144 956.952 58.9082C972.917 66.8958 989.938 75.1255 998.905 86.8205C1015.07 107.903 993.153 130.877 963.122 145.968C909.223 173.05 802.514 199.112 745.541 210.53C649.635 229.754 512.227 247.445 415.608 256.331C366.296 260.865 316.971 264.016 267.878 265.977C199.651 268.699 136.827 270.433 75.5519 257.005C38.1841 248.817 19.4114 239.362 7.71159 216.291C-1.73124 197.673 1.58319 182.196 18.4041 162.844C54.0136 121.876 126.644 93.2389 189.732 72.9266C239.947 56.7595 301.214 43.304 354.209 34.0687C431.284 20.6354 420.129 26.0622 495.055 15.2126" stroke="#FAC6F7" stroke-width="4" stroke-linecap="round"/>
</svg>


                        </h1>
                        
                        
                    </div>
                    <div className="relative flex h-fit w-full justify-center  items-center p-10"> 
                    <Card/>
                    </div> 
                    
                </div>
            </div>
        </div>
        

        </section>
            );

}


  
  
export default Spons;