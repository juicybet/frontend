import { CardBodyHeader } from "./CardBodyHeader"
import { CardBodyLower } from "./CardBodyLower"
import { CardBodyUper } from "./CardBodyUper"
import { Card } from "../../../Molecules"

export const PlaceBetCardTwo = () => {
  return (
    <Card width={"420px"} height={"649px"}>
      <CardBodyHeader />
      <CardBodyUper />
      <CardBodyLower />
    </Card>
  )
}
