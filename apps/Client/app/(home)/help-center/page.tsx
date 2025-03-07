"use client";

import { useState } from "react";
import { Search, Filter, MessageSquare, BookOpen, HelpCircle, Lock, Bug } from "lucide-react";
import { motion } from "framer-motion";
// import { FaDiscord } from "react-icons/fa";
import FAQ from "@repo/components/FAQ";

export default function HelpCenter() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="min-h-screen ml-16 w-screen bg-black text-white">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Header */}
          <div className="flex items-center gap-3 mb-16">
             {/* <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="w-12 h-12"
            >
             <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12 18C15.3137 18 18 15.3137 18 12C18 8.68629 15.3137 6 12 6C8.68629 6 6 8.68629 6 12C6 15.3137 8.68629 18 12 18Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12 14C13.1046 14 14 13.1046 14 12C14 10.8954 13.1046 10 12 10C10.8954 10 10 10.8954 10 12C10 13.1046 10.8954 14 12 14Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg> */}
              {/* <img src="./Cleven removeBg.png" className="h-14 w-20 object-cover " alt="" /> */}
            </motion.div>
              </svg>
              <img src="./Cleven removeBg.png" className="h-12 w-12 object-cover  " alt="" />
            </motion.div> */}
            <motion.h1 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-2xl font-semibold"
            >
              Help Center
            </motion.h1>
          </div>

          {/* Main Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-3xl font-bold text-center mb-8"
          >
            How Can We Help You?
          </motion.h2>

          {/* Search Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="relative mb-16"
          >
            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <Search className="w-5 h-5 text-gray-500" />
              </div>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full p-4 pl-10 pr-12 rounded-md bg-[#1A1A1A] border-gray-800 focus:border-gray-700 focus:outline-none transition-colors"
                placeholder="Search for articles, tickets, or chat history..."
              />
              <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                <Filter className="w-5 h-5 text-gray-500 hover:text-gray-300 cursor-pointer transition-colors" />
              </div>
            </div>
          </motion.div>

          {/* Quick Access */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mb-16"
          >
            <h3 className="text-xl font-semibold mb-6">Quick Access</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <motion.div
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="bg-[#1A1A1A] border border-gray-800 rounded-lg p-6 flex flex-col items-center justify-center cursor-pointer hover:bg-gray-800 transition-colors"
              >
                <HelpCircle className="w-8 h-8 mb-3 text-gray-300" />
                <span className="text-center">Get Started</span>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="bg-[#1A1A1A] border border-gray-800 rounded-lg p-6 flex flex-col items-center justify-center cursor-pointer hover:bg-gray-800 transition-colors"
              >
                <MessageSquare className="w-8 h-8 mb-3 text-gray-300" />
                <span className="text-center">Live Chat</span>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="bg-[#1A1A1A] border border-gray-800 rounded-lg p-6 flex flex-col items-center justify-center cursor-pointer hover:bg-gray-800 transition-colors"
              >
                <BookOpen className="w-8 h-8 mb-3 text-gray-300" />
                <span className="text-center">Knowledge Base</span>
              </motion.div>
            </div>
          </motion.div>

          {/* Help & Support */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="mb-16"
          >
            <h3 className="text-xl font-semibold mb-6">Help & Support</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <motion.div
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="bg-[#1A1A1A] border border-gray-800 rounded-lg p-6 flex flex-col items-center justify-center cursor-pointer hover:bg-gray-800 transition-colors"
              >
                <HelpCircle className="w-8 h-8 mb-3 text-gray-300" />
                <span className="text-center">FAQ's</span>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="bg-[#1A1A1A] border border-gray-800 rounded-lg p-6 flex flex-col items-center justify-center cursor-pointer hover:bg-gray-800 transition-colors"
              >
                <Lock className="w-8 h-8 mb-3 text-gray-300" />
                <span className="text-center">Reset Password</span>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="bg-[#1A1A1A] border border-gray-800 rounded-lg p-6 flex flex-col items-center justify-center cursor-pointer hover:bg-gray-800 transition-colors"
              >
                <Bug className="w-8 h-8 mb-3 text-gray-300" />
                <span className="text-center">Report Bug</span>
              </motion.div>
            </div>
          </motion.div>

          {/* Community */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <h3 className="text-xl font-semibold mb-6">Collaborate with the Cleven.studio community!</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <motion.div
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="bg-gray-900 border border-gray-800 rounded-lg p-4 flex items-center justify-center gap-3 cursor-pointer hover:bg-gray-800 transition-colors"
              >

                <span>Discord</span>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="bg-gray-900 border border-gray-800 rounded-lg p-4 flex items-center justify-center gap-3 cursor-pointer hover:bg-gray-800 transition-colors"
              >
                <svg viewBox="0 0 24 24" width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-teal-400">
                  <path d="M22 12a10 10 0 1 1-20 0 10 10 0 0 1 20 0Z"></path>
                  <path d="M16 8a4 4 0 0 0-8 0v4a4 4 0 1 0 8 0Z"></path>
                </svg>
                <span>Slack</span>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
        {/* <FAQ/> */}
      </div>
    </div>
  );
}

