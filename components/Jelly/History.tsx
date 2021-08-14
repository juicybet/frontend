import { BackgroundWrapper, ContentWrapper, Flex } from "../Utils/Utility.style"
import { MainContent } from "../JellyBet/Bet.style"
import { MyPnl } from "../JellyBet/MyPnl"
import { MyBet } from "../JellyBet/MyBet"

export const History = () => {
  return (
    <main>
      <BackgroundWrapper />
      <Flex alignItems="center" marginTop="120px" justifyContent="center" py={30}>
        <Flex
          alignItems="center"
          justifyContent={["space-between", "space-between", "space-evenly"]}
          flexDirection={["column", "column", "row"]}
          width={["100%", "100%", "80%"]}
          height={[1250, 1250, 600]}
        >
          <MyPnl />
          <MyBet />
        </Flex>
      </Flex>
    </main>
  )
}
