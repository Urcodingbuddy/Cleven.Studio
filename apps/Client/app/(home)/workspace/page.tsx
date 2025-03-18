// pages/index.js
'use client'

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';


export default function WorkSpace() {
  const [progress, setProgress] = useState(0);
  const [status, setStatus] = useState('File fetched');

  // Simulate progress
  useEffect(() => {
    const timer = setTimeout(() => {
      if (progress < 100) {
        const newProgress = Math.min(progress + 2, 100);
        setProgress(newProgress);
        if (newProgress > 25 && newProgress <= 50) {
          setStatus('Injecting');
        } else if (newProgress > 50 && newProgress < 90) {
          setStatus('Working');
        } else if (newProgress >= 90) {
          setStatus('complete');
        }
      }
    }, 200);

    return () => clearTimeout(timer);
  }, [progress]);

  const projectData = {
    name: "xyz/xyz.field.challenge.com",
    id: "#2001001",
    status: "running",
    uploaded: "01/14/24 by cloudofjustify",
    source: "GitHub",
    deadline: "02/14/24"
  };

  const recentProjects = [
    { id: 1, name: "Project Alpha" },
    { id: 2, name: "Project Beta" },
    { id: 3, name: "Project Gamma" },
    { id: 4, name: "Project Delta" }
  ];

  return (
    // Dont Touch this div 
    <div className="bg-[#0c0c0c] overflow-auto w-screen flex flex-col p-6 pt-12 rounded-2xl mr-3 my-3 ">
      <div className="flex-1 flex items-center justify-center">
        <div className="max-w-6xl  w-full mx-auto">
          <div className="backdrop-blur-xl bg-zinc-950 shadow-2xl rounded-xl p-6 mb-6 border border-zinc-700">
            <div className="flex flex-col md:flex-row items-center gap-10">
              <div className='md:w-1/2  w-full'>
                <div className="w-full bg-gradient-to-bl from-blue-800 via-blue-600 to-blue-400 bg-opacity-40 backdrop-blur-lg rounded-lg h-72 flex items-center justify-center">
                  <p className="text-center text-white text-sm p-10">
                    No Project uploaded yet. Upload your project to get started.
                  </p>
                </div>
              </div>
              <div className="md:w-1/2 w-full h-72 flex items-center">
                <div className="text-zinc-400 text-sm w-full flex flex-col gap-6">
                  <div>
                    <p className="text-zinc-500 mb-1">Project name</p>
                    <p className="text-white">{projectData.name}</p>
                  </div>
                  <div>
                    <p className="text-zinc-500 mb-1">Project ID</p>
                    <p className="text-white">{projectData.id}</p>
                  </div>
                  <div className="flex">
                    <div className='flex flex-col w-1/2'>
                      <p className="text-zinc-500 ">Status</p>
                      <div className='flex items-center'>
                        <div className="w-2 h-2 rounded-full bg-green-500 mr-2"></div>
                        <p className="text-white">{projectData.status}</p>
                      </div>
                    </div>
                    <div className='w-1/2'>
                      <p className="text-zinc-500">Uploaded</p>
                      <p className="text-white">{projectData.uploaded}</p>
                    </div>
                  </div>
                  <div className="flex">
                    <div className='w-1/2'>
                      <p className="text-zinc-500 mb-1">Source</p>
                      <p className="text-white">{projectData.source}</p>
                    </div>
                    <div className='w-1/2'>
                      <p className="text-zinc-500 mb-1">Expected Deadline</p>
                      <p className="text-white">{projectData.deadline}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="text-white mb-6">
            <p className="text-lg font-medium mb-4">Project Id :- #2334SD3</p>
            <div className="relative pt-4 pb-8">
              <div className="w-full bg-zinc-800 h-1 rounded-full">
                <motion.div
                  className="bg-white h-1 rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 0.5 }}
                />
              </div>
              <div className="flex justify-between mt-2 text-sm">
                <div className={`transition-colors duration-300 ${status === 'File fetched' ? 'text-white' : 'text-zinc-500'}`}>
                  <motion.div
                    className={`w-3 h-3 bg-white rounded-full mb-1 mx-auto transition-all duration-300 ${progress > 0 ? 'scale-100' : 'scale-0'}`}
                    initial={{ scale: 0 }}
                    animate={{ scale: progress > 0 ? 1 : 0 }}
                  />
                  File fetched
                </div>
                <div className={`transition-colors duration-300 ${status === 'Injecting' ? 'text-white' : 'text-zinc-500'}`}>
                  <motion.div
                    className={`w-3 h-3 bg-white rounded-full mb-1 mx-auto transition-all duration-300 ${progress > 25 ? 'scale-100' : 'scale-0'}`}
                    initial={{ scale: 0 }}
                    animate={{ scale: progress > 25 ? 1 : 0 }}
                  />
                  Injecting
                </div>
                <div className={`transition-colors duration-300 ${status === 'Working' ? 'text-white' : 'text-zinc-500'}`}>
                  <motion.div
                    className={`w-3 h-3 bg-white rounded-full mb-1 mx-auto transition-all duration-300 ${progress > 50 ? 'scale-100' : 'scale-0'}`}
                    initial={{ scale: 0 }}
                    animate={{ scale: progress > 50 ? 1 : 0 }}
                  />
                  Working
                </div>
                <div className={`transition-colors duration-300 ${status === 'complete' ? 'text-white' : 'text-zinc-500'}`}>
                  <motion.div
                    className={`w-3 h-3 bg-white rounded-full mb-1 mx-auto transition-all duration-300 ${progress > 90 ? 'scale-100' : 'scale-0'}`}
                    initial={{ scale: 0 }}
                    animate={{ scale: progress > 90 ? 1 : 0 }}
                  />
                  complete
                </div>
              </div>
            </div>
            <p className="text-center text-zinc-400 text-sm mb-6">
              You will be Notified via Mail When your Project is Completed.
            </p>
            <div className="flex justify-center gap-4 mb-6">
              <motion.button
                className="bg-zinc-800 text-white py-2 px-4 rounded-md hover:bg-zinc-700 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Download file
              </motion.button>
              <span className="text-zinc-500 flex items-center">OR</span>
              <motion.button
                className="bg-zinc-800 text-white py-2 px-4 rounded-md hover:bg-zinc-700 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Check updated repo
              </motion.button>
            </div>
            <p className="mb-4">Recent projects</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              {recentProjects.map(project => (
                <motion.div
                  key={project.id}
                  className="bg-zinc-800 p-4 rounded-md cursor-pointer"
                  whileHover={{ y: -2, backgroundColor: '#3b3b3b' }}
                  transition={{ duration: 0.2 }}
                >
                  {project.name}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}