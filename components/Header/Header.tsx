import React from "react"
import { Nav, HeaderWrapper, Toggle, Brand } from "./Header.style"
import { Container } from "../Utils/Utility.style"
import { MdMenu, MdAccountBalanceWallet } from "react-icons/md"
import Image from "next/image"

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
              <div>
                <Image src="/logo.svg" alt="Juicy bet Logo" width={60} height={60} />
              </div>
              <div className="p-top-1-half">
                <Image src="/jelly.svg" alt="Juicy bet Name" width={70} height={80} />
              </div>
            </Brand>
            <MdAccountBalanceWallet color="#333" size={24} />
          </HeaderWrapper>
        </Container>
      </Nav>
    </div>
  )
}
