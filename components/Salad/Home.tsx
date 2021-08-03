import { useState } from "react"
import {
  BackgroundWrapper,
  ContentWrapper,
  ModalContentWrapper,
  ModalOverlay,
  ModalWrapper,
} from "../Utils/Utility.style"
import { MainContent } from "../JellyBet/Bet.style"
import { WinningCard } from "../JellyBet/WinningCard"
import { LosingCard } from "../JellyBet/LosingCard"
import { LoadingCard } from "../JellyBet/LoadingCard"
import { PlaceBet } from "../SaladBet/PlaceBet"

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
          <PlaceBet />
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
