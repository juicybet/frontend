import Image from "next/image"
import styled from "styled-components"
import { ExternalLink } from "react-feather"
import { Button, WinningRibbon } from "../../../Atoms"
import { currentTheme } from "../../../../core/theme"
import {
  BetInfoWrapper,
  FlexWrapperCentered,
  Flex,
  RewardInfo,
  SpanInfoPrimary,
  SpanInfoSecondary,
  SpanInfoWhite,
  SpanLabel,
  Text,
  Box,
} from "../../../Utils/Utility.style"

const CoinWrapper = styled(FlexWrapperCentered)`
  justify-content: space-between;
  border: 2px solid var(--secondary-gray);
  border-radius: 32px;
  height: 64px;
  padding: 12px;
  width: 100%;
  background-color: var(--primary-white);
`

export const CardBodyLower = () => {
  return (
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
      <Flex flexDirection="column" justifyContent="flex-start" p={16}>
        <Flex p={16} backgroundColor="var(--bg-gray)" borderRadius={16} height={"149px"}>
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
        <Button height={"64px"} px={16} py={3}>
          Claim Reward
        </Button>
      </Flex>
      <Text textAlign="center" fontSize={18} color={currentTheme().primary}>
        Close Window
      </Text>
    </Flex>
  )
}
