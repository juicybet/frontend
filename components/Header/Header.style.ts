import styled from "styled-components"

export const Header = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  display: block;
  width: 100%;
  background: #ffffff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.08);
  z-index: 1;
`

export const LogoContainer = styled.div`
  display: flex;
  height: 7.5rem;
  width: 22rem;
  line-height: 7.5rem;
  cursor: pointer;
`

export const MenuButton = styled.button`
  padding: 0.5rem 1.25rem 0 1.75rem;
  background: white;
  border: 0;
  outline: 0;
  cursor: pointer;
`
