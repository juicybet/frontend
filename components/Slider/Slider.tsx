import React from "react"
import styled from "styled-components"

const makeLongShadow = (color: any, size: any) => {
  let i = 1
  let shadow = `${i}px 0 0 ${size} ${color}`

  for (; i < 250; i++) {
    shadow = `${shadow}, ${i}px 0 0 ${size} ${color}`
  }
  return shadow
}

const RangeInput = styled.input`
  -webkit-appearance: none;
  height: 1rem;
  border-radius: 0.6rem;
  background: #ff624e;
  width: 65%;
  &::after {
    content: "";
    display: block;
    width: 1rem;
    height: 1rem;
    border-top-right-radius: 50%;
    border-bottom-right-radius: 50%;
    background-color: #eaeaea;
    position: absolute;
    right: 14%;
  }

  &::-webkit-slider-runnable-track {
    overflow: hidden;
  }

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 2rem;
    height: 2rem;
    border: 2px solid #ffffff;
    border-radius: 50%;
    background: #ff624e;
    cursor: pointer;
    box-shadow: ${makeLongShadow("#EAEAEA", "-8px")};
    z-index: 10;
  }

  &::-moz-range-thumb {
    width: 2rem;
    height: 2rem;
    border: 2px solid #ffffff;
    border-radius: 50%;
    background: #ff624e;
    cursor: pointer;
  }
`

export const Slider = () => {
  return <RangeInput type="range" step="25" min="25" />
}
