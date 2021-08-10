import { useState } from "react"
import { BackgroundWrapper, Box, ContentWrapper, Flex, Text } from "../Utils/Utility.style"
import { PlaceBet, IncreaseBet, IncreaseBetCard, PlaceBetCardOne, PlaceBetCardTwo } from "../SaladBet"
import { currentTheme } from "../../core/theme"
import { ModalOverlay, ModalWrapper } from "../../components"

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
      <Flex alignItems="center" justifyContent="center" marginTop="120px" flexDirection="column">
        <Flex
          bg="var(--primary-white)"
          justifyContent="space-between"
          alignItems="center"
          width={[420, 830]}
          my={"3rem"}
          py={"1.5rem"}
          px={"1rem"}
          borderRadius="20px"
          boxShadow="0px 0px 10px rgba(0, 0, 0, 0.05)"
        >
          <Text textAlign="left" fontSize={18} color={"var(--dark-gray)"}>
            Did you win in Salad #11?
          </Text>
          <Box borderRadius="25px" border="1px solid green" py={"10px"} px={"1rem"}>
            <Text textAlign="center" fontSize={18} color={currentTheme().primary}>
              Check Now
            </Text>
          </Box>
        </Flex>
        <PlaceBet />
        <ModalDemo />
      </Flex>

      {showIncreaseBetCard && (
        <ModalWrapper p={"5rem"}>
          <ModalOverlay onClick={() => setShowIncreaseBetCard(false)} />
          <IncreaseBetCard />
        </ModalWrapper>
      )}

      {showPlaceBetCardOne && (
        <ModalWrapper p={"5rem"}>
          <ModalOverlay onClick={() => setShowPlaceBetCardOne(false)} />
          <PlaceBetCardOne />
        </ModalWrapper>
      )}
      {showPlaceBetCardTwo && (
        <ModalWrapper p={"5rem"}>
          <ModalOverlay onClick={() => setShowPlaceBetCardTwo(false)} />
          <PlaceBetCardTwo />
        </ModalWrapper>
      )}
    </main>
  )
}
