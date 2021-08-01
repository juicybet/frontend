import Image from "next/image"
import { FullButton } from "../Button"
import { Radio } from "../Radio/Radio"
import { Slider } from "../Slider/Slider"

import { CardHeader, BottomCardSection, PrimaryCard, TopCardSection } from "../Card/Card"
import styled from "styled-components"
import {
  SpanInfoSecondary,
  FlexColWrapperCentered,
  FlexWrapperCentered,
  FlexWrapperCol,
  SpanInfoPrimary,
} from "../Utils/Utility.style"

export const BetSelctionWrapper = styled(FlexColWrapperCentered)`
  margin: 32px 32px;
`

export const RadioButtonWrapper = styled(FlexWrapperCentered)`
  justify-content: space-between;
  margin: 32px;
  width: 100%;
`

export const PillsWrapper = styled(FlexWrapperCentered)`
  justify-content: space-between;
  margin: 24px 48px;
`
export const CardPils = styled.button`
  padding: 5px 10px;
  border-radius: 16px;
  color: var(--light-gray);
  background: var(--primary-white);
  border: 2px solid var(--secondary-gray);
`

export const SliderWrapper = styled(FlexWrapperCentered)`
  margin: 0 auto;
`

export const CoinWrapper = styled(FlexWrapperCentered)`
  justify-content: space-between;
  border: 2px solid var(--secondary-gray);
  border-radius: 32px;
  height: 64px;
  padding: 12px;
  margin: 32px 80px;
`

export const CreateBet = () => {
  return (
    <PrimaryCard>
      <CardHeader>Bet which fruit will turn into jelly!</CardHeader>
      <TopCardSection height={"224px"} top={"10%"}>
        <BetSelctionWrapper>
          <Image src="/images/demo-image.png" width="200" height="100" alt="" />
          <RadioButtonWrapper>
            <Radio name="bet" variant="jelly">
              Watermelon
            </Radio>
            <Radio name="bet" variant="jelly">
              Strawbery
            </Radio>
          </RadioButtonWrapper>
        </BetSelctionWrapper>
      </TopCardSection>
      <BottomCardSection height={"304px"} bottom={"0%"}>
        <PillsWrapper>
          {["25%", "50%", "75%", "max"].map((item, index) => (
            <CardPils key={index}>{item}</CardPils>
          ))}
        </PillsWrapper>
        <SliderWrapper>
          <Slider />
        </SliderWrapper>
        <CoinWrapper>
          <FlexWrapperCol>
            <SpanInfoPrimary>0.123021</SpanInfoPrimary>
            <SpanInfoSecondary>~ $3.67 </SpanInfoSecondary>
          </FlexWrapperCol>
          <Image src="/images/Bitmap.png" width="40" height="40" alt="" />
        </CoinWrapper>
      </BottomCardSection>
      <FullButton type="jelly">Create a Bet </FullButton>
    </PrimaryCard>
  )
}
