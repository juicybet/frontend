import Image from "next/image"
import styled, { css } from "styled-components"
import { ExternalLink } from "react-feather"
import { currentTheme } from "../../../../core/theme"
import { Button, WinningRibbon } from "../../../Atoms"
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

const LabelWrapper = styled(FlexWrapperCentered)`
  padding: 16px 16px 0;
`

export const CardBodyLower = () => {
  return (
    <Flex flexDirection="column">
      <BetInfoWrapper>
        <SpanLabel size={"18px"}>You Choose:</SpanLabel>
        <SpanInfoPrimary>
          Donut 7
          <ExternalLink size={18} />
        </SpanInfoPrimary>
      </BetInfoWrapper>
      <WinningRibbon bet={"donut"}>
        <SpanInfoWhite>You Win</SpanInfoWhite>
      </WinningRibbon>
      <LabelWrapper>
        <SpanLabel size={"18px"}>Time left to claim reward: 09:59</SpanLabel>
      </LabelWrapper>
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
