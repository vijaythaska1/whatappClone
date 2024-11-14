import React, { useState, useRef } from 'react';
import { Smile, Paperclip, Send, Mic, Image, X } from 'lucide-react';

export default function MessageInput() {
  const [message, setMessage] = useState('');
  const [isEmojiOpen, setIsEmojiOpen] = useState(false);
  const [isRecording, setIsRecording] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim()) {
      console.log('Sending message:', message);
      setMessage('');
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e);
    }
  };

  const focusInput = () => {
    inputRef.current?.focus();
  };

  return (
    <div className="border-t border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900">
      {/* Attachment Preview - can be shown conditionally */}
      <div className="hidden px-4 py-2 bg-gray-50 dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
        <div className="flex items-center space-x-2">
          <div className="relative group">
            <img src="/api/placeholder/100/100" alt="Attachment preview" className="w-20 h-20 object-cover rounded-md" />
            <button className="absolute -top-2 -right-2 bg-gray-800 dark:bg-gray-700 text-white p-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
              <X className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Input Area */}
      <form onSubmit={handleSubmit} className="flex items-center space-x-2 p-3 bg-gray-50 dark:bg-gray-800">
        <div className="flex space-x-2">
          <button
            type="button"
            onClick={() => setIsEmojiOpen(!isEmojiOpen)}
            className="p-2 text-gray-500 hover:text-emerald-500 dark:text-gray-400 dark:hover:text-emerald-400 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-200"
            aria-label="Insert emoji"
          >
            <Smile className="h-6 w-6" />
          </button>
          <button
            type="button"
            className="p-2 text-gray-500 hover:text-emerald-500 dark:text-gray-400 dark:hover:text-emerald-400 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-200"
            aria-label="Attach file"
          >
            <Paperclip className="h-6 w-6" />
          </button>
          <button
            type="button"
            className="p-2 text-gray-500 hover:text-emerald-500 dark:text-gray-400 dark:hover:text-emerald-400 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-200"
            aria-label="Attach image"
          >
            <Image className="h-6 w-6" />
          </button>
        </div>

        <div className="flex-1 relative">
          <input
            ref={inputRef}
            type="text"
            placeholder="Type a message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyPress={handleKeyPress}
            className="w-full py-2.5 px-4 bg-white dark:bg-gray-700 rounded-full text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 dark:focus:ring-emerald-400 border border-gray-200 dark:border-gray-600"
          />
          {isEmojiOpen && (
            <div className="absolute bottom-full mb-2 left-0 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-2 border border-gray-200 dark:border-gray-700">
              {/* Emoji picker placeholder */}
              <div className="grid grid-cols-6 gap-1">
                {['😊', '😂', '❤️', '👍', '🎉', '🔥'].map((emoji) => (
                  <button
                    key={emoji}
                    onClick={() => {
                      setMessage(prev => prev + emoji);
                      focusInput();
                    }}
                    className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded transition-colors"
                  >
                    {emoji}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        {message.trim() ? (
          <button
            type="submit"
            className="p-2 bg-emerald-500 dark:bg-emerald-600 text-white rounded-full hover:bg-emerald-600 dark:hover:bg-emerald-700 transition-all duration-200 transform hover:scale-105"
            aria-label="Send message"
          >
            <Send className="h-6 w-6" />
          </button>
        ) : (
          <button
            type="button"
            onClick={() => setIsRecording(!isRecording)}
            className={`p-2 rounded-full transition-all duration-200 ${
              isRecording
                ? 'bg-red-500 text-white animate-pulse'
                : 'text-gray-500 hover:text-emerald-500 dark:text-gray-400 dark:hover:text-emerald-400 hover:bg-gray-100 dark:hover:bg-gray-700'
            }`}
            aria-label="Record voice message"
          >
            <Mic className="h-6 w-6" />
          </button>
        )}
      </form>

      {/* Recording indicator */}
      {isRecording && (
        <div className="px-4 py-2 bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 text-sm flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
            <span>Recording voice message...</span>
          </div>
          <button
            onClick={() => setIsRecording(false)}
            className="text-red-600 dark:text-red-400 hover:text-red-700 dark:hover:text-red-300"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
      )}
    </div>
  );
}