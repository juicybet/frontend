import styled from "styled-components"

export const Button = styled.button<{ color: string }>`
  width: 100%;
  height: 64px;
  padding: 16px;
  font-size: 20px;
  line-height: 16px;
  font-family: Quicksand;
  font-weight: bold;
  color: var(--primary-white);
  background: ${(props) => props.color};
  border-width: 0;
  border-radius: 80px;
`

export const FullButtonWrapper = styled.div`
  width: 100%;
  position: absolute;
  bottom: 0;
  left: 0;
  padding: 16px;
`

export const FullButton = ({ children, type }: any) => {
  return (
    <FullButtonWrapper>
      {type === "donut" && <Button color={"var(--primary-purple)"}>{children}</Button>}
      {type === "jelly" && <Button color={"var(--primary-pink)"}>{children}</Button>}
    </FullButtonWrapper>
  )
}
