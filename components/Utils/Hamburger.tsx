import styled, { css } from "styled-components"

/*!
 * Hamburgers
 *
 * @description Tasty CSS-animated hamburgers
 * @author Jonathan Suh @jonsuh
 * @license MIT
 * @site https://jonsuh.com/hamburgers
 * @link https://github.com/jonsuh/hamburgers
 */

const HamburgerContainer = styled.div<{ isActive: boolean }>`
  transition: 0.2s;
  transform: scale(0.75);

  &:hover {
    opacity: 0.7;

    ${({ isActive }) =>
      isActive &&
      css`
        opacity: 0.7;
      `}
  }
`

const HamburgerBox = styled.span`
  width: 40px;
  height: 24px;
  display: inline-block;
  position: relative;
`

const HamburgerInner = styled.span<{ isActive: boolean; color: string }>`
  display: block;
  top: 50%;
  margin-top: -2px;

  &,
  &:before,
  &:after {
    width: 40px;
    height: 4px;
    ${({ color }) => css`
      background-color: ${color};
    `}

    border-radius: 4px;
    position: absolute;
    transition-property: transform;
    transition-duration: 0.15s;
    transition-timing-function: ease;

    ${({ isActive, color }) =>
      isActive &&
      css`
        background-color: ${color};
      `}
  }

  &:before,
  &:after {
    content: "";
    display: block;
  }

  &:before {
    top: -10px;
    ${({ isActive }) =>
      isActive &&
      css`
        transform: translate3d(-8px, 0, 0) rotate(-45deg) scale(0.7, 1);
      `}
  }

  &:after {
    bottom: -10px;
    ${({ isActive }) =>
      isActive &&
      css`
        transform: translate3d(-8px, 0, 0) rotate(45deg) scale(0.7, 1);
      `}
  }
`

export const Hamburger = ({ isActive, color }: { isActive: boolean; color: string }) => {
  return (
    <HamburgerContainer isActive={isActive}>
      <HamburgerBox>
        <HamburgerInner isActive={isActive} color={color}></HamburgerInner>
      </HamburgerBox>
    </HamburgerContainer>
  )
}
