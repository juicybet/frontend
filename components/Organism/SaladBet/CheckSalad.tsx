import Image from "next/image"
import { Card, CardBox, CardHeader } from "../../Molecules"
import styled from "styled-components"
import {
  FlexWrapperCentered,
  Flex,
  Text,
  Grid,
  SpanInfoPrimary,
  SpanInfoSecondary,
  Box,
} from "../../Utils/Utility.style"
import ProgressBar from "@ramonak/react-progress-bar"

import { Doughnut } from "react-chartjs-2"
import { ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight } from "react-feather"
import { currentTheme } from "../../../core/theme"

const RadioButtonWrapper = styled(FlexWrapperCentered)`
  justify-content: space-between;
  margin: 32px;
  width: 100%;
`

export const CheckSalad = () => {
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
        <Flex alignItems="center" justifyContent="space-between" width="150px">
          <Box>
            <ChevronsLeft color="var(--dark-gray)" />
          </Box>
          <Box>
            <ChevronLeft color="var(--dark-gray)" />
          </Box>
          <Box>
            <ChevronRight color="var(--light-gray)" />
          </Box>
          <Box>
            <ChevronsRight color="var(--light-gray)" />
          </Box>
        </Flex>
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
            <CardBox
              height={128}
              width={[210, 242]}
              backgroundImage="url('images/Rectangle.png')"
              backgroundSize="cover"
            >
              <Image src="images/Oval@2x.svg" width="25" height="25" alt="dot"></Image>
              <Image src="/images/vegies/pepper.png" width={50} height={95} alt="Pepper " />
              <Flex flexDirection="column" height={70} justifyContent="space-between">
                <SpanInfoPrimary>
                  0.123021
                  <Image src="/images/icons/coins/bnb.svg" width="20" height="20" alt="" />
                </SpanInfoPrimary>
                <SpanInfoSecondary>~ $3.67 </SpanInfoSecondary>
                <ProgressBar completed={60} height="10px" isLabelVisible={false} bgColor="var(--primary-red)" />
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
        {/* responsiveness needed to be fixed a little bit */}
        <Flex width={["100%", "70%"]}>
          <Flex flexDirection="column">
            <Text textAlign={["center", "left"]} fontSize={18} color={"var(--light-gray)"} px={4}>
              Salad served on:
            </Text>
            <Text textAlign={["center", "left"]} fontSize={24} color={"var(--dark-gray)"} px={4}>
              19 Jul 2021, 11:00
            </Text>
          </Flex>
          <Flex flexDirection="column" alignItems="center">
            <Text textAlign={["center", "left"]} fontSize={18} color={"var(--light-gray)"} px={4}>
              Salad Total:
            </Text>
            <Flex>
              <Text textAlign={["center", "left"]} fontSize={24} color={"var(--dark-gray)"} px={1}>
                8.8390
              </Text>
              <Image src="/images/icons/coins/bnb.svg" width="20" height="20" alt="" />
            </Flex>
          </Flex>
          <Flex flexDirection="column" alignItems="center">
            <Text textAlign={["center", "left"]} fontSize={18} color={"var(--light-gray)"} px={4}>
              Highes Bet:
            </Text>
            <Flex>
              <Text textAlign={["center", "left"]} fontSize={24} color={"var(--dark-gray)"} px={1}>
                1.2416
              </Text>
              <Image src="/images/icons/coins/bnb.svg" width="20" height="20" alt="" />
            </Flex>
          </Flex>
        </Flex>
        <Flex
          width={["100%", "30%"]}
          px={2}
          flexDirection="column"
          alignItems={["center", "flex-end"]}
          justifyContent="space-between"
          height="79px"
        >
          <Text fontSize={18} color={"var(--dark-gray)"}>
            Did you win in Salad #11?
          </Text>
          <Box borderRadius="25px" border="1px solid green" py={"10px"} px={"10px"} width="150px">
            <Text textAlign="center" fontSize={18} color={currentTheme().primary}>
              Check Now
            </Text>
          </Box>
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
