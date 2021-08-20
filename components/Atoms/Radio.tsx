import styled from "styled-components"
import { currentTheme } from "../../core/theme"

const Label = styled.label`
  display: grid;
  grid-template-columns: -webkit-min-content auto;
  grid-template-columns: min-content auto;
  grid-gap: 8px;
  cursor: pointer;
  position: relative;
  font-weight: 600;
  line-height: 30px;
  color: var(--light-gray);
`

const ReplacedInput = styled.span<{ color?: string }>`
  display: inline-block;
  position: relative;
  border: 2px solid var(--secondary-gray);
  width: 30px;
  height: 30px;
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
    margin: 50%;
    transform: translate(-50%, -50%);
    position: absolute;
    transition: all 0.2s;
  }
`

const HiddenInput = styled.input.attrs({
  type: "radio",
})<{ color?: string }>`
  position: absolute;
  visibility: hidden;
  display: none;

  &:checked ~ span {
    color: ${(props) => props.color};
  }

  &:checked + ${ReplacedInput} {
    border: 2px solid ${(props) => props.color};
    &::after {
      width: 16px;
      height: 16px;
      opacity: 1;
      background-color: ${(props) => props.color};
    }
`

export type RadioProps = {
  name: string
  children: JSX.Element | string
  selected?: boolean
  setSelected?(value: boolean): void
}

export const Radio = ({ name, children, selected = false, setSelected = () => {} }: RadioProps) => (
  <Label>
    <HiddenInput
      name={name}
      color={currentTheme().primary}
      onChange={(e) => setSelected(e.target.checked)}
      checked={selected}
    />
    <ReplacedInput color={currentTheme().primary} />
    <span>{children}</span>
  </Label>
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
