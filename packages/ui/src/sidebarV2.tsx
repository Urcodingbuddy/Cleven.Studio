"use client";
// @ts-ignore
import { Radar, Store, LifeBuoy, UploadCloud as CloudUpload, ReceiptText } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { useSession } from "next-auth/react";

const sidebarItems = [
    { icon: Radar, label: "Workspace", href: "/workspace" },
    { icon: CloudUpload, label: "Upload", href: "/upload" },
    { icon: LifeBuoy, label: "Help Center", href: "/help-center" },
    { icon: ReceiptText, label: "Billing", href: "/billing" },
    { icon: Store, label: "Market Place ", href: "/market-place" },
];

export default function SidebarV2() {
    const pathname = usePathname();
    const [isExpanded, setIsExpanded] = useState(true);
    const { data: session } = useSession();

    return (
        <main className="h-screen">
            {/* New background layer */}

            {isExpanded && (
                <div className="flex flex-col justify-between  h-full absolute px-2 py-4 z-10 transition-all duration-300"
                    style={{
                        backgroundColor: '#1c1c1c',
                        width: '250px',
                    }}
                    onMouseEnter={() => setIsExpanded(true)}
                    onMouseLeave={() => setIsExpanded(false)}
                >
                    <div className="flex gap-6 items-center px-2">
                        <Link href="/workspace">
                            <img src="./Cleven removeBg.png" className="h-10 object-cover" alt="" />
                        </Link>
                        <span className="text-white font-semibold">CLEVEN.STUDIO</span>
                    </div>
                    <div className="flex flex-col gap-10  py-4 px-3">
                        {sidebarItems.map((item) => {
                            const Icon = item.icon;
                            const isActive = pathname === item.href;
                            return (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    className="flex gap-6"
                                >
                                    <Icon className={`w-7 h-7 mb-8 ${isActive ? 'text-blue-500' : ' text-white'}`} />
                                    <span className={`w-7 h-7 mb-8  ${isActive ? 'text-blue-500' : ' text-white '}`} >{item.label}</span>
                                </Link>
                            );
                        })}
                    </div>
                    <div className="h-8">
                        <Link href="/profile" className="flex items-center text-gray-400  hover:bg-[#0c0c0c] rounded-lg px-2">
                            {session?.user?.image ? (
                                <img src={session.user.image} className="h-8 w-8 rounded-full" alt="Profile" />
                            ) : (
                                <span className="h-5 w-5 rounded-full" />
                            )}
                            <span className="ml-6  w-[250px]">{session?.user?.name || 'Profile'}</span>
                        </Link>
                    </div>
                </div>
            )}

            <nav className={`bg-[#1c1c1c] flex flex-col w-16 h-full gap-4 items-center py-4 justify-between z-10
            `}
                onMouseEnter={() => setIsExpanded(true)}
                onMouseLeave={() => setIsExpanded(false)}
            >
                <div>
                    <Link href="/workspace">
                        <img src="./Cleven removeBg.png" className="h-10 object-cover" style={{
                            paddingLeft: '8px'
                        }} alt="" />
                    </Link>
                </div>
                <div className="flex flex-col items-center gap-10 ">
                    {sidebarItems.map((item) => {
                        const Icon = item.icon;
                        const isActive = pathname === item.href;
                        return (
                            <Link href={item.href} key={item.label}>
                                <Icon className={`w-7 h-7 mb-8 ${isActive ? 'text-blue-500' : ' text-white'}`} />
                            </Link>
                        )
                    })}
                </div>
                <div className="w-8 h-8">
                    <Link href="/profile" className="flex items-center text-gray-400 hover:text-white hover:bg-[#0c0c0c] rounded-lg">
                        {session?.user?.image ? (
                            <img src={session.user.image} className="h-8 w-8 rounded-full" alt="Profile" />
                        ) : (
                            <span className="h-5 w-5 rounded-full bg-gray-400" />
                        )}
                        
                    </Link>
                </div>
            </nav>
        </main>
    )
}
