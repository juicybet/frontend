import { useState } from "react"
import { FullButton, FullButtonSecondary } from "../Button"
import { Slider } from "../Slider/Slider"
import { CardHeader, BottomCardSection, PrimaryCard, TopCardSection } from "../Card/Card"
import styled from "styled-components"
import {
  EtherFiatValue,
  FlexWrapperCentered,
  Flex,
  EtherInput,
  FlexRow,
  Text,
  SpanLabel,
  SpanInfoPrimary,
  Box,
} from "../Utils/Utility.style"
import { currentTheme } from "../../core/theme"
import { formatNumber } from "../../utils/Common"
import { RadioCarousel } from "../Carousel"

export const RadioButtonWrapper = styled(FlexWrapperCentered)`
  justify-content: space-between;
  margin: 32px;
  width: 100%;
`

const CarouselWrapper = styled(FlexRow)`
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

const SpanWrapper = styled(FlexWrapperCentered)`
  bottom: 0;
`

export const PlaceBetCardOne = () => {
  const min = "0.01"
  const max = "10"
  const [value, setValue] = useState("1.00000000")
  const etherPrice = 2234.45

  return (
    <PrimaryCard width={"420px"} height={"704px"}>
      <CardHeader>Bet which veggie* goes into the salad!</CardHeader>
      <TopCardSection height={"224px"} top={"9%"}>
        <CarouselWrapper>
          <RadioCarousel name="bet" img="/images/vegies/broccoli.png" alt="Bet for Broccoli" width="60" height="100">
            <Text fontSize={32}>Broccoli</Text>
          </RadioCarousel>
          <RadioCarousel name="bet" img="/images/vegies/carrot.png" alt="Bet for Carrot" width="60" height="100">
            <Text fontSize={32}>Carrot</Text>
          </RadioCarousel>
          <RadioCarousel name="bet" img="/images/vegies/corn.png" alt="Bet for Corn" width="60" height="100">
            <Text fontSize={32}>Corn</Text>
          </RadioCarousel>
          <RadioCarousel name="bet" img="/images/vegies/cucumber.png" alt="Bet for Cucumber" width="60" height="100">
            <Text fontSize={32}>Cucumber</Text>
          </RadioCarousel>
          <RadioCarousel name="bet" img="/images/vegies/onion.png" alt="Bet for Onion" width="60" height="100">
            <Text fontSize={32}>Onion</Text>
          </RadioCarousel>
          <RadioCarousel name="bet" img="/images/vegies/pepper.png" alt="Bet for Pepper" width="60" height="100">
            <Text fontSize={32}>Pepper</Text>
          </RadioCarousel>
        </CarouselWrapper>
        <Flex justifyContent="center" py={3}>
          <Text fontSize={12} color={"var(--light-gray)"}>
            * In each salad, Five veggies are picked, and one is thrown away.
          </Text>
        </Flex>
      </TopCardSection>
      <BottomCardSection height={"370px"} bottom={"5%"}>
        <Slider min={+min} max={+max} value={+value} setValue={(v) => setValue((+v).toFixed(8))} />
        <Flex flexDirection="column">
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
        {/* size props to be added to the button  */}
        <FullButtonSecondary>Next &raquo;</FullButtonSecondary>
        <SpanInfoPrimary>Close Window</SpanInfoPrimary>
      </BottomCardSection>
    </PrimaryCard>
  )
}
