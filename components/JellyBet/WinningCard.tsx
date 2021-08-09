import Image from "next/image"
import "react-circular-progressbar/dist/styles.css"
import { CardHeader, BottomCardSection, TopCardSection, PrimaryCard } from "../Card/Card"
import {
  BetInfoWrapper,
  FlexWrapperCentered,
  Flex,
  FlexRow,
  FlexColumn,
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

const CoinWrapper = styled(FlexWrapperCentered)`
  justify-content: space-between;
  border: 2px solid var(--secondary-gray);
  border-radius: 32px;
  height: 64px;
  padding: 12px;
  width: 100%;
  background-color: var(--primary-white);
`
const IconWrapper = styled.div`
  position: absolute;
  bottom: 10;
  right: 10;
`

export const WinningCard = () => {
  return (
    <PrimaryCard width={"400px"} height={"664px"}>
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
        <WinningRibbon bet={"jelly"}>
          <SpanInfoWhite>You Win</SpanInfoWhite>
        </WinningRibbon>
        <RewardSectionWrapper>
          <RewardSection>
            <SpanInfoflexEnd>
              View on Bsc Secondary
              <ExternalLink size={10} />
            </SpanInfoflexEnd>
            <RewardInfo height={"128px"} width={"256px"}>
              <SpanInfoPrimary>your reward :</SpanInfoPrimary>
              <CoinWrapper>
                <Flex flexDirection="column">
                  <SpanInfoPrimary>0.123021</SpanInfoPrimary>
                  <SpanInfoSecondary>~ $3.67 </SpanInfoSecondary>
                </Flex>
                <Image src="/images/icons/coins/bnb.svg" width="32" height="32" alt="" />
              </CoinWrapper>
            </RewardInfo>
          </RewardSection>
        </RewardSectionWrapper>
        <SpanInfoPrimary>Close Window</SpanInfoPrimary>
      </BottomCardSection>
    </PrimaryCard>
  )
}
