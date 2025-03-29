"use client"

import { useRef } from "react"
import { useScroll, useTransform, motion } from "framer-motion"

const Sponsors = () => {
  return (
    <div className="relative bg-transparent z-10">
      <Content />
    </div>
  )
}

function Content() {
  const TargetRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: TargetRef,
    offset: ["start start", "end end"],
  })

  const rotate = useTransform(scrollYProgress, [0, 1], ["0deg", "360deg"])

  // Check if we're on mobile
  const isMobile = () => {
    if (typeof window !== "undefined") {
      return window.innerWidth < 768
    }
    return false
  }

  return (
    <section ref={TargetRef} className="relative h-[100vh] md:h-[300vh]">
      {/* Background elements - keep exactly as original */}
      <div className="absolute top-0 left-0 h-full w-full overflow-hidden">
        <div
          className="absolute -bottom-60 -left-1 w-[200px] h-[300px] rounded-[703px] bg-[rgba(101,158,162,0.60)] -z-10"
          style={{ filter: "blur(120px)" }}
        />
        <div
          className="absolute -bottom-36 right-0 w-[300px] h-[300px] rounded-[521px] border-[19px] border-[rgba(204,241,147,0.60)] bg-[rgba(204,176,193,0.40)] -z-10"
          style={{ filter: "blur(72.55px)" }}
        />
      </div>

      {/* Main content container - conditional rendering for mobile vs desktop */}
      {isMobile() ? (
        // Mobile view - not sticky, 100vh height
        <div className="flex h-full w-full items-center justify-center overflow-hidden">
          <div className="flex-col justify-center h-full w-full items-center z-10">
            <div className="flex-col justify-center w-full items-center pt-20 ">
              {/* Title section */}
              <div className="flex gap-2 justify-center mb-10 items-center w-full">
                <h1 className="text-3xl font-pixel text-white">OUR</h1>
                <h1 className="text-3xl font-pixel text-[#F3C3F0] relative">
                  SPONSORS
                  <svg
                    viewBox="0 0 1007 270"
                    fill="none"
                    className="absolute -top-2 -left-3 -bottom-10 -right-5"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <motion.path
                      initial={{ pathLength: 0 }}
                      whileInView={{ pathLength: 1 }}
                      transition={{ delay: 0.5, duration: 1, ease: "easeInOut" }}
                      viewport={{ once: true }}
                      d="M359.397 21.7752C420.99 13.1977 482.6 7.40486 544.186 4.74983C692.608 -1.64432 846.115 3.45144 956.952 58.9082C972.917 66.8958 989.938 75.1255 998.905 86.8205C1015.07 107.903 993.153 130.877 963.122 145.968C909.223 173.05 802.514 199.112 745.541 210.53C649.635 229.754 512.227 247.445 415.608 256.331C366.296 260.865 316.971 264.016 267.878 265.977C199.651 268.699 136.827 270.433 75.5519 257.005C38.1841 248.817 19.4114 239.362 7.71159 216.291C-1.73124 197.673 1.58319 182.196 18.4041 162.844C54.0136 121.876 126.644 93.2389 189.732 72.9266C239.947 56.7595 301.214 43.304 354.209 34.0687C431.284 20.6354 420.129 26.0622 495.055 15.2126"
                      stroke="#FAC6F7"
                      strokeWidth="4"
                      strokeLinecap="round"
                    />
                  </svg>
                  <svg
                    viewBox="0 0 1007 270"
                    fill="none"
                    className="absolute -top-2 -left-2 -bottom-10 -right-5"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <motion.path
                      initial={{ pathLength: 0 }}
                      whileInView={{ pathLength: 1 }}
                      transition={{ delay: 0.5, duration: 1, ease: "easeInOut" }}
                      viewport={{ once: true }}
                      d="M359.397 21.7752C420.99 13.1977 482.6 7.40486 544.186 4.74983C692.608 -1.64432 846.115 3.45144 956.952 58.9082C972.917 66.8958 989.938 75.1255 998.905 86.8205C1015.07 107.903 993.153 130.877 963.122 145.968C909.223 173.05 802.514 199.112 745.541 210.53C649.635 229.754 512.227 247.445 415.608 256.331C366.296 260.865 316.971 264.016 267.878 265.977C199.651 268.699 136.827 270.433 75.5519 257.005C38.1841 248.817 19.4114 239.362 7.71159 216.291C-1.73124 197.673 1.58319 182.196 18.4041 162.844C54.0136 121.876 126.644 93.2389 189.732 72.9266C239.947 56.7595 301.214 43.304 354.209 34.0687C431.284 20.6354 420.129 26.0622 495.055 15.2126"
                      stroke="#FAC6F7"
                      strokeWidth="4"
                      strokeLinecap="round"
                    />
                  </svg>
                </h1>
              </div>

              {/* Cards section for mobile */}
              <div className="flex flex-col items-center gap-20 px-4">
                {/* Devfolio Card */}
                <div
                  className="relative"
                  style={{
                    backgroundImage: "url(../../spons/devfolio-card.svg)",
                    backgroundSize: "contain",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                    height: "25vh",
                    width: "80vw",
                    maxWidth: "300px",
                  }}
                >
                  <div
                    className="relative left-1/3 -top-4 z-10"
                    style={{
                      backgroundImage: "url(../../spons/pin.png)",
                      backgroundSize: "contain",
                      backgroundRepeat: "no-repeat",
                      height: "5vh",
                      width: "10vw",
                    }}
                  ></div>
                  <div className="flex w-full h-full justify-center items-center">
                    <motion.div
                      whileHover={{ rotate: 3 }}
                      className="relative -top-15 justify-center items-center -rotate-3"
                      style={{
                        width: "40%",
                        height: "auto",
                      }}
                    >
                      <img src="../../spons/devfolio.svg" alt="DEVFOLIO LOGO" className="w-full h-auto" />
                    </motion.div>
                  </div>
                </div>

                {/* ETHIndia Card */}
                <div
                  className="relative"
                  style={{
                    backgroundImage: "url(../../spons/ethindia-card.svg)",
                    backgroundSize: "contain",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                    height: "25vh",
                    width: "80vw",
                    maxWidth: "300px",
                  }}
                >
                  <div
                    className="absolute left-1/3 -top-4 z-10"
                    style={{
                      backgroundImage: "url(../../spons/pin.png)",
                      backgroundSize: "contain",
                      backgroundRepeat: "no-repeat",
                      height: "5vh",
                      width: "10vw",
                    }}
                  ></div>
                  <div className="flex w-full h-full justify-center items-center z-10">
                    <motion.div
                      whileHover={{ rotate: 5 }}
                      className="relative -top-5 justify-center items-center"
                      style={{
                        width: "36%",
                        height: "auto",
                      }}
                    >
                      <img src="../../spons/ethindia.svg" alt="ETHINDIA LOGO" className="w-full h-auto" />
                    </motion.div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        // Desktop view - EXACTLY as original
        <div className="sticky top-0 flex h-[100vh] align-center items-center justify-center overflow-hidden">
          <div
            className="absolute -bottom-40 h-[70vh] w-full 
           justify-center z-[-10]"
          >
            <div className="flex justify-center h-full w-full -z-10">
              <div
                className="grid"
                style={{
                  backgroundImage: "url(../../spons/grid.svg)",
                  backgroundSize: "contain",
                  backgroundRepeat: "no-repeat",
                  height: "100%",
                  width: "80%",
                  zIndex: 0,
                  justifyContent: "center",
                  justifyItems: "center",
                }}
              />
            </div>
          </div>
          <div className="sticky top-0 flex-col justify-center h-full w-full align-center items-center z-10">
            <div className="absolute top-24 flex-col justify-center align-center w-full items-center">
              <div className="flex gap-10 justify-center m-10 align-center items-center w-full h-full">
                <h1 className="relative text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-Raleway font-semibold justify-center text-white">
                  OUR
                </h1>
                <h1 className="relative text-4xl sm:text-6xl font-heading md:text-7xl lg:text-8xl  text-[#F3C3F0] justify-center">
                  SPONSORS
                  <svg
                    viewBox="0 0 1007 270"
                    fill="none"
                    className="absolute -top-4 -left-3 -bottom-10 -right-5"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <motion.path
                      initial={{ pathLength: 0 }}
                      whileInView={{ pathLength: 1 }}
                      transition={{ delay: 0.5, duration: 1, ease: "easeInOut" }}
                      viewport={{ once: true }}
                      d="M359.397 21.7752C420.99 13.1977 482.6 7.40486 544.186 4.74983C692.608 -1.64432 846.115 3.45144 956.952 58.9082C972.917 66.8958 989.938 75.1255 998.905 86.8205C1015.07 107.903 993.153 130.877 963.122 145.968C909.223 173.05 802.514 199.112 745.541 210.53C649.635 229.754 512.227 247.445 415.608 256.331C366.296 260.865 316.971 264.016 267.878 265.977C199.651 268.699 136.827 270.433 75.5519 257.005C38.1841 248.817 19.4114 239.362 7.71159 216.291C-1.73124 197.673 1.58319 182.196 18.4041 162.844C54.0136 121.876 126.644 93.2389 189.732 72.9266C239.947 56.7595 301.214 43.304 354.209 34.0687C431.284 20.6354 420.129 26.0622 495.055 15.2126"
                      stroke="#FAC6F7"
                      strokeWidth="4"
                      strokeLinecap="round"
                    />
                  </svg>
                  <svg
                    viewBox="0 0 1007 270"
                    fill="none"
                    className="absolute -top-5 -left-2 -bottom-10 -right-5"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <motion.path
                      initial={{ pathLength: 0 }}
                      whileInView={{ pathLength: 1 }}
                      transition={{ delay: 0.5, duration: 1, ease: "easeInOut" }}
                      viewport={{ once: true }}
                      d="M359.397 21.7752C420.99 13.1977 482.6 7.40486 544.186 4.74983C692.608 -1.64432 846.115 3.45144 956.952 58.9082C972.917 66.8958 989.938 75.1255 998.905 86.8205C1015.07 107.903 993.153 130.877 963.122 145.968C909.223 173.05 802.514 199.112 745.541 210.53C649.635 229.754 512.227 247.445 415.608 256.331C366.296 260.865 316.971 264.016 267.878 265.977C199.651 268.699 136.827 270.433 75.5519 257.005C38.1841 248.817 19.4114 239.362 7.71159 216.291C-1.73124 197.673 1.58319 182.196 18.4041 162.844C54.0136 121.876 126.644 93.2389 189.732 72.9266C239.947 56.7595 301.214 43.304 354.209 34.0687C431.284 20.6354 420.129 26.0622 495.055 15.2126"
                      stroke="#FAC6F7"
                      strokeWidth="4"
                      strokeLinecap="round"
                    />
                  </svg>
                </h1>
              </div>
              <div className="relative flex h-fit w-full justify-center items-center p-[5vh] z-70">
                {/* Card Component - EXACTLY as original */}
                <motion.div className="sticky top-0 flex gap-20 h-fit w-[50vw] m-8 justify-evenly z-10">
                  <div
                    className="card1 relative w-fit h-fit justify-center"
                    style={{
                      backgroundImage: "url(../../spons/pega-card.png)",
                      backgroundSize: "contain",
                      backgroundRepeat: "no-repeat",
                      height: "60vh",
                      width: "18vw",
                      zIndex: 10,
                    }}
                  >
                    <div
                      className="pin absolute left-20 -top-9 z-10"
                      style={{
                        backgroundImage: "url(../../spons/pin.png)",
                        backgroundSize: "contain",
                        backgroundRepeat: "no-repeat",
                        height: "9vh",
                        width: "4vw",
                      }}
                    ></div>
                    <div className="flex w-full h-full justify-center">
                      <motion.div
                        whileHover={{ rotate: -10 }}
                        className="inner-card1 absolute -top-5 justify-center -rotate-3"
                        style={{
                          alignItems: "center",
                          justifyContent: "center",
                          height: "50vh",
                          width: "15.5vw",
                          rotate: -15,
                        }}
                      >
                        <img src="../../spons/pega.png" alt="DEVFOLIO LOGO" />
                      </motion.div>
                    </div>
                  </div>

                  <div
                    className="card3 relative w-fit h-fit justify-center"
                    style={{
                      backgroundImage: "url(../../spons/xyz-card.png)",
                      backgroundSize: "contain",
                      backgroundRepeat: "no-repeat",
                      height: "70vh",
                      width: "18vw",
                    }}
                  >
                    <div
                      className="pin absolute left-14 -top-8 z-10"
                      style={{
                        backgroundImage: "url(../../spons/pin.png)",
                        backgroundSize: "contain",
                        backgroundRepeat: "no-repeat",
                        height: "9vh",
                        width: "4vw",
                      }}
                    ></div>
                    <div className="flex w-full h-full justify-center z-10">
                      <motion.div
                        whileHover={{ rotate: 5 }}
                        className="inner-card3 absolute -top- justify-center"
                        style={{
                          height: "50vh",
                          width: "14vw",
                        }}
                      >
                        <img src="../../spons/xyz.png" alt="ETHINDIA LOGO" />
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

export default Sponsors
