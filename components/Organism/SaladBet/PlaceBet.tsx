import Image from "next/image"
import { Button } from "../../Atoms"
import { Card, CardBox, CardHeader } from "../../Molecules/"
import styled from "styled-components"
import { FlexWrapperCentered, Flex, Text, Grid, SpanInfoPrimary, SpanInfoSecondary } from "../../Utils/Utility.style"
import ProgressBar from "@ramonak/react-progress-bar"

import { Doughnut } from "react-chartjs-2"

const RadioButtonWrapper = styled(FlexWrapperCentered)`
  justify-content: space-between;
  margin: 32px;
  width: 100%;
`

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
      <CardHeader px={20} py={15}>
        <Text textAlign="left" fontSize={18} color={"var(--dark-gray)"}>
          Salad #12 - Current Pool
        </Text>
      </CardHeader>
      <Flex alignItems="center" flexDirection={["column", "row"]}>
        <Flex width={["100%", "40%"]} p={4} justifyContent="center" alignItems="center" m="auto">
          <Doughnut data={data} options={options} />
        </Flex>
        <Flex width={["100%", "60%"]} justifyContent="flex-end">
          <Grid gridTemplateColumns="auto auto">
            <CardBox height={128} width={[210, 242]}>
              <Image src="images/Oval@2x.svg" width="25" height="25" alt="dot"></Image>
              <Image src="/images/vegies/pepper.png" width={50} height={95} alt="Pepper " />
              <Flex flexDirection="column" height={70} justifyContent="space-between">
                <SpanInfoPrimary>
                  0.123021
                  <Image src="/images/icons/coins/bnb.svg" width="20" height="20" alt="" />
                </SpanInfoPrimary>
                <SpanInfoSecondary>~ $3.67 </SpanInfoSecondary>
                <ProgressBar completed={60} height="10px" isLabelVisible={false} bgColor="var(--progress-green)" />
              </Flex>
            </CardBox>
            <CardBox height={128} width={[210, 242]}>
              <Image src="images/Oval@2x.svg" width="25" height="25" alt="dot"></Image>
              <Image src="/images/vegies/pepper.png" width={50} height={95} alt="Pepper " />
              <Flex flexDirection="column" height={70} justifyContent="space-between">
                <SpanInfoPrimary>
                  0.123021
                  <Image src="/images/icons/coins/bnb.svg" width="20" height="20" alt="" />
                </SpanInfoPrimary>
                <SpanInfoSecondary>~ $3.67 </SpanInfoSecondary>
                <ProgressBar completed={60} height="10px" isLabelVisible={false} bgColor="var(--progress-green)" />
              </Flex>
            </CardBox>
            <CardBox height={128} width={[210, 242]}>
              <Image src="images/Oval@2x.svg" width="25" height="25" alt="dot"></Image>
              <Image src="/images/vegies/pepper.png" width={50} height={95} alt="Pepper " />
              <Flex flexDirection="column" height={70} justifyContent="space-between">
                <SpanInfoPrimary>
                  0.123021
                  <Image src="/images/icons/coins/bnb.svg" width="20" height="20" alt="" />
                </SpanInfoPrimary>
                <SpanInfoSecondary>~ $3.67 </SpanInfoSecondary>
                <ProgressBar completed={60} height="10px" isLabelVisible={false} bgColor="var(--progress-green)" />
              </Flex>
            </CardBox>
            <CardBox height={128} width={[210, 242]}>
              <Image src="images/Oval@2x.svg" width="25" height="25" alt="dot"></Image>
              <Image src="/images/vegies/pepper.png" width={50} height={95} alt="Pepper " />
              <Flex flexDirection="column" height={70} justifyContent="space-between">
                <SpanInfoPrimary>
                  0.123021
                  <Image src="/images/icons/coins/bnb.svg" width="20" height="20" alt="" />
                </SpanInfoPrimary>
                <SpanInfoSecondary>~ $3.67 </SpanInfoSecondary>
                <ProgressBar completed={60} height="10px" isLabelVisible={false} bgColor="var(--progress-green)" />
              </Flex>
            </CardBox>
            <CardBox height={128} width={[210, 242]}>
              <Image src="images/Oval@2x.svg" width="25" height="25" alt="dot"></Image>
              <Image src="/images/vegies/pepper.png" width={50} height={95} alt="Pepper " />
              <Flex flexDirection="column" height={70} justifyContent="space-between">
                <SpanInfoPrimary>
                  0.123021
                  <Image src="/images/icons/coins/bnb.svg" width="20" height="20" alt="" />
                </SpanInfoPrimary>
                <SpanInfoSecondary>~ $3.67 </SpanInfoSecondary>
                <ProgressBar completed={60} height="10px" isLabelVisible={false} bgColor="var(--progress-green)" />
              </Flex>
            </CardBox>
            <CardBox height={128} width={[210, 242]}>
              <Image src="images/Oval@2x.svg" width="25" height="25" alt="dot" />
              <Image src="/images/vegies/pepper.png" width={50} height={95} alt="Pepper " />
              <Flex flexDirection="column" height={70} justifyContent="space-between">
                <SpanInfoPrimary>
                  0.123021
                  <Image src="/images/icons/coins/bnb.svg" width="20" height="20" alt="" />
                </SpanInfoPrimary>
                <SpanInfoSecondary>~ $3.67 </SpanInfoSecondary>
                <ProgressBar completed={60} height="10px" isLabelVisible={false} bgColor="var(--progress-green)" />
              </Flex>
            </CardBox>
          </Grid>
        </Flex>
      </Flex>
      <Flex
        justifyContent="center"
        alignItems="center"
        flexDirection={["column", "row"]}
        borderTop="1px solid var(--border-gray)"
        height={["auto", 150]}
      >
        <Flex width={["100%", "40%"]} flexDirection="column">
          <Text textAlign={["center", "left"]} fontSize={18} color={"var(--light-gray)"} px={4}>
            Salad will be ready to serve in:
          </Text>
          <Text textAlign={["center", "left"]} fontSize={24} color={"var(--dark-gray)"} px={4}>
            8 hours and 23 minutes
          </Text>
        </Flex>
        <Flex width={["100%", "60%"]} px={4}>
          <Button>Place A Bet</Button>
        </Flex>
      </Flex>
    </Card>
  )
}
