"use client";
import React, { useState, useEffect, useRef } from "react";

import { motion } from "framer-motion";
import { cn } from "../../lib/utils";


type Direction = "TOP" | "LEFT" | "BOTTOM" | "RIGHT";

export function HoverBorderGradient({
    children,
    containerClassName,
    className,
    as: Tag = "button",
    duration = 1,
    clockwise = true,
    ...props
}: React.PropsWithChildren<
    {
        as?: React.ElementType;
        containerClassName?: string;
        className?: string;
        duration?: number;
        clockwise?: boolean;
    } & React.HTMLAttributes<HTMLElement>
>) {
    const [hovered, setHovered] = useState<boolean>(false);
    const [direction, setDirection] = useState<Direction>("TOP");

    const rotateDirection = (currentDirection: Direction): Direction => {
        const directions: Direction[] = ["TOP", "LEFT", "BOTTOM", "RIGHT"];
        const currentIndex = directions.indexOf(currentDirection);

        // Ensure currentIndex is always valid
        if (currentIndex === -1) return "TOP"; // Default to "TOP" if not found

        const nextIndex = clockwise
            ? (currentIndex + directions.length - 1) % directions.length
            : (currentIndex + 1) % directions.length;

        return directions[nextIndex] as Direction; // Explicitly cast to Direction
    };


    const movingMap: Record<Direction, string> = {
        TOP: "radial-gradient(25% 60% at 50% 0%, rgba(255, 255, 255, 0.8) 0%, rgba(255, 255, 255, 0) 100%)",
        LEFT: "radial-gradient(22% 50% at 0% 50%, rgba(255, 255, 255, 0.8) 0%, rgba(255, 255, 255, 0) 100%)",
        BOTTOM: "radial-gradient(25% 60% at 50% 100%, rgba(255, 255, 255, 0.8) 0%, rgba(255, 255, 255, 0) 100%)",
        RIGHT: "radial-gradient(22% 50% at 100% 50%, rgba(255, 255, 255, 0.8) 0%, rgba(255, 255, 255, 0) 100%)",
      };
      

      const highlight = "radial-gradient(90% 190% at 50% 50%, #4A90E2 10%, rgba(255, 255, 255, 0) 100%)";


    useEffect(() => {
        if (!hovered) {
            const interval = setInterval(() => {
                setDirection((prevState) => rotateDirection(prevState));
            }, duration * 1000);
            return () => clearInterval(interval);
        }
    }, [hovered]);
    return (
        <Tag
            onMouseEnter={(event: React.MouseEvent<HTMLDivElement>) => {
                setHovered(true);
            }}
            onMouseLeave={() => setHovered(false)}
            className={cn(
                "relative flex rounded-full border  content-center bg-black/20 hover:bg-black/10 transition duration-500 dark:bg-white/20 items-center flex-col flex-nowrap gap-10 h-min justify-center overflow-visible p-px decoration-clone w-fit",
                containerClassName
            )}
            {...props}
        >
            <div
                className={cn(
                    "w-auto text-white z-10 bg-black px-4 py-2 rounded-[inherit]",
                    className
                )}
            >
                {children}
            </div>
            <motion.div
                className={cn(
                    "flex-none inset-0 overflow-hidden absolute z-0 rounded-[inherit]"
                )}
                style={{
                    filter: "blur(4px)", // Increased blur to 4px for better visibility
                    position: "absolute",
                    width: "100%",
                    height: "100%",
                  }}
                  
                initial={{ background: movingMap[direction] }}
                animate={{
                    background: hovered
                        ? [movingMap[direction], highlight]
                        : movingMap[direction],
                }}
                transition={{ ease: "linear", duration: duration ?? 1 }}
            />
            <div className="bg-black absolute z-1 flex-none inset-[2px] rounded-[100px]" />
        </Tag>
    );
}
