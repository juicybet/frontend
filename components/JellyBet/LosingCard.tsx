import Image from "next/image"
import "react-circular-progressbar/dist/styles.css"
import { CardHeader, BottomCardSection, Card, TopCardSection } from "../Card/Card"
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
  Text,
  Box,
} from "../Utils/Utility.style"
import styled, { css } from "styled-components"
import { ExternalLink } from "react-feather"
import { LosingRibbon } from "../Ribbon"
import { currentTheme } from "../../core/theme"

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
    <Card width={"420px"} height={"664px"}>
      <CardHeader>
        <Text textAlign="left" fontSize={18} color={"var(--dark-gray)"}>
          Bet #2 result
        </Text>
        <Image src="images/icons/close.svg" width="15" height="15" alt="close"></Image>
      </CardHeader>
      <Flex flexDirection="row" borderBottom="1px solid var(--border-gray)">
        <Flex
          borderRight="1px solid var(--border-gray)"
          p={48}
          width={"50%"}
          position="relative"
          backgroundImage="url(/images/stripes_pattern.png)"
        >
          <Image src="/images/Watermelon.png" width="120" height="150" alt="" />
          <Box position="absolute" bottom={10} right={10}>
            <Image src="/images/icons/lost.svg" width="40" height="40" alt="" />
          </Box>
        </Flex>
        <Flex p={48} width={"50%"} position="relative">
          <Image src="/images/strawberry.png" width="120" height="150" alt="" />
          <Box position="absolute" bottom={10} right={10}>
            <Image src="/images/icons/won.svg" width="40" height="40" alt="" />
          </Box>
        </Flex>
      </Flex>
      <Flex flexDirection="column">
        <BetInfoWrapper>
          <SpanLabel size={"18px"}>You Choose:</SpanLabel>
          <SpanInfoPrimary>
            Strwaberry
            <ExternalLink size={18} />
          </SpanInfoPrimary>
        </BetInfoWrapper>
        <LosingRibbon>
          <SpanInfoWhite>You Lost</SpanInfoWhite>
        </LosingRibbon>
        <Flex flexDirection="column" justifyContent="flex-start" p={16}>
          <Box p={16} backgroundColor="var(--bg-gray)" borderRadius={16}>
            <SpanInfoflexEnd>
              View on Bsc Secondary
              <ExternalLink size={10} />
            </SpanInfoflexEnd>
            <RewardInfo height={"128px"} width={"256px"}>
              <SpanInfoPrimary>No Reward For you</SpanInfoPrimary>
              <SpanInfoPrimary>(:</SpanInfoPrimary>
            </RewardInfo>
          </Box>
        </Flex>
        <Text textAlign="center" fontSize={18} color={currentTheme().primary}>
          Close Window
        </Text>
      </Flex>
    </Card>
  )
}
