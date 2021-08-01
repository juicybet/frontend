import React from "react"
import { useState } from "react"
import styled, { css } from "styled-components"
import { currentTheme } from "../../core/theme"

const RangeInput = styled.input.attrs({
  type: "range",
})<{ color: string }>`
  -webkit-appearance: none;
  height: 16px;
  border-radius: 10px;
  background: transparent;
  width: 256px;
  z-index: 1;

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    position: relative;
    appearance: none;
    width: 30px;
    height: 30px;
    border: 2px solid var(--primary-white);
    border-radius: 50%;
    background: ${(props) => props.color};
    cursor: pointer;
  }

  &::-moz-range-thumb {
    box-sizing: border-box;
    position: relative;
    width: 30px;
    height: 30px;
    border: 2px solid var(--primary-white);
    border-radius: 50%;
    background: ${(props) => props.color};
    cursor: pointer;
  }
`

const RangeInputTrack = styled.div<{ value: number }>`
  position: absolute;
  height: 16px;
  width: 256px;
  border-radius: 10px;
  background: var(--secondary-gray);

  &:before {
    content: "";
    position: absolute;
    border-radius: 10px;
    display: block;
    height: 16px;
    ${(props) => css`
      width: ${Math.max(30, (props.value * 256) / 100) + "px"};
      background: ${props.color};
    `};
  }
`

const IconMinus = styled.div`
  position: absolute;
  width: 10px;
  height: 2px;
  background: white;
  z-index: 1;
  border-radius: 10px;
  top: 50%;
  left: 4%;
  transform: translate(-50%, -50%);
`

const IconPlus = styled(IconMinus)`
  left: 96%;
  &:before {
    content: "";
    position: absolute;
    z-index: 1;
    margin-top: -4px;
    margin-left: 4px;
    border-radius: 10px;
    height: 10px;
    width: 2px;
    background: white;
  }
`

export const Slider = () => {
  const [value, setValue] = useState(1)
  return (
    <>
      <RangeInputTrack value={value} color={currentTheme().primary}>
        <IconMinus />
        <IconPlus />
      </RangeInputTrack>
      <RangeInput
        step="1"
        min="1"
        max="100"
        color={currentTheme().primary}
        value={value}
        onChange={(e) => setValue(+e.target.value)}
      />
    </>
  )
}
