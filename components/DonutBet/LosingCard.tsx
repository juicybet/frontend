import Image from "next/image"
import "react-circular-progressbar/dist/styles.css"
import { CardHeader, Card } from "../Card/Card"
import {
  BetInfoWrapper,
  Flex,
  FlexRow,
  FlexColumn,
  RewardInfo,
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

const LabelWrapper = styled.label`
  display: grid;
  grid-template-columns: -webkit-min-content auto;
  grid-template-columns: min-content auto;
`

export const LosingCard = () => {
  return (
    <Card width={"420px"} height={"594px"}>
      <CardHeader>
        <Text textAlign="left" fontSize={18} color={"var(--dark-gray)"}>
          Bet #252 result
        </Text>
        <Image src="images/icons/close.svg" width="15" height="15" alt="close"></Image>
      </CardHeader>
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
          <Box p={16} backgroundColor="var(--bg-gray)" borderRadius={16}>
            <SpanInfoflexEnd>
              View on Bsc Secondary
              <ExternalLink size={10} />
            </SpanInfoflexEnd>
            <RewardInfo height={"96px"} width={"256px"}>
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
