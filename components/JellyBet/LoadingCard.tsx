import Image from "next/image"
import "react-circular-progressbar/dist/styles.css"
import { CardHeader, Card } from "../Card/Card"
import { BetInfoWrapper, Flex, SpanInfoPrimary, SpanLabel, Text, Box } from "../Utils/Utility.style"
import { ExternalLink } from "react-feather"
import { currentTheme } from "../../core/theme"

export const LoadingCard = () => {
  return (
    <Card width={"420px"} height={"517px"}>
      <CardHeader>
        <Text textAlign="left" fontSize={18} color={"var(--dark-gray)"}>
          Bet #2 result
        </Text>
        <Image src="images/icons/close.svg" width="15" height="15" alt="close"></Image>
      </CardHeader>
      <Flex flexDirection="row" borderBottom="1px solid var(--border-gray)">
        <Flex borderRight="1px solid var(--border-gray)" p={48} width={"50%"}>
          <Image src="/images/Watermelon.png" width="120" height="150" alt="" />
        </Flex>
        <Flex p={48} width={"50%"}>
          <Image src="/images/strawberry.png" width="120" height="150" alt="" />
        </Flex>
      </Flex>
      <Flex flexDirection="column">
        <BetInfoWrapper>
          <SpanLabel size={"18px"}>You Choose:</SpanLabel>
          <SpanInfoPrimary>
            Strwaberry
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
        <Text textAlign="center" fontSize={18} color={currentTheme().primary}>
          Close Window
        </Text>
      </Flex>
    </Card>
  )
}
