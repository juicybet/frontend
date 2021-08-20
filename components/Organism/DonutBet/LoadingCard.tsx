import Image from "next/image"
import "react-circular-progressbar/dist/styles.css"
import { CardHeader, Card } from "../../Molecules"
import { BetInfoWrapper, Box, Flex, FlexRow, SpanInfoPrimary, SpanLabel, Text } from "../../Utils/Utility.style"
import { ExternalLink } from "react-feather"
import { currentTheme } from "../../../core/theme"

export const LoadingCard = () => {
  return (
    <Card width={"420px"} height={"448px"}>
      <CardHeader>
        <Text textAlign="left" fontSize={18} color={"var(--dark-gray)"}>
          Bet #252 result
        </Text>
        <Image src="images/icons/close.svg" width="15" height="15" alt="close"></Image>
      </CardHeader>
      <Flex flexDirection="row" borderBottom="1px solid var(--border-gray)" alignItems="center">
        <Flex borderRight="1px solid var(--border-gray)" p={24} width={"50%"} justifyContent="center">
          <Image src="/images/donuts/7.png" width="128" height="128" alt="" />
        </Flex>
      </Flex>
      <Flex flexDirection="column">
        <BetInfoWrapper>
          <SpanLabel size={"18px"}>You Choose:</SpanLabel>
          <SpanInfoPrimary>
            Donut 7
            <ExternalLink size={18} />
          </SpanInfoPrimary>
        </BetInfoWrapper>
        <Flex flexDirection="column" justifyContent="flex-start" p={16}>
          <Box backgroundColor="var(--bg-gray)" padding={24} borderRadius={16}>
            <Text textAlign="center" fontSize={18} color="var(--dark-gray)">
              Loading...
            </Text>
          </Box>
        </Flex>
      </Flex>
      <Text textAlign="center" fontSize={18} color={currentTheme().primary}>
        Close Window
      </Text>
    </Card>
  )
}
