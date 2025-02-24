import React from 'react'

function LocationField() {
  return (
    <>
        <div className="max-w-md w-300 bg-white rounded-lg overflow-hidden shadow-md flex items-center border border-gray-300 px-3 py-2">
        
       
        <input
          type="text"
          placeholder="Search for your location.."
          className="w-full px-2 py-1 text-gray-700 placeholder-gray-400 focus:outline-none"
          aria-label="Search for your location"
        />
        
        
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 text-gray-500 ml-2"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 4h18M6 8h12M9 12h6M12 16h0"
          />
        </svg>
      </div>
    </>
  )
}

export default LocationField