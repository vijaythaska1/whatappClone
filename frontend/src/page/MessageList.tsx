import React from 'react'

export default function MessageList() {
  return (
    <div className="flex-1 overflow-y-auto p-4 bg-[#e5ddd5]">
      {[...Array(5)].map((_, i) => (
        <div key={i} className={`max-w-[70%] rounded-lg p-3 mb-2 ${i % 2 === 0 ? 'bg-white ml-auto' : 'bg-[#dcf8c6]'}`}>
          <p>This is a sample message.</p>
          <span className="text-xs text-gray-500 float-right mt-1">12:34 PM</span>
        </div>
      ))}
    </div>
  )
}