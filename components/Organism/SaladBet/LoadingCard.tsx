import { Card, CardHeader } from "../../Molecules"
import { Flex, Text } from "../../Utils/Utility.style"
import { currentTheme } from "../../../core/theme"
import Image from "next/image"

const CardBodyHeader = () => {
  return (
    <CardHeader>
      <Text textAlign="left" fontSize={18} color={"var(--dark-gray)"}>
        Salad #12 - My Bet
      </Text>
      <Image src="images/icons/close.svg" width="15" height="15" alt="close"></Image>
    </CardHeader>
  )
}

const CardBody = () => {
  return (
    <Flex
      justifyContent="center"
      alignItems="center"
      p={20}
      borderTop={"1px solid var(--border-gray)"}
      flexDirection="column"
    >
      <Flex
        background={"var(--bg-gray)"}
        width={"100%"}
        height={80}
        justifyContent="center"
        alignItems="center"
        borderRadius={10}
      >
        <Text textAlign="center" fontSize={18} color={"var(--light-gray)"}>
          Loading...
        </Text>
      </Flex>
    </Flex>
  )
}
export const LoadingCard = () => {
  return (
    <Card width={"420px"} height={"216px"}>
      <CardBodyHeader />
      <CardBody />
      <Text textAlign="center" fontSize={18} color={currentTheme().primary}>
        Close Window
      </Text>
    </Card>
  )
}
