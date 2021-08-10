import { useState } from "react"
import { BackgroundWrapper, Flex } from "../Utils/Utility.style"
import { PlaceBet, LoadingCard, NoBetsCard, WinningCard, AlreadyWonCard, LosingCard } from "../SaladBet"
import { ModalOverlay, ModalWrapper } from "../../components"

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
      <Flex alignItems="center" justifyContent="center" marginTop="120px" flexDirection="column">
        <PlaceBet />
        <ModalDemo />
      </Flex>
      {showLoadingCard && (
        <ModalWrapper p={"5rem"}>
          <ModalOverlay onClick={() => setShowLoadingCard(false)} />
          <LoadingCard />
        </ModalWrapper>
      )}
      {showNoBetsCard && (
        <ModalWrapper p={"5rem"}>
          <ModalOverlay onClick={() => setShowNoBetsCard(false)} />
          <NoBetsCard />
        </ModalWrapper>
      )}
      {showWinningCard && (
        <ModalWrapper p={"5rem"}>
          <ModalOverlay onClick={() => setShowWinningCard(false)} />
          <WinningCard />
        </ModalWrapper>
      )}
      {showAlreadyWonCard && (
        <ModalWrapper p={"5rem"}>
          <ModalOverlay onClick={() => setShowAlreadyWonCard(false)} />
          <AlreadyWonCard />
        </ModalWrapper>
      )}
      {showLosingCard && (
        <ModalWrapper p={"5rem"}>
          <ModalOverlay onClick={() => setShowLosingCard(false)} />
          <LosingCard />
        </ModalWrapper>
      )}
    </main>
  )
}
