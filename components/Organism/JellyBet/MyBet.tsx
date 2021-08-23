import Image from "next/image"
import { Card, CardHeader } from "../../Molecules"
import styled from "styled-components"
import {
  FlexWrapperCentered,
  Flex,
  FlexColumn,
  SpanInfoCentered,
  SpanInfoLight,
  SpanInfoPrimary,
  SpanInfoSecondary,
  Text,
  Box,
} from "../../Utils/Utility.style"

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
const ButtonWrapper = styled(FlexColumn)`
  gap: 8px;
`

const CardBodyHeader = () => {
  return (
    <CardHeader>
      <Text textAlign="left" fontSize={18} color={"var(--dark-gray)"}>
        My Bet
      </Text>
    </CardHeader>
  )
}

const CardBody = () => {
  return (
    <Flex flexDirection="column">
      <Box p={16} borderBottom="1px solid var(--border-gray)">
        <Flex alignItems="center" justifyContent="space-between" width={"100%"} height={64}>
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
          <PlacedBetdetails>
            <ButtonWrapper>
              <SpanInfoCentered>Bet is Open </SpanInfoCentered>
              <CancelButton>Cancel Bet</CancelButton>
            </ButtonWrapper>
          </PlacedBetdetails>
        </Flex>
      </Box>
      <Box p={16} borderBottom="1px solid var(--border-gray)">
        <Flex alignItems="center" justifyContent="space-between" width={"100%"} height={64}>
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
          <PlacedBetdetails>
            <Flex flexDirection="column">
              <WalletAddress>v/s 0xF2…25</WalletAddress>
              <SpanInfoSecondary>10 minutes ago</SpanInfoSecondary>
            </Flex>
            <Image src="/images/icons/won.svg" width="40" height="40" alt="" />
          </PlacedBetdetails>
        </Flex>
      </Box>
      <Box p={16} borderBottom="1px solid var(--border-gray)" backgroundImage="url(/images/stripes_pattern.png)">
        <Flex alignItems="center" justifyContent="space-between" width={"100%"} height={64}>
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
          <PlacedBetdetails>
            <Flex flexDirection="column">
              <WalletAddress>v/s 0xF2…25</WalletAddress>
              <SpanInfoSecondary>10 minutes ago</SpanInfoSecondary>
            </Flex>
            <Image src="/images/icons/lost.svg" width="40" height="40" alt="" />
          </PlacedBetdetails>
        </Flex>
      </Box>
      <Box p={16} borderBottom="1px solid var(--border-gray)" backgroundImage="url(/images/stripes_pattern.png)">
        <Flex alignItems="center" justifyContent="space-between" width={"100%"} height={64}>
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
          <PlacedBetdetails>
            <Flex flexDirection="column">
              <SpanInfoLight>Cancelled</SpanInfoLight>
              <SpanInfoSecondary>10 minutes ago</SpanInfoSecondary>
            </Flex>
          </PlacedBetdetails>
        </Flex>
      </Box>
    </Flex>
  )
}

export const MyBet = () => {
  return (
    <Card width={"400px"} height={"592px"}>
      <CardBodyHeader />
      <CardBody />
    </Card>
  )
}
