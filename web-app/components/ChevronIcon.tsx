import React from "react"
interface ChevronIconProps {
  className?: string
}

const ChevronIcon: React.FC<ChevronIconProps> = ({ className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="36"
      height="24"
      viewBox="0 0 36 24"
      fill="none"
      className={className}
    >
      <path
        d="M36 5.60732L32.037 0.5L18.0007 18.5884L21.9639 23.6957L36 5.60732Z"
        fill="url(#paint0_linear_306_1298)"
      />
      <path
        d="M3.96299 0.501553L-0.000244141 5.60888L14.0361 23.6973L17.9996 18.5883L3.96299 0.501553Z"
        fill="url(#paint1_linear_306_1298)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_306_1298"
          x1="-42.7728"
          y1="5.65616"
          x2="36"
          y2="5.65616"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FEE9A8" />
          <stop offset="1" stopColor="#FAC6F7" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_306_1298"
          x1="-42.7739"
          y1="5.65615"
          x2="35.9989"
          y2="5.65615"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FEE9A8" />
          <stop offset="1" stopColor="#FAC6F7" />
        </linearGradient>
      </defs>
    </svg>
  )
}

export default ChevronIcon

