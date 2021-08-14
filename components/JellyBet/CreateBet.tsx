import { useState } from "react"
import { Button } from "../Button"
import { Radio } from "../Radio/Radio"
import { Slider } from "../Slider/Slider"
import { CardHeader, Card } from "../Card/Card"
import styled from "styled-components"
import { EtherFiatValue, FlexWrapperCentered, Flex, EtherInput, Text, Box } from "../Utils/Utility.style"
import { currentTheme } from "../../core/theme"
import { formatNumber } from "../../utils/Common"

export const RadioButtonWrapper = styled(FlexWrapperCentered)`
  justify-content: space-between;
  margin: 32px;
  width: 100%;
`

export const CreateBet = () => {
  const min = "0.01"
  const max = "10"
  const [value, setValue] = useState("1.00000000")
  const etherPrice = 2234.45

  return (
    <Card width={"420px"} height={"609px"}>
      <CardHeader>
        <Text textAlign="left" fontSize={18} color={"var(--dark-gray)"}>
          Bet which fruit will turn into jelly!
        </Text>
      </CardHeader>
      <Box borderBottom="1px solid var(--border-gray)">
        <Flex alignItems="center" justifyContent="center" flexDirection="column" mx={4} my={2}>
          {/* to be fixed properly */}
          <div className="flexWrapper">
            <div className="elementWrapper">
              <video
                src="/videos/watermelon/idle_1.webm"
                width="300"
                height="200"
                autoPlay
                loop
                className="videoElement"
              ></video>
            </div>
            <div className="elementWrapper">
              <video
                src="/videos/strawberry/idle_1.webm"
                width="300"
                height="200"
                autoPlay
                loop
                className="videoElement"
              ></video>
            </div>
          </div>
          <RadioButtonWrapper>
            <Radio name="bet">Watermelon</Radio>
            <Radio name="bet">Strawberry</Radio>
          </RadioButtonWrapper>
        </Flex>
      </Box>
      <Flex flexDirection="column">
        <Slider min={+min} max={+max} value={+value} setValue={(v) => setValue((+v).toFixed(8))} />
        <Flex flexDirection="column">
          <EtherInput
            min={min}
            max={max}
            value={value}
            onChange={(e) => setValue(Math.min(+max, +e.target.value).toString())}
            focusColor={currentTheme().primary}
          ></EtherInput>
          <EtherFiatValue>~${formatNumber(+value * etherPrice, 2)}</EtherFiatValue>
        </Flex>
      </Flex>
      <Button height={"56px"} px={16} py={0}>
        Create a bet
      </Button>
    </Card>
  )
}
