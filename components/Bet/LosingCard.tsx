import Image from "next/image"
import "react-circular-progressbar/dist/styles.css"
import { CardHeader, BottomCardSection, PrimaryCard, TopCardSection, NotificationCard } from "../Card/Card"
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

const SharedWrapperStyle = css`
  width: 50%;
  padding: 2rem;
`

const WatermelonWrapper = styled(FlexWrapperRow)<{ img: string }>`
  ${SharedWrapperStyle}
  border-right: 1px solid var(--border-gray);
  background-image: url(${(props) => props.img});
  position: relative;
`

const StrawberryWrapper = styled(FlexWrapperCol)`
  ${SharedWrapperStyle}
  position: relative;
`

export const LosingCard = () => {
  return (
    <NotificationCard>
      <CardHeader>My PNL</CardHeader>
      <TopCardSection height={"14rem"} top={"10%"}>
        <FlexWrapperRow>
          <WatermelonWrapper img={"/images/Rectangle.png"}>
            <Image src="/images/Watermelon.png" width="120" height="150" alt="" />
            <div style={{ position: "absolute", bottom: 10, right: 10 }}>
              <Image src="/images/icon_lost.png" width="40" height="40" alt="" />
            </div>
          </WatermelonWrapper>
          <StrawberryWrapper>
            <Image src="/images/strawberry.png" width="120" height="150" alt="" />
            <div style={{ position: "absolute", bottom: 10, right: 10 }}>
              <Image src="/images/icon_won.png" width="40" height="40" alt="" />
            </div>
          </StrawberryWrapper>
        </FlexWrapperRow>
      </TopCardSection>
      <BottomCardSection height={"24rem"} bottom={"0"}>
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
            <RewardInfo>
              <SpanInfoPrimary>No Reward For you</SpanInfoPrimary>
              <SpanInfoPrimary>(:</SpanInfoPrimary>
            </RewardInfo>
          </RewardSection>
        </RewardSectionWrapper>
        <SpanInfoPrimary>Close Window</SpanInfoPrimary>
      </BottomCardSection>
    </NotificationCard>
  )
}
