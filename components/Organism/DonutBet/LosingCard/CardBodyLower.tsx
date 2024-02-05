import Image from "next/image"
import "react-circular-progressbar/dist/styles.css"
import { ExternalLink } from "react-feather"
import { currentTheme } from "../../../../core/theme"
import { LosingRibbon } from "../../../Atoms"
import {
  BetInfoWrapper,
  Flex,
  RewardInfo,
  SpanInfoPrimary,
  SpanInfoWhite,
  SpanLabel,
  Text,
  Box,
} from "../../../Utils/Utility.style"

export const CardBodyLower = () => {
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
