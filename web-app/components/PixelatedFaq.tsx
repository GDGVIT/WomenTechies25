import React from "react"
import PixelatedTitle from "./PixelatedTitle"

interface PixelatedFaqProps {
  highlightRef?: React.RefObject<HTMLDivElement | null>
}

const PixelatedFaq: React.FC<PixelatedFaqProps> = ({ highlightRef }) => {
  return (
    <div className="flex flex-col items-center relative">
      <div className="relative flex items-center" ref={highlightRef}>
        <PixelatedTitle text="FAQs" />
      </div>
    </div>
  )
}

export default PixelatedFaq

