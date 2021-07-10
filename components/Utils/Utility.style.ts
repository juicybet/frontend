import styled from "styled-components"

export const BackgroundWrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  opacity: 0.05;
  background-image: url(/background-pattern.png);
  @media (min-width: 1400px) {
    background-image: url(/background-pattern_2x.png);
    background-size: 25rem 25rem;
  }
`

export const Container = styled.div`
  padding: 0 1.5rem;
  margin: 0 auto;
`

export const ContentWrapper = styled.div`
  margin-top: 6rem;
`

export const RectangleWrapper = styled.div`
  position: "absolute";
  left: 0;
`

export const Rectangle = styled.div`
  height: 4.5rem;
  width: 1rem;
  background-color: #ff624e;
  border-top-right-radius: 1rem;
  border-bottom-right-radius: 1rem;
`
