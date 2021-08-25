import { Button } from "../../../Atoms"
import { EtherFiatValue, Flex, EtherInput } from "../../../Utils/Utility.style"
import { currentTheme } from "../../../../core/theme"
import { formatNumber } from "../../../../utils/Common"
import { Slider } from "../../../Molecules"

export const CardBodyLower = ({ min, max, value, setValue, etherPrice }: any) => {
  return (
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
      <Button height={"56px"} px={16} py={0}>
        Create a bet
      </Button>
    </Flex>
  )
}
