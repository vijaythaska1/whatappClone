import React from 'react'
import { MoreVertical, Search } from 'lucide-react'
import ChatList from '../page/ChatList'

export default function Sidebar() {
  return (
    <div className="w-1/4 bg-white border-r border-gray-300">
      {/* User Profile */}
      <div className="flex items-center justify-between p-4 bg-gray-200">
        <div className="flex items-center space-x-3">
          <img src="/placeholder.svg?height=40&width=40" alt="User Avatar" className="w-10 h-10 rounded-full" />
          <span className="font-semibold">John Doe</span>
        </div>
        <MoreVertical className="text-gray-600" />
      </div>

      {/* Search Bar */}
      <div className="p-3 bg-gray-100">
        <div className="relative">
          <input type="text" placeholder="Search or start new chat" className="w-full pl-10 pr-4 py-2 rounded-full bg-white" />
          <Search className="absolute left-3 top-2.5 text-gray-500" size={20} />
        </div>
      </div>

      <ChatList />
    </div>
  )
}