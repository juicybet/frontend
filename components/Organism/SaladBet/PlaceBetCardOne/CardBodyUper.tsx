import { RadioCarousel } from "../../../Molecules"
import styled from "styled-components"
import { Flex, Text, Box } from "../../../Utils/Utility.style"

const CarouselWrapper = styled(Flex)`
  overflow-x: auto;
  white-space: nowrap;
  align-items: center;
  justify-content: space-between;
  padding-top: 1rem;
  overflow-x: auto;
  white-space: wrap;
  -ms-overflow-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
`

export const CardBodyUper = () => {
  return (
    <Box borderBottom="1px solid var(--border-gray)">
      <CarouselWrapper>
        <RadioCarousel name="bet" img="/images/vegies/broccoli.png" alt="Bet for Broccoli" width="60" height="100">
          <Text fontSize={"18px"}>Broccoli</Text>
        </RadioCarousel>
        <RadioCarousel name="bet" img="/images/vegies/carrot.png" alt="Bet for Carrot" width="60" height="100">
          <Text fontSize={"18px"}>Carrot</Text>
        </RadioCarousel>
        <RadioCarousel name="bet" img="/images/vegies/corn.png" alt="Bet for Corn" width="60" height="100">
          <Text fontSize={"18px"}>Corn</Text>
        </RadioCarousel>
        <RadioCarousel name="bet" img="/images/vegies/cucumber.png" alt="Bet for Cucumber" width="60" height="100">
          <Text fontSize={"18px"}>Cucumber</Text>
        </RadioCarousel>
        <RadioCarousel name="bet" img="/images/vegies/onion.png" alt="Bet for Onion" width="60" height="100">
          <Text fontSize={"18px"}>Onion</Text>
        </RadioCarousel>
        <RadioCarousel name="bet" img="/images/vegies/pepper.png" alt="Bet for Pepper" width="60" height="100">
          <Text fontSize={"18px"}>Pepper</Text>
        </RadioCarousel>
      </CarouselWrapper>
      <Flex justifyContent="center" py={3}>
        <Text fontSize={12} color={"var(--light-gray)"}>
          * In each salad, Five veggies are picked, and one is thrown away.
        </Text>
      </Flex>
    </Box>
  )
}
