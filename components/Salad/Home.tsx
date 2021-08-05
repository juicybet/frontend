import { useState } from "react"
import {
  BackgroundWrapper,
  ContentWrapper,
  ModalContentWrapper,
  ModalOverlay,
  ModalWrapper,
} from "../Utils/Utility.style"
import { MainContent } from "../JellyBet/Bet.style"
import { PlaceBet, IncreaseBet, IncreaseBetCard, PlaceBetCardOne, PlaceBetCardTwo } from "../SaladBet"

export const Home = () => {
  const [showIncreaseBetCard, setShowIncreaseBetCard] = useState(false)
  const [showPlaceBetCardOne, setShowPlaceBetCardOne] = useState(false)
  const [showPlaceBetCardTwo, setShowPlaceBetCardTwo] = useState(false)

  const ModalDemo = () => {
    return (
      <div>
        <button onClick={() => setShowIncreaseBetCard(true)}>Increase</button>
        <button onClick={() => setShowPlaceBetCardOne(true)}>PlaceBet one</button>
        <button onClick={() => setShowPlaceBetCardTwo(true)}>PlaceBet two</button>
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
      {showIncreaseBetCard && (
        <ModalWrapper>
          <ModalOverlay onClick={() => setShowIncreaseBetCard(false)} />
          <ModalContentWrapper>
            <IncreaseBetCard />
          </ModalContentWrapper>
        </ModalWrapper>
      )}
      {showPlaceBetCardOne && (
        <ModalWrapper>
          <ModalOverlay onClick={() => setShowPlaceBetCardOne(false)} />
          <ModalContentWrapper>
            <PlaceBetCardOne />
          </ModalContentWrapper>
        </ModalWrapper>
      )}
      {showPlaceBetCardTwo && (
        <ModalWrapper>
          <ModalOverlay onClick={() => setShowPlaceBetCardTwo(false)} />
          <ModalContentWrapper>
            <PlaceBetCardTwo />
          </ModalContentWrapper>
        </ModalWrapper>
      )}
    </main>
  )
}
