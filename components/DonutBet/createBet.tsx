import Image from "next/image"
import { FullButton } from "../Button"
import { Radio } from "../Radio/Radio"
import { Slider } from "../Slider/Slider"
import { CardHeader, BottomCardSection, PrimaryCard, TopCardSection } from "../Card/Card"
import styled from "styled-components"
import { SpanInfoSecondary, FlexWrapperCentered, Flex, SpanInfoPrimary } from "../Utils/Utility.style"

export const RadioButtonWrapper = styled(FlexWrapperCentered)`
  justify-content: space-between;
  margin: 32px;
  width: 100%;
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
      <CardHeader>Bet what the last digit of the current block’s hash will be to win a 15x reward!</CardHeader>
      <TopCardSection height={"224px"} top={"12%"}>
        <Flex alignItems="center" justifyContent="center" m={4}>
          <Radio name="bet">6</Radio>
          <Radio name="bet">7</Radio>
        </Flex>
      </TopCardSection>
      <BottomCardSection height={"304px"} bottom={"0%"}>
        <Flex alignItems="center" justifyContent="space-between" mx={5} my={4}>
          {["25%", "50%", "75%", "max"].map((item, index) => (
            <CardPils key={index}>{item}</CardPils>
          ))}
        </Flex>
        <SliderWrapper>
          <Slider />
        </SliderWrapper>
        <CoinWrapper>
          <Flex flexDirection="column">
            <SpanInfoPrimary>0.123021</SpanInfoPrimary>
            <SpanInfoSecondary>~ $3.67 </SpanInfoSecondary>
          </Flex>
          <Image src="/images/icons/coins/bnb.svg" width="32" height="32" alt="" />
        </CoinWrapper>
      </BottomCardSection>
      <FullButton>Create a Bet </FullButton>
    </PrimaryCard>
  )
}
