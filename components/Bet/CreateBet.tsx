import Image from "next/image"
import { Radio } from "../Radio/Radio"
import { Slider } from "../Slider/Slider"
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
  ValueInCrypto,
  ValueInDollar,
  ColumnWrapper,
} from "./Bet.style"

export const CreateBet = () => {
  return (
    <ContentCard>
      <CardHeader>Bet which fruit will turn into jelly!</CardHeader>
      <UpperCardSection>
        <BetSelctionWrapper>
          <Image src="/images/demo-image.png" width="200" height="100" alt="" />
          <RadioButtonWrapper>
            <Radio name="bet">Watermelon</Radio>
            <Radio name="bet">Strawbery</Radio>
          </RadioButtonWrapper>
        </BetSelctionWrapper>
      </UpperCardSection>
      <LowerCardSection>
        <PillsWrapper>
          {["25%", "50%", "75%", "max"].map((item, index) => (
            <CardPils key={index}>{item}</CardPils>
          ))}
        </PillsWrapper>
        <SliderWrapper>
          <Slider />
        </SliderWrapper>
        <CoinWrapper>
          <ColumnWrapper>
            <ValueInCrypto>0.123021</ValueInCrypto>
            <ValueInDollar>$43.62</ValueInDollar>
          </ColumnWrapper>
          <Image src="/images/Bitmap.png" width="40" height="40" alt="" />
        </CoinWrapper>
      </LowerCardSection>
      <Cardbutton>Create a Bet</Cardbutton>
    </ContentCard>
  )
}
