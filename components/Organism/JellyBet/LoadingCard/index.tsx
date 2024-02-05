import { Card } from "../../../Molecules"
import { CardBodyHeader } from "./CardBodyHeader"
import { CardBodyLower } from "./CardBodyLower"
import { CardBodyUper } from "./CardBodyUper"

export const LoadingCard = () => {
  return (
    <Card width={"420px"} height={"517px"}>
      <CardBodyHeader />
      <CardBodyUper />
      <CardBodyLower />
    </Card>
  )
}
