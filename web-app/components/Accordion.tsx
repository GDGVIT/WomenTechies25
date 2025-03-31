import React from "react"
import { useState } from "react"
import AccordionItem from "./AccordionItem"

interface AccordionProps {
    items: { question: string, answer: string }[]
    highlightRef: React.RefObject<HTMLDivElement | null>
}

const Accordion: React.FC<AccordionProps> = ({ items, highlightRef }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div className="w-full -mt-15">
      {items.map((item, index) => (
        <AccordionItem
          key={index}
          question={item.question}
          answer={item.answer}
          isOpen={openIndex === index}
          onToggle={() => handleToggle(index)}
          highlightRef={highlightRef}
        />
      ))}
    </div>
  )
}

export default Accordion
