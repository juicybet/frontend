import styled, { css } from "styled-components"

export const RibbonContentWrapper = styled.div<{ colorOne: string; colorTwo: string }>`
  position: relative;
  width: 400px;
  height: 64px;
  display: flex;
  background-color: ${(props) => props.colorOne};

  &::before,
  &::after {
    content: "";
    position: absolute;
    top: 0;
    border: 32px solid ${(props) => props.colorTwo};
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
export const RibbonLeftDecoration = styled.div<{ colorOne: string; colorTwo: string }>`
  width: 1%;
  background: ${(props) => props.colorOne};
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
    background: ${(props) => props.colorTwo};
    bottom: -12px;
    left: -7px;
    border-radius: 6px 0 0 6px;
    box-shadow: inset -1px 2px 2px rgba(0, 0, 0, 0.3);
  }
`
export const RibbonRightDecoration = styled.div<{ colorOne: string; colorTwo: string }>`
  width: 1%;
  height: inherit;
  margin-bottom: 0;
  background: ${(props) => props.colorOne};
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
    background: ${(props) => props.colorTwo};
    bottom: -12px;
    right: -7px;
    border-radius: 0 6px 6px 0;
    box-shadow: inset -1px 2px 2px rgba(0, 0, 0, 0.3);
  }
`
export const RibbonContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 98%;
`

export const WinningRibbon = ({ children, bet }: any) => (
  <>
    {bet === "jelly" && (
      <RibbonContentWrapper colorOne="var(--primary-pink)" colorTwo="var(--secondary-pink)">
        <RibbonLeftDecoration colorOne="var(--primary-pink)" colorTwo="var(--shadow-pink)" />
        <RibbonContent>{children}</RibbonContent>
        <RibbonRightDecoration colorOne="var(--primary-pink)" colorTwo="var(--shadow-pink)" />
      </RibbonContentWrapper>
    )}
    {bet === "donut" && (
      <RibbonContentWrapper colorOne="var(--primary-purple)" colorTwo="var(--secondary-purple)">
        <RibbonLeftDecoration colorOne="var(--primary-purple)" colorTwo="var(--shadow-purple)" />
        <RibbonContent>{children}</RibbonContent>
        <RibbonRightDecoration colorOne="var(--primary-purple)" colorTwo="var(--shadow-purple)" />
      </RibbonContentWrapper>
    )}
  </>
)
export const LoosingRibbon = ({ children }: any) => (
  <RibbonContentWrapper colorOne="var(--dark-gray)" colorTwo="var(--darker-gray)">
    <RibbonLeftDecoration colorOne="var(--dark-gray)" colorTwo="var(--shadow-gray)" />
    <RibbonContent>{children}</RibbonContent>
    <RibbonRightDecoration colorOne="var(--dark-gray)" colorTwo="var(--shadow-gray)" />
  </RibbonContentWrapper>
)
