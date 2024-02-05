import { BetInfoWrapper, Flex, SpanInfoPrimary, SpanLabel, Text, Box } from "../../../Utils/Utility.style"
import { ExternalLink } from "react-feather"
import { currentTheme } from "../../../../core/theme"

export const CardBodyLower = () => {
  return (
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
  )
}
