import Image from "next/image"
import React from "react"
import { getBackground } from "../../data/theme"
import {
  BetSelctionWrapper,
  Cardbutton,
  CardHeader,
  CardPils,
  CoinWrapper,
  ContentCard,
  LowerCardSection,
  PillsWrapper,
  RadioButtonWrapper,
  SliderWrapper,
  UpperCardSection,
  ValueInBnc,
  ValueInDollar,
  ValueWrapper,
} from "./Bet.style"

export const Createbet = () => {
  return (
    <ContentCard>
      <CardHeader>Bet which fruit will turn into jelly</CardHeader>
      <UpperCardSection>
        <BetSelctionWrapper>
          <Image src="\images\demo image.png" width="200" height="100" alt="" />
          <RadioButtonWrapper>
            <label className="radio">
              <span className="radio__input">
                <input type="radio" name="radio" />
                <span className="radio__control"></span>
              </span>
              <span className="radio__label">Watermelon</span>
            </label>
            <label className="radio">
              <span className="radio__input">
                <input type="radio" name="radio" />
                <span className="radio__control"></span>
              </span>
              <span className="radio__label">Strwaberry</span>
            </label>
          </RadioButtonWrapper>
        </BetSelctionWrapper>
      </UpperCardSection>
      <LowerCardSection>
        <PillsWrapper>
          <CardPils>25%</CardPils>
          <CardPils>50%</CardPils>
          <CardPils>75%</CardPils>
          <CardPils>max</CardPils>
        </PillsWrapper>
        <SliderWrapper>
          <input type="range" name="" id="" className="slider" step="25" min="25" />
        </SliderWrapper>
        <CoinWrapper>
          <ValueWrapper>
            <ValueInBnc>0.123021</ValueInBnc>
            <ValueInDollar>$43.62</ValueInDollar>
          </ValueWrapper>
          <Image src="\images\Bitmap.png" width="40" height="40" alt="" />
        </CoinWrapper>
      </LowerCardSection>
      <Cardbutton>create a bet</Cardbutton>
    </ContentCard>
  )
}

export const Acceptbet = () => {
  return (
    <ContentCard>
      <CardHeader>Or accept an existing bet</CardHeader>
      <Cardbutton>accept a bet</Cardbutton>
    </ContentCard>
  )
}
