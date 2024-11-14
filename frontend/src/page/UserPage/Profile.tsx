import React from 'react';
import { Camera, Phone, MessageCircle, Bell, Blocks, ThumbsDown, Trash } from 'lucide-react';

const Profile = () => {
    return (
        <div className="max-w-md mx-auto bg-gray-100 min-h-screen">
            {/* Profile Header */}
            <div className="bg-emerald-600 text-white p-4">
                <div className="flex items-center space-x-4">
                    {/* Profile Picture */}
                    <div className="relative">
                        <div className="w-20 h-20 rounded-full bg-gray-300 flex items-center justify-center overflow-hidden">
                            <img
                                src="/api/placeholder/80/80"
                                alt="Profile"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="absolute bottom-0 right-0 bg-emerald-500 p-1 rounded-full">
                            <Camera size={16} />
                        </div>
                    </div>

                    {/* User Info */}
                    <div className="flex-1">
                        <h1 className="text-xl font-semibold">John Doe</h1>
                        <p className="text-sm opacity-80">Available</p>
                    </div>
                </div>
            </div>

            {/* Action Buttons */}
            <div className="flex justify-around p-4 bg-white">
                <button className="flex flex-col items-center text-emerald-600">
                    <MessageCircle size={24} />
                    <span className="text-xs mt-1">Message</span>
                </button>
                <button className="flex flex-col items-center text-emerald-600">
                    <Phone size={24} />
                    <span className="text-xs mt-1">Call</span>
                </button>
                <button className="flex flex-col items-center text-emerald-600">
                    <Bell size={24} />
                    <span className="text-xs mt-1">Mute</span>
                </button>
            </div>

            {/* Info Sections */}
            <div className="mt-2 bg-white">
                <div className="p-4 border-b">
                    <p className="text-sm text-gray-500">About</p>
                    <p className="mt-1">Hey there! I'm using WhatsApp</p>
                </div>

                <div className="p-4 border-b">
                    <p className="text-sm text-gray-500">Phone</p>
                    <p className="mt-1">+1 234 567 8900</p>
                </div>
            </div>

            {/* Settings & Actions */}
            <div className="mt-2 bg-white">
                <button className="w-full p-4 flex items-center text-red-500 border-b">
                    <Blocks className="mr-3" size={20} />
                    Block
                </button>
                <button className="w-full p-4 flex items-center text-red-500 border-b">
                    <ThumbsDown className="mr-3" size={20} />
                    Report contact
                </button>
                <button className="w-full p-4 flex items-center text-red-500">
                    <Trash className="mr-3" size={20} />
                    Delete chat
                </button>
            </div>
        </div>
    );
};

export default Profile;