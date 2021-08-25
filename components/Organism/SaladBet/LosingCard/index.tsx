import { Card } from "../../../Molecules"
import { CardBodyHeader } from "./CardBodyHeader"
import { CardBodyUper } from "./CardBodyUper"
import { CardBodyLower } from "./CardBodyLower"

export const LosingCard = () => {
  return (
    <Card width={"420px"} height={"575px"}>
      <CardBodyHeader />
      <CardBodyUper />
      <CardBodyLower />
    </Card>
  )
}
