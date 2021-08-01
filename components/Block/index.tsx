import styled, { css } from "styled-components"

export const SmallBlock = styled.div<{ color: string }>`
  height: 32px;
  width: 8px;
  border-radius: 8px;
  ${({ color }) => css`
    background-color: ${color};
  `}
`
