import Image from "next/image"
import { Box, Flex, FlexWrapperCentered, SpanInfoPrimary, SpanInfoSecondary } from "../../../Utils/Utility.style"
import styled from "styled-components"

const PlacedBetsWrapper = styled(FlexWrapperCentered)`
  height: 64px;
  width: 100%;
  justify-content: space-between;
`
const PlacedBetdetails = styled(FlexWrapperCentered)`
  gap: 16px;
`
const WalletAddress = styled(SpanInfoPrimary)`
  color: var(--light-gray);
  font-size: 16px;
`

export const CardBody = () => {
  return (
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
  )
}