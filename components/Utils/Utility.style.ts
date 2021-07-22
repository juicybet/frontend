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
export const DivBackgroundWrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  opacity: 0.04;
  background-image: url("images/Recatangle.png");
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

export const FlexWrapperRow = styled.div`
  display: flex;
  flex-direction: row;
`
export const FlexWrapperCentered = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`
export const FlexWrapperCol = styled.div`
  display: flex;
  flex-direction: column;
`
export const SpanInfoPrimary = styled(FlexWrapperCentered)`
  font-size: 1.25rem;
  font-style: normal;
  font-weight: bold;
  color: var(--dark-gray);
  gap: 0.4rem;
`
export const SpanInfoSecondary = styled(FlexWrapperRow)`
  font-size: 0.75rem;
  font-style: normal;
  font-weight: bold;
  color: var(--light-gray);
  align-items: left;
`
export const SpanLabel = styled.span<{ size: string }>`
  font-style: normal;
  font-weight: bold;
  font-size: ${(props) => props.size};
  color: var(--light-gray);
`
