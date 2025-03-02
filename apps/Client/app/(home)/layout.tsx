import React from "react";
import { SmoothScrollProvider } from "../../components/src/SmoothScrollProvider";
import Sidebar  from "@repo/ui/sideBar";
import SidebarV2 from "@repo/ui/sidebarV2";

export default function Layout({
    children,
}: {children: React.ReactNode;}) {
    return (
        <div className="flex">
            <SmoothScrollProvider/>
            <div className="absolute">
                <SidebarV2/>
            </div>
                {children}
        </div>
    )
}
