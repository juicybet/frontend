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

export const RectangleWrapper = styled(SectionContentWrapper)<{ img: string }>`
  background-image: url(${(props) => props.img});
`

export const CancelButton = styled.button`
  width: 112px;
  height: 40px;
  font-size: 18px;
  font-weight: bold;
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
        <RectangleWrapper img={"/images/Rectangle.png"}>
          <PlacedBetsWrapper>
            <PlacedBetdetails>
              <SpanInfoPrimary>A</SpanInfoPrimary>
              <Image src="/images/donut_1.png" width="50" height="50" alt="" />
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
        <SectionContentWrapper>
          <PlacedBetsWrapper>
            <PlacedBetdetails>
              <SpanInfoPrimary>A</SpanInfoPrimary>
              <Image src="/images/donut_2.png" width="50" height="50" alt="" />
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
              <SpanInfoPrimary>A</SpanInfoPrimary>
              <Image src="/images/donut_4.png" width="50" height="50" alt="" />
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
              <SpanInfoPrimary>A</SpanInfoPrimary>
              <Image src="/images/donut_3.png" width="50" height="50" alt="" />
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
              <SpanInfoPrimary>A</SpanInfoPrimary>
              <Image src="/images/donut_5.png" width="50" height="50" alt="" />
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
      </FullCardSection>
    </PrimaryCard>
  )
}
