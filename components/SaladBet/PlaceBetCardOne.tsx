import { useState } from "react"
import { Button } from "../Button"
import { Slider } from "../Slider/Slider"
import { CardHeader, Card } from "../Card/Card"
import styled from "styled-components"
import { EtherFiatValue, Flex, EtherInput, Text, Box } from "../Utils/Utility.style"
import { currentTheme } from "../../core/theme"
import { formatNumber } from "../../utils/Common"
import { RadioCarousel } from "../Carousel"
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

export const PlaceBetCardOne = () => {
  const min = "0.01"
  const max = "10"
  const [value, setValue] = useState("1.00000000")
  const etherPrice = 2234.45

  return (
    <Card width={"420px"} height={"704px"}>
      <CardHeader>
        <Text textAlign="left" fontSize={18} color={"var(--dark-gray)"}>
          Bet which veggie* goes into the salad!
        </Text>
        <Image src="images/icons/close.svg" width="15" height="15" alt="close" />
      </CardHeader>
      <Box borderBottom="1px solid var(--border-gray)">
        <CarouselWrapper>
          <RadioCarousel name="bet" img="/images/vegies/broccoli.png" alt="Bet for Broccoli" width="60" height="100">
            <Text fontSize={"18px"}>Broccoli</Text>
          </RadioCarousel>
          <RadioCarousel name="bet" img="/images/vegies/carrot.png" alt="Bet for Carrot" width="60" height="100">
            <Text fontSize={"18px"}>Carrot</Text>
          </RadioCarousel>
          <RadioCarousel name="bet" img="/images/vegies/corn.png" alt="Bet for Corn" width="60" height="100">
            <Text fontSize={"18px"}>Corn</Text>
          </RadioCarousel>
          <RadioCarousel name="bet" img="/images/vegies/cucumber.png" alt="Bet for Cucumber" width="60" height="100">
            <Text fontSize={"18px"}>Cucumber</Text>
          </RadioCarousel>
          <RadioCarousel name="bet" img="/images/vegies/onion.png" alt="Bet for Onion" width="60" height="100">
            <Text fontSize={"18px"}>Onion</Text>
          </RadioCarousel>
          <RadioCarousel name="bet" img="/images/vegies/pepper.png" alt="Bet for Pepper" width="60" height="100">
            <Text fontSize={"18px"}>Pepper</Text>
          </RadioCarousel>
        </CarouselWrapper>
        <Flex justifyContent="center" py={3}>
          <Text fontSize={12} color={"var(--light-gray)"}>
            * In each salad, Five veggies are picked, and one is thrown away.
          </Text>
        </Flex>
      </Box>
      <Flex flexDirection="column" alignItems="center">
        <Slider min={+min} max={+max} value={+value} setValue={(v) => setValue((+v).toFixed(8))} />
        <Flex flexDirection="column" width="100%">
          <EtherInput
            min={min}
            max={max}
            value={value}
            onChange={(e) => setValue(Math.min(+max, +e.target.value).toString())}
            focusColor={currentTheme().primary}
          ></EtherInput>
          <EtherFiatValue>~${formatNumber(+value * etherPrice, 2)}</EtherFiatValue>
        </Flex>
        <Flex justifyContent="center" px={5}>
          <Text textAlign="center" fontSize={14} color={"var(--light-gray)"}>
            ** Bet more than the highest better to get a chance to win the jackpot!
          </Text>
        </Flex>
        <Button height={"64px"} px={16} py={3}>
          Next &raquo;
        </Button>
        <Text textAlign="center" fontSize={18} color={currentTheme().primary}>
          Close Window
        </Text>
      </Flex>
    </Card>
  )
}
