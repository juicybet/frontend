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
  padding: 32px;
`

const DonutWrapper = styled(FlexWrapperRow)`
  ${SharedWrapperStyle}
  border-right: 1px solid var(--border-gray);
`

const StrawberryWrapper = styled(FlexWrapperCol)`
  ${SharedWrapperStyle}
`

export const LoadingCard = () => {
  return (
    <InfoCardSmall>
      <CardHeader>Bet #252 result</CardHeader>
      <TopCardSection height={"224px"} top={"10%"}>
        <FlexWrapperRow>
          <DonutWrapper>
            <Image src="/images/donut_7.png" width="140" height="140" alt="" />
          </DonutWrapper>
        </FlexWrapperRow>
      </TopCardSection>
      <BottomCardSection height={"232px"} bottom={"0"}>
        <BetInfoWrapper>
          <SpanLabel size={"18px"}>You Choose:</SpanLabel>
          <SpanInfoPrimary>
            Donut 7
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
