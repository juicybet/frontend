import { Button } from "../../../Atoms"
import { Slider } from "../../../Molecules"
import styled from "styled-components"
import { EtherFiatValue, Flex, EtherInput, Text } from "../../../Utils/Utility.style"
import { currentTheme } from "../../../../core/theme"
import { formatNumber } from "../../../../utils/Common"

export const CardBodyLower = ({ max, min, value, setValue, etherPrice }: any) => {
  return (
    <Flex flexDirection="column" alignItems="center">
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
        Next &raquo;
      </Button>
      <Text textAlign="center" fontSize={18} color={currentTheme().primary}>
        Close Window
      </Text>
    </Flex>
  )
}
