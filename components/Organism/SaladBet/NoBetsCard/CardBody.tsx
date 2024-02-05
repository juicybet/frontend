import { Flex, Text } from "../../../Utils/Utility.style"
import { currentTheme } from "../../../../core/theme"

export const CardBody = () => {
  return (
    <>
      <Flex
        justifyContent="center"
        alignItems="center"
        p={20}
        borderTop={"1px solid var(--border-gray)"}
        flexDirection="column"
      >
        <Flex width={"100%"} height={80} justifyContent="center" alignItems="center" borderRadius={10}>
          <Text textAlign="center" fontSize={18} color={"var(--dark-gray)"}>
            You didn’t place any bets in this salad .
          </Text>
        </Flex>
      </Flex>
      <Text textAlign="center" fontSize={18} color={currentTheme().primary}>
        Close Window
      </Text>
    </>
  )
}
