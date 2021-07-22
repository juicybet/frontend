import Image from "next/image"
import { Radio } from "../Radio/Radio"
import { Slider } from "../Slider/Slider"
import {
  BetSelctionWrapper,
  CardHeader,
  CardPils,
  CoinWrapper,
  ContentCard,
  LowerCardSection,
  PillsWrapper,
  RadioButtonWrapper,
  SliderWrapper,
  UpperCardSection,
  ValueInCrypto,
  ValueInDollar,
  ColumnWrapper,
  flexCenter,
} from "./Bet.style"
import { CircularProgressbar, CircularProgressbarWithChildren, buildStyles } from "react-circular-progressbar"
import "react-circular-progressbar/dist/styles.css"
import { SmallBlock } from "../Block"
import { PrimaryCard } from "../Card/Card"

export const MyPnl = () => {
  return (
    <PrimaryCard>
      <CardHeader>My PNL</CardHeader>
      <UpperCardSection>
        <div className="flexWrapper">
          <div className="progressBar">
            <CircularProgressbarWithChildren
              value={75}
              strokeWidth={10}
              styles={buildStyles({
                rotation: 0.25 + (1 - 75 / 100) / 2,
                trailColor: "var(--primary-white)",
                pathColor: "var(--primary-green)",
              })}
            >
              <div style={{ fontSize: "1rem", display: "flex", flexDirection: "column", alignItems: "center" }}>
                <span>Won</span>
                <strong>75/100</strong>
                <span>(75%)</span>
              </div>
            </CircularProgressbarWithChildren>
          </div>
          <div className="netProfit">
            <div className="BlockWrapper">
              <SmallBlock color={"var(--primary-green)"} />
              <span>Net Profit:</span>
            </div>
            <div className="ProfitWrapper">
              <ColumnWrapper>
                <ValueInCrypto>
                  0.123021
                  <Image src="/images/Bitmap.png" width="25" height="25" alt="" />
                </ValueInCrypto>
                <ValueInDollar>~ $43.62</ValueInDollar>
              </ColumnWrapper>
              <ColumnWrapper>
                <ValueInCrypto>
                  0.123021
                  <Image src="/images/Bitmap.png" width="25" height="25" alt="" />
                </ValueInCrypto>
                <ValueInDollar>~ $3.67 per bet</ValueInDollar>
              </ColumnWrapper>
            </div>
          </div>
        </div>
      </UpperCardSection>
      <LowerCardSection>
        <div className="BetDetailWrapper">
          <div className="BetDetail">
            <SmallBlock color={"var(--primary-green)"} />
            <div className="BetInfo">
              <span>Won :</span>
              <ColumnWrapper>
                <ValueInCrypto>75 bets</ValueInCrypto>
                <ValueInDollar>(75%)</ValueInDollar>
              </ColumnWrapper>
              <ColumnWrapper>
                <ValueInCrypto>
                  0.123021
                  <Image src="/images/Bitmap.png" width="25" height="25" alt="" />
                </ValueInCrypto>
                <ValueInDollar>~ $3.67 per bet</ValueInDollar>
              </ColumnWrapper>
            </div>
          </div>
          <div className="BetDetail">
            <SmallBlock color={"var(--primary-red)"} />
            <div className="BetInfo">
              <span>Lost :</span>
              <ColumnWrapper>
                <ValueInCrypto>25 bets</ValueInCrypto>
                <ValueInDollar>(25%)</ValueInDollar>
              </ColumnWrapper>
              <ColumnWrapper>
                <ValueInCrypto>
                  0.123021
                  <Image src="/images/Bitmap.png" width="25" height="25" alt="" />
                </ValueInCrypto>
                <ValueInDollar>~ $3.67 per bet</ValueInDollar>
              </ColumnWrapper>
            </div>
          </div>
          <div className="BetDetail">
            <SmallBlock color={"var(--dark-gray)"} />
            <div className="BetInfo">
              <span>Entered:</span>
              <ColumnWrapper>
                <ValueInCrypto>100 bets</ValueInCrypto>
                <ValueInDollar>total</ValueInDollar>
              </ColumnWrapper>
              <ColumnWrapper>
                <ValueInCrypto>
                  0.123021
                  <Image src="/images/Bitmap.png" width="25" height="25" alt="" />
                </ValueInCrypto>
                <ValueInDollar>~ $3.67 per bet</ValueInDollar>
              </ColumnWrapper>
            </div>
          </div>
        </div>
      </LowerCardSection>
    </PrimaryCard>
  )
}
