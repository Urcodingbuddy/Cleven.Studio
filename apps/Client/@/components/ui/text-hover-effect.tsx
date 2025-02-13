"use client";
import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";

export const TextHoverEffect = ({
    text,
    duration,
  }: {
    text: string;
    duration?: number;
    automatic?: boolean;
  }) => {
    const svgRef = useRef<SVGSVGElement>(null);
    const [cursor, setCursor] = useState({ x: 0, y: 0 });
    const [hovered, setHovered] = useState(false);
    const [maskPosition, setMaskPosition] = useState({ cx: "50%", cy: "50%" });
  
    useEffect(() => {
      if (svgRef.current && cursor.x !== null && cursor.y !== null) {
        const svgRect = svgRef.current.getBoundingClientRect();
        const cxPercentage = ((cursor.x - svgRect.left) / svgRect.width) * 100;
        const cyPercentage = ((cursor.y - svgRect.top) / svgRect.height) * 100;
        setMaskPosition({
          cx: `${cxPercentage}%`,
          cy: `${cyPercentage}%`,
        });
      }
    }, [cursor]);

    const [isDesktop, setIsDesktop] = useState(true);

    // Check screen width and update state
    useEffect(() => {
      const checkScreenSize = () => {
        setIsDesktop(window.innerWidth > 1024); // Hide on screen width <= 1024px (Tablet & Mobile)
      };
  
      checkScreenSize();
      window.addEventListener("resize", checkScreenSize);
  
      return () => window.removeEventListener("resize", checkScreenSize);
    }, []);
  
    if (!isDesktop) return null;
  
    return (
      <svg
        ref={svgRef}
        width="100%"
        height="100%"
        viewBox="0 0 300 100"
        xmlns="http://www.w3.org/2000/svg"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onMouseMove={(e) => setCursor({ x: e.clientX, y: e.clientY })}
        className="select-none"
      >
        <defs>
          <linearGradient
            id="textGradient"
            gradientUnits="userSpaceOnUse"
            cx="50%"
            cy="50%"
            r="25%"
          >
            {hovered && (
              <>
                <stop offset="0%" stopColor="#EAB308" /> {/* yellow-500 */}
                <stop offset="25%" stopColor="#EF4444" /> {/* red-500 */}
                <stop offset="50%" stopColor="#3B82F6" /> {/* blue-500 */}
                <stop offset="75%" stopColor="#06B6D4" /> {/* cyan-500 */}
                <stop offset="100%" stopColor="#8B5CF6" /> {/* violet-500 */}
              </>
            )}
          </linearGradient>
  
          <motion.radialGradient
            id="revealMask"
            gradientUnits="userSpaceOnUse"
            r="20%"
            animate={maskPosition}
            transition={{ duration: duration ?? 0, ease: "easeOut" }}
          >
            <stop offset="0%" stopColor="white" />
            <stop offset="100%" stopColor="black" />
          </motion.radialGradient>
          <mask id="textMask">
            <rect
              x="0"
              y="0"
              width="100%"
              height="100%"
              fill="url(#revealMask)"
            />
          </mask>
        </defs>
        <text
          x="50%"
          y="50%"
          textAnchor="middle"
          dominantBaseline="middle"
          strokeWidth="0.3"
          className="font-[helvetica] hidden lg:block font-bold stroke-neutral-200 dark:stroke-neutral-800 fill-transparent text-7xl"
          style={{ opacity: hovered ? 0.7 : 0 }}
        >
          {text}
        </text>
        <motion.text
          x="50%"
          y="50%"
          textAnchor="middle"
          dominantBaseline="middle"
          strokeWidth="0.3"
          className="font-[helvetica] font-bold fill-transparent text-7xl stroke-neutral-200 dark:stroke-neutral-800"
          initial={{ strokeDashoffset: 1000, strokeDasharray: 1000 }}
          animate={{
            strokeDashoffset: 0,
            strokeDasharray: 1000,
          }}
          transition={{
            duration: 4,
            ease: "easeInOut",
          }}
        >
          {text}
        </motion.text>
        <text
          x="50%"
          y="50%"
          textAnchor="middle"
          dominantBaseline="middle"
          stroke="url(#textGradient)"
          strokeWidth="0.3"
          mask="url(#textMask)"
          className="font-[helvetica] font-bold fill-transparent hidden lg:block text-7xl"
        >
          {text}
        </text>
      </svg>
    );
  };