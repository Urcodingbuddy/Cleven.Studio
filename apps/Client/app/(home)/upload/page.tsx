"use client";

import { useState } from "react";
import { Upload, X, FileText, Github, GitBranch, Tag, Clock, Users, ChevronDown, Folder } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Home() {
  const [dragActive, setDragActive] = useState(false);
  const [link, setLink] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [file, setFile] = useState<File | null>(null);
  const [visibility, setVisibility] = useState("private");
  const [category, setCategory] = useState("");
  const [tags, setTags] = useState<string[]>([]);
  const [currentTag, setCurrentTag] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);
  const [step, setStep] = useState(1);

  const categories = ["Web Development", "Mobile App", "Data Science", "Machine Learning", "DevOps", "Design"];

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      setFile(e.dataTransfer.files[0]);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  const handleRemoveFile = () => {
    setFile(null);
  };

  const addTag = () => {
    if (currentTag.trim() !== "" && !tags.includes(currentTag.trim())) {
      setTags([...tags, currentTag.trim()]);
      setCurrentTag("");
    }
  };

  const removeTag = (tagToRemove: string) => {
    setTags(tags.filter(tag => tag !== tagToRemove));
  };

  const handleTagKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      addTag();
    }
  };

  const nextStep = () => {
    if (step < 2) setStep(step + 1);
  };

  const prevStep = () => {
    if (step > 1) setStep(step - 1);
  };

  return (
    // Dont Touch this div 
    <div className="w-screen overflow-y-scroll bg-[#0E0E0E] text-white rounded-2xl mr-3 my-3">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full"
        >
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-3xl font-bold">Add New Project</h1>
            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-400">Step {step} of 2</span>
              <div className="w-24 h-2 bg-gray-800 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-blue-600"
                  initial={{ width: "50%" }}
                  animate={{ width: step === 1 ? "50%" : "100%" }}
                  transition={{ duration: 0.3 }}
                />
              </div>
            </div>
          </div>

          <AnimatePresence mode="wait">
            {step === 1 ? (
              <motion.div
                key="step1"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-1 lg:grid-cols-2 gap-8"
              >
                <div>
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.1, duration: 0.4 }}
                    className="mb-8"
                  >
                    <div
                      className={`relative border-2 border-dashed rounded-lg p-12 transition-all duration-300 ease-in-out flex flex-col items-center justify-center ${dragActive ? "border-blue-500 bg-blue-500/10" : "border-gray-700 hover:border-gray-500"}`}
                      onDragEnter={handleDrag}
                      onDragLeave={handleDrag}
                      onDragOver={handleDrag}
                      onDrop={handleDrop}
                    >
                      {file ? (
                        <div className="flex flex-col items-center gap-4 text-white">
                          <div className="w-16 h-16 bg-gray-800 rounded-lg flex items-center justify-center">
                            <FileText size={32} className="text-blue-400" />
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="truncate max-w-[250px]">{file.name}</span>
                            <button
                              onClick={handleRemoveFile}
                              className="p-1 rounded-full hover:bg-gray-700 transition-colors"
                            >
                              <X size={16} />
                            </button>
                          </div>
                          <span className="text-sm text-gray-400">{(file.size / 1024 / 1024).toFixed(2)} MB</span>
                        </div>
                      ) : (
                        <>
                          <Upload className="w-12 h-12 mb-4 text-gray-400" />
                          <p className="text-center mb-2 text-lg">
                            Drag & Drop Or <span className="underline font-bold" >choose file</span> to upload
                          </p>
                          <p className="text-sm text-gray-500">Supports ZIP, RAR, or repository files up to 500MB</p>
                          <input
                            type="file"
                            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                            onChange={handleFileChange}
                          />
                        </>
                      )}
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.4 }}
                    className="flex items-center gap-4 my-8"
                  >
                    <div className="h-px bg-gray-800 flex-grow"></div>
                    <span className="text-gray-400">OR</span>
                    <div className="h-px bg-gray-800 flex-grow"></div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.4 }}
                  >
                    <div className="mb-6">
                      <label className="block mb-2">Repository link</label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                          <Github size={18} className="text-gray-500" />
                        </div>
                        <input
                          type="text"
                          value={link}
                          onChange={(e) => setLink(e.target.value)}
                          placeholder="e.g., https://github.com/your-repository"
                          className="w-full pl-10 p-3 rounded-md bg-[#161616] border border-gray-800 focus:border-gray-500 focus:outline-none transition-colors"
                        />
                      </div>
                      <p className="mt-2 text-sm text-gray-500">We'll automatically import your project from GitHub, GitLab, or Bitbucket</p>
                    </div>
                  </motion.div>
                </div>

                <div>
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.4 }}
                  >
                    <div className="mb-6">
                      <label className="block mb-2">Project Name<span className="text-gray-500">*</span></label>
                      <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="My Awesome Project"
                        className="w-full p-3 rounded-md bg-[#161616] border border-gray-800 focus:border-gray-500 focus:outline-none transition-colors"
                        required
                      />
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.4 }}
                  >
                    <div className="mb-6">
                      <label className="block mb-2">Description<span className="text-gray-500">*</span></label>
                      <textarea
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        placeholder="Describe your project in detail..."
                        rows={6}
                        className="w-full p-3 rounded-md bg-[#161616] border border-gray-800 focus:border-gray-500 focus:outline-none transition-colors resize-none"
                        required
                      />
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6, duration: 0.4 }}
                  >
                    <div className="mb-6">
                      <label className="block mb-2">Visibility</label>
                      <div className="flex gap-4">
                        <button
                          onClick={() => setVisibility("private")}
                          className={`flex-1 p-3 rounded-md border transition-colors ${visibility === "private" ? "border-gray-500 bg-[#161616]" : "border-gray-800 hover:border-gray-700"}`}
                        >
                          Private
                        </button>
                        <button
                          onClick={() => setVisibility("public")}
                          className={`flex-1 p-3 rounded-md border transition-colors ${visibility === "public" ? "bg-[#161616] focus:border-2 border-gray-500 " : "border-gray-800 hover:border-gray-700"}`}
                        >
                          Public
                        </button>
                      </div>
                      <p className="mt-2 text-sm text-gray-500">
                        {visibility === "private" ? "Only you and collaborators can see this project" : "Anyone can see this project"}
                      </p>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="step2"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-1 lg:grid-cols-2 gap-8"
              >
                <div>
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1, duration: 0.4 }}
                  >
                    <div className="mb-6">
                      <label className="block mb-2">Category</label>
                      <div className="relative">
                        <button
                          onClick={() => setShowDropdown(!showDropdown)}
                          className="w-full p-3 rounded-md bg-[#161616] border-gray-800 focus:border-blue-500 focus:outline-none transition-colors flex justify-between items-center"
                        >
                          <span>{category || "Select a category"}</span>
                          <ChevronDown size={18} className={`transition-transform duration-300 ${showDropdown ? "rotate-180" : ""}`} />
                        </button>

                        <AnimatePresence>
                          {showDropdown && (
                            <motion.div
                              initial={{ opacity: 0, y: -10 }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0, y: -10 }}
                              transition={{ duration: 0.2 }}
                              className="absolute z-10 mt-1 w-full bg-[#161616] border border-gray-800 rounded-md shadow-lg"
                            >
                              {categories.map((cat) => (
                                <button
                                  key={cat}
                                  onClick={() => {
                                    setCategory(cat);
                                    setShowDropdown(false);
                                  }}
                                  className="w-full text-left p-3 hover:bg-[#1A1A1A] transition-colors"
                                >
                                  {cat}
                                </button>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.4 }}
                  >
                    <div className="mb-6">
                      <label className="block mb-2">Tags</label>
                      <div className="flex gap-2 mb-2 flex-wrap">
                        {tags.map((tag) => (
                          <span
                            key={tag}
                            className="bg-gray-800 text-white px-3 py-1 rounded-full flex items-center gap-1"
                          >
                            {tag}
                            <button onClick={() => removeTag(tag)} className="hover:text-red-400">
                              <X size={14} />
                            </button>
                          </span>
                        ))}
                      </div>
                      <div className="flex gap-2">
                        <input
                          type="text"
                          value={currentTag}
                          onChange={(e) => setCurrentTag(e.target.value)}
                          onKeyDown={handleTagKeyDown}
                          placeholder="Add a tag"
                          className="flex-grow p-3 rounded-md bg-[#161616] border border-gray-800 focus:border-gray-500 focus:outline-none transition-colors"
                        />
                        <button
                          onClick={addTag}
                          className="px-4 py-2 bg-[#161616] rounded-md hover:bg-[#1A1A1A] transition-colors"
                        >
                          Add
                        </button>
                      </div>
                      <p className="mt-2 text-sm text-gray-500">Press Enter to add a tag</p>
                    </div>
                  </motion.div>


                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.4 }}
                  >
                    <div className="">
                      <label className="block mb-2">Project Structure</label>
                      <div className="p-4 rounded-md bg-[#161616] border border-gray-800 font-mono text-sm">
                        <div className="flex items-center gap-2 mb-2">
                          <Folder size={16} className="text-blue-400" />
                          <span>project-root/</span>
                        </div>
                        <div className="ml-6 flex items-center gap-2 mb-2">
                          <Folder size={16} className="text-blue-400" />
                          <span>src/</span>
                        </div>
                        <div className="ml-12 flex items-center gap-2 mb-2">
                          <FileText size={16} className="text-gray-400" />
                          <span>index.js</span>
                        </div>
                        <div className="ml-12 flex items-center gap-2 mb-2">
                          <FileText size={16} className="text-gray-400" />
                          <span>app.js</span>
                        </div>
                        <div className="ml-6 flex items-center gap-2 mb-2">
                          <FileText size={16} className="text-gray-400" />
                          <span>package.json</span>
                        </div>
                        <div className="ml-6 flex items-center gap-2">
                          <FileText size={16} className="text-gray-400" />
                          <span>README.md</span>
                        </div>
                      </div>
                      <p className="mt-2 text-sm text-gray-500">Preview of your project structure</p>
                    </div>
                  </motion.div>

                </div>

                <div>
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.4 }}
                  >
                    <div className="mb-6">
                      <label className="block mb-2">Collaborators</label>
                      <div className="flex items-center gap-3 p-3 rounded-md bg-[#161616] border border-gray-800">
                        <Users size={18} className="text-gray-400" />
                        <div className="flex-grow">
                          <p>No collaborators yet</p>
                        </div>
                        <button className="px-3 py-1 bg-[#1a1a1a] rounded-md hover:bg-[#161616] transition-colors text-sm">
                          Add
                        </button>
                      </div>
                      <p className="mt-2 text-sm text-gray-500">You can add collaborators after creating the project</p>
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.4 }}
                  >
                    <div className="mb-6">
                      <label className="block mb-2">Project Details</label>
                      <div className="space-y-4">
                        <div className="flex items-center gap-3 p-3 rounded-md bg-[#161616] border border-gray-800">
                          <GitBranch size={18} className="text-gray-400" />
                          <div className="flex-grow">
                            <p className="text-sm text-gray-400">Default Branch</p>
                            <p>main</p>
                          </div>
                        </div>

                        <div className="flex items-center gap-3 p-3 rounded-md bg-[#161616] border border-gray-800">
                          <Tag size={18} className="text-gray-400" />
                          <div className="flex-grow">
                            <p className="text-sm text-gray-400">Version</p>
                            <p>1.0.0</p>
                          </div>
                        </div>

                        <div className="flex items-center gap-3 p-3 rounded-md bg-[#161616] border border-gray-800">
                          <Clock size={18} className="text-gray-400" />
                          <div className="flex-grow">
                            <p className="text-sm text-gray-400">Last Updated</p>
                            <p>Just now</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>

                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.4 }}
            className="flex justify-between mt-8 pt-6 border-t border-gray-800"
          >
            {step === 1 ? (
              <div></div>
            ) : (
              <button
                onClick={prevStep}
                className="px-6 py-3 rounded-md border border-[#161616] hover:bg-[#1A1A1A] transition-colors"
              >
                Back
              </button>
            )}

            {step === 1 ? (
              <div className="flex gap-4">
                <button className="px-6 py-3 rounded-md border border-gray-800 hover:bg-[#1A1A1A] transition-colors">
                  Cancel
                </button>
                <button
                  onClick={nextStep}
                  className="px-6 py-3 bg-[#161616] rounded-md hover:bg-[#1A1A1A] transition-colors"
                >
                  Next
                </button>
              </div>
            ) : (
              <button className="px-6 py-3 bg-[#161616]  rounded-md hover:bg-[#1A1A1A] transition-colors">
                Create Project
              </button>
            )}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}