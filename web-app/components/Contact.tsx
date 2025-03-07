import React from "react"
import { useEffect, useState } from "react"
import HighlightText from "./HighlightText"

const ContactSection = () => {
  const [windowWidth, setWindowWidth] = useState(typeof window !== "undefined" ? window.innerWidth : 1920)
  const [windowHeight, setWindowHeight] = useState(typeof window !== "undefined" ? window.innerHeight : 1080)

  // Calculate scaling factors based on screen size
  const widthRatio = windowWidth / 1920
  const heightRatio = windowHeight / 1080

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth)
      setWindowHeight(window.innerHeight)
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  // Responsive style calculations
  const getResponsiveStyles = () => {
    // For exact 1920x1080 screens, use the original values
    if (windowWidth === 1920 && windowHeight === 1080) {
      return {
        leftLaptop: {
          left: "20%",
          bottom: "300px",
          width: "40vw",
        },
        rightLaptop: {
          right: "20%",
          top: "7%",
          width: "30vw",
        },
        contactCard: {
          right: "18%",
          bottom: "43vh",
          width: "25vw",
        },
        headingText: {
          left: "100px",
          top: "150px",
          fontSize: "4rem", // text-6xl equivalent
        },
      }
    }

    // For other screen sizes, calculate proportional values
    return {
      leftLaptop: {
        left: `${Math.max(5, 20 * widthRatio)}%`,
        bottom: `${Math.max(50, 300 * heightRatio)}px`,
        width: `${Math.min(60, Math.max(30, 40 * widthRatio))}vw`,
      },
      rightLaptop: {
        right: `${Math.max(5, 20 * widthRatio)}%`,
        top: `${Math.max(3, 7 * heightRatio)}%`,
        width: `${Math.min(50, Math.max(20, 30 * widthRatio))}vw`,
      },
      contactCard: {
        right: `${Math.max(5, 18 * widthRatio)}%`,
        bottom: `${Math.max(20, 43 * heightRatio)}vh`,
        width: `${Math.min(40, Math.max(20, 25 * widthRatio))}vw`,
      },
      headingText: {
        left: `${Math.max(20, 100 * widthRatio)}px`,
        top: `${Math.max(50, 150 * heightRatio)}px`,
        fontSize: `${Math.max(1.5, Math.min(4, 4 * Math.min(widthRatio, heightRatio)))}rem`,
      },
    }
  }

  const styles = getResponsiveStyles()

  return (
    <section className="relative w-full h-screen bg-black overflow-hidden">
      <div className="max-w-[1920px] h-full mx-auto relative">
        {/* Background grid pattern - optional */}
        <div className="absolute inset-0 opacity-20 bg-[url('/placeholder.svg?height=1080&width=1920')] bg-center bg-no-repeat"></div>

        {/* Left laptop */}
        <div
          className="absolute z-20"
          style={{
            left: styles.leftLaptop.left,
            bottom: styles.leftLaptop.bottom,
            width: styles.leftLaptop.width,
          }}
        >
          <img src="/contact/left.svg" alt="Laptop" className="object-contain w-full" />
        </div>

        {/* Right laptop */}
        <div
          className="absolute"
          style={{
            right: styles.rightLaptop.right,
            top: styles.rightLaptop.top,
            width: styles.rightLaptop.width,
          }}
        >
          <img src="/contact/right.svg" alt="Laptop" className="object-contain w-full" />
        </div>

        {/* Contact card */}
        <div
          className="absolute z-10"
          style={{
            right: styles.contactCard.right,
            bottom: styles.contactCard.bottom,
            width: styles.contactCard.width,
          }}
        >
          <img src="/contact/tag.svg" alt="Contact card" className="object-contain w-full" />
        </div>

        {/* Heading text */}
        <div
          className="absolute text-white font-bold font-heading tracking-wider"
          style={{
            left: styles.headingText.left,
            top: styles.headingText.top,
          }}
        >
          <div className="flex items-center space-x-4">
            <span style={{ fontSize: styles.headingText.fontSize }}>GET</span>
            <span style={{ fontSize: styles.headingText.fontSize }}>IN</span>
            <HighlightText text="TOUCH" className="font-bold"/>
          </div>
          <div className="flex items-center space-x-4 mt-4">
            <HighlightText text="WITH" className="font-bold"  />
            <span style={{ fontSize: styles.headingText.fontSize }}>US.</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactSection

