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
  bottom: 9%;
`

export const UpperCardSection = styled.div`
  position: absolute;
  width: 100%;
  height: 14rem;
  top: 9%;
`
