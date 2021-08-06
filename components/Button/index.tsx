import styled from "styled-components"
import { currentTheme } from "../../core/theme"

export const Button = styled.button<{ color: string }>`
  width: 100%;
  height: 56px;
  padding: 16px;
  font-size: 18px;
  color: var(--primary-white);
  background: ${(props) => props.color};
  border-width: 0;
  border-radius: 80px;
`

export const FullButtonBottomWrapper = styled.div`
  width: 100%;
  position: absolute;
  bottom: 0;
  left: 0;
  padding: 16px;
`

export const FullButton = ({ children }: any) => {
  return (
    <FullButtonBottomWrapper>
      <Button color={currentTheme().primary}>{children}</Button>
    </FullButtonBottomWrapper>
  )
}

// temporary

export const FullButtonWrapper = styled.div`
  width: 100%;
  padding: 16px;
`
export const FullButtonSecondary = ({ children }: any) => {
  return (
    <FullButtonWrapper>
      <Button color={currentTheme().primary}>{children}</Button>
    </FullButtonWrapper>
  )
}
