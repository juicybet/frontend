import { PlacedBetRadio } from "../Radio/Radio"
import Image from "next/image"
import { PlacedBetdetails, PlacedBetsWrapper, WalletAddress, SectionContentWrapper } from "./Bet.style"
import { ExternalLink } from "react-feather"
import { FullButton } from "../Button"
import { PrimaryCard, CardHeader, FullCardSection } from "../Card/Card"
import { FlexWrapperCol, SpanInfoPrimary, SpanInfoSecondary } from "../Utils/Utility.style"

export const AcceptBet = () => {
  return (
    <PrimaryCard>
      <CardHeader>Or accept an existing bet!</CardHeader>
      <FullCardSection top={"10%"}>
        <SectionContentWrapper>
          <PlacedBetRadio name="bet">
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
              <div className="placedBetOwner">
                <FlexWrapperCol>
                  <WalletAddress>
                    by 0xF2…25 <ExternalLink size={15} />
                  </WalletAddress>
                  <SpanInfoSecondary>10 minutes ago</SpanInfoSecondary>
                </FlexWrapperCol>
              </div>
            </PlacedBetsWrapper>
          </PlacedBetRadio>
        </SectionContentWrapper>
      </FullCardSection>
      <FullButton type="jelly">Accept a Bet</FullButton>
    </PrimaryCard>
  )
}
