import styled, { css } from "styled-components"

type Prop = {
  open: Boolean
}

export const SidebarWrapper = styled.div<Prop>`
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 6.1rem;
  left: 0;
  width: 15rem;
  height: calc(100vh - 6rem);
  padding: 1rem 1rem 1rem 2rem;
  overflow: auto;
  padding-bottom: 1.5rem;
  transition: all 0.3s;
  z-index: 2;
  font-size: 0.8rem;
  box-shadow: 2px 0 4px rgba(0, 0, 0, 0.08);
  font-family: "Quicksand", sans-serif;
  color: #7e7e7e;
  background: #fff;
  scrollbar-width: none;

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
export const MenuTitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  // margin-top: 2rem;
  cursor: pointer;
  &:hover {
  color: #FF624E;
  &:focus  {
  color: #FF624E;
`
export const MenuSubTitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 1.5rem;
  cursor: pointer;
  &:hover {
  color: #FF624E;
  &:focus  {
  color: #FF624E;
`
export const MenuTitle = styled.span`
  font-size: 1.25rem;
  font-weight: 700;
`
export const MenuSubTitle = styled.span`
  font-size: 1.125rem;
  font-weight: 500;
`
export const Listwrapper = styled.div`
  display: "flex";
  align-items: left;
  flex-direction: "column";
  justify-content: "center";
`
