import Image from "next/image"
import "react-circular-progressbar/dist/styles.css"
import { CardHeader, BottomCardSection, TopCardSection, InfoCardSmall } from "../Card/Card"
import {
  BetInfoWrapper,
  Flex,
  FlexRow,
  RewardSection,
  RewardSectionWrapper,
  SpanInfoPrimary,
  SpanLabel,
} from "../Utils/Utility.style"
import styled, { css } from "styled-components"
import { ExternalLink } from "react-feather"

const DonutWrapper = styled(FlexRow)`
  width: 50%;
  padding: 32px;
  border-right: 1px solid var(--border-gray);
`

export const LoadingCard = () => {
  return (
    <InfoCardSmall>
      <CardHeader>Bet #252 result</CardHeader>
      <TopCardSection height={"224px"} top={"10%"}>
        <Flex flexDirection="row">
          <DonutWrapper>
            <Image src="/images/donuts/7.png" width="128" height="128" alt="" />
          </DonutWrapper>
        </Flex>
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
