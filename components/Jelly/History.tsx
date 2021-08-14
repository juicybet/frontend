import { BackgroundWrapper, Flex } from "../Utils/Utility.style"
import { MyPnl, MyBet } from "../JellyBet"

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
          height={[1250, 1250, 700]}
        >
          <MyPnl />
          <MyBet />
        </Flex>
      </Flex>
    </main>
  )
}
