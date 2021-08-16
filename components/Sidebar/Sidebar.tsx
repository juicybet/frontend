import { SidebarWrapper } from "./Sidebar.style"
import { Menu } from "./Menu"
import { getMenuItems } from "../../state/menuItems"
import { useState } from "react"

export const Sidebar = ({ isOpen }: { isOpen: boolean }) => {
  const [data, setData] = useState(getMenuItems())

  const toggleMenu = (index: number, state: boolean) => {
    const newData = [...data]
    if (state) data.forEach((m) => (m.isOpen = false))
    newData[index].isOpen = state
    setData(newData)
  }

  return (
    <SidebarWrapper isOpen={isOpen}>
      {data.map((props, i) => (
        <Menu key={i} {...props} setIsOpen={(state) => toggleMenu(i, state)} />
      ))}
    </SidebarWrapper>
  )
}
