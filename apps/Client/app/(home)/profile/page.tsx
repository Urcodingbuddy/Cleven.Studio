"use client"

import { useState } from "react"
import { LogOut, User, HandCoins, Headset } from "lucide-react"
import { signOut, useSession } from "next-auth/react"
import { motion } from "motion/react"
import Link from "next/link"

export default function AccountCenter() {
  const [activeTab, setActiveTab] = useState("personal")
  const { data: session } = useSession()
  const [userData, setUserData] = useState({
    fullName: "",
    email: "",
    contactNumber: "",
    password: "",
  })

  // State for dropdown sections in the plans tab
  const [expandedSections, setExpandedSections] = useState({
    maintenance: false,
    contentUpdate: false,
  })

  // Simple modal state
  const [isModalOpen, setIsModalOpen] = useState(false)

  interface ExpandedSections {
    maintenance: boolean
    contentUpdate: boolean
  }

  const toggleSection = (section: keyof ExpandedSections): void => {
    setExpandedSections((prev: ExpandedSections) => ({
      ...prev,
      [section]: !prev[section],
    }))
  }

  const handleLogout = async () => {
    await signOut({ redirect: false })
    setIsModalOpen(true)
  }

  return (
    <div className="bg-[#0c0c0c] overflow-auto w-screen text-white rounded-2xl mr-3 my-3 p-6">
      {/* Header */}
      <header className="py-4 px-6 flex justify-between mb-10 items-center border-gray-700">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8"></div>
          <div className="text-xl font-semibold">Account Center</div>
        </div>
      </header>

      {/* Navigation Tabs */}
      <nav className="py-6 px-8 relative">
        <ul className="flex items-center gap-8">
          {[
            { id: "personal", label: "Personal Details", icon: <User className="w-5 h-5" /> },
            { id: "plans", label: "Active Plans", icon: <HandCoins size={24} strokeWidth={1.5} /> },
          ].map((tab) => (
            <li key={tab.id} className="relative">
              <button
                onClick={() => setActiveTab(tab.id)}
                className={`
                  flex items-center gap-3 px-4 py-2
                  transition-all duration-300 ease-out
                  ${activeTab === tab.id ? "text-white" : "text-gray-400 hover:text-white"}
                `}
              >
                {tab.icon}
                <span className="font-medium">{tab.label}</span>
              </button>
              {activeTab === tab.id && (
                <motion.div
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-white"
                  layoutId="activeTab"
                  transition={{
                    type: "spring",
                    stiffness: 380,
                    damping: 30,
                  }}
                />
              )}
            </li>
          ))}
          <Link href="/help-center">
            <span className="text-gray-400 hover:text-white flex items-center gap-2">
              <Headset className="w-6 h-6" /> Help Center
            </span>
          </Link>
        </ul>
      </nav>

      {/* Main content */}
      <main className="py-12 px-6 max-w-6xl mx-auto ">
        {activeTab === "personal" ? (
          // Personal Details Tab
          <motion.div
            className="mb-12 transition-all duration-500 opacity-100 transform translate-y-0 animate-fade-in"
            initial={{ opacity: 0, translateY: 20 }}
            animate={{ opacity: 1, translateY: 0 }}
            exit={{ opacity: 0, translateY: 20 }}
          >
            {/* User profile */}
            <div className="mb-12 transition-all duration-300 hover:transform hover:translate-y-1">
              <div className="flex items-center space-x-4 mb-2">
                <div className="w-16 h-16 hover:border-2 hover:border-white rounded-full flex items-center justify-center">
                  {session?.user?.image ? (
                    <img src={session.user.image || "/placeholder.svg"} className="rounded-full" alt="Profile" />
                  ) : (
                    <img
                      src={`https://robohash.org/${session?.user?.name}.png?size=200x200`}
                      className="rounded-full border"
                      alt=""
                    />
                  )}
                </div>
                {session?.user ? (
                  <div>
                    <h2 className="text-2xl font-semibold">{session.user.name}</h2>
                    <p className="text-gray-400">{session.user.email}</p>
                  </div>
                ) : (
                  <div>
                    <h2 className="text-2xl font-semibold">user</h2>
                    <p className="text-gray-400">user@gmail.com</p>
                  </div>
                )}
              </div>
            </div>

            {/* Form */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="space-y-2">
                <label className="block text-gray-300">Full name</label>
                <input
                  type="text"
                  name="fullName"
                  value={session?.user?.name || ""}
                  disabled={true}
                  readOnly={true}
                  className="w-full p-3 cursor-not-allowed bg-gray-200 text-gray-800 rounded transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-teal-500"
                  placeholder="Enter your full name"
                />
              </div>

              <div className="space-y-2">
                <label className="block text-gray-300">Email</label>
                <input
                  type="email"
                  name="email"
                  value={session?.user?.email || ""}
                  disabled={true}
                  readOnly={true}
                  className="w-full p-3 cursor-not-allowed bg-gray-200 text-gray-800 rounded transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-teal-500"
                  placeholder="Enter your email"
                />
              </div>

              <div className="space-y-2">
                <label className="block text-gray-300">Contact Number</label>
                <input
                  type="tel"
                  name="contactNumber"
                  value={userData.contactNumber}
                  onChange={(e) => setUserData({ ...userData, contactNumber: e.target.value })}
                  className="w-full p-3 bg-gray-200 text-gray-800 rounded transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-teal-500"
                  placeholder="Enter your contact number"
                />
              </div>

              <div className="space-y-2">
                <label className="block text-gray-300">Password</label>
                <input
                  type="password"
                  name="password"
                  value={userData.password}
                  onChange={(e) => setUserData({ ...userData, password: e.target.value })}
                  className="w-full p-3 bg-gray-200 text-gray-800 rounded transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-teal-500"
                  placeholder="Enter your password"
                />
              </div>
            </div>

            <div className="flex justify-end mt-8">
              <button
                onClick={handleLogout}
                className="bg-red-600 text-white px-4 py-2 rounded flex items-center transition-all duration-300 hover:bg-red-700 hover:shadow-lg transform hover:translate-y-1 cursor-pointer"
              >
                Log out
                <LogOut className="ml-2" />
              </button>
            </div>
          </motion.div>
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
                  onClick={() => toggleSection("maintenance")}
                  className="w-full flex items-center justify-between bg-black bg-opacity-80 p-3 rounded text-left text-white transition-all duration-300 hover:bg-opacity-100"
                >
                  <span>Website Maintenance & Support</span>
                  <svg
                    className={`w-5 h-5 transition-transform duration-300 ${expandedSections.maintenance ? "transform rotate-180" : ""}`}
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
                  onClick={() => toggleSection("contentUpdate")}
                  className="w-full flex items-center justify-between bg-black bg-opacity-80 p-3 rounded text-left text-white transition-all duration-300 hover:bg-opacity-100"
                >
                  <span>Content Update Management & Bug Fixing</span>
                  <svg
                    className={`w-5 h-5 transition-transform duration-300 ${expandedSections.contentUpdate ? "transform rotate-180" : ""}`}
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

        {/* Simple Modal for logout confirmation */}
        {isModalOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-gray-800 rounded-lg p-6 max-w-md w-full">
              <h3 className="text-xl font-semibold mb-4">Logout</h3>
              <p>You are logged out from Cleven.Studio</p>
              <div className="flex justify-end mt-6">
                <Link href="/">
                  <button
                    onClick={() => setIsModalOpen(false)}
                    className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors"
                  >
                    OK
                  </button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  )
}

