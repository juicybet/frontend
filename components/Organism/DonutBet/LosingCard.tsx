import Image from "next/image"
import "react-circular-progressbar/dist/styles.css"
import { CardHeader, Card } from "../../Molecules"
import styled, { css } from "styled-components"
import { ExternalLink } from "react-feather"
import { currentTheme } from "../../../core/theme"
import { LosingRibbon } from "../../Atoms"
import {
  BetInfoWrapper,
  Flex,
  RewardInfo,
  SpanInfoPrimary,
  SpanInfoWhite,
  SpanLabel,
  Text,
  Box,
} from "../../Utils/Utility.style"

const LabelWrapper = styled.label`
  display: grid;
  grid-template-columns: -webkit-min-content auto;
  grid-template-columns: min-content auto;
`

const CardBodyHeader = () => {
  return (
    <CardHeader>
      <Text textAlign="left" fontSize={18} color={"var(--dark-gray)"}>
        Bet #252 result
      </Text>
      <Image src="images/icons/close.svg" width="15" height="15" alt="close"></Image>
    </CardHeader>
  )
}

const CardBodyUper = () => {
  return (
    <Flex flexDirection="row" borderBottom="1px solid var(--border-gray)" alignItems="center" height="192px">
      <Flex
        borderRight="1px solid var(--border-gray)"
        py={32}
        width={"40%"}
        justifyContent="center"
        height="100%"
        backgroundImage="url(/images/stripes_pattern.png)"
      >
        <Image src="/images/donuts/8.png" width="128" height="128" alt="" />
      </Flex>
      <Flex
        flexDirection="column"
        py={16}
        paddingRight={80}
        paddingLeft={16}
        width={"60%"}
        height="100%"
        justifyContent="space-evenly"
        position="relative"
      >
        <SpanLabel size={"20px"}>Block Details :</SpanLabel>
        <Box>
          <LabelWrapper>
            <SpanLabel size={"16px"}>Number: </SpanLabel>
            <SpanInfoPrimary>123021</SpanInfoPrimary>
          </LabelWrapper>
          <LabelWrapper>
            <SpanLabel size={"16px"}>Hash:</SpanLabel>
            <SpanInfoPrimary>
              35f…af7 <ExternalLink size={18} />
            </SpanInfoPrimary>
          </LabelWrapper>
        </Box>
        <Box position="absolute" bottom={10} right={10}>
          <Image src="/images/icons/lost.svg" width="40" height="40" alt="" />
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
          Donut A
          <ExternalLink size={18} />
        </SpanInfoPrimary>
      </BetInfoWrapper>
      <LosingRibbon>
        <SpanInfoWhite>You Lost ! </SpanInfoWhite>
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
    <Card width={"420px"} height={"594px"}>
      <CardBodyHeader />
      <CardBodyUper />
      <CardBodyLower />
    </Card>
  )
}
