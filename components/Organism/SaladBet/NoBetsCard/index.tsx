import { Card } from "../../../Molecules"
import { CardBodyHeader } from "./CardBodyHeader"
import { CardBody } from "./CardBody"

export const NoBetsCard = () => {
  return (
    <Card width={"420px"} height={"216px"}>
      <CardBodyHeader />
      <CardBody />
    </Card>
  )
}
