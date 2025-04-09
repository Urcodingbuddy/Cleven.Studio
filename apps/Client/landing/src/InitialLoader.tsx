"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useEffect, useState } from "react"

export const InitialLoader = () => {
  const [showLoader, setShowLoader] = useState(true)

  useEffect(() => {
    const timeout = setTimeout(() => setShowLoader(false), 2500)
    return () => clearTimeout(timeout)
  }, [])

  return (
    <AnimatePresence>
      {showLoader && (
          <motion.div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black"
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ y: "-100%", transition: { duration: 0.5, ease: "easeInOut" } }}
          >
          <div className="relative flex items-center justify-center w-full">
            {/* Logo Animation */}
            <motion.div
              className="absolute bg-black w-60 z-20 flex justify-end"
              initial={{ x: -80 }}
              animate={{
                x: "-160px",
                transition: {
                  duration: 1.2,
                  ease: "easeInOut",
                  delay: 0.5,
                },
              }}
            >
              <img src="./Cleven removeBg.png" alt="Logo" width={65} height={65} />
            </motion.div>

            {/* Text Animation */}
            <motion.div
              className="text-white z-10 text-2xl font-semibold absolute"
              initial={{ opacity: 0, x: -40 }}
              animate={{
                opacity: 1,
                x: 55,
                transition: {
                  opacity: { duration: 0.8, delay: 0.7 },
                  x: { duration: 1.2, ease: "easeInOut", delay: 0.6 },
                },
              }}
            >
              Cleven.Studio
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
