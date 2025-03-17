import type React from "react"
import SidebarV3 from "../../@/components/ui/sideBarV3"
import { Providers } from "../../provider"
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    
      <div className={`flex flex-1 h-screen overflow-hidden`}>
        <SidebarV3>
          {children}
        </SidebarV3>
      </div>
    
  )
}

