import styled from "styled-components"

const RadioElementWrapper = styled.div`
  display: inline-block;
`
const LabelWrapper = styled.label`
  display: grid;
  grid-template-columns: -webkit-min-content auto;
  grid-template-columns: min-content auto;
  grid-gap: 0.5rem;
  cursor: pointer;
  position: relative;
`

const Label = styled.div`
  font-size: 1.3rem;
  font-weight: bold;
  line-height: 1.5rem;
  color: var(--light-gray);
`

const ReplacedInput = styled.span`
  display: inline-block;
  position: relative;
  border: 2px solid var(--secondary-gray);
  width: 1.6rem;
  height: 1.6rem;
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
    color: var(--primary-pink);
  }
`

const HiddenInput = styled.input`
  position: absolute;
  visibility: hidden;
  display: none;
  &:checked + ${ReplacedInput} {
    border: 2px solid var(--primary-pink);
    &::after {
      width: 1rem;
      height: 1rem;
      opacity: 1;
      left: 14%;
      top: 14%;
      background-color: var(--primary-pink);
    }
 
`

export const Radio = ({ name, children }: any) => (
  <RadioElementWrapper>
    <LabelWrapper>
      <HiddenInput name={name} type="radio" />
      <ReplacedInput />
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
  margin: 0 1rem;
`

export const PlacedBetRadio = ({ name, children }: any) => (
  <PlacedBetRadioWrapper>
    <Wrapper>
      <HiddenInput name={name} type="radio" />
      <ReplacedInput />
    </Wrapper>
    {children}
  </PlacedBetRadioWrapper>
)