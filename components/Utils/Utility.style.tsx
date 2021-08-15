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
  shadow,
  ShadowProps,
  position,
  PositionProps,
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

export const Rotatable = styled.div<{ angle: number }>`
  ${(props) => css`
    transform: rotate(${props.angle}deg);
  `}}
  transition: 0.2s;
`

type ExtraProps = {
  cursor?: string
}

export const Box = styled.div<
  SpaceProps & LayoutProps & BackgroundProps & ExtraProps & ColorProps & ShadowProps & PositionProps & BorderProps
>`
  ${space}
  ${layout}
  ${background}
  ${color}
  ${shadow}
  ${position}
  ${border}

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

export const RewardInfo = styled(FlexColumn)<{ height: string; width: string }>`
  align-items: flex-start;
  gap: 16px;
  height: ${(props) => props.height};
  width: ${(props) => props.width};
`
