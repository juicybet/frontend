import { useState } from "react"
import { FullButton } from "../Button"
import { Slider } from "../Slider/Slider"
import { CardHeader, BottomCardSection, PrimaryCard, TopCardSection } from "../Card/Card"
import styled from "styled-components"
import { EtherFiatValue, FlexWrapperCentered, Flex, EtherInput, FlexRow, Text } from "../Utils/Utility.style"
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

export const CreateBet = () => {
  const min = "0.01"
  const max = "10"
  const [value, setValue] = useState("1.00000000")
  const etherPrice = 2234.45

  return (
    <PrimaryCard width={"400px"} height={"592px"}>
      <CardHeader>Bet what the last digit of the current block’s hash will be to win a 15x reward!</CardHeader>
      <TopCardSection height={"224px"} top={"12%"}>
        <CaraouselWrapper>
          <RadioCaraousel Img="/images/donuts/1.png" width={"100"} height={"100"}>
            <Text fontSize={32}>1</Text>
          </RadioCaraousel>
          <RadioCaraousel Img="/images/donuts/2.png" width={"100"} height={"100"}>
            <Text fontSize={32}>2</Text>
          </RadioCaraousel>
          <RadioCaraousel Img="/images/donuts/3.png" width={"100"} height={"100"}>
            <Text fontSize={32}>3</Text>
          </RadioCaraousel>
          <RadioCaraousel Img="/images/donuts/4.png" width={"100"} height={"100"}>
            <Text fontSize={32}>4</Text>
          </RadioCaraousel>
          <RadioCaraousel Img="/images/donuts/5.png" width={"100"} height={"100"}>
            <Text fontSize={32}>5</Text>
          </RadioCaraousel>
        </CaraouselWrapper>
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
