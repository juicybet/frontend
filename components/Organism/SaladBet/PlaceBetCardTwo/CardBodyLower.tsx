import { useState } from "react"
import { Button } from "../../../Atoms"
import { CardHeader, Card, RadioCarousel } from "../../../Molecules"
import styled from "styled-components"
import { Flex, Text, Box } from "../../../Utils/Utility.style"
import { currentTheme } from "../../../../core/theme"
import Image from "next/image"

const CarouselWrapper = styled(Flex)`
  overflow-x: auto;
  white-space: nowrap;
  align-items: center;
  justify-content: space-between;
  padding-top: 1rem;
  overflow-x: auto;
  white-space: wrap;
  -ms-overflow-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
`
export const CardBodyLower = () => {
  return (
    <Flex flexDirection="column" p={3} justifyContent="space-between" height={"60%"}>
      <Text fontSize={14} color={"var(--light-gray)"}>
        As the highest better, you get to place a second bet for a chance to win the jackpot.
      </Text>
      <Text fontSize={14} color={"var(--light-gray)"}>
        If you are still the highest better when the salad is served, and both your bets are correct, you win the
        jackpot, which is equal to the total pool size of the current salad.
      </Text>
      <Text fontSize={14} color={"var(--light-gray)"}>
        If your second bet is wrong, you still win something if your first bet was correct.
      </Text>
      <Button height={"64px"} px={13}>
        Place Bet
      </Button>
      <Text textAlign="center" fontSize={18} color={currentTheme().primary}>
        &laquo; Go Back
      </Text>
    </Flex>
  )
}
