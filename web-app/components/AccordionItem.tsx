"use client"
import React from "react"
import { motion, AnimatePresence } from "framer-motion"
import ChevronIcon from "./ChevronIcon"

interface AccordionItemProps {
    question: string
    answer: string
    isOpen: boolean
    onToggle: () => void
    highlightRef: React.RefObject<HTMLDivElement | null>
  }

const AccordionItem: React.FC<AccordionItemProps> = ({ question, answer, isOpen, onToggle, highlightRef }) => {
  return (
    <div className="relative border-b border-gray-700">
      {/* Pink highlighter that appears when accordion is open */}
      {isOpen && (
        <motion.div
          className="absolute inset-0 bg-pink-400 opacity-30 -z-10"
          style={{ mixBlendMode: "multiply" }}
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        />
      )}

      {/* Accordion header */}
      <button
        className="w-full py-6 flex justify-between items-center text-left focus:outline-none"
        onClick={onToggle}
        aria-expanded={isOpen}
      >
        <span className="text-white text-xl font-medium">{question}</span>
        <motion.div animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.3, ease: "easeInOut" }}>
          <ChevronIcon className="w-6 h-4" />
        </motion.div>
      </button>

      {/* Accordion content */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="pb-6 text-gray-300">{answer}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default AccordionItem

