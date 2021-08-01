import Image from "next/image"
import "react-circular-progressbar/dist/styles.css"
import { CardHeader, BottomCardSection, PrimaryCard, TopCardSection, InfoCard } from "../Card/Card"
import {
  BetInfoWrapper,
  Flex,
  FlexRow,
  FlexColumn,
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
import { LosingRibbon } from "../Ribbon"

const DonutWrapper = styled(FlexRow)`
  border-right: 1px solid var(--border-gray);
  background-image: url(/images/stripes_pattern.png);
  position: relative;
  width: 45%;
  padding: 32px;
`

const DonutDetailWrapper = styled(FlexColumn)`
  position: relative;
  padding: 48px 48px 0 16px;
  width: 60%;
  gap: 8px;
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
      <TopCardSection height={"224px"} top={"10%"}>
        <Flex flexDirection="row">
          <DonutWrapper>
            <Image src="/images/donuts/8.png" width="128" height="128" alt="" />
          </DonutWrapper>
          <DonutDetailWrapper>
            <SpanLabel size={"20px"}>Block Details :</SpanLabel>
            <LabelWrapper>
              <SpanLabel size={"16px"}>Number: </SpanLabel>
              <SpanInfoPrimary>123021</SpanInfoPrimary>
            </LabelWrapper>
            <LabelWrapper>
              <SpanLabel size={"16px"}>Hash:</SpanLabel>
              <SpanInfoPrimary>
                35f…af7 <ExternalLink size={18} />
              </SpanInfoPrimary>
            </LabelWrapper>
            <div style={{ position: "absolute", bottom: 10, right: 10 }}>
              <Image src="/images/icons/lost.svg" width="40" height="40" alt="" />
            </div>
          </DonutDetailWrapper>
        </Flex>
      </TopCardSection>
      <BottomCardSection height={"360px"} bottom={"0"}>
        <BetInfoWrapper>
          <SpanLabel size={"18px"}>You Choose:</SpanLabel>
          <SpanInfoPrimary>
            Donut A
            <ExternalLink size={18} />
          </SpanInfoPrimary>
        </BetInfoWrapper>
        <LosingRibbon>
          <SpanInfoWhite>You loose</SpanInfoWhite>
        </LosingRibbon>
        <RewardSectionWrapper>
          <RewardSection>
            <SpanInfoflexEnd>
              View on Bsc Secondary
              <ExternalLink size={10} />
            </SpanInfoflexEnd>
            <RewardInfo height={"96px"} width={"256px"}>
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
