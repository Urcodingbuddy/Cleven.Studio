import React from "react";
import { SmoothScrollProvider } from "../../components/src/SmoothScrollProvider";
import Sidebar  from "@repo/ui/sideBar";


export default function Layout({
    children,
}: {children: React.ReactNode;}) {
    return (
        <div className="flex relative">
            <SmoothScrollProvider/>
            <div className="min-h-full z-10">
                {/* sidebar */}
                <Sidebar/>
            </div>
            <div className="">
                {children}
            </div>
        </div>
    )
}
