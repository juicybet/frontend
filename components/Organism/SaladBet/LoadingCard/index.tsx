import { Card } from "../../../Molecules"
import { CardBody } from "./CardBody"
import { CardBodyHeader } from "./CardBodyHeader"

export const LoadingCard = () => {
  return (
    <Card width={"420px"} height={"216px"}>
      <CardBodyHeader />
      <CardBody />
    </Card>
  )
}
