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
import { LoosingRibbon } from "../Ribbon"

const SharedWrapperStyle = css`
  width: 50%;
  padding: 32px;
`

const WatermelonWrapper = styled(FlexRow)`
  ${SharedWrapperStyle}
  border-right: 1px solid var(--border-gray);
  background-image: url(/images/stripes_pattern.png);
  position: relative;
`

const StrawberryWrapper = styled(FlexColumn)`
  ${SharedWrapperStyle}
  position: relative;
`

export const LosingCard = () => {
  return (
    <InfoCard>
      <CardHeader>My PNL</CardHeader>
      <TopCardSection height={"224px"} top={"10%"}>
        <Flex flexDirection="row">
          <WatermelonWrapper>
            <Image src="/images/Watermelon.png" width="120" height="150" alt="" />
            <div style={{ position: "absolute", bottom: 10, right: 10 }}>
              <Image src="/images/icons/lost.svg" width="40" height="40" alt="" />
            </div>
          </WatermelonWrapper>
          <StrawberryWrapper>
            <Image src="/images/strawberry.png" width="120" height="150" alt="" />
            <div style={{ position: "absolute", bottom: 10, right: 10 }}>
              <Image src="/images/icons/won.svg" width="40" height="40" alt="" />
            </div>
          </StrawberryWrapper>
        </Flex>
      </TopCardSection>
      <BottomCardSection height={"384px"} bottom={"0"}>
        <BetInfoWrapper>
          <SpanLabel size={"18px"}>You Choose:</SpanLabel>
          <SpanInfoPrimary>
            Strwaberry
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
            <RewardInfo height={"128px"} width={"256px"}>
              <SpanInfoPrimary>No Reward For you</SpanInfoPrimary>
              <SpanInfoPrimary>(:</SpanInfoPrimary>
            </RewardInfo>
          </RewardSection>
        </RewardSectionWrapper>
        <SpanInfoPrimary>Close Window</SpanInfoPrimary>
      </BottomCardSection>
    </InfoCard>
  )
}
