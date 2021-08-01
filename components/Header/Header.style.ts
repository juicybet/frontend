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
  height: 120px;
  width: 352px;
  line-height: 120px;
  cursor: pointer;
`

export const MenuButton = styled.button`
  padding: 8px 20px 0 28px;
  background: white;
  border: 0;
  outline: 0;
  cursor: pointer;
`
