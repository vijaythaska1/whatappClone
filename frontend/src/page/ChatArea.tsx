import React from 'react'
import { Video, Phone, Search, MoreVertical } from 'lucide-react'
import MessageList from './MessageList'
import MessageInput from './MessageInput'

export default function ChatArea() {
  return (
    <div className="flex-1 flex flex-col">
      {/* Chat Header */}
      <div className="flex items-center justify-between p-4 bg-gray-200">
        <div className="flex items-center space-x-3">
          <img src="/placeholder.svg?height=40&width=40" alt="Chat Avatar" className="w-10 h-10 rounded-full" />
          <span className="font-semibold">Chat Name</span>
        </div>
        <div className="flex space-x-4">
          <Video className="text-gray-600 cursor-pointer" />
          <Phone className="text-gray-600 cursor-pointer" />
          <Search className="text-gray-600 cursor-pointer" />
          <MoreVertical className="text-gray-600 cursor-pointer" />
        </div>
      </div>

      <MessageList />
      <MessageInput />
    </div>
  )
}