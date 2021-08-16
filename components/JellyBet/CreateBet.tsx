import Image from "next/image"
import { useState } from "react"
import { FullButton } from "../Button"
import { Radio } from "../Radio/Radio"
import { Slider } from "../Slider/Slider"
import { CardHeader, BottomCardSection, PrimaryCard, TopCardSection } from "../Card/Card"
import styled from "styled-components"
import { EtherFiatValue, FlexWrapperCentered, Flex, EtherInput } from "../Utils/Utility.style"
import { currentTheme } from "../../state/theme"
import { formatNumber } from "../../utils"

export const RadioButtonWrapper = styled(FlexWrapperCentered)`
  justify-content: space-between;
  margin: 32px;
  width: 100%;
`

export const CreateBet = () => {
  const min = "0.01"
  const max = "10"
  const [value, setValue] = useState("1.00000000")
  const etherPrice = 2234.45

  return (
    <PrimaryCard width={"400px"} height={"592px"}>
      <CardHeader>Bet which fruit will turn into jelly!</CardHeader>
      <TopCardSection height={"224px"} top={"10%"}>
        <Flex alignItems="center" justifyContent="center" flexDirection="column" mx={4} my={2}>
          {/* <Image src="/images/demo-image.png" width="200" height="100" alt="" /> */}
          <div className="flexWrapper">
            <div className="elementWrapper">
              <video
                src="/videos/watermelon/idle_1.webm"
                width="300"
                height="200"
                autoPlay
                loop
                className="videoElement"
              ></video>
            </div>
            <div className="elementWrapper">
              <video
                src="/videos/strawberry/idle_1.webm"
                width="300"
                height="200"
                autoPlay
                loop
                className="videoElement"
              ></video>
            </div>
          </div>
          <RadioButtonWrapper>
            <Radio name="bet">Watermelon</Radio>
            <Radio name="bet">Strawberry</Radio>
          </RadioButtonWrapper>
        </Flex>
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
