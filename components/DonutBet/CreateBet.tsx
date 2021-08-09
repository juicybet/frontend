import { useState } from "react"
import { FullButton } from "../Button"
import { Slider } from "../Slider/Slider"
import { CardHeader, BottomCardSection, PrimaryCard, TopCardSection } from "../Card/Card"
import styled from "styled-components"
import { EtherFiatValue, FlexWrapperCentered, Flex, EtherInput, FlexRow, Text } from "../Utils/Utility.style"
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

export const CreateBet = () => {
  const min = "0.01"
  const max = "10"
  const [value, setValue] = useState("1.00000000")
  const etherPrice = 2234.45

  const numBets = 16
  const [allBets, setAllBets] = useState(
    new Array(numBets).fill("").map((_, i) => ({
      bet: i.toString(numBets),
      selected: false,
    }))
  )

  const setSelected = (b: string, value: boolean) => {
    setAllBets(allBets.map(({ bet }) => ({ bet, selected: bet === b ? value : false })))
  }

  return (
    <PrimaryCard width={"400px"} height={"592px"}>
      <CardHeader>Bet what the last digit of the current block’s hash will be to win a 15x reward!</CardHeader>
      <TopCardSection height={"224px"} top={"12%"}>
        <CarouselWrapper>
          {allBets.map(({ bet, selected }) => (
            <RadioCarousel
              name="bet"
              img={`/images/donuts/${bet}.png`}
              alt={`Donut ${bet}`}
              width="100"
              height="100"
              key={bet}
              selected={selected}
              setSelected={(value) => setSelected(bet, value)}
            >
              <Text fontSize={32}>{bet.toUpperCase()}</Text>
            </RadioCarousel>
          ))}
        </CarouselWrapper>
      </TopCardSection>
      <BottomCardSection height={"304px"} bottom={"0%"}>
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
      </BottomCardSection>
      <FullButton>Create a Bet!</FullButton>
    </PrimaryCard>
  )
}
