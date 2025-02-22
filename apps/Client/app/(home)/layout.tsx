import React from "react";

export default function Layout({
    children,
}: {children: React.ReactNode;}) {
    return (
        <div className="flex relative">
            <div className="border-r border-r-[#A704BF] min-h-full z-10">
                <div>
                    hy
                </div>
            </div>

            <div className="flex justify-center w-full">
                {children}
            </div>
        </div>
    )
}
