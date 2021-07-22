import styled, { css } from "styled-components"

export const MainContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 55rem;
  height: auto;
  margin: auto;
`

export const ContentCard = styled.div`
  width: 25rem;
  height: 35rem;
  background-color: var(--primary-white);
  box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.05);
  border-radius: 1.25rem;
  position: relative;
`

export const CardHeader = styled.span`
  font-family: Quicksand;
  font-style: normal;
  font-weight: bold;
  font-size: 1.125rem;
  color: var(--dark-gray);
  position: absolute;
  left: 5%;
  top: 3%;
`

export const LowerCardSection = styled.div`
  border-top: 1px solid var(--border-gray);
  position: absolute;
  width: 100%;
  height: 14rem;
  bottom: 14%;
`

export const UpperCardSection = styled.div`
  position: absolute;
  width: 100%;
  height: 14rem;
  top: 10%;
  border-top: 1px solid var(--border-gray);
`
export const MiddleCardSection = styled.div`
  position: absolute;
  width: 100%;
  // height: 14rem;
  top: 10%;
  border-top: 1px solid var(--border-gray);
`

export const PillsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 1.5rem 3rem;
`

export const CardPils = styled.button`
  padding: 5px 10px;
  border-radius: 1rem;
  color: var(--light-gray);
  background: var(--primary-white);
  border: 2px solid var(--secondary-gray);
`
export const SliderWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
`
export const CoinWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 2px solid var(--secondary-gray);
  border-radius: 2rem;
  height: 4rem;
  padding: 0.8rem;
  margin: 2rem 5rem;
`
export const ColumnWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
`

export const cardSpanPrimary = css`
  font-style: normal;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 3px;
`
export const cardSpanSecondary = css`
  font-style: normal;
  font-weight: bold;
  font-size: 0.75rem;
  color: var(--light-gray);
`

export const ValueInCrypto = styled.span`
  ${cardSpanPrimary}
  font-size: 1.25rem;
  color: var(--dark-gray);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 3px;
`

export const ValueInDollar = styled.span`
  ${cardSpanSecondary}
`

export const BetSelctionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 2rem 2rem;
`
export const RadioButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 2rem;
  width: 100%;
`
export const RadioLebels = styled.label`
  font-style: normal;
  font-weight: bold;
  font-size: 1.125rem;
  line-height: 1.45rem;
  color: var(--light-gray);
`

export const flexCenter = css`
  display: flex;
  align-items: center;
`

export const RadioWrapper = styled.div`
  padding: 1rem 1rem 1rem 0;
  border-bottom: 1px solid var(--border-gray);
`
export const NonRadioWrapper = styled.div`
  position: relative;
  padding: 1rem;
  border-bottom: 1px solid var(--border-gray);
`

export const PlacedBetsWrapper = styled.div`
  ${flexCenter}
  height: 5rem;
  width: 100%;
  justify-content: space-between;
  // gap: 2rem;
`
export const PlacedBetdetails = styled.div`
  ${flexCenter}
  gap: 1rem;
`
export const WalletAddress = styled.span`
  ${cardSpanPrimary}
  color: var(--light-gray);
  font-size: 1rem;
`

export const TimeOfBet = styled.span`
  ${cardSpanSecondary}
  display: flex;
  justify-content: flex-end;
`
