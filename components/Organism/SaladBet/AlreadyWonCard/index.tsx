import { CardBodyHeader } from "./CardBodyHeader"
import { CardBodyUper } from "./CardBodyUper"
import { CardBodyLower } from "./CardBodyLower"
import { Card } from "../../../Molecules"

export const AlreadyWonCard = () => {
  return (
    <Card width={"420px"} height={"657px"}>
      <CardBodyHeader />
      <CardBodyUper />
      <CardBodyLower />
    </Card>
  )
}
