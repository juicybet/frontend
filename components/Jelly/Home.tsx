import { useState } from "react"
import { AcceptBet, CreateBet, WinningCard, LosingCard, LoadingCard } from "../JellyBet"
import { MainContent } from "../JellyBet/Bet.style"
import {
  BackgroundWrapper,
  ContentWrapper,
  ModalContentWrapper,
  ModalOverlay,
  ModalWrapper,
} from "../Utils/Utility.style"

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
  )
}
