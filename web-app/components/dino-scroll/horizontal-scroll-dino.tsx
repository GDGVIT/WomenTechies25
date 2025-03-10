import React from "react";
import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";
import Text from "./Text.tsx";
import Thugdino from "./Thugdino.tsx";
import Thugdinofront from "./Thugdinofront.tsx";
import './wheel.css'


const DinoScroll = () => {
    return (
        <div className="bg-background">
            
            <HorizontalScrollDino />
            
        </div>
    );
};

const HorizontalScrollDino = () => {
    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
    });

    const x = useTransform(scrollYProgress, [0, 1], ["20%", "-20%"]);
    const rotate = useTransform(scrollYProgress, [0, 1], ["0deg", "360deg"]);

    return (
        <section ref={targetRef} className="relative h-[300vh] bg-191C1C">
            <div className="sticky top-0 flex-col h-screen items-center justify-center overflow-hidden ">
                <div className="absolute left-12 top-55 h-fit w-fit z-10"> 
                                    <Thugdinofront/>
                </div>
                <div className="absolute left-12 top-55 h-fit w-fit z-0"> 
                                    <Thugdino/>
                </div>
                <div className="absolute left-10 top-74 h-fit w-fit"> 
                    
                    <section className='flex h-fit w-fit items-center justify-items-center '>
                    
                        <motion.div ref={targetRef} style={{ rotate }} className="flex h-fit w-fit items-center justify-items-center">
                        
                        <div className='wheel'></div>
                        </motion.div>
                        
                        <motion.div ref={targetRef} style={{ rotate }} className="flex  h-fit w-fit items-center justify-items-center">
                        <div className='wheel'></div>
                        </motion.div>
                        <motion.div ref={targetRef} style={{ rotate }} className="flex  h-fit w-fit items-center justify-items-center">
                        <div className='wheel'></div>
                        </motion.div>
                    
                    </section>
                </div>
                    <motion.div style={{ x }} className="absolute right-0 w-[100vw] h-full">
                    
                    <div className="absolute -left-580  h-full w-[300vw] flex items-center justify-center">
  <h1 className="text-center text-6xl sm:text-7xl md:text-8xl lg:text-10xl xl:text-[12rem] font-heading font-pixel text-white">
    DO CRAZY THINGS THAT MATTER
  </h1>
</div>


                        
                    </motion.div>
                    <div className="absolute right-10 bottom-74 h-fit w-fit"> 
                    <section className='flex h-fit w-fit items-center justify-items-center'>
                    
                        <motion.div ref={targetRef} style={{ rotate }} className="flex h-fit w-fit items-center justify-items-center z-5 scale-y-[-1]">
                        <div className='wheel'></div>
                        </motion.div>
                        <motion.div ref={targetRef} style={{ rotate }} className="flex  h-fit w-fit items-center justify-items-center z-5 scale-y-[-1]">
                        <div className='wheel'></div>
                        </motion.div>
                        <motion.div ref={targetRef} style={{ rotate }} className="flex  h-fit w-fit items-center justify-items-center z-5 scale-y-[-1]">
                        <div className='wheel'></div>
                        </motion.div>
                    
                    </section>
                </div>
                <div className="absolute right-12 bottom-55 h-fit w-fit z-10 scale-y-[-1] scale-x-[-1]"> 
                                    <Thugdinofront/>
                </div>
                <div className="absolute right-12 bottom-55 h-fit w-fit z-0 scale-y-[-1] scale-x-[-1]"> 
                                    <Thugdino/>
                </div>
            </div>
        </section>
    );
}


export default DinoScroll;