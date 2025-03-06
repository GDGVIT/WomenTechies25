import './wheel.css'
import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";




const Wheels = () => {
    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
    });

    const rotate = useTransform(scrollYProgress, [0, 1], ["0deg", "360deg"]);

    return (
        <section className='flex h-24 w-24 items-center justify-items-center border-purple-500'>
            
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
    );
}

export default Wheels;