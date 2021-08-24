import { Card } from "../../../Molecules"

import { CardBodyHeader } from "./CardBodyHeader"
import { CardBodyUper } from "./CardBodyUper"
import { CardBodyLower } from "./CardBodyLower"

export const LoadingCard = () => {
  return (
    <Card width={"420px"} height={"448px"}>
      <CardBodyHeader />
      <CardBodyUper />
      <CardBodyLower />
    </Card>
  )
}
