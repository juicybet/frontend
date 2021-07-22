import styled, { css } from "styled-components"

export const SmallBlock = styled.div<{ color: string }>`
  height: 2rem;
  width: 0.5rem;
  border-radius: 0.5rem;
  ${({ color }) => css`
    background-color: ${color};
  `}
`
