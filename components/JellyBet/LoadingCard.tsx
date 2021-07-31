import Image from "next/image"
import "react-circular-progressbar/dist/styles.css"
import { CardHeader, BottomCardSection, TopCardSection, InfoCardSmall } from "../Card/Card"
import {
  BetInfoWrapper,
  FlexWrapperCol,
  FlexWrapperRow,
  RewardInfo,
  RewardSection,
  RewardSectionWrapper,
  SpanInfoflexEnd,
  SpanInfoPrimary,
  SpanLabel,
} from "../Utils/Utility.style"
import styled, { css } from "styled-components"
import { ExternalLink } from "react-feather"

const SharedWrapperStyle = css`
  width: 50%;
  padding: 2rem;
`

const WatermelonWrapper = styled(FlexWrapperRow)`
  ${SharedWrapperStyle}
  border-right: 1px solid var(--border-gray);
`

const StrawberryWrapper = styled(FlexWrapperCol)`
  ${SharedWrapperStyle}
`

export const LoadingCard = () => {
  return (
    <InfoCardSmall>
      <CardHeader>My PNL</CardHeader>
      <TopCardSection height={"14rem"} top={"10%"}>
        <FlexWrapperRow>
          <WatermelonWrapper>
            <Image src="/images/Watermelon.png" width="120" height="150" alt="" />
          </WatermelonWrapper>
          <StrawberryWrapper>
            <Image src="/images/strawberry.png" width="120" height="150" alt="" />
          </StrawberryWrapper>
        </FlexWrapperRow>
      </TopCardSection>
      <BottomCardSection height={"13.5rem"} bottom={"0"}>
        <BetInfoWrapper>
          <SpanLabel size={"18px"}>You Choose:</SpanLabel>
          <SpanInfoPrimary>
            Strwaberry
            <ExternalLink size={18} />
          </SpanInfoPrimary>
        </BetInfoWrapper>
        <RewardSectionWrapper>
          <RewardSection>
            <SpanInfoPrimary>Loading..</SpanInfoPrimary>
          </RewardSection>
        </RewardSectionWrapper>
        <SpanInfoPrimary>Close Window</SpanInfoPrimary>
      </BottomCardSection>
    </InfoCardSmall>
  )
}
