import React from "react";
import { SmoothScrollProvider } from "../../components/src/SmoothScrollProvider";


export default function Layout({
    children,
}: {children: React.ReactNode;}) {
    return (
        <div className="flex relative">
            <SmoothScrollProvider/>
            <div className="">
                {children}
            </div>
        </div>
    )
}
