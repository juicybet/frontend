import { useState } from "react"
import { Card } from "../../../Molecules"
import { CardBodyHeader } from "./CardBodyHeader"
import { CardBodyLower } from "./CardBodyLower"
import { CardBodyUper } from "./CardBodyUper"

export const PlaceBetCardOne = () => {
  const min = "0.01"
  const max = "10"
  const [value, setValue] = useState("1.00000000")
  const etherPrice = 2234.45

  return (
    <Card width={"420px"} height={"704px"}>
      <CardBodyHeader />
      <CardBodyUper />
      <CardBodyLower min={min} max={max} value={value} setValue={setValue} etherPrice={etherPrice} />
    </Card>
  )
}
