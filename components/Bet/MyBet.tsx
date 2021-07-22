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
  NonRadioWrapper,
} from "./Bet.style"
import { ExternalLink } from "react-feather"
import { FullButton } from "../Button/FullButton"
import { DivBackgroundWrapper } from "../Utils/Utility.style"
import { PrimaryCard } from "../Card/Card"

export const MyBet = () => {
  return (
    <PrimaryCard>
      <CardHeader>My Bet</CardHeader>
      <MiddleCardSection>
        <NonRadioWrapper>
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
        </NonRadioWrapper>
        <NonRadioWrapper>
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
        </NonRadioWrapper>
        <NonRadioWrapper>
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
        </NonRadioWrapper>
        <NonRadioWrapper>
          <PlacedBetsWrapper>
            {/* <DivBackgroundWrapper /> */}
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
        </NonRadioWrapper>
      </MiddleCardSection>
    </PrimaryCard>
  )
}
