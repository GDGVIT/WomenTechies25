import React, { useState } from "react"
import { useRef } from "react"
import Accordion from "./Accordion"
import AtomIcon from "./AtomIcon"
import DiamondShapes from "./DiamondShapes"
import HighlightText from "./HighlightText"

const FaqSection: React.FC = () => {
  const faqRef = useRef<HTMLDivElement>(null)
  const highlightRef = useRef<HTMLDivElement>(null)
  const isLaptop = useState(false)

  if(typeof window !== "undefined"){
    window.addEventListener("resize", () => {
      if (window.innerWidth > 1367) {
        isLaptop[1](true)
      } else {
        isLaptop[1](false)
      }
    }
  )
  }
    

  const faqItems = [
    {
      question: "DO I NEED TO PAY TO REGISTER FOR THE HACK?",
      answer:
        "No, registration for the hackathon is completely free. We believe in making technology accessible to everyone.",
    },
    {
      question: "WHAT ARE THE TEAM REQUIREMENTS?",
      answer: "Teams can consist of 1-4 members. All team members should be registered individually on our platform.",
    },
    {
      question: "DO I NEED TO HAVE ANY SPECIFIC QUALIFICATIONS TO PARTICIPATE?",
      answer:
        "No specific qualifications are required. Whether you're a beginner or an expert, everyone is welcome to participate and learn.",
    },
    {
      question: "I AM UNABLE TO FIND A TEAM. WHAT SHOULD I DO?",
      answer:
        "Don't worry! We have a team formation event at the beginning of the hackathon where you can meet other participants and form teams.",
    },
    {
      question: "ARE THERE ANY RESTRICTIONS ON USING SEVERAL PRE-BUILT LIBRARIES?",
      answer:
        "You're free to use pre-built libraries and frameworks. However, make sure to properly attribute them in your project submission.",
    },
  ]

  return (
    <div
      className="relative min-h-screen bg-background text-white px-8 py-24 overflow-hidden"
      ref={faqRef}
      // style={{
      //   background: "linear-gradient(to bottom right, #0a1a1c, #000000)",
      // }}
    >
      {/* Background shapes */}
      <div
        className="absolute -top-6 -left-1  0 w-[200px] h-[300px] rounded-[703px] bg-[rgba(101,158,162,0.60)] -z-10"
        style={{ filter: "blur(120px)" }}
      />

      <div
        className="absolute -top-32 right-0 w-[300px] h-[300px] rounded-[521px] border-[19px] border-[rgba(204,241,147,0.60)] bg-[rgba(204,176,193,0.40)] -z-10"
        style={{ filter: "blur(72.55px)" }}
      />

      <div
        className="absolute -bottom-32 -right-32 w-[300px] h-[400px] rounded-[276px] bg-[rgba(101,158,162,0.60)] -z-10"
        style={{ filter: "blur(100px)" }}
      />

      <div
        className="absolute -bottom-32 -left-32 w-[300px] h-[400px] rounded-full bg-[rgba(101,158,162,0.60)] -z-10"
        style={{ filter: "blur(100px)" }}
      />
    {isLaptop[0] && <DiamondShapes />}
      {/* <DiamondShapes /> */}
      <AtomIcon />

      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col items-center text-center mb-20">
        <span className=" absolute top-10 left-10 text-[12px] md:text-lg lg:text-xl font-Raleway text-left w-full max-w-[300px]  lg:max-w-[400px]">
  WE KNOW YOU HAVE QUESTIONS. WE PROBABLY HAVE THE ANSWERS. MAYBE.
</span>


          <div className="relative w-full flex justify-center">
            <h1 className="text-5xl  xl:text-7xl font-bold font-heading">
              <HighlightText text="FAQs" />
            </h1>
          </div>
        </div>

        {/* noise */}
        <div
          className="absolute inset-0 pointer-events-none opacity-20 mix-blend-overlay -z-5"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 250 250' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
            backgroundSize: "150px",
          }}
        />

        <Accordion items={faqItems} highlightRef={highlightRef} />
      </div>
    </div>
  )
}

export default FaqSection

