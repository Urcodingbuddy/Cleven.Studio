"use client"
import { ReactNode } from "react";
import { ArrowRight} from "lucide-react";

interface CirculerBtnProps {
    children: ReactNode;
    className?: string;
  }


export const CirculerBtn = ({children, className}:CirculerBtnProps)=>{
    return (
        <button className={className}>
                {children}
                <ArrowRight className=" ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform " />
        </button>
    );
};
