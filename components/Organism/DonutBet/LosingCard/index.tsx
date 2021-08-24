import { Card } from "../../../Molecules"
import { CardBodyHeader } from "./CardBodyHeader"
import { CardBodyLower } from "./CardBodyLower"
import { CardBodyUper } from "./CardBodyUper"

export const LosingCard = () => {
  return (
    <Card width={"420px"} height={"594px"}>
      <CardBodyHeader />
      <CardBodyUper />
      <CardBodyLower />
    </Card>
  )
}
