import { useState } from "react"
import { MainContent } from "../JellyBet/Bet.style"
import { WinningCard, WaitingCard, LosingCard, LoadingCard, BetHistory, CreateBet } from "../DonutBet"
import { BackgroundWrapper, ContentWrapper } from "../Utils/Utility.style"
import { ModalOverlay, ModalWrapper } from "../../components"

export const Home = () => {
  const [showLoadingModal, setShowLoadingModal] = useState(false)
  const [showWinningModal, setShowWinningModal] = useState(false)
  const [showLostModal, setShowLostModal] = useState(false)
  const [showWaitingModal, setShowWaitingModal] = useState(false)

  const ModalDemo = () => {
    return (
      <div>
        <button onClick={() => setShowLoadingModal(true)}>loading</button>
        <button onClick={() => setShowWinningModal(true)}>Won</button>
        <button onClick={() => setShowLostModal(true)}>lose</button>
        <button onClick={() => setShowWaitingModal(true)}>Wait</button>
      </div>
    )
  }

  return (
    <main>
      <BackgroundWrapper />
      <ContentWrapper>
        <MainContent>
          <CreateBet />
          <BetHistory />
        </MainContent>
      </ContentWrapper>

      <ModalDemo />
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
      {showWaitingModal && (
        <ModalWrapper p={"5rem"}>
          <ModalOverlay onClick={() => setShowWaitingModal(false)} />
          <WaitingCard />
        </ModalWrapper>
      )}
    </main>
  )
}
