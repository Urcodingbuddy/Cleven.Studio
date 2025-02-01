"use client"
import { ReactNode } from "react";

interface CirculerBtnProps {
    children: ReactNode;
  }


export const CirculerBtn = ({children}:CirculerBtnProps)=>{
    return (
        <button className="bg-white text-black font-semibold w-24 h-10 rounded-3xl  ">
                {children}
        </button>
    );
};
