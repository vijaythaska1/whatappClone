import React from 'react'

export default function ChatList() {
    return (
        <div className="overflow-y-auto h-[calc(100vh-120px)]">
            {[...Array(10)].map((_, i) => (
                <div key={i} className="flex items-center p-3 hover:bg-gray-100 cursor-pointer">
                    <img src={`/placeholder.svg?height=50&width=50&text=User${i + 1}`} alt={`User ${i + 1}`} className="w-12 h-12 rounded-full mr-3" />
                    <div className="flex-1">
                        <h3 className="font-semibold">User {i + 1}</h3>
                        <p className="text-sm text-gray-600 truncate">Last message here...</p>
                    </div>
                    <span className="text-xs text-gray-500">12:34 PM</span>
                </div>
            ))}
        </div>
    )
}