import Image from "next/image"
import { useState } from "react"
import { FullButton } from "../Button"
import { CardHeader, BottomCardSection, PrimaryCard, TopCardSection } from "../Card/Card"
import styled from "styled-components"
import { EtherFiatValue, FlexWrapperCentered, Flex, EtherInput } from "../Utils/Utility.style"
import { currentTheme } from "../../core/theme"
import { formatNumber } from "../../utils/Common"
import { Doughnut } from "react-chartjs-2"

export const RadioButtonWrapper = styled(FlexWrapperCentered)`
  justify-content: space-between;
  margin: 32px;
  width: 100%;
`

export const IncreaseBet = () => {
  const min = "0.01"
  const max = "10"
  const [value, setValue] = useState("1.00000000")
  const etherPrice = 2234.45

  const data = {
    datasets: [
      {
        label: "# of Votes",
        data: [3, 5, 3, 5, 2, 3, 3, 5, 3, 5, 2, 3, 3, 5, 3, 5, 2, 3],
        backgroundColor: ["red", "blue", "yellow", "green", "purple", "orange"],
        offset: 2,
        spacing: 50,
        cutout: 90,
      },
    ],
  }

  return (
    <PrimaryCard width={"800px"} height={"592px"}>
      <CardHeader>Bet which fruit will turn into jelly!</CardHeader>
      <TopCardSection height={"224px"} top={"10%"}>
        <div style={{ width: "40%" }}>
          <Doughnut data={data} />
        </div>
      </TopCardSection>
      <FullButton>Create a Bet!</FullButton>
    </PrimaryCard>
  )
}
