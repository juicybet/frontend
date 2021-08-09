import { Header as StyledHeader, LogoContainer, MenuButton } from "./Header.style"
import Image from "next/image"
import { getLogoProps, getTitle } from "../../core/site"
import { useState } from "react"
import { Hamburger } from "../Utils/Hamburger"
import { currentTheme } from "../../core/theme"

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
          <Hamburger isActive={isActive} color={currentTheme().primary} />
        </MenuButton>
        <Image alt={getTitle()} {...getLogoProps()} />
      </LogoContainer>
    </StyledHeader>
  )
}
