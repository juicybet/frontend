import { PrimaryCard } from "../Card/Card"
import styled from "styled-components"
import { FlexWrapperCentered, Flex, FlexRow, Text } from "../Utils/Utility.style"
import { currentTheme } from "../../state/theme"
import Image from "next/image"

export const RadioButtonWrapper = styled(FlexWrapperCentered)`
  justify-content: space-between;
  margin: 32px;
  width: 100%;
`

export const LoadingCard = () => {
  return (
    <PrimaryCard width={"420px"} height={"216px"}>
      <Flex justifyContent="space-between" alignItems="center" flexDirection="row" px={20} py={15}>
        <Text textAlign="left" fontSize={18} color={"var(--dark-gray)"}>
          Salad #12 - My Bet
        </Text>
        <Image src="images/icons/close.svg" width="15" height="15" alt="close"></Image>
      </Flex>
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
      <Text textAlign="center" fontSize={18} color={currentTheme().primary}>
        Close Window
      </Text>
    </PrimaryCard>
  )
}
