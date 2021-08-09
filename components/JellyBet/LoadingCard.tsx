import Image from "next/image"
import "react-circular-progressbar/dist/styles.css"
import { CardHeader, BottomCardSection, TopCardSection, PrimaryCard } from "../Card/Card"
import {
  BetInfoWrapper,
  Flex,
  FlexRow,
  FlexColumn,
  RewardSection,
  RewardSectionWrapper,
  SpanInfoPrimary,
  SpanLabel,
} from "../Utils/Utility.style"
import styled, { css } from "styled-components"
import { ExternalLink } from "react-feather"

const SharedWrapperStyle = css`
  width: 50%;
  padding: 32px;
`

const WatermelonWrapper = styled(FlexRow)`
  ${SharedWrapperStyle}
  border-right: 1px solid var(--border-gray);
`

const StrawberryWrapper = styled(FlexColumn)`
  ${SharedWrapperStyle}
`

export const LoadingCard = () => {
  return (
    <PrimaryCard width={"400px"} height={"480px"}>
      <CardHeader>My PNL</CardHeader>
      <TopCardSection height={"224px"} top={"10%"}>
        <Flex flexDirection="row">
          <WatermelonWrapper>
            <Image src="/images/Watermelon.png" width="120" height="150" alt="" />
          </WatermelonWrapper>
          <StrawberryWrapper>
            <Image src="/images/strawberry.png" width="120" height="150" alt="" />
          </StrawberryWrapper>
        </Flex>
      </TopCardSection>
      <BottomCardSection height={"216px"} bottom={"0"}>
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
    </PrimaryCard>
  )
}
