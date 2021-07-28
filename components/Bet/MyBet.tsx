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
  gap: 1rem;
`
export const WalletAddress = styled(SpanInfoPrimary)`
  color: var(--light-gray);
  font-size: 1rem;
`
export const TimeOfBet = styled(SpanInfoSecondary)`
  justify-content: flex-end;
`

export const RectangleWrapper = styled(SectionContentWrapper)<{ img: string }>`
  background-image: url(${(props) => props.img});
`

export const CancelButton = styled.button`
  width: 7rem;
  height: 2.5rem;
  font-size: 1.125 rem;
  font-weight: bold;
  color: var(--primary-pink);
  background: var(--primary-white);
  border: 2px solid var(--primary-pink);
  border-radius: 2rem;
`
const ButtonWrapper = styled(FlexWrapperCol)`
  gap: 0.5rem;
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
              <FlexWrapperCol>
                <SpanInfoPrimary>
                  0.123021
                  <Image src="/images/Bitmap.png" width="25" height="25" alt="" />
                </SpanInfoPrimary>
                <SpanInfoSecondary>~ $3.67 </SpanInfoSecondary>
              </FlexWrapperCol>
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
              <FlexWrapperCol>
                <SpanInfoPrimary>
                  0.123021
                  <Image src="/images/Bitmap.png" width="25" height="25" alt="" />
                </SpanInfoPrimary>
                <SpanInfoSecondary>~ $3.67 </SpanInfoSecondary>
              </FlexWrapperCol>
            </PlacedBetdetails>
            <PlacedBetdetails>
              <FlexWrapperCol>
                <WalletAddress>v/s 0xF2…25</WalletAddress>
                <SpanInfoSecondary>10 minutes ago</SpanInfoSecondary>
              </FlexWrapperCol>
              <Image src="/images/icon_won.png" width="25" height="25" alt="" />
            </PlacedBetdetails>
          </PlacedBetsWrapper>
        </SectionContentWrapper>
        <RectangleWrapper img={"/images/Rectangle.png"}>
          <PlacedBetsWrapper>
            <PlacedBetdetails>
              <Image src="/images/smolwatermelon.png" width="50" height="70" alt="" />
              <FlexWrapperCol>
                <SpanInfoPrimary>
                  0.123021
                  <Image src="/images/Bitmap.png" width="25" height="25" alt="" />
                </SpanInfoPrimary>
                <SpanInfoSecondary>~ $3.67 </SpanInfoSecondary>
              </FlexWrapperCol>
            </PlacedBetdetails>
            <PlacedBetdetails>
              <FlexWrapperCol>
                <WalletAddress>v/s 0xF2…25</WalletAddress>
                <SpanInfoSecondary>10 minutes ago</SpanInfoSecondary>
              </FlexWrapperCol>
              <Image src="/images/icon_lost.png" width="25" height="25" alt="" />
            </PlacedBetdetails>
          </PlacedBetsWrapper>
        </RectangleWrapper>
        <RectangleWrapper img={"/images/Rectangle.png"}>
          <PlacedBetsWrapper>
            <PlacedBetdetails>
              <Image src="/images/smolwatermelon.png" width="50" height="70" alt="" />
              <FlexWrapperCol>
                <SpanInfoPrimary>
                  0.123021
                  <Image src="/images/Bitmap.png" width="25" height="25" alt="" />
                </SpanInfoPrimary>
                <SpanInfoSecondary>~ $3.67 </SpanInfoSecondary>
              </FlexWrapperCol>
            </PlacedBetdetails>
            <PlacedBetdetails>
              <FlexWrapperCol>
                <SpanInfoLight>Cancelled</SpanInfoLight>
                <SpanInfoSecondary>10 minutes ago</SpanInfoSecondary>
              </FlexWrapperCol>
            </PlacedBetdetails>
          </PlacedBetsWrapper>
        </RectangleWrapper>
      </FullCardSection>
    </PrimaryCard>
  )
}
