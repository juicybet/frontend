import { useState } from "react"
import Head from "next/head"
import { Header, Sidebar } from "../components"
import { BackgroundWrapper, ContentWrapper } from "../components/Utils/Utility.style"
import { getTitle, getFavicon, setThemeForHost, ThemeType, setTheme } from "../data/theme"
import { GetServerSideProps } from "next"
import { Acceptbet, Createbet } from "../components/Bet/Bet"
import { MainContent } from "../components/Bet/Bet.style"

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  return {
    props: {
      theme: setThemeForHost(req.headers.host!),
    },
  }
}

export default function Home({ theme }: { theme: ThemeType }) {
  setTheme(theme)

  const [isSidebarOpen, setIsSidebarOpen] = useState(true)

  const toggleSidebar = () => {
    setIsSidebarOpen((isSidebarOpen) => !isSidebarOpen)
  }

  return (
    <>
      <Head>
        <title>{getTitle()}</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href={getFavicon()} />
        <meta name="viewport" content="width=device-width, initial-scale=0.8, user-scalable=no" />
      </Head>
      <Header toggleSidebar={toggleSidebar} />
      <Sidebar isOpen={isSidebarOpen} />
      <main>
        <BackgroundWrapper />
        <ContentWrapper>
          <MainContent>
            <Createbet />
            <Acceptbet />
          </MainContent>
        </ContentWrapper>
      </main>
    </>
  )
}
