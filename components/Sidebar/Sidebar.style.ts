import styled, { css } from "styled-components"
import { getThemeColor } from "../../data/theme"

const themeColor = getThemeColor()

export const SidebarWrapper = styled.div<{ isOpen: Boolean }>`
  position: fixed;
  top: calc(7.5rem + 1px);
  left: 0;
  width: 22rem;
  height: calc(100vh - 7.5rem);
  padding: 1rem 2.5rem 1rem 4rem;
  overflow: auto;

  transition: 0.2s;
  z-index: 2;
  box-shadow: 2px 0 4px rgba(0, 0, 0, 0.08);
  color: #7e7e7e;
  background: #ffffff;

  transform: translateX(-100%);

  ${({ isOpen }) =>
    isOpen &&
    css`
      transform: translateX(0);
    `}
`
export const MenuItem = styled.div<{ selected: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 2rem 0;
  cursor: pointer;

  font-size: 1.25rem;
  font-weight: 700;

  transition: 0.2s;

  &:first-child {
    margin-top: 2rem;
  }

  &:hover,
  &:focus {
    color: ${themeColor};
  }

  &:before {
    content: "";
    position: absolute;
    margin-left: -4.75rem;
    height: 4rem;
    width: 0.75rem;
    background-color: ${themeColor};
    border-top-right-radius: 0.625rem;
    border-bottom-right-radius: 0.625rem;

    transition: 0.2s;

    ${(props) =>
      props.selected &&
      css`
        margin-left: -4rem;
      `}
  }

  ${({ selected }) =>
    selected &&
    css`
      color: ${themeColor};
    `}
`

export const Submenu = styled.div<{ isOpen: Boolean }>`
  margin: 0;
  max-height: 0;
  overflow: hidden;

  transition: 0.3s;

  ${({ isOpen }) =>
    isOpen &&
    css`
      margin-bottom: 3rem;
      max-height: 200px;
    `}
`

export const SubmenuItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 1rem;
  cursor: pointer;

  font-size: 1.125rem;
  font-weight: 500;

  transition: 0.2s;

  &:hover,
  &:focus {
    color: ${themeColor};
  }
`
