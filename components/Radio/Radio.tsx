import styled from "styled-components"

const RadioElementWrapper = styled.div`
  display: inline-block;
`
const LabelWrapper = styled.label`
  display: grid;
  grid-template-columns: -webkit-min-content auto;
  grid-template-columns: min-content auto;
  grid-gap: 8px;
  cursor: pointer;
  position: relative;
`

const Label = styled.div`
  font-weight: 600;
  line-height: 24px;
  color: var(--light-gray);
`

const ReplacedInput = styled.span<{ color?: string }>`
  display: inline-block;
  position: relative;
  border: 2px solid var(--secondary-gray);
  width: 24px;
  height: 24px;
  left: 0;
  border-radius: 50%;
  vertical-align: middle;
  &::after {
    content: "";
    display: block;
    width: 0;
    height: 0;
    border-radius: 50%;
    background-color: var(--light-gray);
    opacity: 0;
    left: 50%;
    top: 50%;
    position: absolute;
    transition: all 180ms;
  }
  &:checked + ${Label} {
    color: ${(props) => props.color};
  }
`

const HiddenInput = styled.input<{ color?: string }>`
  position: absolute;
  visibility: hidden;
  display: none;
  &:checked + ${ReplacedInput} {
    border: 2px solid ${(props) => props.color};
    &::after {
      width: 16px;
      height: 16px;
      opacity: 1;
      left: 14%;
      top: 14%;
      background-color: ${(props) => props.color};
    }
`

export const Radio = ({ name, children, variant }: any) => (
  <RadioElementWrapper>
    <LabelWrapper>
      {variant === "donut" && (
        <>
          <HiddenInput name={name} type="radio" color="var(--primary-purple)" />
          <ReplacedInput color="var(--primary-purple)" />
        </>
      )}
      {variant === "jelly" && (
        <>
          <HiddenInput name={name} type="radio" color="var(--primary-pink)" />
          <ReplacedInput color="var(--primary-pink)" />
        </>
      )}
      <Label>{children}</Label>
    </LabelWrapper>
  </RadioElementWrapper>
)

const PlacedBetRadioWrapper = styled.div`
  display: grid;
  grid-template-columns: -webkit-min-content auto;
  grid-template-columns: min-content auto;
  cursor: pointer;
  position: relative;
`

const Wrapper = styled.label`
  display: flex;
  align-items: center;
  margin: 0 16px;
`

export const PlacedBetRadio = ({ name, children }: any) => (
  <PlacedBetRadioWrapper>
    <Wrapper>
      <HiddenInput name={name} type="radio" color="var(--primary-pink)" />
      <ReplacedInput color="var(--primary-pink)" />
    </Wrapper>
    {children}
  </PlacedBetRadioWrapper>
)
