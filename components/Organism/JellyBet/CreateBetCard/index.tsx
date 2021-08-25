import { useState } from "react"
import { Card } from "../../../Molecules"

import { CardBodyHeader } from "./CardBodyHeader"
import { CardBodyUper } from "./CardBodyUper"
import { CardBodyLower } from "./CardBodyLower"

export const CreateBet = () => {
  const min = "0.01"
  const max = "10"
  const [value, setValue] = useState("1.00000000")
  const etherPrice = 2234.45

  return (
    <Card width={"420px"} height={"609px"}>
      <CardBodyHeader />
      <CardBodyUper />
      <CardBodyLower min={min} max={max} value={value} setValue={setValue} etherPrice={etherPrice} />
    </Card>
  )
}
