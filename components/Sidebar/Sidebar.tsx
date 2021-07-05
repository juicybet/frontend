import React from "react"
import { SidebarWrapper } from "./Sidebar.style"
import { useRouter } from "next/dist/client/router"
import Link from "next/link"

export const Sidebar = ({ isSidebarOpen }: any) => {
  return (
    <div>
      <SidebarWrapper open={isSidebarOpen}>
        <Link href="/" passHref>
          <h2>Juicy Bet</h2>
        </Link>
        <Link href="/" passHref>
          <h2>Salad Bet</h2>
        </Link>
        <Link href="/" passHref>
          <h2>Receipe Bet</h2>
        </Link>
        <Link href="/" passHref>
          <h2>Info</h2>
        </Link>
      </SidebarWrapper>
    </div>
  )
}
