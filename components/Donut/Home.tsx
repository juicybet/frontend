import { useState } from "react"
import { MainContent } from "../JellyBet/Bet.style"
import { WinningCard, WaitingCard, LosingCard, LoadingCard, BetHistory, CreateBet } from "../DonutBet"
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
      {showWaitingModal && (
        <ModalWrapper>
          <ModalOverlay onClick={() => setShowWaitingModal(false)} />
          <ModalContentWrapper>
            <WaitingCard />
          </ModalContentWrapper>
        </ModalWrapper>
      )}
    </main>
  )
}
