import { MyPnl, MyBet } from "../../Organism/JellyBet"
import { PageHeader } from "../../Molecules"
import { BackgroundWrapper, Flex, ModalOverlay, ModalWrapper } from "../../Utils/Utility.style"

export const History = () => {
  return (
    <main>
      <BackgroundWrapper />
      <Flex alignItems="center" marginTop="120px" justifyContent="center" py={30} flexDirection="column">
        <PageHeader />
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
