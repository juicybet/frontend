import { Card } from "../../../Molecules"
import { CardBodyHeader } from "./CardBodyHeader"
import { CardBodyLower } from "./CardBodyLower"
import { CardBodyUper } from "./CardBodyUper"

export const WinningCard = () => {
  return (
    <Card width={"420px"} height={"683px"}>
      <CardBodyHeader />
      <CardBodyUper />
      <CardBodyLower />
    </Card>
  )
}
