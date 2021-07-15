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

const Label = styled.span`
  font-size: 1.3rem;
  font-weight: bold;
  line-height: 1.5rem;
  color: #929292;
`

const ReplacedInput = styled.span`
  display: inline-block;
  position: relative;
  border: 2px solid #eaeaea;
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
    background-color: #929292;
    opacity: 0;
    left: 50%;
    top: 50%;
    position: absolute;
    transition: all 180ms;
  }
  &:checked + ${Label} {
    color: #ff624e;
  }
`

const HiddenInput = styled.input`
  position: absolute;
  visibility: hidden;
  display: none;
  &:checked + ${ReplacedInput} {
    border: 2px solid #ff624e;
    &::after {
      width: 1rem;
      height: 1rem;
      opacity: 1;
      left: 14%;
      top: 14%;
      background-color: #ff624e;
    }
 
`

const Radio = ({ name, children }: any) => (
  <RadioElementWrapper>
    <LabelWrapper>
      <HiddenInput name={name} type="radio" />
      <ReplacedInput />
      <Label>{children}</Label>
    </LabelWrapper>
  </RadioElementWrapper>
)

export default Radio
