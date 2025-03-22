import React from "react"
import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"

export default function SponsorsSection() {
  const targetRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"],
  })

  const rotate = useTransform(scrollYProgress, [0, 1], ["0deg", "360deg"])

  // Sponsor data with exact paths from original code
  const sponsors = [
    {
      name: "Devfolio",
      cardBg: "../../spons/devfolio-card.svg",
      logo: "../../spons/devfolio.svg",
      rotation: -3,
      hoverRotation: 3,
      pinPosition: { left: "20px", top: "-15px" },
    },
    {
      name: "Polygon",
      cardBg: "../../spons/polygon-card.svg",
      logo: "../../spons/polygon.svg",
      rotation: 10,
      hoverRotation: -5,
      pinPosition: { left: "10px", top: "-8px", rotate: "-20deg" },
    },
    {
      name: "ETHIndia",
      cardBg: "../../spons/ethindia-card.svg",
      logo: "../../spons/ethindia.svg",
      rotation: 0,
      hoverRotation: 5,
      pinPosition: { left: "14px", top: "-10px" },
    },
  ]

  return (
    <div className="relative bg-transparent z-10">
      <section ref={targetRef} className="relative h-[300vh]">
        {/* Background gradients */}
        <div className="absolute top-0 left-0 h-full w-full overflow-hidden">
          <div
            className="absolute -bottom-60 -left-10 w-[200px] h-[300px] rounded-[703px] bg-[rgba(101,158,162,0.60)] -z-10"
            style={{ filter: "blur(120px)" }}
          />
          <div
            className="absolute -bottom-36 right-0 w-[300px] h-[300px] rounded-[521px] border-[19px] border-[rgba(204,241,147,0.60)] bg-[rgba(204,176,193,0.40)] -z-10"
            style={{ filter: "blur(72.55px)" }}
          />
        </div>

        {/* Sticky container */}
        <div className="sticky top-0 flex h-screen items-center justify-center overflow-hidden">
          {/* Background grid */}
          <div className="absolute -bottom-40 h-[70vh] w-full justify-center z-[-10]">
            <div className="flex justify-center h-full w-full -z-10">
              <div
                className="w-full h-full bg-contain bg-no-repeat bg-center"
                style={{ backgroundImage: "url(../../spons/grid.svg)" }}
              />
            </div>
          </div>

          {/* Content container */}
          <div className="sticky top-0 flex flex-col justify-center h-full w-full items-center z-10">
            <div className="absolute top-30 flex flex-col justify-center items-center w-full">
              {/* Title */}
              <div className="flex flex-wrap gap-4 md:gap-10 justify-center m-10 items-center w-full">
                <h1 className="relative text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white">OUR</h1>
                <h1 className="relative text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-[#F3C3F0]">
                  SPONSORS
                  {/* Decorative SVG paths */}
                  <svg
                    viewBox="0 0 1007 270"
                    fill="none"
                    className="absolute -top-4 -left-3 -bottom-10 -right-5"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <motion.path
                      initial={{ pathLength: 0 }}
                      whileInView={{ pathLength: 1 }}
                      transition={{
                        delay: 0.5,
                        duration: 1,
                        ease: "easeInOut",
                      }}
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
                      transition={{
                        delay: 0.5,
                        duration: 1,
                        ease: "easeInOut",
                      }}
                      viewport={{ once: true }}
                      d="M359.397 21.7752C420.99 13.1977 482.6 7.40486 544.186 4.74983C692.608 -1.64432 846.115 3.45144 956.952 58.9082C972.917 66.8958 989.938 75.1255 998.905 86.8205C1015.07 107.903 993.153 130.877 963.122 145.968C909.223 173.05 802.514 199.112 745.541 210.53C649.635 229.754 512.227 247.445 415.608 256.331C366.296 260.865 316.971 264.016 267.878 265.977C199.651 268.699 136.827 270.433 75.5519 257.005C38.1841 248.817 19.4114 239.362 7.71159 216.291C-1.73124 197.673 1.58319 182.196 18.4041 162.844C54.0136 121.876 126.644 93.2389 189.732 72.9266C239.947 56.7595 301.214 43.304 354.209 34.0687C431.284 20.6354 420.129 26.0622 495.055 15.2126"
                      stroke="#FAC6F7"
                      strokeWidth="4"
                      strokeLinecap="round"
                    />
                  </svg>
                </h1>
              </div>

              {/* Sponsor Cards - Positioned from bottom */}
              <motion.div
                className="absolute w-full   flex justify-center items-center p-4 md:p-10 z-70"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <div className="flex flex-wrap gap-16 md:gap-20 lg:gap-24 justify-center w-full">
                  {sponsors.map((sponsor, index) => (
                    <div
                      key={sponsor.name}
                      className="relative w-[300px] sm:w-[340px] md:w-[22vw] lg:w-[20vw] h-[420px] sm:h-[460px] md:h-[65vh] lg:h-[70vh]"
                    >
                      {/* Pin */}
                      <div
                        className="pin absolute z-10 w-[4vw] h-[9vh] min-w-[30px] min-h-[40px] bg-contain bg-no-repeat"
                        style={{
                          backgroundImage: "url(../../spons/pin.png)",
                          left: sponsor.pinPosition.left,
                          top: sponsor.pinPosition.top,
                          transform: sponsor.pinPosition.rotate ? `rotate(${sponsor.pinPosition.rotate})` : "none",
                        }}
                      />

                      {/* Card container */}
                      <div className="flex w-full h-full justify-center">
                        {/* Card background */}
                        <div
                          className="relative w-full h-full bg-contain bg-no-repeat bg-center"
                          style={{ backgroundImage: `url(${sponsor.cardBg})` }}
                        >
                          {/* Card content (logo) */}
                          <motion.div
                            whileHover={{ rotate: sponsor.hoverRotation }}
                            transition={{ type: "spring", stiffness: 300 }}
                            className="absolute top-0 left-1/2 -translate-x-1/2 w-[85%] h-[85%] bg-contain bg-no-repeat bg-center"
                            style={{
                              backgroundImage: `url(${sponsor.logo})`,
                              transform: `translateY(-5%) rotate(${sponsor.rotation}deg)`,
                            }}
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

