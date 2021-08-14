import Image from "next/image"
import "react-circular-progressbar/dist/styles.css"
import { CardHeader, Card } from "../Card/Card"
import {
  BetInfoWrapper,
  Box,
  Flex,
  RewardInfo,
  SpanInfoPrimary,
  SpanInfoWhite,
  SpanLabel,
  Text,
} from "../Utils/Utility.style"
import { ExternalLink } from "react-feather"
import { LosingRibbon } from "../Ribbon"
import { currentTheme } from "../../core/theme"

export const LosingCard = () => {
  return (
    <Card width={"400px"} height={"575px"}>
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
          <SpanLabel size={"18px"}>You Reward:</SpanLabel>
          <SpanInfoPrimary>
            Carrot Will be picked
            <ExternalLink size={18} />
          </SpanInfoPrimary>
        </BetInfoWrapper>
        <LosingRibbon>
          <SpanInfoWhite>You lost</SpanInfoWhite>
        </LosingRibbon>
        <Flex flexDirection="column" justifyContent="flex-start" p={16}>
          <Box p={16} backgroundColor="var(--bg-gray)" borderRadius={16}>
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
