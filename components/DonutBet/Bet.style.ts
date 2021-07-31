import styled, { css } from "styled-components"
import { FlexWrapperCentered, SpanInfoPrimary } from "../Utils/Utility.style"

export const MainContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 55rem;
  height: auto;
  margin: auto;
`

export const SectionContentWrapper = styled.div`
  padding: 1rem;
  border-bottom: 1px solid var(--border-gray);
`
export const PlacedBetsWrapper = styled(FlexWrapperCentered)`
  height: 4rem;
  width: 100%;
  justify-content: space-between;
`
export const PlacedBetdetails = styled(FlexWrapperCentered)`
  gap: 1rem;
`
export const WalletAddress = styled(SpanInfoPrimary)`
  color: var(--light-gray);
  font-size: 1rem;
`
