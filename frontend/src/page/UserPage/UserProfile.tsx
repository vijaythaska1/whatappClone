import { useState } from 'react'
import { ArrowLeft, Camera, Bell, Lock, Key, CircleHelp, Trash2, Moon, MessageCircle, Phone, Video, Edit2, CheckCircle } from 'lucide-react'

export default function UserProfile() {
  const [isDarkMode, setIsDarkMode] = useState(true)
  const [notificationsEnabled, setNotificationsEnabled] = useState(true)
  const [isEditing, setIsEditing] = useState(false)
  const [userInfo, setUserInfo] = useState({
    name: 'John Doe',
    about: 'Available'
  })
  const [tempInfo, setTempInfo] = useState(userInfo)

  const handleSave = () => {
    setUserInfo(tempInfo)
    setIsEditing(false)
  }

  return (
    <div className={`flex h-screen ${isDarkMode ? 'dark' : ''}`}>
      {/* Sidebar */}
      <div className="w-[30%] max-w-[420px] bg-[#f0f2f5] dark:bg-[#2a2f32] border-r border-[#e9edef] dark:border-[#3b4045] flex flex-col">
        <div className="flex items-center p-4 bg-[#008069] dark:bg-[#00a884] text-white">
          <button className="mr-4 hover:bg-[#017561]/20 rounded-full p-2 transition-colors">
            <ArrowLeft className="h-6 w-6" />
          </button>
          <h1 className="text-xl font-semibold">Profile</h1>
        </div>
        <div className="flex-1 overflow-y-auto">
          {/* Profile content will go here */}
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 bg-[#f0f2f5] dark:bg-[#0c1317] overflow-y-auto">
        <div className="max-w-3xl mx-auto py-8 px-4">
          {/* Profile Picture */}
          <div className="flex justify-center mb-8">
            <div className="relative group">
              <img
                src="/api/placeholder/200/200"
                alt="Profile Picture"
                className="w-52 h-52 rounded-full object-cover"
              />
              <button className="absolute bottom-2 right-2 bg-[#00a884] dark:bg-[#00a884] hover:bg-[#06cf9c] text-white rounded-full p-2 transition-colors">
                <Camera className="h-6 w-6" />
              </button>
            </div>
          </div>

          {/* Profile Information */}
          <div className="bg-white dark:bg-[#1f2428] rounded-lg shadow-md mb-6">
            <div className="p-6 border-b border-[#e9edef] dark:border-[#3b4045]">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-semibold text-[#41525d] dark:text-[#d1d7db]">Your Name</h2>
                <button
                  onClick={() => isEditing ? handleSave() : setIsEditing(true)}
                  className="flex items-center text-[#00a884] hover:text-[#06cf9c] transition-colors"
                >
                  {isEditing ? (
                    <>
                      <CheckCircle className="h-5 w-5 mr-2" />
                      <span>Save</span>
                    </>
                  ) : (
                    <>
                      <Edit2 className="h-5 w-5 mr-2" />
                      <span>Edit</span>
                    </>
                  )}
                </button>
              </div>
              {isEditing ? (
                <input
                  type="text"
                  value={tempInfo.name}
                  onChange={(e) => setTempInfo({...tempInfo, name: e.target.value})}
                  className="w-full p-2 bg-[#f0f2f5] dark:bg-[#2a2f32] rounded-lg text-[#41525d] dark:text-[#d1d7db] outline-none"
                />
              ) : (
                <p className="text-[#667781] dark:text-[#8696a0]">{userInfo.name}</p>
              )}
            </div>
            <div className="p-6">
              <h2 className="text-lg font-semibold text-[#41525d] dark:text-[#d1d7db] mb-1">About</h2>
              {isEditing ? (
                <input
                  type="text"
                  value={tempInfo.about}
                  onChange={(e) => setTempInfo({...tempInfo, about: e.target.value})}
                  className="w-full p-2 bg-[#f0f2f5] dark:bg-[#2a2f32] rounded-lg text-[#41525d] dark:text-[#d1d7db] outline-none"
                />
              ) : (
                <p className="text-[#667781] dark:text-[#8696a0]">{userInfo.about}</p>
              )}
            </div>
          </div>

          {/* Settings */}
          <div className="bg-white dark:bg-[#1f2428] rounded-lg shadow-md">
            <div className="p-6 border-b border-[#e9edef] dark:border-[#3b4045]">
              <h2 className="text-lg font-semibold text-[#41525d] dark:text-[#d1d7db] mb-4">Settings</h2>
              <ul className="space-y-4">
                <li className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Bell className="h-5 w-5 text-[#8696a0] mr-4" />
                    <span className="text-[#41525d] dark:text-[#d1d7db]">Notifications</span>
                  </div>
                  <button
                    className={`w-12 h-6 rounded-full p-1 transition-colors duration-300 ease-in-out focus:outline-none ${
                      notificationsEnabled ? 'bg-[#00a884]' : 'bg-gray-300 dark:bg-[#3b4045]'
                    }`}
                    onClick={() => setNotificationsEnabled(!notificationsEnabled)}
                  >
                    <div
                      className={`w-4 h-4 rounded-full bg-white transition-transform duration-300 ease-in-out ${
                        notificationsEnabled ? 'transform translate-x-6' : ''
                      }`}
                    />
                  </button>
                </li>
                <li className="flex items-center cursor-pointer hover:bg-[#f0f2f5] dark:hover:bg-[#2a2f32] p-2 rounded-lg transition-colors">
                  <Lock className="h-5 w-5 text-[#8696a0] mr-4" />
                  <span className="text-[#41525d] dark:text-[#d1d7db]">Privacy</span>
                </li>
                <li className="flex items-center cursor-pointer hover:bg-[#f0f2f5] dark:hover:bg-[#2a2f32] p-2 rounded-lg transition-colors">
                  <Key className="h-5 w-5 text-[#8696a0] mr-4" />
                  <span className="text-[#41525d] dark:text-[#d1d7db]">Security</span>
                </li>
                <li className="flex items-center cursor-pointer hover:bg-[#f0f2f5] dark:hover:bg-[#2a2f32] p-2 rounded-lg transition-colors">
                  <Moon className="h-5 w-5 text-[#8696a0] mr-4" />
                  <span className="text-[#41525d] dark:text-[#d1d7db]">Theme</span>
                </li>
                <li className="flex items-center cursor-pointer hover:bg-[#f0f2f5] dark:hover:bg-[#2a2f32] p-2 rounded-lg transition-colors">
                  <CircleHelp className="h-5 w-5 text-[#8696a0] mr-4" />
                  <span className="text-[#41525d] dark:text-[#d1d7db]">Help</span>
                </li>
                <li className="flex items-center text-[#ea0038] cursor-pointer hover:bg-red-50 dark:hover:bg-red-900/20 p-2 rounded-lg transition-colors">
                  <Trash2 className="h-5 w-5 mr-4" />
                  <span>Delete My Account</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="mt-6 flex justify-center space-x-4">
            {[
              { icon: MessageCircle, label: 'New Chat' },
              { icon: Phone, label: 'Call' },
              { icon: Video, label: 'Video Call' }
            ].map((action, index) => (
              <button 
                key={index}
                className="flex flex-col items-center text-[#00a884] dark:text-[#00a884] hover:bg-[#f0f2f5] dark:hover:bg-[#2a2f32] p-4 rounded-lg transition-colors"
              >
                <action.icon className="h-8 w-8 mb-1" />
                <span className="text-sm">{action.label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}