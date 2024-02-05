import styled from "styled-components"
import { currentTheme } from "../../core/theme"
import { Box } from "../Utils/Utility.style"

export const StyledButton = styled.button<{ color: string; height: string }>`
  width: 100%;
  height: ${(props) => props.height};
  padding: 16px;
  font-size: 18px;
  color: var(--primary-white);
  background: ${(props) => props.color};
  border-width: 0;
  border-radius: 80px;
  cursor: pointer;
`

export const Button = ({ children, height, px, py }: any) => {
  return (
    <Box width={"100%"} px={px} py={py}>
      <StyledButton height={height} color={currentTheme().primary}>
        {children}
      </StyledButton>
    </Box>
  )
}
