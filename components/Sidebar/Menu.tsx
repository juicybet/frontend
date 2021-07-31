import { MenuItemData } from "../../core/menuItems"
import { MenuItem, Submenu, SubmenuItem } from "./Sidebar.style"
import { Rotatable } from "../Utils/Utility.style"
import { ChevronRight } from "react-feather"
import { getSite, getThemeColor, linkTo } from "../../core/site"
import Link from "next/link"

export type MenuProps = MenuItemData & {
  setIsOpen(state: boolean): void
}

export const Menu = ({ title, links, site, isOpen, setIsOpen }: MenuProps) => {
  return (
    <>
      <MenuItem onClick={() => setIsOpen(!isOpen)} selected={isOpen} color={getThemeColor()}>
        {title}
        <Rotatable angle={isOpen ? 90 : 0}>
          <ChevronRight size="20" />
        </Rotatable>
      </MenuItem>

      <Submenu isOpen={isOpen}>
        {links.map((item, index) => (
          <SubmenuItem key={index} color={getThemeColor()}>
            <Link href={linkTo(site, item.url)}>{item.title}</Link>
          </SubmenuItem>
        ))}
      </Submenu>
    </>
  )
}
