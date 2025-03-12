import React from "react"
import { useRef, useState, useEffect } from "react"
import { motion, useTransform, useScroll } from "framer-motion"

export default function SponsorsSection() {
  const targetRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"],
  })

  const rotate = useTransform(scrollYProgress, [0, 1], ["0deg", "360deg"])
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    checkIfMobile()
    window.addEventListener("resize", checkIfMobile)

    return () => {
      window.removeEventListener("resize", checkIfMobile)
    }
  }, [])

  return (
    <div className="relative bg-transparent z-10">
      {/* Use completely different section structure based on mobile/desktop */}
      {isMobile ? (
        // MOBILE LAYOUT - Simple, conventional, no sticky positioning
        <div className="w-full overflow-x-hidden">
          {/* Background gradients */}
          <div className="absolute top-0 left-0 w-full overflow-hidden">
            <div
              className="absolute -bottom-60 -left-1 w-[200px] h-[300px] rounded-[703px] bg-[rgba(101,158,162,0.60)] -z-10"
              style={{ filter: "blur(120px)" }}
            />
            <div
              className="absolute -bottom-36 right-0 w-[300px] h-[300px] rounded-[521px] border-[19px] border-[rgba(204,241,147,0.60)] bg-[rgba(204,176,193,0.40)] -z-10"
              style={{ filter: "blur(72.55px)" }}
            />
          </div>

          {/* Mobile Title */}
          <div className="w-full pt-16 pb-8">
            <div className="flex flex-wrap gap-4 justify-center items-center">
              <h1 className="text-4xl font-bold text-white">OUR</h1>
              <h1 className="text-4xl font-bold text-[#F3C3F0] relative">
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
          </div>

          {/* Mobile Cards - One per row, stacked vertically */}
          <div className="w-full pb-20">
            {/* Card 1 */}
            <div className="mb-16 mx-auto w-[250px]">
              <div className="relative h-[400px]">
                <div className="absolute inset-0 bg-[url('/placeholder.svg?height=400&width=200')] bg-contain bg-no-repeat bg-center"></div>
                <div className="absolute left-1/2 -translate-x-1/2 -top-4 bg-[url('/placeholder.svg?height=50&width=25')] bg-contain bg-no-repeat h-[40px] w-[20px] z-10"></div>
                <div className="absolute left-1/2 -translate-x-1/2 top-10 -rotate-3 bg-[url('/placeholder.svg?height=300&width=150')] bg-contain bg-no-repeat h-[300px] w-[200px]"></div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="mb-16 mx-auto w-[250px]">
              <div className="relative h-[400px]">
                <div className="absolute inset-0 bg-[url('/placeholder.svg?height=400&width=200')] bg-contain bg-no-repeat bg-center"></div>
                <div className="absolute left-1/2 -translate-x-1/2 -top-4 rotate-[-20deg] bg-[url('/placeholder.svg?height=50&width=25')] bg-contain bg-no-repeat h-[40px] w-[20px] z-10"></div>
                <div className="absolute left-1/2 -translate-x-1/2 top-10 rotate-10 bg-[url('/placeholder.svg?height=300&width=150')] bg-contain bg-no-repeat h-[300px] w-[200px]"></div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="mb-16 mx-auto w-[250px]">
              <div className="relative h-[400px]">
                <div className="absolute inset-0 bg-[url('/placeholder.svg?height=400&width=200')] bg-contain bg-no-repeat bg-center"></div>
                <div className="absolute left-1/2 -translate-x-1/2 -top-4 bg-[url('/placeholder.svg?height=50&width=25')] bg-contain bg-no-repeat h-[40px] w-[20px] z-10"></div>
                <div className="absolute left-1/2 -translate-x-1/2 top-10 bg-[url('/placeholder.svg?height=300&width=150')] bg-contain bg-no-repeat h-[300px] w-[200px]"></div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        // DESKTOP LAYOUT - with sticky positioning and scroll effects
        <section ref={targetRef} className="relative h-[300vh]">
          {/* Background gradients */}
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

          {/* Main content container */}
          <div className="sticky top-0 flex h-screen items-center justify-center overflow-hidden">
            {/* Grid background */}
            <div className="absolute -bottom-40 h-[70vh] w-full justify-center z-[-10]">
              <div className="flex justify-center h-full w-full -z-10">
                <div className="bg-[url('/placeholder.svg?height=800&width=800')] bg-contain bg-no-repeat h-full w-4/5 z-0" />
              </div>
            </div>

            {/* Content wrapper */}
            <div className="sticky top-0 flex-col justify-center w-full items-center z-10">
              {/* Heading section */}
              <div className="absolute top-30 flex-col justify-center items-center w-full">
                <div className="flex flex-wrap gap-10 justify-center m-10 items-center w-full">
                  <h1 className="relative text-6xl font-heading md:text-7xl lg:text-8xl font-bold text-white">OUR</h1>
                  <h1 className="relative text-6xl font-heading md:text-7xl lg:text-8xl font-bold text-[#F3C3F0]">
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

                {/* Desktop cards layout - row with sticky behavior */}
                <div className="relative flex h-fit w-full justify-center items-center p-10 z-70">
                  <motion.div className="sticky top-0 flex gap-0 h-fit w-[80vw] justify-evenly z-10">
                    {/* Card 1 - Devfolio */}
                    <div className="relative w-fit h-fit justify-center">
                      <div className="bg-[url('/placeholder.svg?height=400&width=200')] bg-contain bg-no-repeat h-[60vh] w-[18vw]">
                        <div className="absolute left-20 -top-4 z-10 bg-[url('/placeholder.svg?height=50&width=25')] bg-contain bg-no-repeat h-[9vh] w-[4vw]"></div>
                        <div className="flex w-full h-full justify-center">
                          <motion.div
                            whileHover={{ rotate: 3 }}
                            className="absolute -top-5 justify-center -rotate-3 bg-[url('/placeholder.svg?height=300&width=150')] bg-contain bg-no-repeat h-[50vh] w-[15.5vw]"
                          ></motion.div>
                        </div>
                      </div>
                    </div>

                    {/* Card 2 - Polygon */}
                    <div className="relative w-fit h-fit justify-center">
                      <div className="bg-[url('/placeholder.svg?height=400&width=200')] bg-contain bg-no-repeat h-[70vh] w-[18vw]">
                        <div className="absolute left-10 -top-8 z-10 -rotate-20 bg-[url('/placeholder.svg?height=50&width=25')] bg-contain bg-no-repeat h-[9vh] w-[4vw]"></div>
                        <div className="flex w-full h-full justify-center">
                          <motion.div
                            whileHover={{ rotate: -5 }}
                            className="absolute -top-12 justify-center rotate-10 bg-[url('/placeholder.svg?height=300&width=150')] bg-contain bg-no-repeat h-[50vh] w-[16vw]"
                          ></motion.div>
                        </div>
                      </div>
                    </div>

                    {/* Card 3 - ETHIndia */}
                    <div className="relative w-fit h-fit justify-center">
                      <div className="bg-[url('/placeholder.svg?height=400&width=200')] bg-contain bg-no-repeat h-[70vh] w-[18vw]">
                        <div className="absolute left-14 -top-10 z-10 bg-[url('/placeholder.svg?height=50&width=25')] bg-contain bg-no-repeat h-[9vh] w-[4vw]"></div>
                        <div className="flex w-full h-full justify-center z-10">
                          <motion.div
                            whileHover={{ rotate: 5 }}
                            className="absolute -top-5 justify-center bg-[url('/placeholder.svg?height=300&width=150')] bg-contain bg-no-repeat h-[50vh] w-[14vw]"
                          ></motion.div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  )
}

