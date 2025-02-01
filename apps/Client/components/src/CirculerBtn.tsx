import React from "react";

interface CirculerBtnProps {
    children: React.ReactNode;
  }


const CirculerBtn: React.FC<CirculerBtnProps>=({children})=>{
    return (
        <button className="bg-white text-black font-semibold w-24 h-10 rounded-3xl  ">
                {children}
        </button>
    );
};

export default CirculerBtn;