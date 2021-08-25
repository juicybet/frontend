import { Card } from "../../../Molecules"
import { CardBodyHeader } from "./CardBodyHeader"
import { CardBodyLower } from "./CardBodyLower"
import { CardBodyUper } from "./CardBodyUper"

export const PlaceBet = () => {
  const data = {
    datasets: [
      {
        label: "# of Votes",
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: ["#ff6b51", "#d1b0ee", "#fed519", "#46cb8e", "#f7941e", "#b1e772"],
        cutout: 90,
      },
    ],
  }

  const options = {
    maintainAspectRatio: true,
    responsive: true,
  }

  return (
    <Card width={[420, 830]} height={["auto", 589]}>
      <CardBodyHeader />
      <CardBodyUper data={data} options={options} />
      <CardBodyLower />
    </Card>
  )
}
