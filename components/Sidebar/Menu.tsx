import { MenuItemData } from "../../data/menuItems"
import { MenuItem, Submenu, SubmenuItem } from "./Sidebar.style"
import { Rotatable } from "../Utils/Utility.style"
import { ChevronRight } from "react-feather"
import { getThemeColor } from "../../data/theme"
import Link from "next/link"

export type MenuProps = MenuItemData & {
  setIsOpen(state: boolean): void
}

export const Menu = ({ title, subtitles, isOpen, setIsOpen }: MenuProps) => {
  return (
    <>
      <MenuItem onClick={() => setIsOpen(!isOpen)} selected={isOpen} color={getThemeColor()}>
        {title}
        <Rotatable angle={isOpen ? 90 : 0}>
          <ChevronRight size="20" />
        </Rotatable>
      </MenuItem>

      <Submenu isOpen={isOpen}>
        {subtitles.map((item, index) => (
          <SubmenuItem key={index} color={getThemeColor()}>
            <Link href={`/${item.split(" ").join("_")}`}>{item}</Link>
          </SubmenuItem>
        ))}
      </Submenu>
    </>
  )
}
