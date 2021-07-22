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
  margin: 2rem 2rem;
`

export const RadioButtonWrapper = styled(FlexWrapperCentered)`
  justify-content: space-between;
  margin: 2rem;
  width: 100%;
`

export const PillsWrapper = styled(FlexWrapperCentered)`
  justify-content: space-between;
  margin: 1.5rem 3rem;
`
export const CardPils = styled.button`
  padding: 5px 10px;
  border-radius: 1rem;
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
  border-radius: 2rem;
  height: 4rem;
  padding: 0.8rem;
  margin: 2rem 5rem;
`

export const CreateBet = () => {
  return (
    <PrimaryCard>
      <CardHeader>Bet which fruit will turn into jelly!</CardHeader>
      <TopCardSection height={"14rem"} top={"10%"}>
        <BetSelctionWrapper>
          <Image src="/images/demo-image.png" width="200" height="100" alt="" />
          <RadioButtonWrapper>
            <Radio name="bet">Watermelon</Radio>
            <Radio name="bet">Strawbery</Radio>
          </RadioButtonWrapper>
        </BetSelctionWrapper>
      </TopCardSection>
      <BottomCardSection height={"19rem"} bottom={"0%"}>
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
      <FullButton>Create a Bet </FullButton>
    </PrimaryCard>
  )
}
