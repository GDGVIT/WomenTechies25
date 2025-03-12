import React from "react"
import HighlightText from "./HighlightText"


interface PixelatedTitleProps {
  text: string
  className?: string
  withSpeechBubble?: boolean
}

const PixelatedTitle: React.FC<PixelatedTitleProps> = ({
  text,
  className = "text-3xl md:text-4xl xl:text-6xl font-bold font-heading"
}) => {
  return (
    <div className="relative flex items-center">
      {/* Pixelated text with border */}
      <div
        className="relative border-2 border-[#FAC6F7] bg-[#FAC6F7]/20 px-6 py-3"
        style={{
          fontFamily: "monospace",
          letterSpacing: "0.2em",
          boxShadow: "0 0 15px rgba(250, 198, 247, 0.2)",
        }}
      >
        <HighlightText text={text} className={className} />
      </div>
    </div>
  )
}

export default PixelatedTitle

