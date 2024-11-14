import { CheckCheck } from 'lucide-react';

interface Chat {
  id: string;
  name: string;
  avatar: string;
  lastMessage: string;
  timestamp: string;
  unreadCount: number;
  isRead: boolean;
}

const chats: Chat[] = [
  { id: '1', name: 'Alice Johnson', avatar: '/api/placeholder/50/50', lastMessage: 'Sure, let\'s meet at 3 PM', timestamp: '3:42 PM', unreadCount: 2, isRead: false },
  { id: '2', name: 'Bob Smith', avatar: '/api/placeholder/50/50', lastMessage: 'Did you see the game last night?', timestamp: '2:15 PM', unreadCount: 0, isRead: true },
  { id: '3', name: 'Carol Williams', avatar: '/api/placeholder/50/50', lastMessage: 'Thanks for the help!', timestamp: 'Yesterday', unreadCount: 0, isRead: true },
  { id: '4', name: 'David Brown', avatar: '/api/placeholder/50/50', lastMessage: 'Can you send me the report?', timestamp: 'Yesterday', unreadCount: 1, isRead: false },
  { id: '5', name: 'Eva Davis', avatar: '/api/placeholder/50/50', lastMessage: 'Happy birthday!', timestamp: 'Monday', unreadCount: 0, isRead: true },
];

export default function ChatList({ searchQuery = '' }: { searchQuery?: string }) {
  const filteredChats = chats.filter(chat =>
    chat.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    chat.lastMessage.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="flex-1 overflow-y-auto bg-white dark:bg-gray-900">
      {filteredChats.length === 0 ? (
        <div className="flex flex-col items-center justify-center h-full text-gray-500 dark:text-gray-400 p-4">
          <span className="text-lg">No chats found</span>
          <span className="text-sm">Try a different search term</span>
        </div>
      ) : (
        filteredChats.map((chat) => (
          <div
            key={chat.id}
            className="flex items-center px-4 py-3 cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors duration-200 border-b border-gray-100 dark:border-gray-800 last:border-b-0"
          >
            <div className="relative flex-shrink-0">
              <img
                src={chat.avatar}
                alt={`${chat.name} avatar`}
                className="w-12 h-12 rounded-full object-cover ring-2 ring-gray-100 dark:ring-gray-800"
              />
              <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white dark:border-gray-900 rounded-full" />
            </div>
            
            <div className="flex-1 min-w-0 ml-4">
              <div className="flex justify-between items-baseline">
                <h2 className={`text-gray-900 dark:text-gray-100 ${
                  chat.unreadCount > 0 ? 'font-semibold' : 'font-medium'
                } truncate`}>
                  {chat.name}
                </h2>
                <span className={`text-xs ml-2 ${
                  chat.unreadCount > 0
                    ? 'text-emerald-600 dark:text-emerald-400 font-medium'
                    : 'text-gray-500 dark:text-gray-400'
                }`}>
                  {chat.timestamp}
                </span>
              </div>
              
              <div className="flex justify-between items-center mt-1">
                <div className="flex items-center space-x-1 flex-1 min-w-0">
                  {chat.isRead && (
                    <CheckCheck className="flex-shrink-0 h-4 w-4 text-blue-500 dark:text-blue-400" />
                  )}
                  <p className={`text-sm truncate ${
                    chat.unreadCount > 0
                      ? 'text-gray-900 dark:text-gray-100 font-medium'
                      : 'text-gray-500 dark:text-gray-400'
                  }`}>
                    {chat.lastMessage}
                  </p>
                </div>
                
                {chat.unreadCount > 0 && (
                  <span className="ml-2 flex-shrink-0 bg-emerald-500 dark:bg-emerald-600 text-white rounded-full px-2 py-0.5 text-xs font-medium min-w-[20px] text-center">
                    {chat.unreadCount}
                  </span>
                )}
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
}