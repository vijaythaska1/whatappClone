import { useState } from 'react'
import { Camera, Phone, MessageCircle, Bell, Blocks, ThumbsDown, Trash, ArrowLeft, MoreVertical, X } from 'lucide-react'

const FriendProfile = () => {
  const [isMuted, setIsMuted] = useState(false)

  return (
    <div className="w-[400px] h-screen bg-[#f0f2f5] flex flex-col border-l border-[#d1d7db]">
      {/* Profile Header */}
      <div className="bg-[#008069] text-white p-4 flex items-center">
        <button className="mr-4 hover:bg-[#017561] p-2 rounded-full transition-colors duration-200">
          <X size={24} />
        </button>
        <h1 className="text-xl font-semibold flex-1">Contact info</h1>
      </div>

      <div className="flex-1 overflow-y-auto">
        {/* Profile Info */}
        <div className="bg-white p-6 flex flex-col items-center space-y-4">
          <div className="relative">
            <div className="w-40 h-40 rounded-full bg-gray-300 flex items-center justify-center overflow-hidden">
              <img
                src="/placeholder.svg?height=160&width=160&text=JD"
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="text-center">
            <h2 className="text-2xl font-semibold text-[#3b4a54]">John Doe</h2>
            <p className="text-[#667781]">+1 234 567 8900</p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-around p-4 bg-white border-t border-b border-[#e9edef]">
          <button className="flex flex-col items-center text-[#008069]">
            <MessageCircle size={24} />
            <span className="text-xs mt-1">Message</span>
          </button>
          <button className="flex flex-col items-center text-[#008069]">
            <Phone size={24} />
            <span className="text-xs mt-1">Audio</span>
          </button>
          <button className="flex flex-col items-center text-[#008069]">
            <Camera size={24} />
            <span className="text-xs mt-1">Video</span>
          </button>
        </div>

        {/* Info Sections */}
        <div className="bg-white mt-2">
          <div className="p-4 border-b border-[#e9edef]">
            <p className="text-sm text-[#008069] font-medium">About</p>
            <p className="mt-1 text-[#3b4a54]">Hey there! I'm using WhatsApp</p>
          </div>

          <div className="p-4 border-b border-[#e9edef]">
            <p className="text-sm text-[#008069] font-medium mb-2">Media, links, and docs</p>
            <div className="flex space-x-2">
              <div className="w-24 h-24 bg-gray-200 rounded"></div>
              <div className="w-24 h-24 bg-gray-200 rounded"></div>
              <div className="w-24 h-24 bg-gray-200 rounded"></div>
            </div>
          </div>

          <div className="p-4 border-b border-[#e9edef]">
            <p className="text-sm text-[#008069] font-medium mb-2">Groups in common</p>
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center overflow-hidden">
                <span className="text-sm font-medium text-[#54656f]">3</span>
              </div>
              <div>
                <p className="text-[#3b4a54]">3 groups in common</p>
                <p className="text-sm text-[#667781]">Group 1, Group 2, Group 3</p>
              </div>
            </div>
          </div>
        </div>

        {/* Settings & Actions */}
        <div className="bg-white mt-2">
          <button 
            className="w-full p-4 flex items-center justify-between text-[#3b4a54] border-b border-[#e9edef] hover:bg-[#f5f6f6] transition-colors duration-200"
            onClick={() => setIsMuted(!isMuted)}
          >
            <div className="flex items-center">
              <Bell className="mr-3 text-[#8696a0]" size={20} />
              <span>Mute notifications</span>
            </div>
            <div className={`w-10 h-6 rounded-full p-1 transition-colors duration-300 ease-in-out ${isMuted ? 'bg-[#00a884]' : 'bg-gray-300'}`}>
              <div className={`w-4 h-4 rounded-full bg-white transition-transform duration-300 ease-in-out ${isMuted ? 'transform translate-x-4' : ''}`} />
            </div>
          </button>
          <button className="w-full p-4 flex items-center text-[#3b4a54] border-b border-[#e9edef] hover:bg-[#f5f6f6] transition-colors duration-200">
            <Blocks className="mr-3 text-[#8696a0]" size={20} />
            Block
          </button>
          <button className="w-full p-4 flex items-center text-[#3b4a54] border-b border-[#e9edef] hover:bg-[#f5f6f6] transition-colors duration-200">
            <ThumbsDown className="mr-3 text-[#8696a0]" size={20} />
            Report contact
          </button>
          <button className="w-full p-4 flex items-center text-[#ea0038] hover:bg-[#f5f6f6] transition-colors duration-200">
            <Trash className="mr-3" size={20} />
            Delete chat
          </button>
        </div>
      </div>
    </div>
  )
}

export default FriendProfile