import styled, { css } from "styled-components"
import { getBackground } from "../../data/theme"

export const BackgroundWrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  opacity: 0.04;
  background-image: url(${getBackground()});
  background-size: 20rem 20rem;
  z-index: -1;
`
export const ContentWrapper = styled.div`
  margin-top: 7.5rem;
`

export const RectangleWrapper = styled.div`
  position: "absolute";
  left: 0;
`

export const Rotatable = styled.div<{ angle: number }>`
  ${(props) => css`
    transform: rotate(${props.angle}deg);
  `}}
  transition: 0.2s;
`
