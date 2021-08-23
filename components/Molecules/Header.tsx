import styled from "styled-components"
import Image from "next/image"
import { getLogoProps, getTitle } from "../../core/site"
import { useState } from "react"
import { Hamburger } from "../Atoms"
import { currentTheme } from "../../core/theme"

const StyledHeader = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  display: block;
  width: 100%;
  background: #ffffff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.08);
  z-index: 1;
`

const LogoContainer = styled.div`
  display: flex;
  height: 120px;
  width: 352px;
  line-height: 120px;
  cursor: pointer;
`

const MenuButton = styled.button`
  padding: 8px 20px 0 28px;
  background: white;
  border: 0;
  outline: 0;
  cursor: pointer;
`

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
