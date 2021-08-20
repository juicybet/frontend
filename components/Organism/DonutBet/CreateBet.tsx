import { useState } from "react"
import styled from "styled-components"
import { EtherFiatValue, Flex, EtherInput, FlexRow, Text, Box } from "../../Utils/Utility.style"
import { currentTheme } from "../../../core/theme"
import { formatNumber } from "../../../utils/Common"
import { Button } from "../../Atoms"
import { RadioCarousel, Slider, CardHeader, Card } from "../../Molecules"

const CarouselWrapper = styled(FlexRow)`
  overflow-x: auto;
  white-space: nowrap;
  align-items: center;
  justify-content: space-between;
  overflow-x: auto;
  white-space: wrap;
  -ms-overflow-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
`

export const CreateBet = () => {
  const min = "0.01"
  const max = "10"
  const [value, setValue] = useState("1.00000000")
  const etherPrice = 2234.45

  const numberOfBets = 16
  const [allBets, setAllBets] = useState(
    new Array(numberOfBets).fill("").map((_, i) => ({
      bet: i.toString(numberOfBets),
      selected: false,
    }))
  )

  const setSelected = (b: string, value: boolean) => {
    setAllBets(allBets.map(({ bet }) => ({ bet, selected: bet === b ? value : false })))
  }

  return (
    <Card width={"420px"} height={"609px"}>
      <CardHeader>
        <Text textAlign="left" fontSize={18} color={"var(--dark-gray)"}>
          Bet what the last digit of the current block’s hash will be to win a 15x reward!
        </Text>
      </CardHeader>
      <Box borderBottom="1px solid var(--border-gray)" py={24}>
        <CarouselWrapper>
          {allBets.map(({ bet, selected }) => (
            <RadioCarousel
              name="bet"
              img={`/images/donuts/${bet}.png`}
              alt={`Donut ${bet}`}
              width="100"
              height="100"
              key={bet}
              selected={selected}
              setSelected={(value) => setSelected(bet, value)}
            >
              <Text fontSize={32}>{bet.toUpperCase()}</Text>
            </RadioCarousel>
          ))}
        </CarouselWrapper>
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
