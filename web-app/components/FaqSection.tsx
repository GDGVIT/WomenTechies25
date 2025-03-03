"use client"

import React from "react"
import { useRef, useEffect } from "react"
import { motion, useAnimation } from "framer-motion"
import Accordion from "../components/accordion"
import PixelatedFaq from "../components/PixelatedFaq"
import AtomIcon from "../components/AtomIcon"
import DiamondShapes from "../components/DiamondShapes"

const FaqSection: React.FC = () => {
  const faqRef = useRef<HTMLDivElement>(null)
  const highlightRef = useRef<HTMLDivElement>(null)
  const highlighterControls = useAnimation()

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

  // Handle intersection observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          highlighterControls.start("visible")
        } else {
          highlighterControls.start("hidden")
        }
      },
      { threshold: 0.2 },
    )

    if (faqRef.current) {
      observer.observe(faqRef.current)
    }

    return () => {
      if (faqRef.current) {
        observer.unobserve(faqRef.current)
      }
    }
  }, [highlighterControls])

  // Pink highlighter animation variants
  const highlighterVariants = {
    hidden: {
      width: 0,
      opacity: 0,
    },
    visible: {
      width: "100%",
      opacity: 0.5,
      transition: {
        duration: 0.8,
        ease: "easeInOut",
      },
    },
  }

  return (
    <div
      className="relative min-h-screen bg-black text-white px-8 py-24 overflow-hidden"
      ref={faqRef}
      style={{
        background: "linear-gradient(to bottom right, #0a1a1c, #000000)",
      }}
    >
      {/* Background shapes */}
      <div
        className="absolute -top-64 -left-64 w-[600px] h-[600px] rounded-[703px] bg-[rgba(101,158,162,0.60)] -z-10"
        style={{ filter: "blur(120px)" }}
      />

      <div
        className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-[521px] border-[19px] border-[rgba(204,241,147,0.60)] bg-[rgba(204,176,193,0.40)] -z-10"
        style={{ filter: "blur(72.55px)" }}
      />

      <div
        className="absolute -bottom-32 -right-32 w-[400px] h-[400px] rounded-[276px] bg-[rgba(101,158,162,0.60)] -z-10"
        style={{ filter: "blur(100px)" }}
      />

      <div
        className="absolute -bottom-32 -left-32 w-[400px] h-[400px] rounded-full bg-[rgba(101,158,162,0.60)] -z-10"
        style={{ filter: "blur(100px)" }}
      />

      <DiamondShapes />
      <AtomIcon />

      <div className="max-w-6xl mx-auto">
        {/* Header section */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-20">
          <div className="mb-10 lg:mb-0">
            <h2 className="text-white text-3xl lg:text-4xl font-bold leading-tight">
              WE KNOW YOU HAVE QUESTIONS.
              <br />
              WE PROBABLY HAVE THE ANSWERS.
              <br />
              MAYBE.
            </h2>
          </div>

          <PixelatedFaq highlightRef={highlightRef} />
        </div>

        {/* Pink highlighter for FAQ text when scrolled */}
        <motion.div
          className="absolute bg-pink-400"
          style={{
            top: highlightRef.current?.offsetTop || 0,
            left: highlightRef.current?.offsetLeft || 0,
            height: highlightRef.current?.offsetHeight || 0,
            mixBlendMode: "multiply",
            zIndex: -1,
          }}
          initial="hidden"
          animate={highlighterControls}
          variants={highlighterVariants}
        />

        {/* FAQ accordion */}
        <Accordion items={faqItems} highlightRef={highlightRef} />
      </div>
    </div>
  )
}

export default FaqSection

