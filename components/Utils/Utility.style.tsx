import styled, { css } from "styled-components"
import { getBackground } from "../../core/site"
import {
  flexbox,
  FlexboxProps,
  space,
  SpaceProps,
  layout,
  LayoutProps,
  color,
  ColorProps,
  typography,
  TypographyProps,
  background,
  BackgroundProps,
  border,
  BorderProps,
  grid,
  GridProps,
} from "styled-system"

export const BackgroundWrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  opacity: 0.04;
  background-image: url(${getBackground()});
  background-size: 320px 320px;
  z-index: -1;
`
export const ContentWrapper = styled.div`
  margin-top: 120px;
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

type ExtraProps = {
  cursor?: string
}

export const Box = styled.div<SpaceProps & LayoutProps & BackgroundProps & ExtraProps>`
  ${space}
  ${layout}
  ${background}

  ${({ cursor }) =>
    cursor &&
    css`
      cursor: ${cursor};
    `}
`

export const Text = styled(Box)<ColorProps & TypographyProps>`
  ${typography}
  ${color}
`

export const Grid = styled(Box)<GridProps & BorderProps>`
  display: grid;
  ${border}
  ${grid}
`

export const Flex = styled(Box)<FlexboxProps & BackgroundProps & BorderProps>`
  display: flex;
  ${background}
  ${flexbox}
  ${border}
`

export const FlexRow = styled(Flex)`
  flex-direction: row;
`

export const FlexColumn = styled(Flex)`
  flex-direction: column;
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
const spanPrimaryStyle = css`
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  gap: 6.4px;
`
const spanSecondaryStyle = css`
  font-size: 12px;
  font-style: normal;
  font-weight: 600;
  color: var(--light-gray);
`
export const SpanInfoPrimary = styled(FlexWrapperCentered)`
  ${spanPrimaryStyle}
  color: var(--dark-gray);
`
export const EtherInput = styled.input.attrs({ type: "number" })<{
  focusColor: string
  currency?: string
}>`
  font-size: 20px;
  background: transparent;
  border: none;
  color: var(--dark-gray);

  border: 2px solid var(--secondary-gray);
  border-radius: 32px;
  height: 64px;
  padding: 0px 54px 16px 16px;
  margin: 32px 80px;
  transition: 0.2s;

  ${({ currency = "bnb" }) => css`
    background: url(/images/icons/coins/${currency}.svg) no-repeat;
    background-position: right 12px center;
  `}

  &:focus {
    outline: none;
    ${({ focusColor }) => css`
      border-color: ${focusColor};
    `}
  }
`
export const EtherFiatValue = styled.div`
  ${spanSecondaryStyle}
  margin-top: 68px;
  margin-left: 100px;
  position: absolute;
`
export const SpanInfoLight = styled(FlexWrapperCentered)`
  ${spanPrimaryStyle}
  color: var(--light-gray);
`
export const SpanInfoWhite = styled(FlexWrapperCentered)`
  ${spanPrimaryStyle}
  color: var(--primary-white);
`
export const SpanInfoSecondary = styled(FlexRow)`
  ${spanSecondaryStyle}
`
export const SpanInfoCentered = styled(FlexWrapperCentered)`
  ${spanSecondaryStyle}
`

export const SpanInfoflexEnd = styled(FlexWrapperCentered)`
  justify-content: flex-end;
  ${spanSecondaryStyle};
`
export const SpanLabel = styled.span<{ size: string; alignItems?: string }>`
  ${spanSecondaryStyle}
  font-size: ${(props) => props.size};
  align-items: ${(props) => props.alignItems};
`
export const BetInfoWrapper = styled(FlexWrapperCentered)`
  height: 64px;
  gap: 16px;
`
export const RewardSectionWrapper = styled(FlexColumn)`
  justify-content: flex-start;
  padding: 16px;
`
export const RewardSection = styled.div`
  padding: 16px;
  background-color: var(--bg-gray);
  border-radius: 16px;
`
export const RewardInfo = styled(FlexColumn)<{ height: string; width: string }>`
  align-items: flex-start;
  gap: 16px;
  height: ${(props) => props.height};
  width: ${(props) => props.width};
`

export const ModalWrapper = styled.div`
  position: fixed;
  width: 100%;
  height: 100vh;
  top: 0;
  left: 0;
  z-index: 9000;
  overflow: auto;
  -webkit-transition: all 0.4s;
  -o-transition: all 0.4s;
  -moz-transition: all 0.4s;
  transition: all 0.4s;
  padding: 64px;
`

export const ModalOverlay = styled.div`
  position: fixed;
  z-index: -1;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: #000;
  opacity: 0.8;
`

export const ModalContentWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: auto;
  width: min-content;
`
