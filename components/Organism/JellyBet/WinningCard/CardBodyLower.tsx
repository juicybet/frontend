import Image from "next/image"
import styled, { css } from "styled-components"
import { ExternalLink } from "react-feather"
import { WinningRibbon } from "../../../Atoms"
import { currentTheme } from "../../../../core/theme"
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
