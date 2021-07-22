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
export const FlexWrapperRow = styled.div`
  display: flex;
  flex-direction: row;
`
export const FlexWrapperCentered = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`
export const FlexColWrapperCentered = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
export const FlexWrapperCol = styled.div`
  display: flex;
  flex-direction: column;
`
const spanPrimaryStyle = css`
  font-size: 1.25rem;
  font-style: normal;
  font-weight: bold;
  gap: 0.4rem;
`
const spanSecondaryStyle = css`
  font-size: 0.75rem;
  font-style: normal;
  font-weight: bold;
  color: var(--light-gray);
`
export const SpanInfoPrimary = styled(FlexWrapperCentered)`
  ${spanPrimaryStyle}
  color: var(--dark-gray);
`
export const SpanInfoLight = styled(FlexWrapperCentered)`
  ${spanPrimaryStyle}
  color: var(--light-gray);
`
export const SpanInfoSecondary = styled(FlexWrapperRow)`
  ${spanSecondaryStyle}
`
export const SpanInfoCentered = styled(FlexWrapperCentered)`
  ${spanSecondaryStyle}
`
export const SpanLabel = styled.span<{ size: string }>`
  ${spanSecondaryStyle}
  font-size: ${(props) => props.size};
`
