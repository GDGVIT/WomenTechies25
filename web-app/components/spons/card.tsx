import {
  motion,
  // useTransform, useScroll
} from "framer-motion";
// import { useRef } from "react";
import "./card.css";

const Card = () => {
  //   const targetRef = useRef(null);
  //   const { scrollYProgress } = useScroll({
  //     target: targetRef,
  //   });

  //   const rotate = useTransform(scrollYProgress, [0, 1], ["0deg", "360deg"]);

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

    <motion.div className="sticky top-0 flex gap-0 h-fit w-[80vw] m-8 justify-evenly z-10">
      {/* <div className='flex top-0 gap-10   border-2 h-fit w-fit align-center justify-center'> */}

      <div className="card1 relative w-fit h-fit justify-center ">
        <div className="pin absolute left-20 -top-15 z-10"></div>
        <div className="flex w-full h-full  justify-center">
          <motion.div
            whileHover={{ rotate: 3 }}
            className="inner-card1 absolute -top-5 justify-center -rotate-3"
          >
            <img src="../../spons/devfolio.svg" alt="DEVFOLIO LOGO" />
          </motion.div>
        </div>
      </div>
      {/* 
      <div className="card2 relative w-fit h-fit justify-center ">
        <div className="pin absolute left-10 -top-8 z-10 -rotate-20"></div>
        <div className="flex w-full h-full  justify-center">
          <motion.div
            whileHover={{ rotate: -5 }}
            className="inner-card2 absolute -top-12 justify-center rotate-10"
          >
            <img src="../../spons/polygon.svg" alt="POLYGON LOGO" />
          </motion.div>
        </div>
      </div> */}
      <div className="card3 relative w-fit h-fit justify-center ">
        <div className="pin absolute left-14 -top-10 z-10"></div>
        <div className="flex w-full h-full  justify-center z-10">
          <motion.div
            whileHover={{ rotate: 5 }}
            className="inner-card3 absolute -top- justify-center  "
          >
            <img src="../../spons/ethindia.svg" alt="ETHINDIA LOGO" />
          </motion.div>
        </div>
      </div>

      {/* </div> */}
    </motion.div>
  );
};

export default Card;
