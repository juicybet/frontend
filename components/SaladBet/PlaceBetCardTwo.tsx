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
import { RadioCaraousel } from "../Caraousel"

export const RadioButtonWrapper = styled(FlexWrapperCentered)`
  justify-content: space-between;
  margin: 32px;
  width: 100%;
`

const CaraouselWrapper = styled(FlexRow)`
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

export const PlaceBetCardTwo = () => {
  const min = "0.01"
  const max = "10"
  const [value, setValue] = useState("1.00000000")
  const etherPrice = 2234.45

  return (
    <PrimaryCard width={"420px"} height={"645px"}>
      <CardHeader>Bet which veggie* goes into the salad!</CardHeader>
      <TopCardSection height={"224px"} top={"9%"}>
        <CaraouselWrapper>
          <RadioCaraousel Img="/images/vegies/broccoli.png" width={"60"} height={"100"}>
            <Text fontSize={32}>1</Text>
          </RadioCaraousel>
          <RadioCaraousel Img="/images/vegies/carrot.png" width={"60"} height={"100"}>
            <Text fontSize={32}>2</Text>
          </RadioCaraousel>
          <RadioCaraousel Img="/images/vegies/corn.png" width={"60"} height={"100"}>
            <Text fontSize={32}>3</Text>
          </RadioCaraousel>
          <RadioCaraousel Img="/images/vegies/cucumber.png" width={"60"} height={"100"}>
            <Text fontSize={32}>4</Text>
          </RadioCaraousel>
          <RadioCaraousel Img="/images/vegies/onion.png" width={"60"} height={"100"}>
            <Text fontSize={32}>5</Text>
          </RadioCaraousel>
          <RadioCaraousel Img="/images/vegies/pepper.png" width={"60"} height={"100"}>
            <Text fontSize={32}>5</Text>
          </RadioCaraousel>
        </CaraouselWrapper>
        <Flex justifyContent="center" py={3}>
          <Text fontSize={12} color={"var(--light-gray)"}>
            * In each salad, Five veggies are picked, and one is thrown away.
          </Text>
        </Flex>
      </TopCardSection>
      <BottomCardSection height={"350px"} bottom={"0%"}>
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
        </Flex>
        {/* size props to be added to the button  */}
        <FullButtonSecondary>Place Bet</FullButtonSecondary>
        <SpanInfoPrimary>&laquo; Go Back</SpanInfoPrimary>
      </BottomCardSection>
    </PrimaryCard>
  )
}
