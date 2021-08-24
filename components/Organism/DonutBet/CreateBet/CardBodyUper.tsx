import styled from "styled-components"
import { RadioCarousel } from "../../../Molecules"
import { Box, FlexRow, Text } from "../../../Utils/Utility.style"

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
export const CardBodyUper = ({ allBets, setSelected }: any) => {
  return (
    <Box borderBottom="1px solid var(--border-gray)" py={24}>
      <CarouselWrapper>
        {allBets.map(({ bet, selected }: any) => (
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
  )
}
