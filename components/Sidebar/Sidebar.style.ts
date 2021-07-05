import styled, { css } from "styled-components"

type Prop = {
  open: Boolean
}

export const SidebarWrapper = styled.div<Prop>`
  position: fixed;
  top: 5.5rem;
  left: 0;
  height: 100vh;
  width: 15rem;
  padding-top: 1rem;
  overflow: auto;
  padding-bottom: 1.5rem;
  transition: all 0.3s;
  z-index: 2;
  font-size: 0.8rem;
  box-shadow: 2px 0 4px rgba(0, 0, 0, 0.08);
  font-family: "Quicksand", sans-serif;

  &::-webkit-scrollbar {
    width: 0;
  }
  transform: translateX(-100%);

  ${(props) =>
    props.open &&
    css`
      transform: translateX(0);
    `}
`
