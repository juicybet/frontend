import Image from "next/image"
import "react-circular-progressbar/dist/styles.css"
import { CardHeader, Card } from "../../Molecules"
import {
  BetInfoWrapper,
  FlexWrapperCentered,
  Flex,
  RewardInfo,
  SpanInfoflexEnd,
  SpanInfoPrimary,
  SpanInfoSecondary,
  SpanInfoWhite,
  SpanLabel,
  Text,
  Box,
} from "../../Utils/Utility.style"
import styled, { css } from "styled-components"
import { ExternalLink } from "react-feather"
import { WinningRibbon } from "../../Atoms/"
import { currentTheme } from "../../../core/theme"

const CoinWrapper = styled(FlexWrapperCentered)`
  justify-content: space-between;
  border: 2px solid var(--secondary-gray);
  border-radius: 32px;
  height: 64px;
  padding: 12px;
  width: 100%;
  background-color: var(--primary-white);
`

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
        <SpanLabel size={"18px"}>You Picked:</SpanLabel>
        <SpanInfoPrimary>
          Strwaberry
          <ExternalLink size={18} />
        </SpanInfoPrimary>
      </BetInfoWrapper>
      <WinningRibbon bet={"jelly"}>
        <SpanInfoWhite>You Win</SpanInfoWhite>
      </WinningRibbon>
      <Flex justifyContent="flex-start" p={16}>
        <Flex p={16} backgroundColor="var(--bg-gray)" borderRadius={16} flexDirection="column" height={"149px"}>
          <SpanInfoflexEnd>
            View on BscScan
            <ExternalLink size={10} />
          </SpanInfoflexEnd>
          <Flex>
            <RewardInfo height={"128px"} width={"256px"}>
              <SpanInfoPrimary>your reward :</SpanInfoPrimary>
              <CoinWrapper>
                <Flex flexDirection="column">
                  <SpanInfoPrimary>0.123021</SpanInfoPrimary>
                  <SpanInfoSecondary>~ $3.67 </SpanInfoSecondary>
                </Flex>
                <Image src="/images/icons/coins/bnb.svg" width="32" height="32" alt="" />
              </CoinWrapper>
            </RewardInfo>
            <Box paddingTop={4}>
              <Image src="/images/icons/trophy.svg" width="100" height="100" alt="skull" />
            </Box>
          </Flex>
        </Flex>
      </Flex>
      <Box marginTop={3}>
        <Text textAlign="center" fontSize={18} color={currentTheme().primary}>
          Close Window
        </Text>
      </Box>
    </Flex>
  )
}

export const WinningCard = () => {
  return (
    <Card width={"420px"} height={"683px"}>
      <CardBodyHeader />
      <CardBodyUper />
      <CardBodyLower />
    </Card>
  )
}
