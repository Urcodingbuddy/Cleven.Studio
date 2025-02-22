import React from "react";

export default function Layout({
    children,
}: {children: React.ReactNode;}) {
    return (
        <div className="flex relative">
            <div className="min-h-full z-10">
                <div>
                    hy I am Sidebar
                </div>
            </div>

            <div className="flex justify-center w-full">
                {children}
            </div>
        </div>
    )
}
