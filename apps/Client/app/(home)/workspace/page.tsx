// pages/index.js
'use client'

import { useState, useEffect } from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import { Github } from 'lucide-react';

export default function Home() {
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
    <div className="bg-[#0c0c0c] w-screen h-screen flex flex-col overflow-hidden">
      <Head>
        <title>Project Status Dashboard</title>
        <meta name="description" content="Track your project status" />
      </Head>
      
      <div className="flex-1 flex items-center justify-center p-4">
        <div className="max-w-4xl w-full mx-auto">
          <div className="bg-zinc-900 rounded-xl p-6 mb-6 border border-zinc-800">
            <div className="flex flex-col md:flex-row justify-between md:items-start gap-6">
              <div className="w-full md:w-1/2 h-48 bg-zinc-950 rounded-lg flex items-center justify-center">
                <p className="text-center text-white text-sm">
                  Website Display Image for<br />
                  Rep/Representation
                </p>
              </div>
              
              <div className="text-zinc-400 text-sm w-full md:w-1/2">
                <p className="text-zinc-500 mb-1">Project name</p>
                <p className="text-white mb-4">{projectData.name}</p>
                
                <p className="text-zinc-500 mb-1">Project ID</p>
                <p className="text-white mb-4">{projectData.id}</p>
                
                <p className="text-zinc-500 mb-1">Status</p>
                <div className="flex items-center mb-4">
                  <div className="w-2 h-2 rounded-full bg-green-500 mr-2"></div>
                  <p className="text-white">{projectData.status}</p>
                </div>
                
                <p className="text-zinc-500 mb-1">Uploaded</p>
                <p className="text-white mb-4">{projectData.uploaded}</p>
                
                <p className="text-zinc-500 mb-1">Source</p>
                <div className="flex items-center">
                  <Github size={16} className="mr-2" />
                  <p className="text-white">{projectData.source}</p>
                </div>
                <p className="text-white">{projectData.deadline}</p>
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