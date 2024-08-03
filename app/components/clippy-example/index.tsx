import React from 'react'

const Clip = () => {
  return (
    <div className="p-10 bg-neutral rounded" style={{ clipPath: 'polygon(0 0, 100% 0%, 100% 85%, 0 100%)' }}>
      <h1 className="text-base-300 mb-3">Do your best.</h1>
      <button className="rounded px-11 py-3 bg-gradient-to-b from-accent-content to-accent drop-shadow-lg text-base-300">Active </button>
    </div>
  )
}

export default Clip
