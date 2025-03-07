'use client'

import { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { LogOut } from 'lucide-react';

export default function AccountCenter() {
  const [activeTab, setActiveTab] = useState('personal');
  const [userData, setUserData] = useState({
    fullName: '',
    email: '',
    contactNumber: '',
    password: ''
  });
  
  // State for dropdown sections in the plans tab
  const [expandedSections, setExpandedSections] = useState({
    maintenance: false,
    contentUpdate: false
  });

interface UserData {
    fullName: string;
    email: string;
    contactNumber: string;
    password: string;
}

interface ExpandedSections {
    maintenance: boolean;
    contentUpdate: boolean;
}

const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;
    setUserData((prev: UserData) => ({
        ...prev,
        [name]: value
    }));
};

  const handleLogout = () => {
    alert('Logged out successfully');
  };
  
const toggleSection = (section: keyof ExpandedSections): void => {
    setExpandedSections((prev: ExpandedSections) => ({
        ...prev,
        [section]: !prev[section]
    }));
};

  return (
    <div className="min-h-screen bg-[#0c0c0c] w-screen ml-17 text-white">
      <Head>
        <title>Account Center</title>
        <meta name="description" content="User account center" />
      </Head>
      
      {/* Header */}
      <header className="py-4 px-6 flex justify-between items-center border-b border-gray-700">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8">
          </div>
          <div className="text-xl font-semibold">Account Center</div>
        </div>
        
        <div className="flex items-center space-x-4">
          <div className="font-medium transition duration-300 hover:text-teal-400">
          </div>
          <div className="w-10 h-10 bg-teal-500 rounded-full flex items-center justify-center transition-transform duration-300 hover:scale-110">
            <span className="text-white text-lg font-bold">A</span>
          </div>
        </div>
      </header>
      
      {/* Navigation Tabs */}
      <nav className="py-4 px-6 border-b border-gray-700">
        <ul className="flex space-x-6">
          <li>
            <button 
              onClick={() => setActiveTab('personal')}
              className={`flex items-center space-x-2 transition duration-300 ${activeTab === 'personal' ? 'text-white' : 'text-gray-400 hover:text-white'}`}
            >
              <svg className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
              </svg>
              <span className="font-medium">Personal Details</span>
            </button>
          </li>
          <li>
            <button 
              onClick={() => setActiveTab('plans')}
              className={`flex items-center space-x-2 transition duration-300 ${activeTab === 'plans' ? 'text-white' : 'text-gray-400 hover:text-white'}`}
            >
              <svg className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
              </svg>
              <span className="font-medium">Active Plans</span>
            </button>
          </li>
        </ul>
      </nav>
      
      {/* Main content */}
      <main className="py-12 px-6 max-w-6xl mx-auto">
        {activeTab === 'personal' ? (
          // Personal Details Tab
          <>
            {/* User profile */}
            <div className="mb-12 transition-all duration-300 hover:transform hover:translate-y-1">
              <div className="flex items-center space-x-4 mb-2">
                <div className="w-16 h-16 bg-teal-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-2xl font-bold">A</span>
                </div>
                <div>
                  <h2 className="text-2xl font-semibold">Arav Menon</h2>
                  <p className="text-gray-400">arav.co@gmail.com</p>
                </div>
              </div>
            </div>
            
            {/* Form */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="space-y-2">
                <label className="block text-gray-300">Full name</label>
                <input 
                  type="text"
                  name="fullName"
                  value={userData.fullName}
                  onChange={handleChange}
                  className="w-full p-3 bg-gray-200 text-gray-800 rounded transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-teal-500 transform focus:scale-101"
                  placeholder="Enter your full name"
                />
              </div>
              
              <div className="space-y-2">
                <label className="block text-gray-300">Email</label>
                <input 
                  type="email"
                  name="email"
                  value={userData.email}
                  onChange={handleChange}
                  className="w-full p-3 bg-gray-200 text-gray-800 rounded transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-teal-500 transform focus:scale-101"
                  placeholder="Enter your email"
                />
              </div>
              
              <div className="space-y-2">
                <label className="block text-gray-300">Contact Number</label>
                <input 
                  type="tel"
                  name="contactNumber"
                  value={userData.contactNumber}
                  onChange={handleChange}
                  className="w-full p-3 bg-gray-200 text-gray-800 rounded transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-teal-500 transform focus:scale-101"
                  placeholder="Enter your contact number"
                />
              </div>
              
              <div className="space-y-2">
                <label className="block text-gray-300">Password</label>
                <input 
                  type="password"
                  name="password"
                  value={userData.password}
                  onChange={handleChange}
                  className="w-full p-3 bg-gray-200 text-gray-800 rounded transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-teal-500 transform focus:scale-101"
                  placeholder="Enter your password"
                />
              </div>
            </div>
          </>
        ) : (
          // Active Plans Tab - Membership Details
          <div className="bg-black rounded-lg p-6 transition-all duration-500 opacity-100 transform translate-y-0 animate-fade-in">
            <h2 className="text-xl font-medium mb-6">Membership details</h2>
            
            <div className="bg-gray-800 bg-opacity-50 rounded-lg p-6">
              <div className="mb-6">
                <div className="inline-block bg-indigo-700 text-white px-4 py-1 rounded-full text-sm font-medium mb-6 transition-all duration-300 hover:bg-indigo-600">
                  Member since Dec 1944
                </div>
              </div>
              
              <div className="space-y-4">
                <button 
                  onClick={() => toggleSection('maintenance')}
                  className="w-full flex items-center justify-between bg-black bg-opacity-80 p-3 rounded text-left text-white transition-all duration-300 hover:bg-opacity-100"
                >
                  <span>Website Maintenance & Support</span>
                  <svg 
                    className={`w-5 h-5 transition-transform duration-300 ${expandedSections.maintenance ? 'transform rotate-180' : ''}`} 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24" 
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                  </svg>
                </button>
                
                {expandedSections.maintenance && (
                  <div className="p-4 bg-gray-700 rounded mt-2 animate-fade-in">
                    <p>Our website maintenance package includes:</p>
                    <ul className="list-disc pl-5 mt-2 space-y-1">
                      <li>Regular updates & security patches</li>
                      <li>24/7 monitoring</li>
                      <li>Performance optimization</li>
                      <li>Technical support</li>
                    </ul>
                  </div>
                )}
                
                <button 
                  onClick={() => toggleSection('contentUpdate')}
                  className="w-full flex items-center justify-between bg-black bg-opacity-80 p-3 rounded text-left text-white transition-all duration-300 hover:bg-opacity-100"
                >
                  <span>Content Update Management & Bug Fixing</span>
                  <svg 
                    className={`w-5 h-5 transition-transform duration-300 ${expandedSections.contentUpdate ? 'transform rotate-180' : ''}`} 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24" 
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                  </svg>
                </button>
                
                {expandedSections.contentUpdate && (
                  <div className="p-4 bg-gray-700 rounded mt-2 animate-fade-in">
                    <p>Our content management service includes:</p>
                    <ul className="list-disc pl-5 mt-2 space-y-1">
                      <li>Content updates within 24 hours</li>
                      <li>Bug identification and fixing</li>
                      <li>Monthly content audit</li>
                      <li>SEO optimization for new content</li>
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
        
        <div className="flex justify-end mt-8">
          <button 
            onClick={handleLogout}
            className="bg-red-600 text-white px-4 py-2 rounded flex items-center transition-all duration-300 hover:bg-red-700 hover:shadow-lg transform hover:translate-y-1"
          >
            Log out 
            <LogOut className='ml-2' />
          </button>
        </div>
      </main>
    </div>
  );
}