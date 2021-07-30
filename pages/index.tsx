import { useState } from "react"
import Head from "next/head"
import { Header, Sidebar } from "../components"
import {
  BackgroundWrapper,
  ContentWrapper,
  ModalContentWrapper,
  ModalOverlay,
  ModalWrapper,
} from "../components/Utils/Utility.style"
import { getTitle, getFavicon, setThemeForHost, ThemeType, setTheme } from "../data/theme"
import { GetServerSideProps } from "next"
import { AcceptBet, CreateBet } from "../components/JellyBet"
import { MainContent } from "../components/JellyBet/Bet.style"
import { WinningCard } from "../components/JellyBet/WinningCard"
import { LosingCard } from "../components/JellyBet/LosingCard"
import { LoadingCard } from "../components/JellyBet/LoadingCard"

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

  // temp code
  const [showLoadingModal, setShowLoadingModal] = useState(false)
  const [showWinningModal, setShowWinningModal] = useState(false)
  const [showLostModal, setShowLostModal] = useState(false)

  // temp code

  const toggleSidebar = () => {
    setIsSidebarOpen((isSidebarOpen) => !isSidebarOpen)
  }

  // temp code start

  const ModalDemonStrator = () => {
    return (
      <div>
        <button onClick={() => setShowLoadingModal(true)}>loading</button>
        <button onClick={() => setShowWinningModal(true)}>Won</button>
        <button onClick={() => setShowLostModal(true)}>lose</button>
      </div>
    )
  }
  // temp code end

  return (
    <>
      <Head>
        <title>{getTitle()}</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href={getFavicon()} />
        <meta name="viewport" content="width=device-width, initial-scale=0.8, user-scalable=no" />
      </Head>
      <Header
        toggleSidebar={toggleSidebar}
        showLoadingModal={showLoadingModal}
        showLostModal={showLostModal}
        showWinningModal={showWinningModal}
        setShowLoadingModal={setShowWinningModal}
        setShowLostModal={setShowLostModal}
        setShowWinningModal={setShowWinningModal}
      />
      <Sidebar isOpen={isSidebarOpen} />
      <main>
        <BackgroundWrapper />
        <ContentWrapper>
          <MainContent>
            <CreateBet />
            <AcceptBet />
          </MainContent>
        </ContentWrapper>
        <ModalDemonStrator />
        {showLoadingModal && (
          <ModalWrapper>
            <ModalOverlay onClick={() => setShowLoadingModal(false)} />
            <ModalContentWrapper>
              <LoadingCard />
            </ModalContentWrapper>
          </ModalWrapper>
        )}
        {showWinningModal && (
          <ModalWrapper>
            <ModalOverlay onClick={() => setShowWinningModal(false)} />
            <ModalContentWrapper>
              <WinningCard />
            </ModalContentWrapper>
          </ModalWrapper>
        )}
        {showLostModal && (
          <ModalWrapper>
            <ModalOverlay onClick={() => setShowLostModal(false)} />
            <ModalContentWrapper>
              <LosingCard />
            </ModalContentWrapper>
          </ModalWrapper>
        )}
      </main>
    </>
  )
}
