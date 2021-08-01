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
    <InfoCard>
      <CardHeader>My PNL</CardHeader>
      <TopCardSection height={"224px"} top={"10%"}>
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
                <FlexWrapperCol>
                  <SpanInfoPrimary>0.123021</SpanInfoPrimary>
                  <SpanInfoSecondary>~ $3.67 </SpanInfoSecondary>
                </FlexWrapperCol>
                <Image src="/images/Bitmap.png" width="40" height="40" alt="" />
              </CoinWrapper>
            </RewardInfo>
          </RewardSection>
        </RewardSectionWrapper>
        <SpanInfoPrimary>Close Window</SpanInfoPrimary>
      </BottomCardSection>
    </InfoCard>
  )
}
