import Image from "next/image"
import { FlexWrapperCentered, Flex, SpanInfoPrimary, SpanInfoSecondary, Text, Box } from "../Utils/Utility.style"
import { Card, CardHeader } from "../Card/Card"
import styled from "styled-components"
import { PlacedBetsWrapper } from "./Bet.style"

export const PlacedBetdetails = styled(FlexWrapperCentered)`
  gap: 16px;
`
export const WalletAddress = styled(SpanInfoPrimary)`
  color: var(--light-gray);
  font-size: 16px;
`
export const TimeOfBet = styled(SpanInfoSecondary)`
  justify-content: flex-end;
`

export const CancelButton = styled.button`
  width: 112px;
  height: 40px;
  font-weight: 600;
  color: var(--primary-pink);
  background: var(--primary-white);
  border: 2px solid var(--primary-pink);
  border-radius: 32px;
`

export const BetHistory = () => {
  return (
    <Card width={"420px"} height={"609px"}>
      <CardHeader>
        <Text textAlign="left" fontSize={18} color={"var(--dark-gray)"}>
          Bet History
        </Text>
      </CardHeader>
      <Flex flexDirection="column">
        <Box p={16} borderBottom="1px solid var(--border-gray)" backgroundImage="url(/images/stripes_pattern.png)">
          <Flex alignItems="center" justifyContent="space-between" width={"100%"} height={64}>
            <PlacedBetdetails>
              <SpanInfoPrimary>A</SpanInfoPrimary>
              <Image src="/images/donuts/1.png" width="64" height="64" alt="Donut 1" />
              <Flex flexDirection="column">
                <SpanInfoPrimary>
                  0.123021
                  <Image src="/images/icons/coins/bnb.svg" width="20" height="20" alt="" />
                </SpanInfoPrimary>
                <SpanInfoSecondary>~ $3.67 </SpanInfoSecondary>
              </Flex>
            </PlacedBetdetails>
            <PlacedBetdetails>
              <Flex flexDirection="column">
                <WalletAddress>v/s 0xF2…25</WalletAddress>
                <SpanInfoSecondary>10 minutes ago</SpanInfoSecondary>
              </Flex>
              <Image src="/images/icons/lost.svg" width="40" height="40" alt="" />
            </PlacedBetdetails>
          </Flex>
        </Box>
        <Box p={16} borderBottom="1px solid var(--border-gray)">
          <PlacedBetsWrapper>
            <PlacedBetdetails>
              <SpanInfoPrimary>A</SpanInfoPrimary>
              <Image src="/images/donuts/2.png" width="64" height="64" alt="Donut 2" />
              <Flex flexDirection="column">
                <SpanInfoPrimary>
                  0.123021
                  <Image src="/images/icons/coins/bnb.svg" width="20" height="20" alt="" />
                </SpanInfoPrimary>
                <SpanInfoSecondary>~ $3.67 </SpanInfoSecondary>
              </Flex>
            </PlacedBetdetails>
            <PlacedBetdetails>
              <Flex flexDirection="column">
                <WalletAddress>v/s 0xF2…25</WalletAddress>
                <SpanInfoSecondary>10 minutes ago</SpanInfoSecondary>
              </Flex>
              <Image src="/images/icons/won.svg" width="40" height="40" alt="" />
            </PlacedBetdetails>
          </PlacedBetsWrapper>
        </Box>
        <Box p={16} borderBottom="1px solid var(--border-gray)" backgroundImage="url(/images/stripes_pattern.png)">
          <PlacedBetsWrapper>
            <PlacedBetdetails>
              <SpanInfoPrimary>A</SpanInfoPrimary>
              <Image src="/images/donuts/4.png" width="64" height="64" alt="Donut 4" />
              <Flex flexDirection="column">
                <SpanInfoPrimary>
                  0.123021
                  <Image src="/images/icons/coins/bnb.svg" width="20" height="20" alt="" />
                </SpanInfoPrimary>
                <SpanInfoSecondary>~ $3.67 </SpanInfoSecondary>
              </Flex>
            </PlacedBetdetails>
            <PlacedBetdetails>
              <Flex flexDirection="column">
                <WalletAddress>v/s 0xF2…25</WalletAddress>
                <SpanInfoSecondary>10 minutes ago</SpanInfoSecondary>
              </Flex>
              <Image src="/images/icons/lost.svg" width="40" height="40" alt="" />
            </PlacedBetdetails>
          </PlacedBetsWrapper>
        </Box>
        <Box p={16} borderBottom="1px solid var(--border-gray)" backgroundImage="url(/images/stripes_pattern.png)">
          <PlacedBetsWrapper>
            <PlacedBetdetails>
              <SpanInfoPrimary>A</SpanInfoPrimary>
              <Image src="/images/donuts/3.png" width="64" height="64" alt="Donut 3" />
              <Flex flexDirection="column">
                <SpanInfoPrimary>
                  0.123021
                  <Image src="/images/icons/coins/bnb.svg" width="20" height="20" alt="" />
                </SpanInfoPrimary>
                <SpanInfoSecondary>~ $3.67 </SpanInfoSecondary>
              </Flex>
            </PlacedBetdetails>
            <PlacedBetdetails>
              <Flex flexDirection="column">
                <WalletAddress>v/s 0xF2…25</WalletAddress>
                <SpanInfoSecondary>10 minutes ago</SpanInfoSecondary>
              </Flex>
              <Image src="/images/icons/lost.svg" width="40" height="40" alt="" />
            </PlacedBetdetails>
          </PlacedBetsWrapper>
        </Box>
        <Box p={16} borderBottom="1px solid var(--border-gray)" backgroundImage="url(/images/stripes_pattern.png)">
          <PlacedBetsWrapper>
            <PlacedBetdetails>
              <SpanInfoPrimary>A</SpanInfoPrimary>
              <Image src="/images/donuts/5.png" width="64" height="64" alt="Donut 5" />
              <Flex flexDirection="column">
                <SpanInfoPrimary>
                  0.123021
                  <Image src="/images/icons/coins/bnb.svg" width="20" height="20" alt="" />
                </SpanInfoPrimary>
                <SpanInfoSecondary>~ $3.67 </SpanInfoSecondary>
              </Flex>
            </PlacedBetdetails>
            <PlacedBetdetails>
              <Flex flexDirection="column">
                <WalletAddress>v/s 0xF2…25</WalletAddress>
                <SpanInfoSecondary>10 minutes ago</SpanInfoSecondary>
              </Flex>
              <Image src="/images/icons/lost.svg" width="40" height="40" alt="" />
            </PlacedBetdetails>
          </PlacedBetsWrapper>
        </Box>
      </Flex>
    </Card>
  )
}
