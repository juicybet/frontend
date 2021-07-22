import styled, { css } from "styled-components"

export const PrimaryCardWrapper = styled.div`
  width: 25rem;
  height: 37rem;
  background-color: var(--primary-white);
  box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.05);
  border-radius: 1.25rem;
  position: relative;
  overflow: hidden;
`
export const CardHeader = styled.span`
  font-style: normal;
  font-weight: bold;
  font-size: 1.125rem;
  color: var(--dark-gray);
  position: absolute;
  left: 5%;
  top: 3%;
`

const CardSection = css`
  position: absolute;
  width: 100%;
  border-top: 1px solid var(--border-gray);
`

export const TopCardSection = styled.div<{ height: string; top: string }>`
  ${CardSection}
  height: ${(props) => props.height};
  top: ${(props) => props.top};
`

export const BottomCardSection = styled.div<{ height: string; bottom: string }>`
  ${CardSection}
  height: ${(props) => props.height};
  bottom: ${(props) => props.bottom};
`

export const FullCardSection = styled.div<{ top: string }>`
  ${CardSection}
  top: ${(props) => props.top};
`

export const PrimaryCard = ({ children }: any) => {
  return <PrimaryCardWrapper>{children}</PrimaryCardWrapper>
}
