import React from 'react'

function PrjectField() {
  return (
    <>
        <div className="max-w-md w-200 bg-white rounded-lg overflow-hidden shadow-md flex items-center border border-gray-300 px-3 py-2">
              <input
          type="text"
          placeholder="Search Your Live Project"
          className="w-full px-2 py-1 text-gray-700 placeholder-gray-400 focus:outline-none"
          aria-label="Search Your Live Project"
        />
        </div>
    </>
  )
}

export default PrjectField