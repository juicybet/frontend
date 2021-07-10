import React from "react"
import { SidebarWrapper } from "./Sidebar.style"
import { Menu } from "./Menu"
import { menuData } from "../../data/menuData"

export const Sidebar = ({ isSidebarOpen }: any) => {
  return (
    <div>
      <SidebarWrapper open={isSidebarOpen}>
        {menuData?.map(({ id, title, subtitles }) => (
          <div key={id} style={{ marginTop: "2rem" }}>
            <div>
              <Menu title={title} subtitles={subtitles} />
            </div>
          </div>
        ))}
      </SidebarWrapper>
    </div>
  )
}
