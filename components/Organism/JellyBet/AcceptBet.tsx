import Image from "next/image"
import { PlacedBetdetails, WalletAddress } from "./Bet.style"
import { ExternalLink } from "react-feather"
import { Button, PlacedBetRadio } from "../../Atoms"
import { Card, CardHeader } from "../../Molecules/"
import { Flex, SpanInfoPrimary, SpanInfoSecondary, Text, Box } from "../../Utils/Utility.style"

export const AcceptBet = () => {
  return (
    <Card width={"420px"} height={"609px"}>
      <CardHeader>
        <Text textAlign="left" fontSize={18} color={"var(--dark-gray)"}>
          Or accept an existing bet!
        </Text>
      </CardHeader>
      <Flex flexDirection="column" minHeight={475}>
        <Box p={16} borderBottom="1px solid var(--border-gray)">
          <PlacedBetRadio name="bet">
            <Flex justifyContent="space-between" width={"100%"} height={64} alignItems="center">
              <PlacedBetdetails>
                <Image src="/images/smolwatermelon.png" width="50" height="70" alt="" />
                <Flex flexDirection="column">
                  <SpanInfoPrimary>
                    0.123021
                    <Image src="/images/icons/coins/bnb.svg" width="20" height="20" alt="" />
                  </SpanInfoPrimary>
                  <SpanInfoSecondary>~ $3.67 </SpanInfoSecondary>
                </Flex>
              </PlacedBetdetails>
              <Box>
                <Flex flexDirection="column">
                  <WalletAddress>
                    by 0xF2…25 <ExternalLink size={15} />
                  </WalletAddress>
                  <SpanInfoSecondary>10 minutes ago</SpanInfoSecondary>
                </Flex>
              </Box>
            </Flex>
          </PlacedBetRadio>
        </Box>
      </Flex>
      <Button height={"56px"} px={16} py={0}>
        Accept Bet!
      </Button>
    </Card>
  )
}
