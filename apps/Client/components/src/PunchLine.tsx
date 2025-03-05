import { ArrowDown } from "lucide-react";
import { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";
import { motion, AnimatePresence } from "framer-motion";

// Register GSAP plugins
gsap.registerPlugin(useGSAP, ScrollTrigger);

// Mock components for the example
const SmoothScrollProvider = () => <></>;
const useLenis = () => {
  return {
    scrollTo: (target: string, options: any) => {
      const element = document.querySelector(target);
      if (element) {
        element.scrollIntoView({
          behavior: 'smooth'
        });
      }
    }
  };
};

export const PunchLine = () => {
  // Lenis for scrolling
  const lenis = useLenis();
  const [isVisible, setIsVisible] = useState(false);
  
  const handleScroll = () => {
    if (lenis) {
      lenis.scrollTo("#heroMessage_head", {
        duration: 2.5,
        easing: (t: number) => 1 - Math.pow(1 - t, 3),
      });
    }
  };

  // Refs for animations
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const paragraphRef = useRef<HTMLParagraphElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollButtonRef = useRef<HTMLDivElement>(null);
  
  // Split text animation setup
  useEffect(() => {
    // Set visibility after component mounts to trigger animations
    setIsVisible(true);
    
    // Split headline text for character animation
    if (headlineRef.current) {
      const splitHeadline = new SplitType(headlineRef.current, { 
        types: 'chars,words',
        tagName: 'span'
      });
      
      // Animate each character
      gsap.from(splitHeadline.chars, {
        opacity: 0,
        y: 100,
        rotateX: -90,
        stagger: 0.02,
        duration: 1.2,
        ease: "back.out(1.7)",
        delay: 0.3
      });
    }
    
    // Paragraph reveal animation
    if (paragraphRef.current) {
      gsap.fromTo(
        paragraphRef.current,
        { 
          opacity: 0,
          y: 30
        },
        { 
          opacity: 1,
          y: 0,
          duration: 1.5,
          ease: "power3.out",
          delay: 1.2
        }
      );
    }
    
    // Scroll button animation
    if (scrollButtonRef.current) {
      // Initial reveal
      gsap.fromTo(
        scrollButtonRef.current,
        { 
          opacity: 0,
          y: 20
        },
        { 
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power2.out",
          delay: 1.8
        }
      );
      
      // Continuous floating animation
      gsap.to(scrollButtonRef.current.querySelector('svg'), {
        y: 10,
        duration: 1.5,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut"
      });
    }
    
    // Background gradient animation
    if (containerRef.current) {
      gsap.fromTo(
        containerRef.current,
        {
          backgroundPosition: "0% 0%"
        },
        {
          backgroundPosition: "100% 100%",
          duration: 15,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut"
        }
      );
    }
    
    // Scroll trigger for parallax effect
    ScrollTrigger.create({
      trigger: containerRef.current,
      start: "top top",
      end: "bottom top",
      onUpdate: (self) => {
        if (headlineRef.current) {
          gsap.to(headlineRef.current, {
            y: self.progress * 100,
            ease: "none",
            duration: 0.1
          });
        }
      }
    });
    
    return () => {
      // Clean up animations
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
        >
          <SmoothScrollProvider /> {/* Smooth scrolling enabled */}
          <div 
            ref={containerRef}
            className="relative pt-20 sm:pt-24 md:pt-32 lg:pt-40 flex flex-col items-center justify-center w-[90vw] mx-auto min-h-screen bg-[#0c0c0c]"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ 
                duration: 1.2, 
                ease: [0.25, 0.1, 0.25, 1],
                delay: 0.1
              }}
              className="relative z-10"
            >
              <h1
                ref={headlineRef}
                id="heroMessage_head"
                      className="text-4xl sm:text-5xl md:text-6xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-4 mb-5 sm:mb-10 text-center max-w-6xl"
              >
                Unleashing the Power of Performance <br /> to Make Your Website Invincible.
              </h1>
            </motion.div>
            
            <div className="flex flex-col items-center relative z-10">
              <motion.p 
                ref={paragraphRef}
                className="text-zinc-400 sm:text-lg md:text-xl font-medium mb-5 sm:mb-16 md:mb-20 sm:max-w-2xl md:max-w-3xl leading-8 text-center max-w-3xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                Say goodbye to messy website management. Cleven Studios makes maintaining,
                optimizing, and enhancing your site effortless. Reliable. Scalable. Stress-free.
                Simple. Intuitive. And never boring.
              </motion.p>
              
              {/* Scroll Trigger Button with enhanced animations */}
              <motion.div 
                ref={scrollButtonRef}
                className="h-28 flex flex-col items-center group cursor-pointer"
                onClick={handleScroll}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.2 }}
              >
                <motion.p 
                  className="text-md font-semibold text-zinc-400 group-hover:text-zinc-200"
                  animate={{ y: [0, -5, 0] }}
                  transition={{ 
                    duration: 2, 
                    repeat: Infinity,
                    repeatType: "loop",
                    ease: "easeInOut",
                    times: [0, 0.5, 1]
                  }}
                >
                  Learn More
                </motion.p>
                <motion.div
                  animate={{ 
                    y: [0, 10, 0],
                    opacity: [0.6, 1, 0.6]
                  }}
                  transition={{ 
                    duration: 2, 
                    repeat: Infinity,
                    repeatType: "loop",
                    ease: "easeInOut",
                    times: [0, 0.5, 1]
                  }}
                >
                  <ArrowDown className="text-white mt-2" />
                </motion.div>
              </motion.div>
            </div>
            
            {/* Background decorative elements */}
            <motion.div 
              className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.4 }}
              transition={{ duration: 2, delay: 0.5 }}
            >
              <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-purple-700/10 blur-[100px]" />
              <div className="absolute bottom-1/3 right-1/4 w-96 h-96 rounded-full bg-blue-700/10 blur-[120px]" />
              <div className="absolute top-1/2 left-1/2 w-80 h-80 rounded-full bg-indigo-700/10 blur-[80px] transform -translate-x-1/2 -translate-y-1/2" />
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};