import styled, { css } from "styled-components"

type RibbonProps = {
  RibbonType?: "won" | "lost"
}

export const RibbonContentWrapper = styled.div<{ type: string }>`
  position: relative;
  width: 25rem;
  height: 4rem;
  display: flex;
  background-color: ${(props) => (props.type === "win" ? "var(--primary-pink)" : "var(--dark-gray)")};

  &::before,
  &::after {
    content: "";
    position: absolute;
    top: 0;
    border: 2rem solid ${(props) => (props.type === "win" ? "var(--secondary-pink)" : "var(--darker-gray)")};
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
export const RibbonLeftDecoration = styled.div<{ type: string }>`
  width: 1%;
  background: ${(props) => (props.type === "win" ? "var(--primary-pink)" : "var(--dark-gray)")};
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
    background: ${(props) => (props.type === "win" ? "var(--shadow-pink)" : "var(--shadow-gray)")};
    bottom: -12px;
    left: -7px;
    border-radius: 6px 0 0 6px;
    box-shadow: inset -1px 2px 2px rgba(0, 0, 0, 0.3);
  }
`
export const RibbonRightDecoration = styled.div<{ type: string }>`
  width: 1%;
  height: inherit;
  margin-bottom: 0;
  background: ${(props) => (props.type === "win" ? "var(--primary-pink)" : "var(--dark-gray)")};
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
    background: ${(props) => (props.type === "win" ? "var(--shadow-pink)" : "var(--shadow-gray)")};
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

export const WinningRibbon = ({ children }: any) => (
  <RibbonContentWrapper type="win">
    <RibbonLeftDecoration type="win" />
    <RibbonContent>{children}</RibbonContent>
    <RibbonRightDecoration type="win" />
  </RibbonContentWrapper>
)
export const LoosingRibbon = ({ children }: any) => (
  <RibbonContentWrapper type="lost">
    <RibbonLeftDecoration type="lost" />
    <RibbonContent>{children}</RibbonContent>
    <RibbonRightDecoration type="lost" />
  </RibbonContentWrapper>
)
