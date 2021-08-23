import React from "react"
import styled, { css } from "styled-components"
import { currentTheme } from "../../core/theme"
import { Flex } from "../Utils/Utility.style"

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
      width: ${Math.max(30, props.value * 256) + "px"};
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

type SliderProps = {
  min: number
  max: number
  value: number
  setValue(value: number): void
}

const Pill = styled.button<{ hoverColor: string }>`
  padding: 4px 12px;
  border-radius: 16px;
  font-size: 14px;
  color: var(--light-gray);
  background: var(--primary-white);
  border: 2px solid var(--secondary-gray);
  transition: 0.2s;
  cursor: pointer;

  &:hover {
    ${({ hoverColor }) => css`
      color: ${hoverColor};
      border-color: ${hoverColor};
    `}}
  }
`

export const Slider = ({ min, max, value, setValue }: SliderProps) => {
  return (
    <>
      <Flex alignItems="center" justifyContent="space-between" my={4} width={4} mx="auto">
        {["25%", "50%", "75%", "Max"].map((item, index) => (
          <Pill key={index} hoverColor={currentTheme().primary} onClick={() => setValue(((index + 1) / 4) * max)}>
            {item}
          </Pill>
        ))}
      </Flex>
      <Flex alignItems="center" justifyContent="center" mx="auto">
        <RangeInputTrack value={(value - min) / (max - min)} color={currentTheme().primary}>
          <IconMinus />
          <IconPlus />
        </RangeInputTrack>
        <RangeInput
          step={(max - min) / 100}
          min={min}
          max={max}
          color={currentTheme().primary}
          value={value}
          onChange={(e) => setValue(+e.target.value)}
        />
      </Flex>
    </>
  )
}
