import styled from "styled-components"

export const Button = styled.button`
  width: 100%;
  height: 4rem;
  padding: 1rem;
  font-size: 1.25rem;
  line-height: 1rem;
  font-family: Quicksand;
  font-weight: bold;
  color: var(--primary-white);
  background: var(--primary-pink);
  border-width: 0;
  border-radius: 5rem;
`
export const ButtonWrapper = styled.div`
  width: 100%;
  position: absolute;
  bottom: 0;
  left: 0;
  padding: 1rem;
`

export const FullButton = ({ children }: any) => {
  return (
    <ButtonWrapper>
      <Button>{children}</Button>
    </ButtonWrapper>
  )
}
