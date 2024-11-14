import { Camera, Phone, MessageCircle, Bell, Blocks, ThumbsDown, Trash } from 'lucide-react';

const EnhancedWhatsAppProfile = () => {
  return (
    <div className="max-w-md mx-auto bg-gray-100 dark:bg-gray-900 min-h-screen">
      {/* Profile Header */}
      <div className="bg-emerald-600 dark:bg-emerald-800 text-white p-4">
        <div className="flex items-center space-x-4">
          {/* Profile Picture */}
          <div className="relative">
            <div className="w-20 h-20 rounded-full bg-gray-300 dark:bg-gray-700 flex items-center justify-center overflow-hidden">
              <img
                src="/api/placeholder/80/80"
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute bottom-0 right-0 bg-emerald-500 dark:bg-emerald-600 p-1 rounded-full">
              <Camera size={16} />
            </div>
          </div>

          {/* User Info */}
          <div className="flex-1">
            <h1 className="text-xl font-semibold">John Doe</h1>
            <p className="text-sm opacity-80 dark:opacity-60">Available</p>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex justify-around p-4 bg-white dark:bg-gray-800">
        <button className="flex flex-col items-center text-emerald-600 dark:text-emerald-400">
          <MessageCircle size={24} />
          <span className="text-xs mt-1">Message</span>
        </button>
        <button className="flex flex-col items-center text-emerald-600 dark:text-emerald-400">
          <Phone size={24} />
          <span className="text-xs mt-1">Call</span>
        </button>
        <button className="flex flex-col items-center text-emerald-600 dark:text-emerald-400">
          <Bell size={24} />
          <span className="text-xs mt-1">Mute</span>
        </button>
      </div>

      {/* Info Sections */}
      <div className="mt-2 bg-white dark:bg-gray-800">
        <div className="p-4 border-b dark:border-gray-700">
          <p className="text-sm text-gray-500 dark:text-gray-400">About</p>
          <p className="mt-1 text-gray-900 dark:text-gray-100">Hey there! I'm using WhatsApp</p>
        </div>

        <div className="p-4 border-b dark:border-gray-700">
          <p className="text-sm text-gray-500 dark:text-gray-400">Phone</p>
          <p className="mt-1 text-gray-900 dark:text-gray-100">+1 234 567 8900</p>
        </div>

        <div className="p-4 border-b dark:border-gray-700">
          <p className="text-sm text-gray-500 dark:text-gray-400">Last seen</p>
          <p className="mt-1 text-gray-900 dark:text-gray-100">Today at 4:30 PM</p>
        </div>

        <div className="p-4 border-b dark:border-gray-700">
          <p className="text-sm text-gray-500 dark:text-gray-400">Groups in common</p>
          <div className="mt-1 flex space-x-2">
            <div className="w-8 h-8 rounded-full bg-gray-300 dark:bg-gray-700 flex items-center justify-center overflow-hidden">
              <span className="text-xs font-medium text-gray-500 dark:text-gray-400">G1</span>
            </div>
            <div className="w-8 h-8 rounded-full bg-gray-300 dark:bg-gray-700 flex items-center justify-center overflow-hidden">
              <span className="text-xs font-medium text-gray-500 dark:text-gray-400">G2</span>
            </div>
            <div className="w-8 h-8 rounded-full bg-gray-300 dark:bg-gray-700 flex items-center justify-center overflow-hidden">
              <span className="text-xs font-medium text-gray-500 dark:text-gray-400">G3</span>
            </div>
          </div>
        </div>
      </div>

      {/* Settings & Actions */}
      <div className="mt-2 bg-white dark:bg-gray-800">
        <button className="w-full p-4 flex items-center text-red-500 dark:text-red-400 border-b dark:border-gray-700">
          <Blocks className="mr-3" size={20} />
          Block
        </button>
        <button className="w-full p-4 flex items-center text-red-500 dark:text-red-400 border-b dark:border-gray-700">
          <ThumbsDown className="mr-3" size={20} />
          Report contact
        </button>
        <button className="w-full p-4 flex items-center text-red-500 dark:text-red-400">
          <Trash className="mr-3" size={20} />
          Delete chat
        </button>
      </div>
    </div>
  );
};

export default EnhancedWhatsAppProfile;