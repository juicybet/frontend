import { PlacedBetRadio } from "../Radio/Radio"
import Image from "next/image"
import {
  CardHeader,
  ContentCard,
  MiddleCardSection,
  PlacedBetdetails,
  PlacedBetsWrapper,
  ValueInCrypto,
  ValueInDollar,
  ColumnWrapper,
  WalletAddress,
  TimeOfBet,
  RadioWrapper,
} from "./Bet.style"
import { ExternalLink } from "react-feather"
import { FullButton } from "../Button/FullButton"
import { PrimaryCard } from "../Card/Card"

export const AcceptBet = () => {
  return (
    <PrimaryCard>
      <CardHeader>Or accept an existing bet!</CardHeader>
      <MiddleCardSection>
        <RadioWrapper>
          <PlacedBetRadio name="bet">
            <PlacedBetsWrapper>
              <PlacedBetdetails>
                <Image src="/images/smolwatermelon.png" width="50" height="70" alt="" />
                <ColumnWrapper>
                  <ValueInCrypto>
                    0.123021
                    <Image src="/images/Bitmap.png" width="25" height="25" alt="" />
                  </ValueInCrypto>
                  <ValueInDollar>$43.62</ValueInDollar>
                </ColumnWrapper>
              </PlacedBetdetails>
              <div className="placedBetOwner">
                <ColumnWrapper>
                  <WalletAddress>
                    by 0xF2…25 <ExternalLink size={15} />
                  </WalletAddress>
                  <TimeOfBet>10 minutes ago</TimeOfBet>
                </ColumnWrapper>
              </div>
            </PlacedBetsWrapper>
          </PlacedBetRadio>
        </RadioWrapper>
      </MiddleCardSection>
      <FullButton>Accept a Bet</FullButton>
    </PrimaryCard>
  )
}
