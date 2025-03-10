import React from "react";
import SidebarDemo  from "../../@/components/ui/sideBarV3";
import SidebarV3 from "../../@/components/ui/sideBarV3";

export default function Layout({
    children,
}: {children: React.ReactNode;}) {
    return (
        <div className="flex">
            <div className="absolute">
                    <SidebarV3>
                        {children}
                    </SidebarV3>
            </div>
        </div>
    )
}
