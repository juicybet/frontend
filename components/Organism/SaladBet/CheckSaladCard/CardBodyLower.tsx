import Image from "next/image"
import { Flex, Text, Box } from "../../../Utils/Utility.style"
import { currentTheme } from "../../../../core/theme"

export const CardBodyLower = () => {
  return (
    <Flex
      justifyContent="center"
      alignItems="center"
      flexDirection={["column", "row"]}
      borderTop="1px solid var(--border-gray)"
      height={["auto", 150]}
    >
      {/* responsiveness needed to be fixed a little bit */}
      <Flex width={["100%", "70%"]}>
        <Flex flexDirection="column">
          <Text textAlign={["center", "left"]} fontSize={18} color={"var(--light-gray)"} px={4}>
            Salad served on:
          </Text>
          <Text textAlign={["center", "left"]} fontSize={24} color={"var(--dark-gray)"} px={4}>
            19 Jul 2021, 11:00
          </Text>
        </Flex>
        <Flex flexDirection="column" alignItems="center">
          <Text textAlign={["center", "left"]} fontSize={18} color={"var(--light-gray)"} px={4}>
            Salad Total:
          </Text>
          <Flex>
            <Text textAlign={["center", "left"]} fontSize={24} color={"var(--dark-gray)"} px={1}>
              8.8390
            </Text>
            <Image src="/images/icons/coins/bnb.svg" width="20" height="20" alt="" />
          </Flex>
        </Flex>
        <Flex flexDirection="column" alignItems="center">
          <Text textAlign={["center", "left"]} fontSize={18} color={"var(--light-gray)"} px={4}>
            Highes Bet:
          </Text>
          <Flex>
            <Text textAlign={["center", "left"]} fontSize={24} color={"var(--dark-gray)"} px={1}>
              1.2416
            </Text>
            <Image src="/images/icons/coins/bnb.svg" width="20" height="20" alt="" />
          </Flex>
        </Flex>
      </Flex>
      <Flex
        width={["100%", "30%"]}
        px={2}
        flexDirection="column"
        alignItems={["center", "flex-end"]}
        justifyContent="space-between"
        height="79px"
      >
        <Text fontSize={18} color={"var(--dark-gray)"}>
          Did you win in Salad #11?
        </Text>
        <Box borderRadius="25px" border="1px solid green" py={"10px"} px={"10px"} width="150px">
          <Text textAlign="center" fontSize={18} color={currentTheme().primary}>
            Check Now
          </Text>
        </Box>
      </Flex>
    </Flex>
  )
}
