import { useState } from "react"
import {
  BackgroundWrapper,
  ContentWrapper,
  ModalContentWrapper,
  ModalOverlay,
  ModalWrapper,
} from "../Utils/Utility.style"
import { MainContent } from "../JellyBet/Bet.style"
import { PlaceBet, LoadingCard, NoBetsCard, WinningCard, AlreadyWonCard, LosingCard } from "../SaladBet"

export const PastSalads = () => {
  const [showLoadingCard, setShowLoadingCard] = useState(false)
  const [showNoBetsCard, setShowNoBetsCard] = useState(false)
  const [showWinningCard, setShowWinningCard] = useState(false)
  const [showAlreadyWonCard, setShowAlreadyWonCard] = useState(false)
  const [showLosingCard, setShowLosingCard] = useState(false)

  const ModalDemo = () => {
    return (
      <div>
        <button onClick={() => setShowLoadingCard(true)}>Loading</button>
        <button onClick={() => setShowNoBetsCard(true)}>NoBets</button>
        <button onClick={() => setShowWinningCard(true)}>Win</button>
        <button onClick={() => setShowAlreadyWonCard(true)}>AlreadyWon</button>
        <button onClick={() => setShowLosingCard(true)}>Losing</button>
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
      {showLoadingCard && (
        <ModalWrapper>
          <ModalOverlay onClick={() => setShowLoadingCard(false)} />
          <ModalContentWrapper>
            <LoadingCard />
          </ModalContentWrapper>
        </ModalWrapper>
      )}
      {showNoBetsCard && (
        <ModalWrapper>
          <ModalOverlay onClick={() => setShowNoBetsCard(false)} />
          <ModalContentWrapper>
            <NoBetsCard />
          </ModalContentWrapper>
        </ModalWrapper>
      )}
      {showWinningCard && (
        <ModalWrapper>
          <ModalOverlay onClick={() => setShowWinningCard(false)} />
          <ModalContentWrapper>
            <WinningCard />
          </ModalContentWrapper>
        </ModalWrapper>
      )}
      {showAlreadyWonCard && (
        <ModalWrapper>
          <ModalOverlay onClick={() => setShowAlreadyWonCard(false)} />
          <ModalContentWrapper>
            <AlreadyWonCard />
          </ModalContentWrapper>
        </ModalWrapper>
      )}
      {showLosingCard && (
        <ModalWrapper>
          <ModalOverlay onClick={() => setShowLosingCard(false)} />
          <ModalContentWrapper>
            <LosingCard />
          </ModalContentWrapper>
        </ModalWrapper>
      )}
    </main>
  )
}
