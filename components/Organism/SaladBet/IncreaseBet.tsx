import Image from "next/image"
import { Button } from "../../Atoms"
import { Card, CardBox, CardHeader } from "../../Molecules"
import { Flex, Text, Grid, SpanInfoPrimary, SpanInfoSecondary } from "../../Utils/Utility.style"

import { Doughnut } from "react-chartjs-2"

export const IncreaseBet = () => {
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

  const CardBodyHeader = () => {
    return (
      <CardHeader px={20} py={15}>
        <Text textAlign="left" fontSize={18} color={"var(--dark-gray)"}>
          Salad #12 - Current Pool
        </Text>
      </CardHeader>
    )
  }

  const CardBodyUper = () => {
    return (
      <Flex alignItems="center" flexDirection={["column", "row"]}>
        <Flex width={["100%", "40%"]} p={4} justifyContent="center" alignItems="center" m="auto">
          <Doughnut data={data} options={options} />
        </Flex>
        <Flex width={["100%", "60%"]} justifyContent="flex-end">
          <Grid gridTemplateColumns="auto auto">
            <CardBox height={128} width={[210, 242]}>
              <Image src="images/Oval@2x.svg" width="25" height="25" alt="dot"></Image>
              <Image src="/images/vegies/pepper.png" width={50} height={95} alt="Pepper " />
              <Flex flexDirection="column">
                <SpanInfoPrimary>
                  0.123021
                  <Image src="/images/icons/coins/bnb.svg" width="20" height="20" alt="" />
                </SpanInfoPrimary>
                <SpanInfoSecondary>~ $3.67 </SpanInfoSecondary>
              </Flex>
            </CardBox>
            <CardBox height={128} width={[210, 242]}>
              <Image src="images/Oval@2x.svg" width="25" height="25" alt="dot"></Image>
              <Image src="/images/vegies/pepper.png" width={50} height={95} alt="Pepper " />
              <Flex flexDirection="column">
                <SpanInfoPrimary>
                  0.123021
                  <Image src="/images/icons/coins/bnb.svg" width="20" height="20" alt="" />
                </SpanInfoPrimary>
                <SpanInfoSecondary>~ $3.67 </SpanInfoSecondary>
              </Flex>
            </CardBox>
            <CardBox height={128} width={[210, 242]}>
              <Image src="images/Oval@2x.svg" width="25" height="25" alt="dot"></Image>
              <Image src="/images/vegies/pepper.png" width={50} height={95} alt="Pepper " />
              <Flex flexDirection="column">
                <SpanInfoPrimary>
                  0.123021
                  <Image src="/images/icons/coins/bnb.svg" width="20" height="20" alt="" />
                </SpanInfoPrimary>
                <SpanInfoSecondary>~ $3.67 </SpanInfoSecondary>
              </Flex>
            </CardBox>
            <CardBox height={128} width={[210, 242]}>
              <Image src="images/Oval@2x.svg" width="25" height="25" alt="dot"></Image>
              <Image src="/images/vegies/pepper.png" width={50} height={95} alt="Pepper " />
              <Flex flexDirection="column">
                <SpanInfoPrimary>
                  0.123021
                  <Image src="/images/icons/coins/bnb.svg" width="20" height="20" alt="" />
                </SpanInfoPrimary>
                <SpanInfoSecondary>~ $3.67 </SpanInfoSecondary>
              </Flex>
            </CardBox>
            <CardBox height={128} width={[210, 242]}>
              <Image src="images/Oval@2x.svg" width="25" height="25" alt="dot"></Image>
              <Image src="/images/vegies/pepper.png" width={50} height={95} alt="Pepper " />
              <Flex flexDirection="column">
                <SpanInfoPrimary>
                  0.123021
                  <Image src="/images/icons/coins/bnb.svg" width="20" height="20" alt="" />
                </SpanInfoPrimary>
                <SpanInfoSecondary>~ $3.67 </SpanInfoSecondary>
              </Flex>
            </CardBox>
            <CardBox height={128} width={[210, 242]}>
              <Image src="images/Oval@2x.svg" width="25" height="25" alt="dot" />
              <Image src="/images/vegies/pepper.png" width={50} height={95} alt="Pepper " />
              <Flex flexDirection="column">
                <SpanInfoPrimary>
                  0.123021
                  <Image src="/images/icons/coins/bnb.svg" width="20" height="20" alt="" />
                </SpanInfoPrimary>
                <SpanInfoSecondary>~ $3.67 </SpanInfoSecondary>
              </Flex>
            </CardBox>
          </Grid>
        </Flex>
      </Flex>
    )
  }

  const CardBodyLower = () => {
    return (
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
          <Button height={"64px"} px={16} py={3}>
            Place A Bet
          </Button>
        </Flex>
      </Flex>
    )
  }

  return (
    <Card width={[420, 830]} height={["auto", 589]}>
      <CardBodyHeader />
      <CardBodyUper />
      <CardBodyLower />
    </Card>
  )
}
