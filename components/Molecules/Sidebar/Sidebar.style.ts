import styled, { css } from "styled-components"

export const SidebarWrapper = styled.div<{ isOpen: Boolean }>`
  position: fixed;
  top: 121px;
  left: 0;
  width: 352px;
  height: calc(100vh - 120px);
  padding: 16px 40px 16px 64px;
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
export const MenuItem = styled.div<{ selected: boolean; color: string }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 32px 0;
  cursor: pointer;

  font-size: 20px;
  font-weight: 700;

  transition: 0.2s;

  &:first-child {
    margin-top: 32px;
  }

  &:hover,
  &:focus {
    ${({ color }) => css`
      color: ${color};
    `}
  }

  &:before {
    content: "";
    position: absolute;
    margin-left: -76px;
    height: 64px;
    width: 12px;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;

    transition: 0.2s;

    ${({ color }) => css`
      background-color: ${color};
    `}

    ${({ selected }) =>
      selected &&
      css`
        margin-left: -64px;
      `}
  }

  ${({ selected, color }) =>
    selected &&
    css`
      color: ${color};
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
      margin-bottom: 48px;
      max-height: 200px;
    `}
`

export const SubmenuItem = styled.div<{ color: string }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 16px;
  cursor: pointer;

  font-weight: 500;

  transition: 0.2s;

  &:hover,
  &:focus {
    ${({ color }) => css`
      color: ${color};
    `}
  }
`
