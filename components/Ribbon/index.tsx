import styled from "styled-components"

const RibbonContentWrapper = styled.div`
  position: relative;
  width: 25rem;
  height: 4rem;
  background: var(--primary-pink);
  display: flex;

  &::before,
  &::after {
    content: "";
    position: absolute;
    top: 0;
    border: 2rem solid var(--secondary-pink);
    z-index: -1;
    top: 30px;
  }
  &::before {
    left: -42px;
    border-left: 10px solid transparent;
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;
  }
  &::after {
    right: -42px;
    border-right: 10px solid transparent;
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
  }
`
const RibbonLeftDecoration = styled.div`
  width: 1%;
  background: var(--primary-pink);
  z-index: 100;
  position: relative;
  &::before {
    content: "";
    position: absolute;
    width: 8px;
    height: 120%;
    top: 0;
    left: -8px;
    background: inherit;
    border-radius: 6px 0 0 6px;
  }
  &::after {
    content: "";
    position: absolute;
    width: 7px;
    height: 12px;
    background: #7b0527;
    bottom: -12px;
    left: -7px;
    border-radius: 6px 0 0 6px;
    box-shadow: inset -1px 2px 2px rgba(0, 0, 0, 0.3);
  }
`
const RibbonRightDecoration = styled.div`
  width: 1%;
  height: inherit;
  margin-bottom: 0;
  background: var(--primary-pink);
  z-index: 100;
  position: relative;
  &::before {
    content: "";
    position: absolute;
    width: 8px;
    height: 120%;
    top: 0;
    right: -8px;
    background: inherit;
    border-radius: 0 6px 6px 0;
  }
  &::after {
    content: "";
    position: absolute;
    width: 7px;
    height: 12px;
    background: #7b0527;
    bottom: -12px;
    right: -7px;
    border-radius: 0 6px 6px 0;
    box-shadow: inset -1px 2px 2px rgba(0, 0, 0, 0.3);
  }
`
const RibbonContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 98%;
`

export const Ribbon = ({ children }: any) => (
  <RibbonContentWrapper>
    <RibbonLeftDecoration />
    <RibbonContent>{children}</RibbonContent>
    <RibbonRightDecoration />
  </RibbonContentWrapper>
)
