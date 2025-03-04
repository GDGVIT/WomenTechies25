import React from 'react'

const dummy = () => {
  return (
    <div>
    {[...Array(6)].map((_, index) => (
        <div key={index} className="card">
            <h2>Card {index + 1}</h2>
            <p>This is a sample card.</p>
        </div>
    ))}
    </div>
  )
}

export default dummy
