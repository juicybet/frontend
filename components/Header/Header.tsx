import { Header as StyledHeader, LogoContainer, MenuButton } from "./Header.style"
import Image from "next/image"
import { Menu as MenuIcon } from "react-feather"
import { getLogoProps, getTitle } from "../../data/theme"
import { useState } from "react"
import { Hamburger } from "../Utils/Hamburger"

export const Header = ({ toggleSidebar: _toggleSidebar }: any) => {
  const [isActive, setIsActive] = useState(true)

  const toggleSidebar = () => {
    _toggleSidebar()
    setIsActive((v) => !v)
  }

  return (
    <StyledHeader>
      <LogoContainer onClick={toggleSidebar}>
        <MenuButton>
          <Hamburger isActive={isActive} />
        </MenuButton>
        <Image alt={getTitle()} {...getLogoProps()} />
      </LogoContainer>
    </StyledHeader>
  )
}
