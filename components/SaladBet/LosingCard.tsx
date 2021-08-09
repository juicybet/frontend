import Image from "next/image"
import "react-circular-progressbar/dist/styles.css"
import { CardHeader, BottomCardSection, PrimaryCard, TopCardSection } from "../Card/Card"
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

export const LosingCard = () => {
  return (
    <PrimaryCard width={"400px"} height={"592px"}>
      <CardHeader>Bet #252 result</CardHeader>
      <TopCardSection height={"256px"} top={"10%"}>
        <Flex flexDirection="row">
          <Flex flexDirection="column" size={[92, 180]} p={2} justifyContent="space-between">
            <Image src="/images/vegies/pepper.png" width={60} height={100} alt="Pepper " />
          </Flex>
          <Flex flexDirection="column" size={[92, 180]} p={2} justifyContent="space-between">
            <Image src="/images/vegies/pepper.png" width={60} height={100} alt="Pepper " />
          </Flex>
          <Flex flexDirection="column" size={[92, 180]} p={2} justifyContent="space-between">
            <Image src="/images/vegies/pepper.png" width={60} height={100} alt="Pepper " />
            <Flex alignItems="center" justifyContent="center">
              <Image src="/images/icons/won.svg" width="40" height="40" alt="" />
            </Flex>
          </Flex>
          <Flex flexDirection="column" size={[92, 180]} p={2} justifyContent="space-between">
            <Image src="/images/vegies/pepper.png" width={60} height={100} alt="Pepper " />
          </Flex>
          <Flex flexDirection="column" size={[92, 180]} p={2} justifyContent="space-between">
            <Image src="/images/vegies/pepper.png" width={60} height={100} alt="Pepper " />
          </Flex>
          <Flex
            flexDirection="column"
            size={[92, 180]}
            p={2}
            justifyContent="space-between"
            backgroundImage="url('images/Rectangle.png')"
            backgroundSize="cover"
            backgroundPosition="center"
            backgroundRepeat="no-repeat"
          >
            <Flex alignItems="center" justifyContent="center">
              <Image src="/images/vegies/broccoli.png" width={60} height={100} alt="Brocolli " />
            </Flex>
            <Flex alignItems="center" justifyContent="center">
              <Image src="/images/icons/lost.svg" width="40" height="40" alt="" />
            </Flex>
          </Flex>
        </Flex>
      </TopCardSection>
      <BottomCardSection height={"352px"} bottom={"0"}>
        <BetInfoWrapper>
          <SpanLabel size={"18px"}>You Reward:</SpanLabel>
          <SpanInfoPrimary>
            Carrot Will be picked
            <ExternalLink size={18} />
          </SpanInfoPrimary>
        </BetInfoWrapper>
        <LosingRibbon>
          <SpanInfoWhite>You lost</SpanInfoWhite>
        </LosingRibbon>
        <RewardSectionWrapper>
          <RewardSection>
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
