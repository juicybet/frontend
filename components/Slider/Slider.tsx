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

const RangeInput = styled.input<{ color: string }>`
  -webkit-appearance: none;
  height: 1rem;
  border-radius: 0.6rem;
  background: ${(props) => props.color};
  width: 65%;
  &::after {
    content: "";
    display: block;
    width: 1rem;
    height: 1rem;
    border-top-right-radius: 50%;
    border-bottom-right-radius: 50%;
    background-color: var(--secondary-gray);
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
    background: ${(props) => props.color};
    cursor: pointer;
    box-shadow: ${makeLongShadow("var(--secondary-gray)", "-8px")};
    z-index: 10;
  }

  &::-moz-range-thumb {
    width: 2rem;
    height: 2rem;
    border: 2px solid var(--primary-white);
    border-radius: 50%;
    background: ${(props) => props.color};
    cursor: pointer;
  }
`

export const Slider = (props?: any) => {
  if (props.type === "donut") {
    return <RangeInput type="range" step="1" min="25" color={"var(--primary-purple)"} />
  }
  return <RangeInput type="range" step="1" min="25" color={"var(--primary-pink)"} />
}
