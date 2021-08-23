import styled from "styled-components"
import { currentTheme } from "../../core/theme"
import { Box } from "../Utils/Utility.style"

// export const StyledButton = styled.button<{ color: string }>`
//   width: 100%;
//   height: 56px;
//   padding: 16px;
//   font-size: 18px;
//   color: var(--primary-white);
//   background: ${(props) => props.color};
//   border-width: 0;
//   border-radius: 80px;
//   cursor: pointer;
// `

// export const FullButtonBottomWrapper = styled.div`
//   width: 100%;
//   position: absolute;
//   bottom: 0;
//   left: 0;
//   padding: 16px;
// `

// export const FullButton = ({ children }: any) => {
//   return (
//     <FullButtonBottomWrapper>
//       <StyledButton color={currentTheme().primary}>{children}</StyledButton>
//     </FullButtonBottomWrapper>
//   )
// }

// temporary

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
