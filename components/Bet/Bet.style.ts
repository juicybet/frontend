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
  background-color: #ffffff;
  box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.05);
  border-radius: 20px;
  position: relative;
`

export const Cardbutton = styled.button`
  width: 100%;
  height: 4rem;
  padding: 1rem;
  font-size: 1.25rem;
  line-height: 1.5rem;
  font-family: Quicksand;
  font-weight: bold;
  color: #ffffff;
  background: #ff624e;
  border-width: 0;
  position: absolute;
  bottom: 0;
  left: 0;
`

export const CardHeader = styled.span`
  font-family: Quicksand;
  font-style: normal;
  font-weight: bold;
  font-size: 1.125rem;
  line-height: 1.3rem;
  color: #494f6d;
  position: absolute;
  left: 5%;
  top: 5%;
`

export const LowerCardSection = styled.div`
  border-top: 1px solid #efefef;
  position: absolute;
  width: 100%;
  height: 14rem;
  bottom: 11%;
`

export const UpperCardSection = styled.div`
  position: absolute;
  width: 100%;
  height: 14rem;
  top: 9%;
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
  color: #929292;
  background: #ffffff;
  border: 2px solid #eaeaea;
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
  margin: 2rem 5rem;
  border: 2px solid #eaeaea;
  border-radius: 2rem;
  height: 4rem;
  padding: 0.8rem;
`
export const ValueWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
`

export const ValueInBnc = styled.span`
  color: #494f6d;
  font-family: Quicksand;
  font-style: normal;
  font-weight: bold;
  font-size: 1.25rem;
  line-height: 1.5rem;
`

export const ValueInDollar = styled.span`
  font-family: Quicksand;
  font-style: normal;
  font-weight: bold;
  font-size: 12px;
  line-height: 15px;
  color: #929292;
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
  font-family: Quicksand;
  font-style: normal;
  font-weight: bold;
  font-size: 1.125rem;
  line-height: 1.45rem;
  color: #929292;
`
