import styled from "styled-components"

export const PrimaryCardWrapper = styled.div`
  width: 25rem;
  height: 37rem;
  background-color: var(--primary-white);
  box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.05);
  border-radius: 1.25rem;
  position: relative;
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

export const PrimaryCard = ({ children }: any) => {
  return <PrimaryCardWrapper>{children}</PrimaryCardWrapper>
}
