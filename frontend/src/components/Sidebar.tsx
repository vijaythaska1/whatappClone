import  { useState } from 'react';
import { MoreVertical, Search, MessageSquare, Archive, Users, Sun } from 'lucide-react';
import ChatList from '../page/ChatList';
import { Link } from 'react-router-dom';


export default function Sidebar() {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="w-[30%] max-w-[420px] bg-white dark:bg-gray-900 border-r border-gray-200 dark:border-gray-800 flex flex-col h-screen">
      {/* User Profile */}
      <div className="flex items-center justify-between p-3 bg-emerald-600 dark:bg-emerald-700">
        <Link to={"/profile"}>
        <div className="flex items-center space-x-3">
          <img src="/placeholder.svg?height=40&width=40" alt="User Avatar" className="w-10 h-10 rounded-full object-cover" />
          <span className="font-semibold text-white">John Doe</span>
        </div>
        </Link>
        <div className="flex space-x-3">
          <button aria-label="Communities" className="text-white hover:bg-emerald-700 dark:hover:bg-emerald-800 p-2 rounded-full transition-colors duration-200">
            <Users className="w-5 h-5" />
          </button>
          <button aria-label="Status" className="text-white hover:bg-emerald-700 dark:hover:bg-emerald-800 p-2 rounded-full transition-colors duration-200">
            <Sun className="w-5 h-5" />
          </button>
          <button aria-label="New chat" className="text-white hover:bg-emerald-700 dark:hover:bg-emerald-800 p-2 rounded-full transition-colors duration-200">
            <MessageSquare className="w-5 h-5" />
          </button>
          <button aria-label="Menu" className="text-white hover:bg-emerald-700 dark:hover:bg-emerald-800 p-2 rounded-full transition-colors duration-200">
            <MoreVertical className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Search Bar */}
      <div className="px-3 py-2 bg-white dark:bg-gray-900">
        <div className="relative">
          <input 
            type="text" 
            placeholder="Search or start new chat" 
            className="w-full pl-12 pr-4 py-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <Search className="absolute left-4 top-3 text-gray-500 dark:text-gray-400" size={20} />
        </div>
      </div>

      {/* Archived */}
      <button className="flex items-center space-x-4 px-4 py-3 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200">
        <Archive className="text-emerald-600 dark:text-emerald-500" size={20} />
        <span className="text-gray-900 dark:text-gray-100 font-medium">Archived</span>
      </button>

      {/* Chat List */}
      <ChatList searchQuery={searchQuery} />
    </div>
  );
}
