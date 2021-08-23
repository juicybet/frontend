import { useState } from "react"
import { Button } from "../../Atoms"
import { Slider } from "../../Molecules/Slider"
import { CardHeader, Card, PopUpCardVegies } from "../../Molecules"
import { EtherFiatValue, Flex, EtherInput, Text, SpanInfoPrimary, SpanInfoSecondary } from "../../Utils/Utility.style"
import { currentTheme } from "../../../core/theme"
import { formatNumber } from "../../../utils/Common"
import Image from "next/image"

export const IncreaseBetCard = () => {
  const min = "0.01"
  const max = "10"
  const [value, setValue] = useState("1.00000000")
  const etherPrice = 2234.45

  const CardBodyHeader = () => {
    return (
      <CardHeader>
        <Text textAlign="left" fontSize={18} color={"var(--dark-gray)"}>
          Increase your bet
        </Text>
        <Image src="images/icons/close.svg" width="15" height="15" alt="close" />
      </CardHeader>
    )
  }

  const CardBodyUper = () => {
    return (
      <Flex alignItems="center" border="1px solid var(--border-gray)">
        <Flex width={"40%"}>
          <PopUpCardVegies>
            <Image src="/images/vegies/pepper.png" width={50} height={100} alt="Pepper " />
            <Image src="/images/icons/lost.svg" width="40" height="40" alt="" />
          </PopUpCardVegies>
          <PopUpCardVegies backgroundImage="url('images/Rectangle.png')" backgroundSize="cover">
            <Image src="/images/vegies/broccoli.png" width={60} height={100} alt="Brocolli " />
            <Image src="/images/icons/won.svg" width="40" height="40" alt="" />
          </PopUpCardVegies>
        </Flex>
        <Flex width={"60%"} flexDirection="column" py={1} px={3} justifyContent={"space-between"} height={160}>
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
    )
  }

  const CardBodyLower = () => {
    return (
      <Flex flexDirection="column">
        <Slider min={+min} max={+max} value={+value} setValue={(v) => setValue((+v).toFixed(8))} />
        <Flex flexDirection="column" width="100%">
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
        <Button height={"64px"} px={16} py={3}>
          Place a bet
        </Button>
        <Text textAlign="center" fontSize={18} color={currentTheme().primary}>
          Close Window
        </Text>
      </Flex>
    )
  }

  return (
    <Card width={"420px"} height={"671px"}>
      <CardBodyHeader />
      <CardBodyUper />
      <CardBodyLower />
    </Card>
  )
}
