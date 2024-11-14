import React from 'react'
import { Smile, Paperclip, Send, Mic } from 'lucide-react'


export default function MessageInput() {
  return (
    <div className="flex items-center space-x-2 p-3 bg-gray-200">
      <Smile className="text-gray-600 cursor-pointer" />
      <Paperclip className="text-gray-600 cursor-pointer" />
      <input type="text" placeholder="Type a message" className="flex-1 rounded-full" />
      <button  className="rounded-full">
        <Send className="h-4 w-4" />
      </button>
      <Mic className="text-gray-600 cursor-pointer" />
    </div>
  )
}