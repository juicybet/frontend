import React from "react"
import { Nav, HeaderWrapper, Toggle, Brand } from "./Header.style"
import { Container } from "../Utils/Container.style"
import { MdMenu, MdPerson } from "react-icons/md"
import Image from "next/image"

// interface ToggleProps {
//   onClick: (event: React.MouseEvent<HTMLButtonElement>) => void
//   toggleSidebar: () => Boolean
// }

export const Header = ({ toggleSidebar }: any) => {
  return (
    <div>
      <Nav>
        <Container>
          <HeaderWrapper>
            <Toggle onClick={toggleSidebar}>
              <MdMenu color="#333" size={24} />
            </Toggle>
            <Brand>
              <Image src="/logo.svg" alt="Juicy bet Logo" width={70} height={60} />
              Jelly
            </Brand>
            <MdPerson color="#333" size={24} />
          </HeaderWrapper>
        </Container>
      </Nav>
    </div>
  )
}
