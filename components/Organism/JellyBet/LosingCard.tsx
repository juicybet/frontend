import Image from "next/image"
import "react-circular-progressbar/dist/styles.css"
import { CardHeader, Card } from "../../Molecules/"
import {
  BetInfoWrapper,
  Flex,
  FlexRow,
  FlexColumn,
  RewardInfo,
  SpanInfoPrimary,
  SpanInfoWhite,
  SpanLabel,
  Text,
  Box,
} from "../../Utils/Utility.style"
import styled, { css } from "styled-components"
import { ExternalLink } from "react-feather"
import { LosingRibbon } from "../../Atoms/"
import { currentTheme } from "../../../core/theme"

const CardBodyHeader = () => {
  return (
    <CardHeader>
      <Text textAlign="left" fontSize={18} color={"var(--dark-gray)"}>
        Bet #2 result
      </Text>
      <Image src="images/icons/close.svg" width="15" height="15" alt="close"></Image>
    </CardHeader>
  )
}

const CardBodyUper = () => {
  return (
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
  )
}

const CardBodyLower = () => {
  return (
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
        <Flex p={16} backgroundColor="var(--bg-gray)" borderRadius={16} justifyContent="space-between" height={"130px"}>
          <RewardInfo height={"96px"} width={"256px"}>
            <SpanInfoPrimary>No Reward For you</SpanInfoPrimary>
            <SpanInfoPrimary>(:</SpanInfoPrimary>
          </RewardInfo>
          <Box paddingTop={4}>
            <Image src="/images/icons/skull.svg" width="100" height="100" alt="skull" />
          </Box>
        </Flex>
      </Flex>
      <Text textAlign="center" fontSize={18} color={currentTheme().primary}>
        Close Window
      </Text>
    </Flex>
  )
}
export const LosingCard = () => {
  return (
    <Card width={"420px"} height={"664px"}>
      <CardBodyHeader />
      <CardBodyUper />
      <CardBodyLower />
    </Card>
  )
}
