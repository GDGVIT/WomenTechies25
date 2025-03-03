import React from "react"
const AtomIcon: React.FC = () => {
  return (
    <svg
      width="100"
      height="100"
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="absolute top-20 right-0"
    >
      <ellipse cx="50" cy="50" rx="40" ry="20" stroke="white" strokeWidth="0.5" transform="rotate(30 50 50)" />
      <ellipse cx="50" cy="50" rx="40" ry="20" stroke="white" strokeWidth="0.5" transform="rotate(90 50 50)" />
      <circle cx="50" cy="50" r="2" fill="#FEE9A8" />
    </svg>
  )
}

export default AtomIcon

