"use client";

import { CircleDot, Download, FolderGit2, RefreshCw } from "lucide-react";
import { useState } from "react";

export default function Home() {
  const [projectName] = useState("myhost.Website.Name.com");
  const [projectId] = useState("#00001");
  const [status] = useState("Unlimited");
  const [ready] = useState("12/3/24 by UnsolicitedDev");
  const [source] = useState("17 GitHub");
  const [domain] = useState("14/4/24");

  return (
    <main className="min-h-screen w-screen bg-[#0c0c0c] p-6 pl-24 transition-all duration-300 text-white group-hover:pl-72">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-2">
          <FolderGit2 className="w-6 h-6" />
          <span className="text-sm">Recent Project</span>
        </div>
        <div className="text-sm text-gray-400">ID - #{projectId}</div>
      </div>

      {/* Main Content */}
      <div className="bg-[#23262b55] rounded-lg p-6 w-[80%] ml-38 " >
        <div className="flex gap-6">
          {/* Project Preview */}
          <div className="w-80 h-68 bg-black rounded-lg flex items-center justify-center">
            <span className="text-sm text-gray-400 text-center">
              Website Display Image for<br />Presentation
            </span>
          </div>

          {/* Project Info */}
          <div className="flex-1">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <div className="text-sm text-gray-400 mb-1">Project name</div>
                <div className="text-sm">{projectName}</div>
              </div>
              <div className="text-right">
                <div className="text-sm text-gray-400 mb-1">Project I.D</div>
                <div className="text-sm">{projectId}</div>
              </div>
              <div>
                <div className="text-sm text-gray-400 mb-1">Status</div>
                <div className="text-sm">{status}</div>
              </div>
              <div className="text-right">
                <div className="text-sm text-gray-400 mb-1">Ready</div>
                <div className="text-sm">{ready}</div>
              </div>
              <div>
                <div className="text-sm text-gray-400 mb-1">Source</div>
                <div className="text-sm">{source}</div>
              </div>
              <div className="text-right">
                <div className="text-sm text-gray-400 mb-1">Domain</div>
                <div className="text-sm">{domain}</div>
              </div>
            </div>
          </div>

          {/* Settings Button */}
          <div>
            <button className="w-10 h-10 rounded-full border border-gray-600 flex items-center justify-center">
              <RefreshCw className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Insights Section */}
      <div className="mt-8">
        <h2 className="text-lg mb-6">Insights</h2>
        <div className="bg-[#23262b55] rounded-lg ml-38 w-[80%] p-6">
          {/* Progress Steps */}
          <div className="flex items-center justify-between mb-8 relative">
            <div className="absolute left-0 right-0 top-1/2 h-[2px] bg-gray-600 -translate-y-1/2 z-0" />
            {["File Fetched", "Injecting", "Working", "Complete"].map((step, index) => (
              <div key={index} className="relative z-10 flex flex-col items-center gap-2">
                <div className={`w-4 h-4 rounded-full ${index === 1 ? "bg-white" : "bg-gray-600"} flex items-center justify-center`}>
                  {index === 1 && <CircleDot className="w-3 h-3 text-white" />}
                </div>
                <span className="text-sm text-gray-400">{step}</span>
              </div>
            ))}
          </div>

          {/* Notification */}
          <div className="text-center text-sm text-gray-400 mb-8">
            You will be Notified via Mail When your Project is Completed.
          </div>

          {/* Action Buttons */}
          <div className="flex justify-center gap-4">
            <button className="bg-[#1c1c1c] hover:bg-[#2c2c2c] cursor-pointer text-white px-6 py-2 rounded-lg text-sm flex items-center gap-2">
              <Download className="w-4 h-4" />
              Download Your File
            </button>
            <div className="text-gray-400 flex items-center">OR</div>
            <button className="bg-[#1c1c1c] hover:bg-[#2c2c2c] cursor-pointer text-white px-6 py-2 rounded-lg text-sm">
              Check Uploaded Repository
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}