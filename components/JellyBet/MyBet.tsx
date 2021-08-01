import Image from "next/image"
import {
  FlexWrapperCentered,
  Flex,
  FlexRow,
  FlexColumn,
  SpanInfoCentered,
  SpanInfoLight,
  SpanInfoPrimary,
  SpanInfoSecondary,
} from "../Utils/Utility.style"
import { FullCardSection, PrimaryCard, CardHeader } from "../Card/Card"
import styled from "styled-components"
import { PlacedBetsWrapper, SectionContentWrapper } from "./Bet.style"

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

export const RectangleWrapper = styled(SectionContentWrapper)`
  background-image: url(/images/stripes_pattern.png);
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

export const MyBet = () => {
  return (
    <PrimaryCard>
      <CardHeader>My Bet</CardHeader>
      <FullCardSection top={"10%"}>
        <SectionContentWrapper>
          <PlacedBetsWrapper>
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
          </PlacedBetsWrapper>
        </SectionContentWrapper>
        <SectionContentWrapper>
          <PlacedBetsWrapper>
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
          </PlacedBetsWrapper>
        </SectionContentWrapper>
        <RectangleWrapper>
          <PlacedBetsWrapper>
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
          </PlacedBetsWrapper>
        </RectangleWrapper>
        <RectangleWrapper>
          <PlacedBetsWrapper>
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
          </PlacedBetsWrapper>
        </RectangleWrapper>
      </FullCardSection>
    </PrimaryCard>
  )
}
