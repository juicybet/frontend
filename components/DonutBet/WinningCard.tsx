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
  padding: 2rem;
`

const DonutWrapper = styled(FlexWrapperRow)`
  ${SharedWrapperStyle}
  border-right: 1px solid var(--border-gray);
  position: relative;
`

const DonutDetailWrapper = styled(FlexWrapperCol)`
  position: relative;
  padding: 3rem 3rem 0 1rem;
  width: 60%;
  gap: 0.5rem;
`

const CoinWrapper = styled(FlexWrapperCentered)`
  justify-content: space-between;
  border: 2px solid var(--secondary-gray);
  border-radius: 2rem;
  height: 4rem;
  padding: 0.8rem;
  width: 100%;
  background-color: var(--primary-white);
`

const LabelWrapperGrid = styled.div`
  display: grid;
  grid-template-columns: -webkit-min-content auto;
  grid-template-columns: min-content auto;
`
const LabelWrapper = styled(FlexWrapperCentered)`
  padding: 1rem 1rem 0;
`
export const WinningCard = () => {
  return (
    <InfoCard>
      <CardHeader>My PNL</CardHeader>
      <TopCardSection height={"16rem"} top={"10%"}>
        <FlexWrapperRow>
          <DonutWrapper>
            <Image src="/images/donut_7.png" width="140" height="140" alt="" />
          </DonutWrapper>
          <DonutDetailWrapper>
            <SpanLabel size={"20px"}>Block Details :</SpanLabel>
            <LabelWrapperGrid>
              <SpanLabel size={"1rem"}>Number: </SpanLabel>
              <SpanInfoPrimary>123021</SpanInfoPrimary>
            </LabelWrapperGrid>
            <LabelWrapperGrid>
              <SpanLabel size={"1rem"}>Hash:</SpanLabel>
              <SpanInfoPrimary>
                35f…af7 <ExternalLink size={18} />
              </SpanInfoPrimary>
            </LabelWrapperGrid>
            <div style={{ position: "absolute", bottom: 10, right: 10 }}>
              <Image src="/images/icon_won.png" width="30" height="30" alt="" />
            </div>
          </DonutDetailWrapper>
        </FlexWrapperRow>
      </TopCardSection>
      <BottomCardSection height={"26rem"} bottom={"0"}>
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
          <SpanLabel size={"18px"}>You’ve already claimed the reward.</SpanLabel>
        </LabelWrapper>
        <RewardSectionWrapper>
          <RewardSection>
            <SpanInfoflexEnd>
              View on Bsc Secondary
              <ExternalLink size={10} />
            </SpanInfoflexEnd>
            <RewardInfo height={"8rem"} width={"16rem"}>
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
