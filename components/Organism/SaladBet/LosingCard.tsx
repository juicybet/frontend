import Image from "next/image"
import "react-circular-progressbar/dist/styles.css"
import { CardHeader, Card } from "../../Molecules/"
import {
  BetInfoWrapper,
  Box,
  Flex,
  RewardInfo,
  SpanInfoPrimary,
  SpanInfoWhite,
  SpanLabel,
  Text,
} from "../../Utils/Utility.style"
import { ExternalLink } from "react-feather"
import { currentTheme } from "../../../core/theme"
import { LosingRibbon } from "../../Atoms"

export const LosingCard = () => {
  return (
    <Card width={"420px"} height={"575px"}>
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
          <Flex
            p={16}
            backgroundColor="var(--bg-gray)"
            borderRadius={16}
            justifyContent="space-between"
            height={"130px"}
          >
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
    </Card>
  )
}
