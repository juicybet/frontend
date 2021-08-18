import Image from "next/image"
import "react-circular-progressbar/dist/styles.css"
import { CardHeader, Card } from "../Card/Card"
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
} from "../Utils/Utility.style"
import styled, { css } from "styled-components"
import { ExternalLink } from "react-feather"
import { WinningRibbon } from "../Ribbon"
import { currentTheme } from "../../core/theme"

const CoinWrapper = styled(FlexWrapperCentered)`
  justify-content: space-between;
  border: 2px solid var(--secondary-gray);
  border-radius: 32px;
  height: 64px;
  padding: 12px;
  width: 100%;
  background-color: var(--primary-white);
`

const LabelWrapper = styled(FlexWrapperCentered)`
  padding: 16px 16px 0;
`
export const AlreadyWonCard = () => {
  return (
    <Card width={"420px"} height={"657px"}>
      <CardHeader>
        <Text textAlign="left" fontSize={18} color={"var(--dark-gray)"}>
          Salad #12 - My Bet
        </Text>
        <Image src="images/icons/close.svg" width="15" height="15" alt="close"></Image>
      </CardHeader>
      <Flex flexDirection="row" borderBottom="1px solid var(--border-gray)">
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
      <Flex flexDirection="column">
        <BetInfoWrapper>
          <SpanLabel size={"18px"}>Your Bet:</SpanLabel>
          <SpanInfoPrimary>
            Onion Will be Picked
            <ExternalLink size={18} />
          </SpanInfoPrimary>
        </BetInfoWrapper>
        <WinningRibbon bet={"donut"}>
          <SpanInfoWhite>You Win</SpanInfoWhite>
        </WinningRibbon>
        <LabelWrapper>
          <SpanLabel size={"18px"}>You’ve already claimed the reward.</SpanLabel>
        </LabelWrapper>
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
      </Flex>
      <Box marginTop={3}>
        <Text textAlign="center" fontSize={18} color={currentTheme().primary}>
          Close Window
        </Text>
      </Box>
    </Card>
  )
}
