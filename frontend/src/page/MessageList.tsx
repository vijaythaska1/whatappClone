import React, { useEffect, useRef } from 'react';
import { Check, CheckCheck, Image } from 'lucide-react';

interface Message {
  id: string;
  text: string;
  sender: 'me' | 'them';
  timestamp: string;
  status: 'sent' | 'delivered' | 'read';
  avatar?: string;
  image?: string;
}

const messages: Message[] = [
  { 
    id: '1', 
    text: "Hey there! How's it going?", 
    sender: 'them', 
    timestamp: '10:30 AM', 
    status: 'read',
    avatar: '/api/placeholder/32/32'
  },
  { 
    id: '2', 
    text: "Hi! I'm doing well, thanks for asking. How about you?", 
    sender: 'me', 
    timestamp: '10:32 AM', 
    status: 'read'
  },
  { 
    id: '3', 
    text: "That's great to hear! I'm doing pretty good too. Did you finish that project you were working on?", 
    sender: 'them', 
    timestamp: '10:33 AM', 
    status: 'read',
    avatar: '/api/placeholder/32/32'
  },
  { 
    id: '4', 
    text: "Yes, I did! It was challenging but I learned a lot. I'm really happy with how it turned out.", 
    sender: 'me', 
    timestamp: '10:35 AM', 
    status: 'delivered',
    image: '/api/placeholder/300/200'
  },
  { 
    id: '5', 
    text: "That's awesome! Congratulations on completing it. Would you like to catch up over coffee sometime this week to discuss it?", 
    sender: 'them', 
    timestamp: '10:36 AM', 
    status: 'sent',
    avatar: '/api/placeholder/32/32'
  },
];

export default function MessageList() {
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(scrollToBottom, [messages]);

  const formatDate = (timestamp: string) => {
    return timestamp; // In a real app, you'd format this based on current time
  };

  const renderMessageContent = (message: Message) => {
    return (
      <>
        {message.image && (
          <div className="mb-2 relative group">
            <img 
              src={message.image} 
              alt="Shared image" 
              className="rounded-lg max-w-full max-h-60 cursor-pointer hover:opacity-95 transition-opacity"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all">
              <Image className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          </div>
        )}
        <p className="text-gray-900 dark:text-gray-100 break-words whitespace-pre-wrap">
          {message.text}
        </p>
      </>
    );
  };

  return (
    <div className="flex-1 overflow-y-auto p-4 bg-gray-100 dark:bg-gray-900">
      <div className="max-w-3xl mx-auto space-y-4">
        {/* Date separator */}
        <div className="flex justify-center">
          <span className="px-4 py-1 text-xs bg-white dark:bg-gray-800 text-gray-500 dark:text-gray-400 rounded-full shadow-sm">
            Today
          </span>
        </div>

        {messages.map((message, index) => {
          const showAvatar = message.sender === 'them' && 
            (!messages[index - 1] || messages[index - 1].sender !== 'them');
          
          return (
            <div
              key={message.id}
              className={`flex ${message.sender === 'me' ? 'justify-end' : 'justify-start'} items-end space-x-2`}
            >
              {/* Avatar for 'them' messages */}
              {message.sender === 'them' && (
                <div className={`flex-shrink-0 w-8 ${!showAvatar && 'invisible'}`}>
                  {showAvatar && (
                    <img 
                      src={message.avatar} 
                      alt="Avatar" 
                      className="w-8 h-8 rounded-full"
                    />
                  )}
                </div>
              )}

              <div
                className={`group relative max-w-[70%] rounded-2xl px-4 py-2 shadow-sm
                  ${message.sender === 'me' 
                    ? 'bg-emerald-100 dark:bg-emerald-900 rounded-tr-none' 
                    : 'bg-white dark:bg-gray-800 rounded-tl-none'
                  }
                `}
              >
                {/* Message content */}
                <div className="relative">
                  {renderMessageContent(message)}
                  
                  {/* Timestamp and status */}
                  <div className={`flex items-center justify-end mt-1 space-x-1 
                    opacity-60 group-hover:opacity-100 transition-opacity
                  `}>
                    <span className="text-xs text-gray-500 dark:text-gray-400">
                      {formatDate(message.timestamp)}
                    </span>
                    {message.sender === 'me' && (
                      <span className="text-gray-500 dark:text-gray-400">
                        {message.status === 'sent' && 
                          <Check className="h-4 w-4" />
                        }
                        {message.status === 'delivered' && 
                          <CheckCheck className="h-4 w-4" />
                        }
                        {message.status === 'read' && 
                          <CheckCheck className="h-4 w-4 text-blue-500 dark:text-blue-400" />
                        }
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
        <div ref={messagesEndRef} />
      </div>
    </div>
  );
}