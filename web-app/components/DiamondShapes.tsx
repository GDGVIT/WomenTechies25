import React from "react"
const DiamondShapes: React.FC = () => {
  return (
    <>
      <div className="absolute left-0 bottom-40 flex flex-col gap-4">
        {[1, 2, 3, 4, 5].map((i) => (
          <div
            key={i}
            className="w-4 h-4 rotate-45"
            style={{
              background: i % 2 === 0 ? "#FEE9A8" : "white",
              opacity: 0.7,
            }}
          />
        ))}
      </div>
      <div className="absolute right-0 bottom-40 flex flex-col gap-4">
        {[1, 2, 3, 4, 5].map((i) => (
          <div
            key={i}
            className="w-4 h-4 rotate-45"
            style={{
              background: i % 2 === 0 ? "#FEE9A8" : "white",
              opacity: 0.7,
            }}
          />
        ))}
      </div>
    </>
  )
}

export default DiamondShapes

