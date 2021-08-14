import { useState } from "react"
import { AlreadyWonCard, WinningCard, LosingCard, LoadingCard, BetHistory, CreateBet } from "../DonutBet"
import { BackgroundWrapper, Flex } from "../Utils/Utility.style"
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
        <button onClick={() => setShowWinningModal(true)}>AlreadyWon</button>
        <button onClick={() => setShowLostModal(true)}>lose</button>
        <button onClick={() => setShowWaitingModal(true)}>Win</button>
      </div>
    )
  }

  return (
    <main>
      <BackgroundWrapper />
      <Flex alignItems="center" marginTop="120px" justifyContent="center" py={30}>
        <Flex
          alignItems="center"
          justifyContent={["space-between", "space-between", "space-evenly"]}
          flexDirection={["column", "column", "row"]}
          width={["100%", "100%", "80%"]}
          height={[1250, 1250, 700]}
        >
          <CreateBet />
          <BetHistory />
        </Flex>
      </Flex>

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
          <AlreadyWonCard />
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
          <WinningCard />
        </ModalWrapper>
      )}
    </main>
  )
}
