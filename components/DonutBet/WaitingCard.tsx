import Image from "next/image"
import "react-circular-progressbar/dist/styles.css"
import { CardHeader, BottomCardSection, TopCardSection, InfoCard } from "../Card/Card"
import {
  BetInfoWrapper,
  FlexWrapperCentered,
  FlexWrapperCol,
  FlexWrapperRow,
  RewardInfo,
  RewardSection,
  RewardSectionWrapper,
  SpanInfoflexEnd,
  SpanInfoPrimary,
  SpanInfoSecondary,
  SpanInfoWhite,
  SpanLabel,
} from "../Utils/Utility.style"
import styled, { css } from "styled-components"
import { ExternalLink } from "react-feather"
import { WinningRibbon } from "../Ribbon"

const SharedWrapperStyle = css`
  width: 50%;
  padding: 32px;
`

const DonutWrapper = styled(FlexWrapperRow)`
  ${SharedWrapperStyle}
  border-right: 1px solid var(--border-gray);
  position: relative;
`

const DonutDetailWrapper = styled(FlexWrapperCol)`
  position: relative;
  padding: 48px 48px 0 16px;
  width: 60%;
  gap: 8px;
`

const CoinWrapper = styled(FlexWrapperCentered)`
  justify-content: space-between;
  border: 2px solid var(--secondary-gray);
  border-radius: 32px;
  height: 64px;
  padding: 12px;
  width: 100%;
  background-color: var(--primary-white);
`

const LabelWrapperGrid = styled.div`
  display: grid;
  grid-template-columns: -webkit-min-content auto;
  grid-template-columns: min-content auto;
`
const LabelWrapper = styled(FlexWrapperCentered)`
  padding: 16px 16px 0;
`
export const WaitingCard = () => {
  return (
    <InfoCard>
      <CardHeader>Bet #252 result</CardHeader>
      <TopCardSection height={"256px"} top={"10%"}>
        <FlexWrapperRow>
          <DonutWrapper>
            <Image src="/images/donuts/7.png" width="128" height="128" alt="" />
          </DonutWrapper>
          <DonutDetailWrapper>
            <SpanLabel size={"20px"}>Block Details :</SpanLabel>
            <LabelWrapperGrid>
              <SpanLabel size={"16px"}>Number: </SpanLabel>
              <SpanInfoPrimary>123021</SpanInfoPrimary>
            </LabelWrapperGrid>
            <LabelWrapperGrid>
              <SpanLabel size={"16px"}>Hash:</SpanLabel>
              <SpanInfoPrimary>
                35f…af7 <ExternalLink size={18} />
              </SpanInfoPrimary>
            </LabelWrapperGrid>
            <div style={{ position: "absolute", bottom: 10, right: 10 }}>
              <Image src="/images/icons/won.svg" width="40" height="40" alt="" />
            </div>
          </DonutDetailWrapper>
        </FlexWrapperRow>
      </TopCardSection>
      <BottomCardSection height={"416px"} bottom={"0"}>
        <BetInfoWrapper>
          <SpanLabel size={"18px"}>You Choose:</SpanLabel>
          <SpanInfoPrimary>
            Donut 7
            <ExternalLink size={18} />
          </SpanInfoPrimary>
        </BetInfoWrapper>
        <WinningRibbon bet={"donut"}>
          <SpanInfoWhite>You Win</SpanInfoWhite>
        </WinningRibbon>
        <LabelWrapper>
          <SpanLabel size={"18px"}>Time left to claim reward: 09:59</SpanLabel>
        </LabelWrapper>
        <RewardSectionWrapper>
          <RewardSection>
            <RewardInfo height={"128px"} width={"256px"}>
              <SpanInfoPrimary>your reward :</SpanInfoPrimary>
              <CoinWrapper>
                <FlexWrapperCol>
                  <SpanInfoPrimary>0.123021</SpanInfoPrimary>
                  <SpanInfoSecondary>~ $3.67 </SpanInfoSecondary>
                </FlexWrapperCol>
                <Image src="/images/icons/coins/bnb.svg" width="32" height="32" alt="" />
              </CoinWrapper>
            </RewardInfo>
          </RewardSection>
        </RewardSectionWrapper>
        <SpanInfoPrimary>Close Window</SpanInfoPrimary>
      </BottomCardSection>
    </InfoCard>
  )
}
