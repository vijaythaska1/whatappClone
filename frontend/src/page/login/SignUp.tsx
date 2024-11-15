'use client'

import React, { useState } from 'react'
import { ArrowLeft, ChevronDown, Eye, EyeOff } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function SignUp() {
  const [phoneNumber, setPhoneNumber] = useState('')
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle sign up logic here
    console.log('Sign up:', { phoneNumber, name, password })
  }

  return (
    <div className="min-h-screen bg-[#f0f2f5] flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-md bg-white rounded-lg shadow-md overflow-hidden animate-fadeIn">
        <div className="bg-[#008069] text-white p-4 flex items-center">
          <button className="mr-4 transition-transform duration-200 hover:scale-110">
            <ArrowLeft size={24} />
          </button>
          <h1 className="text-xl font-semibold flex-1 animate-slideInFromRight">Sign up</h1>
        </div>
        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          <div className="animate-slideInFromLeft" style={{ animationDelay: '0.1s' }}>
            <label htmlFor="phone" className="block text-sm font-medium text-[#008069] mb-1">
              Phone number
            </label>
            <div className="flex">
              <button className="flex items-center justify-center px-3 border border-r-0 border-[#d1d7db] rounded-l-md bg-white text-[#3b4a54] transition-colors duration-200 hover:bg-[#f0f2f5]">
                +1 <ChevronDown size={16} className="ml-1" />
              </button>
              <input
                type="tel"
                id="phone"
                className="flex-1 p-2 border border-[#d1d7db] rounded-r-md focus:outline-none focus:ring-2 focus:ring-[#008069] transition-all duration-200"
                placeholder="Enter phone number"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                required
              />
            </div>
          </div>
          <div className="animate-slideInFromLeft" style={{ animationDelay: '0.2s' }}>
            <label htmlFor="name" className="block text-sm font-medium text-[#008069] mb-1">
              Name
            </label>
            <input
              type="text"
              id="name"
              className="w-full p-2 border border-[#d1d7db] rounded-md focus:outline-none focus:ring-2 focus:ring-[#008069] transition-all duration-200"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="animate-slideInFromLeft" style={{ animationDelay: '0.3s' }}>
            <label htmlFor="password" className="block text-sm font-medium text-[#008069] mb-1">
              Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                id="password"
                className="w-full p-2 border border-[#d1d7db] rounded-md focus:outline-none focus:ring-2 focus:ring-[#008069] transition-all duration-200"
                placeholder="Create a password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <button
                type="button"
                className="absolute inset-y-0 right-0 pr-3 flex items-center text-[#8696a0] transition-colors duration-200 hover:text-[#3b4a54]"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
          </div>
          <button
            type="submit"
            className="w-full bg-[#008069] text-white py-2 px-4 rounded-md hover:bg-[#017561] transition-all duration-200 transform hover:scale-105 animate-fadeIn"
            style={{ animationDelay: '0.4s' }}
          >
            Sign Up
          </button>
        </form>
        <div className="px-6 pb-6 text-center text-sm text-[#8696a0] animate-fadeIn" style={{ animationDelay: '0.5s' }}>
          Already have an account?{' '}
          <Link to={"/"}  className="text-[#008069] hover:underline transition-colors duration-200">
            Log in
          </Link>
        </div>
      </div>
    </div>
  )
}