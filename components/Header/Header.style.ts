import styled from "styled-components"

export const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 6rem;
`

export const Nav = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  display: block;
  width: 100%;
  background: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.08);
  z-index: 1;
  font-family: "Quicksand", sans-serif;
`
export const Toggle = styled.button`
  padding: 0;
  background: transparent;
  border: 0;
  border-radius: 3px;
  outline: 0;
  cursor: pointer;
`

export const Brand = styled.div`
  display: flex;
  align-items: center;
  justify-contents: center;
  font-size: 2rem;
  font-weight: 700;
  color: #ec133a;
`
