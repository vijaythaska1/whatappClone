import React, { useState } from 'react';
import { Video, Phone, Search, MoreVertical } from 'lucide-react';
import MessageList from '../page/MessageList'
import MessageInput from '../page/MessageInput'
import { Link } from 'react-router-dom';
export default function ChatArea() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <div className="flex-1 flex flex-col h-full bg-white dark:bg-gray-900">
      {/* Chat Header */}
      <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700">
      <Link to={"/profile"}>
        <div className="flex items-center space-x-4">
          <div className="relative">
            <img
              src="/api/placeholder/40/40"
              alt="Chat Avatar"
              className="w-10 h-10 rounded-full object-cover ring-2 ring-blue-100 dark:ring-blue-900"
            />
            <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white dark:border-gray-900" />
          </div>
          <div className="flex flex-col">
              <span className="font-semibold text-gray-900 dark:text-gray-100">Chat Name</span>
              <span className="text-sm text-gray-500 dark:text-gray-400">Online</span>
          </div>
        </div>
        </Link>

        <div className="flex items-center space-x-1">
          <button
            className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors duration-200 group relative"
            onMouseEnter={() => { }}
          >
            <Video className="h-5 w-5 text-gray-600 dark:text-gray-300" />
            <div className="invisible group-hover:visible absolute -bottom-8 left-1/2 transform -translate-x-1/2 px-2 py-1 bg-gray-900 text-white text-xs rounded whitespace-nowrap">
              Video call
            </div>
          </button>

          <button
            className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors duration-200 group relative"
            onMouseEnter={() => { }}
          >
            <Phone className="h-5 w-5 text-gray-600 dark:text-gray-300" />
            <div className="invisible group-hover:visible absolute -bottom-8 left-1/2 transform -translate-x-1/2 px-2 py-1 bg-gray-900 text-white text-xs rounded whitespace-nowrap">
              Voice call
            </div>
          </button>

          <button
            className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors duration-200 group relative"
            onMouseEnter={() => { }}
          >
            <Search className="h-5 w-5 text-gray-600 dark:text-gray-300" />
            <div className="invisible group-hover:visible absolute -bottom-8 left-1/2 transform -translate-x-1/2 px-2 py-1 bg-gray-900 text-white text-xs rounded whitespace-nowrap">
              Search chat
            </div>
          </button>

          <div className="relative">
            <button
              className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors duration-200"
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            >
              <MoreVertical className="h-5 w-5 text-gray-600 dark:text-gray-300" />
            </button>

            {isDropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-lg shadow-lg py-1 z-10">
                <button className="w-full px-4 py-2 text-left text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700">
                  View profile
                </button>
                <button className="w-full px-4 py-2 text-left text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700">
                  Mute notifications
                </button>
                <button className="w-full px-4 py-2 text-left text-sm text-red-600 hover:bg-gray-100 dark:hover:bg-gray-700">
                  Block user
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Messages Area */}
      <div className="flex-1 overflow-y-auto">
        <MessageList />
      </div>

      {/* Input Area */}
      <div className="border-t border-gray-200 dark:border-gray-700">
        <MessageInput />
      </div>
    </div>
  );
}