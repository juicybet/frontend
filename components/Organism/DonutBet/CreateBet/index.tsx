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
      <CardBodyHeader />
      <CardBodyUper allBets={allBets} setSelected={setSelected} />
      <CardBodyLower min={min} max={max} value={value} setValue={setValue} etherPrice={etherPrice} />
    </Card>
  )
}
