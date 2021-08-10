import { useState } from "react"
import { AcceptBet, CreateBet, WinningCard, LosingCard, LoadingCard } from "../JellyBet"
import { MainContent } from "../JellyBet/Bet.style"
import { BackgroundWrapper, ContentWrapper } from "../Utils/Utility.style"
import { ModalOverlay, ModalWrapper } from "../../components"

export const Home = () => {
  const [showLoadingModal, setShowLoadingModal] = useState(false)
  const [showWinningModal, setShowWinningModal] = useState(false)
  const [showLostModal, setShowLostModal] = useState(false)

  const ModalDemo = () => {
    return (
      <div>
        <button onClick={() => setShowLoadingModal(true)}>loading</button>
        <button onClick={() => setShowWinningModal(true)}>Won</button>
        <button onClick={() => setShowLostModal(true)}>lose</button>
      </div>
    )
  }

  return (
    <main>
      <BackgroundWrapper />
      <ContentWrapper>
        <MainContent>
          <CreateBet />
          <AcceptBet />
        </MainContent>
        <ModalDemo />
      </ContentWrapper>
      {showLoadingModal && (
        <ModalWrapper p={"5rem"}>
          <ModalOverlay onClick={() => setShowLoadingModal(false)} />
          <LoadingCard />
        </ModalWrapper>
      )}
      {showWinningModal && (
        <ModalWrapper p={"5rem"}>
          <ModalOverlay onClick={() => setShowWinningModal(false)} />
          <WinningCard />
        </ModalWrapper>
      )}
      {showLostModal && (
        <ModalWrapper p={"5rem"}>
          <ModalOverlay onClick={() => setShowLostModal(false)} />
          <LosingCard />
        </ModalWrapper>
      )}
    </main>
  )
}
