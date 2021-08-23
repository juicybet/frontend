import { useState } from "react"
import { Button } from "../../Atoms"
import { CardHeader, Card, RadioCarousel } from "../../Molecules"
import styled from "styled-components"
import { Flex, Text, Box } from "../../Utils/Utility.style"
import { currentTheme } from "../../../core/theme"
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

export const PlaceBetCardTwo = () => {
  const min = "0.01"
  const max = "10"
  const [value, setValue] = useState("1.00000000")
  const etherPrice = 2234.45
  const CardBodyHeader = () => {
    return (
      <CardHeader>
        <Text textAlign="left" fontSize={18} color={"var(--dark-gray)"}>
          Bet which veggie* will be thrown away!
        </Text>
        <Image src="images/icons/close.svg" width="15" height="15" alt="close" />
      </CardHeader>
    )
  }

  const CardBodyUper = () => {
    return (
      <Box borderBottom="1px solid var(--border-gray)">
        <CarouselWrapper>
          <RadioCarousel name="bet" img="/images/vegies/broccoli.png" alt="Bet for Broccoli" width="60" height="100">
            <Text fontSize={18}>Broccoli</Text>
          </RadioCarousel>
          <RadioCarousel name="bet" img="/images/vegies/carrot.png" alt="Bet for Carrot" width="60" height="100">
            <Text fontSize={18}>Carrot</Text>
          </RadioCarousel>
          <RadioCarousel name="bet" img="/images/vegies/corn.png" alt="Bet for Corn" width="60" height="100">
            <Text fontSize={18}>Corn</Text>
          </RadioCarousel>
          <RadioCarousel name="bet" img="/images/vegies/cucumber.png" alt="Bet for Cucumber" width="60" height="100">
            <Text fontSize={18}>Cucumber</Text>
          </RadioCarousel>
          <RadioCarousel name="bet" img="/images/vegies/onion.png" alt="Bet for Onion" width="60" height="100">
            <Text fontSize={18}>Onion</Text>
          </RadioCarousel>
          <RadioCarousel name="bet" img="/images/vegies/pepper.png" alt="Bet for Pepper" width="60" height="100">
            <Text fontSize={18}>Pepper</Text>
          </RadioCarousel>
        </CarouselWrapper>
        <Flex justifyContent="center" py={3}>
          <Text fontSize={12} color={"var(--light-gray)"}>
            * In each salad, Five veggies are picked, and one is thrown away.
          </Text>
        </Flex>
      </Box>
    )
  }

  const CardBodyLower = () => {
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
  return (
    <Card width={"420px"} height={"649px"}>
      <CardBodyHeader />
      <CardBodyUper />
      <CardBodyLower />
    </Card>
  )
}
