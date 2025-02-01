"use client"
import { ReactNode } from "react";

interface CirculerBtnProps {
    children: ReactNode;
    className?: string;
  }


export const CirculerBtn = ({children, className}:CirculerBtnProps)=>{
    return (
        <button className={className}>
                {children}
        </button>
    );
};
