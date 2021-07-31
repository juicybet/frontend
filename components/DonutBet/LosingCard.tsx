import Image from "next/image"
import "react-circular-progressbar/dist/styles.css"
import { CardHeader, BottomCardSection, PrimaryCard, TopCardSection, InfoCard } from "../Card/Card"
import {
  BetInfoWrapper,
  FlexWrapperCol,
  FlexWrapperRow,
  RewardInfo,
  RewardSection,
  RewardSectionWrapper,
  SpanInfoflexEnd,
  SpanInfoPrimary,
  SpanInfoWhite,
  SpanLabel,
} from "../Utils/Utility.style"
import styled, { css } from "styled-components"
import { ExternalLink } from "react-feather"
import { LoosingRibbon } from "../Ribbon"

const DonutWrapper = styled(FlexWrapperRow)<{ img: string }>`
  border-right: 1px solid var(--border-gray);
  background-image: url(${(props) => props.img});
  position: relative;
  width: 45%;
  padding: 2rem;
`

const DonutDetailWrapper = styled(FlexWrapperCol)`
  position: relative;
  padding: 3rem 3rem 0 1rem;
  width: 60%;
  gap: 0.5rem;
`

const LabelWrapper = styled.label`
  display: grid;
  grid-template-columns: -webkit-min-content auto;
  grid-template-columns: min-content auto;
`

export const LosingCard = () => {
  return (
    <PrimaryCard>
      <CardHeader>Bet #252 result</CardHeader>
      <TopCardSection height={"14rem"} top={"10%"}>
        <FlexWrapperRow>
          <DonutWrapper img={"/images/Rectangle.png"}>
            <Image src="/images/donut_8.png" width="140" height="140" alt="" />
          </DonutWrapper>
          <DonutDetailWrapper>
            <SpanLabel size={"20px"}>Block Details :</SpanLabel>
            <LabelWrapper>
              <SpanLabel size={"1rem"}>Number: </SpanLabel>
              <SpanInfoPrimary>123021</SpanInfoPrimary>
            </LabelWrapper>
            <LabelWrapper>
              <SpanLabel size={"1rem"}>Hash:</SpanLabel>
              <SpanInfoPrimary>
                35f…af7 <ExternalLink size={18} />
              </SpanInfoPrimary>
            </LabelWrapper>
            <div style={{ position: "absolute", bottom: 10, right: 10 }}>
              <Image src="/images/icon_lost.png" width="30" height="30" alt="" />
            </div>
          </DonutDetailWrapper>
        </FlexWrapperRow>
      </TopCardSection>
      <BottomCardSection height={"22.5rem"} bottom={"0"}>
        <BetInfoWrapper>
          <SpanLabel size={"18px"}>You Choose:</SpanLabel>
          <SpanInfoPrimary>
            Donut A
            <ExternalLink size={18} />
          </SpanInfoPrimary>
        </BetInfoWrapper>
        <LoosingRibbon>
          <SpanInfoWhite>You loose</SpanInfoWhite>
        </LoosingRibbon>
        <RewardSectionWrapper>
          <RewardSection>
            <SpanInfoflexEnd>
              View on Bsc Secondary
              <ExternalLink size={10} />
            </SpanInfoflexEnd>
            <RewardInfo height={"6rem"} width={"16rem"}>
              <SpanInfoPrimary>No Reward For you</SpanInfoPrimary>
              <SpanInfoPrimary>(:</SpanInfoPrimary>
            </RewardInfo>
          </RewardSection>
        </RewardSectionWrapper>
        <SpanInfoPrimary>Close Window</SpanInfoPrimary>
      </BottomCardSection>
    </PrimaryCard>
  )
}
