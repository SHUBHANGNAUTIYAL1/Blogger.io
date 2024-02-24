import React from 'react'

function Logo({width='100px'}) {
  return (
    <div className="flex items-center justify-center">
      <svg
        className="w-12 h-12 mr-2"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        
      >
        <path d="M5 3L19 12L5 21L5 3Z" />
      </svg>
      <span className="text-2xl font-bold text-indigo-600 hover:text-white">Blogger.io</span>
    </div>
  )
}

export default Logo