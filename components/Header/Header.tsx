import { Header as StyledHeader, LogoContainer, MenuButton } from "./Header.style"
import Image from "next/image"
import { Menu as MenuIcon } from "react-feather"
import { getLogoProps, getTitle } from "../../data/theme"

export const Header = ({ toggleSidebar }: any) => {
  return (
    <StyledHeader>
      <LogoContainer onClick={toggleSidebar}>
        <Image alt={getTitle()} {...getLogoProps()} />
        <MenuButton>
          <MenuIcon width="32" />
        </MenuButton>
      </LogoContainer>
    </StyledHeader>
  )
}
