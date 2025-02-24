"use client";

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";


gsap.registerPlugin(useGSAP);

const ClevenLoader = () => {

  return (
    <div className="flex items-center justify-center min-h-screen bg-black">
     <div className="loader"></div>
    </div>
  );
};

export default ClevenLoader;
