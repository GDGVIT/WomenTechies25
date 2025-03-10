import React from 'react';
import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";
import './card.css'




const Card = () => {
    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
    });

    const rotate = useTransform(scrollYProgress, [0, 1], ["0deg", "360deg"]);

    return (
        // <motion.div
        //   whileHover={{ rotate: 20 }} // Rotates 20 degrees on hover
        //   transition={{ type: "spring", stiffness: 200 }} // Smooth animation
        //   style={{
        //     width: 100,
        //     height: 100,
        //     backgroundColor: "lightblue",
        //     display: "flex",
        //     alignItems: "center",
        //     justifyContent: "center",
        //     borderRadius: 10,
        //   }}
        // >
        //   Hover Me
        // </motion.div>
        
        <div className='sticky top-0 flex gap-0 h-fit w-[80vw] m-8 justify-evenly '>
                
             
                {/* <div className='flex top-0 gap-10   border-2 h-fit w-fit align-center justify-center'> */}
                
                <div className='card1 flex  justify-center'>
                <motion.div 
                whileHover={{ rotate: 5 }}
                className='inner-card1 flex  justify-center'></motion.div>
                </div>
                <div className='card2 flex  w-fit  justify-center'>
                <motion.div 
                whileHover={{ rotate: -5 }}
                className='inner-card2 flex  justify-center'></motion.div>
                </div>
                <div className='card3 flex  w-fit justify-center'>
                <motion.div 
                whileHover={{ rotate: 10 }}
                className='inner-card3 flex  justify-center'></motion.div>
                </div>
               

                
            {/* </div> */}

            
        </div>
        

      );
}

export default Card;