import { Button } from "../../../Atoms"
import { Flex, Text } from "../../../Utils/Utility.style"

export const CardBodyLower = () => {
  return (
    <Flex
      justifyContent="center"
      alignItems="center"
      flexDirection={["column", "row"]}
      borderTop="1px solid var(--border-gray)"
      height={["auto", 150]}
    >
      <Flex width={["100%", "40%"]} flexDirection="column">
        <Text textAlign={["center", "left"]} fontSize={18} color={"var(--light-gray)"} px={4}>
          Salad will be ready to serve in:
        </Text>
        <Text textAlign={["center", "left"]} fontSize={24} color={"var(--dark-gray)"} px={4}>
          8 hours and 23 minutes
        </Text>
      </Flex>
      <Flex width={["100%", "60%"]} px={4}>
        <Button>Place A Bet</Button>
      </Flex>
    </Flex>
  )
}
