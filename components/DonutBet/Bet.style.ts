import styled, { css } from "styled-components"
import { FlexWrapperCentered, SpanInfoPrimary } from "../Utils/Utility.style"

export const PlacedBetsWrapper = styled(FlexWrapperCentered)`
  height: 64px;
  width: 100%;
  justify-content: space-between;
`
export const PlacedBetdetails = styled(FlexWrapperCentered)`
  gap: 16px;
`
export const WalletAddress = styled(SpanInfoPrimary)`
  color: var(--light-gray);
  font-size: 16px;
`
