"use client";

import { useState } from "react";
import { LogOut } from "lucide-react";

export default function InteractiveForm({
  initialData
}: {
  initialData: {
    fullName: string;
    email: string;
  };
}) {
  const [formData, setFormData] = useState({
    ...initialData,
    contactNumber: "",
    password: "",
  });

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-2 gap-6">
        <div className="space-y-2 animate-slide-up [animation-delay:200ms]">
          <label className="block text-sm text-gray-400">Full name</label>
          <input
            type="text"
            value={formData.fullName}
            onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
            className="w-full px-4 py-3 rounded-lg bg-gray-800/50 backdrop-blur-sm border border-gray-700 focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400 outline-none transition-all duration-500 hover:bg-gray-800/70"
          />
        </div>
        <div className="space-y-2 animate-slide-up [animation-delay:300ms]">
          <label className="block text-sm text-gray-400">Email</label>
          <input
            type="email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="w-full px-4 py-3 rounded-lg bg-gray-800/50 backdrop-blur-sm border border-gray-700 focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400 outline-none transition-all duration-500 hover:bg-gray-800/70"
          />
        </div>
        <div className="space-y-2 animate-slide-up [animation-delay:400ms]">
          <label className="block text-sm text-gray-400">Contact Number</label>
          <input
            type="tel"
            value={formData.contactNumber}
            onChange={(e) => setFormData({ ...formData, contactNumber: e.target.value })}
            className="w-full px-4 py-3 rounded-lg bg-gray-800/50 backdrop-blur-sm border border-gray-700 focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400 outline-none transition-all duration-500 hover:bg-gray-800/70"
            placeholder="Enter your contact number"
          />
        </div>
        <div className="space-y-2 animate-slide-up [animation-delay:500ms]">
          <label className="block text-sm text-gray-400">Password</label>
          <input
            type="password"
            value={formData.password}
            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
            className="w-full px-4 py-3 rounded-lg bg-gray-800/50 backdrop-blur-sm border border-gray-700 focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400 outline-none transition-all duration-500 hover:bg-gray-800/70"
            placeholder="Enter new password"
          />
        </div>
      </div>

      <div className="flex justify-between items-center pt-6 animate-fade-in [animation-delay:600ms]">
        <button className="group flex items-center gap-2 px-6 py-3 rounded-lg bg-red-500/10 text-red-500 transition-all duration-500 hover:bg-red-500/20">
          <LogOut className="w-5 h-5 transition-transform duration-500 group-hover:-translate-x-1" />
          Log out
        </button>
        <button className="relative px-6 py-3 rounded-lg overflow-hidden group">
          <span className="absolute inset-0 animate-border opacity-50 group-hover:opacity-100 transition-opacity duration-500"></span>
          <span className="relative px-6 py-3 bg-emerald-400 rounded-lg text-gray-900 font-medium transition-transform duration-500 group-hover:scale-105 block">
            Save Changes
          </span>
        </button>
      </div>
    </div>
  );
}