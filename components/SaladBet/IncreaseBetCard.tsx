import { useState } from "react"
import { FullButton, FullButtonSecondary } from "../Button"
import { Slider } from "../Slider/Slider"
import { CardHeader, BottomCardSection, PrimaryCard, TopCardSection } from "../Card/Card"
import styled from "styled-components"
import {
  EtherFiatValue,
  FlexWrapperCentered,
  Flex,
  EtherInput,
  FlexRow,
  Text,
  SpanInfoPrimary,
  SpanInfoSecondary,
} from "../Utils/Utility.style"
import { currentTheme } from "../../state/theme"
import { formatNumber } from "../../utils"
import Image from "next/image"

export const RadioButtonWrapper = styled(FlexWrapperCentered)`
  justify-content: space-between;
  margin: 32px;
  width: 100%;
`

const CarouselWrapper = styled(FlexRow)`
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

export const IncreaseBetCard = () => {
  const min = "0.01"
  const max = "10"
  const [value, setValue] = useState("1.00000000")
  const etherPrice = 2234.45

  return (
    <PrimaryCard width={"420px"} height={"671px"}>
      <CardHeader>Bet which veggie* goes into the salad!</CardHeader>
      <TopCardSection height={"200px"} top={"9%"}>
        <Flex alignItems="center">
          <Flex width={"40%"}>
            <Flex
              flexDirection="column"
              size={[92, 192]}
              p={2}
              justifyContent="space-between"
              borderRight="1px solid var(--border-gray);"
            >
              <Flex alignItems="center" justifyContent="center">
                <Image src="/images/vegies/pepper.png" width={60} height={100} alt="Pepper " />
              </Flex>
              <Flex alignItems="center" justifyContent="center">
                <Image src="/images/icons/lost.svg" width="40" height="40" alt="" />
              </Flex>
            </Flex>
            <Flex
              flexDirection="column"
              size={[92, 191]}
              p={2}
              justifyContent="space-between"
              backgroundImage="url('images/Rectangle.png')"
              backgroundSize="cover"
              backgroundPosition="center"
              backgroundRepeat="no-repeat"
              borderRight="1px solid var(--border-gray);"
            >
              <Flex alignItems="center" justifyContent="center">
                <Image src="/images/vegies/broccoli.png" width={60} height={100} alt="Brocolli " />
              </Flex>
              <Flex alignItems="center" justifyContent="center">
                <Image src="/images/icons/won.svg" width="40" height="40" alt="" />
              </Flex>
            </Flex>
          </Flex>
          <Flex width={"70%"} flexDirection="column" py={1} px={3} justifyContent={"space-between"} height={160}>
            <Text color={"var(--light-gray)"} fontSize={18}>
              Your current bet:
              <Flex flexDirection="column" width={"50%"}>
                <SpanInfoPrimary>
                  0.123021
                  <Image src="/images/icons/coins/bnb.svg" width="20" height="20" alt="" />
                </SpanInfoPrimary>
                <SpanInfoSecondary>~ $3.67 </SpanInfoSecondary>
              </Flex>
            </Text>
            <Text color={"var(--light-gray)"} fontSize={18}>
              New bet amount:
              <Flex flexDirection="column" width={"50%"}>
                <SpanInfoPrimary>
                  0.123021
                  <Image src="/images/icons/coins/bnb.svg" width="20" height="20" alt="" />
                </SpanInfoPrimary>
                <SpanInfoSecondary>~ $3.67 </SpanInfoSecondary>
              </Flex>
            </Text>
          </Flex>
        </Flex>
      </TopCardSection>
      <BottomCardSection height={"385px"} bottom={"5%"}>
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
        <Flex justifyContent="center" px={5}>
          <Text textAlign="center" fontSize={14} color={"var(--light-gray)"}>
            ** Bet more than the highest better to get a chance to win the jackpot!
          </Text>
        </Flex>
        {/* size props to be added to the button  */}
        <FullButtonSecondary>{`Next >>`}</FullButtonSecondary>
        <SpanInfoPrimary>Close Window</SpanInfoPrimary>
      </BottomCardSection>
    </PrimaryCard>
  )
}
