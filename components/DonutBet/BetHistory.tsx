import Image from "next/image"
import {
  FlexWrapperCentered,
  FlexWrapperCol,
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
const ButtonWrapper = styled(FlexWrapperCol)`
  gap: 8px;
`

export const BetHistory = () => {
  return (
    <PrimaryCard>
      <CardHeader>Bet History</CardHeader>
      <FullCardSection top={"10%"}>
        <RectangleWrapper>
          <PlacedBetsWrapper>
            <PlacedBetdetails>
              <SpanInfoPrimary>A</SpanInfoPrimary>
              <Image src="/images/donuts/1.png" width="64" height="64" alt="Donut 1" />
              <FlexWrapperCol>
                <SpanInfoPrimary>
                  0.123021
                  <Image src="/images/icons/coins/bnb.svg" width="20" height="20" alt="" />
                </SpanInfoPrimary>
                <SpanInfoSecondary>~ $3.67 </SpanInfoSecondary>
              </FlexWrapperCol>
            </PlacedBetdetails>
            <PlacedBetdetails>
              <FlexWrapperCol>
                <WalletAddress>v/s 0xF2…25</WalletAddress>
                <SpanInfoSecondary>10 minutes ago</SpanInfoSecondary>
              </FlexWrapperCol>
              <Image src="/images/icons/lost.svg" width="40" height="40" alt="" />
            </PlacedBetdetails>
          </PlacedBetsWrapper>
        </RectangleWrapper>
        <SectionContentWrapper>
          <PlacedBetsWrapper>
            <PlacedBetdetails>
              <SpanInfoPrimary>A</SpanInfoPrimary>
              <Image src="/images/donuts/2.png" width="64" height="64" alt="Donut 2" />
              <FlexWrapperCol>
                <SpanInfoPrimary>
                  0.123021
                  <Image src="/images/icons/coins/bnb.svg" width="20" height="20" alt="" />
                </SpanInfoPrimary>
                <SpanInfoSecondary>~ $3.67 </SpanInfoSecondary>
              </FlexWrapperCol>
            </PlacedBetdetails>
            <PlacedBetdetails>
              <FlexWrapperCol>
                <WalletAddress>v/s 0xF2…25</WalletAddress>
                <SpanInfoSecondary>10 minutes ago</SpanInfoSecondary>
              </FlexWrapperCol>
              <Image src="/images/icons/won.svg" width="40" height="40" alt="" />
            </PlacedBetdetails>
          </PlacedBetsWrapper>
        </SectionContentWrapper>
        <RectangleWrapper>
          <PlacedBetsWrapper>
            <PlacedBetdetails>
              <SpanInfoPrimary>A</SpanInfoPrimary>
              <Image src="/images/donuts/4.png" width="64" height="64" alt="Donut 4" />
              <FlexWrapperCol>
                <SpanInfoPrimary>
                  0.123021
                  <Image src="/images/icons/coins/bnb.svg" width="20" height="20" alt="" />
                </SpanInfoPrimary>
                <SpanInfoSecondary>~ $3.67 </SpanInfoSecondary>
              </FlexWrapperCol>
            </PlacedBetdetails>
            <PlacedBetdetails>
              <FlexWrapperCol>
                <WalletAddress>v/s 0xF2…25</WalletAddress>
                <SpanInfoSecondary>10 minutes ago</SpanInfoSecondary>
              </FlexWrapperCol>
              <Image src="/images/icons/lost.svg" width="40" height="40" alt="" />
            </PlacedBetdetails>
          </PlacedBetsWrapper>
        </RectangleWrapper>
        <RectangleWrapper>
          <PlacedBetsWrapper>
            <PlacedBetdetails>
              <SpanInfoPrimary>A</SpanInfoPrimary>
              <Image src="/images/donuts/3.png" width="64" height="64" alt="Donut 3" />
              <FlexWrapperCol>
                <SpanInfoPrimary>
                  0.123021
                  <Image src="/images/icons/coins/bnb.svg" width="20" height="20" alt="" />
                </SpanInfoPrimary>
                <SpanInfoSecondary>~ $3.67 </SpanInfoSecondary>
              </FlexWrapperCol>
            </PlacedBetdetails>
            <PlacedBetdetails>
              <FlexWrapperCol>
                <WalletAddress>v/s 0xF2…25</WalletAddress>
                <SpanInfoSecondary>10 minutes ago</SpanInfoSecondary>
              </FlexWrapperCol>
              <Image src="/images/icons/lost.svg" width="40" height="40" alt="" />
            </PlacedBetdetails>
          </PlacedBetsWrapper>
        </RectangleWrapper>
        <RectangleWrapper>
          <PlacedBetsWrapper>
            <PlacedBetdetails>
              <SpanInfoPrimary>A</SpanInfoPrimary>
              <Image src="/images/donuts/5.png" width="64" height="64" alt="Donut 5" />
              <FlexWrapperCol>
                <SpanInfoPrimary>
                  0.123021
                  <Image src="/images/icons/coins/bnb.svg" width="20" height="20" alt="" />
                </SpanInfoPrimary>
                <SpanInfoSecondary>~ $3.67 </SpanInfoSecondary>
              </FlexWrapperCol>
            </PlacedBetdetails>
            <PlacedBetdetails>
              <FlexWrapperCol>
                <WalletAddress>v/s 0xF2…25</WalletAddress>
                <SpanInfoSecondary>10 minutes ago</SpanInfoSecondary>
              </FlexWrapperCol>
              <Image src="/images/icons/lost.svg" width="40" height="40" alt="" />
            </PlacedBetdetails>
          </PlacedBetsWrapper>
        </RectangleWrapper>
      </FullCardSection>
    </PrimaryCard>
  )
}
