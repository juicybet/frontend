import Image from "next/image"
import { FullButtonSecondary } from "../Button"
import { PrimaryCard } from "../Card/Card"
import styled from "styled-components"
import {
  EtherFiatValue,
  FlexWrapperCentered,
  Flex,
  Text,
  Grid,
  SpanInfoPrimary,
  SpanInfoSecondary,
} from "../Utils/Utility.style"

import { Doughnut } from "react-chartjs-2"

export const RadioButtonWrapper = styled(FlexWrapperCentered)`
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
        backgroundColor: ["red", "blue", "yellow", "green", "purple", "orange"],
        cutout: 90,
      },
    ],
  }

  return (
    <PrimaryCard width={"830px"} height={"589px"}>
      <Flex flexDirection="column">
        <Flex
          justifyContent="space-between"
          alignItems="center"
          flexDirection="row"
          px={20}
          py={15}
          borderBottom="1px solid var(--border-gray)"
        >
          <Text textAlign="left" fontSize={18} color={"var(--dark-gray)"}>
            Salad #12 - Current Pool
          </Text>
        </Flex>
        <Flex flexDirection="row" alignItems="center">
          <Flex width="40%" p={4} justifyContent="center" alignItems="center" m="auto">
            <Doughnut data={data} />
          </Flex>
          <Flex width="60%" justifyContent="flex-end">
            <Grid gridTemplateColumns="auto auto">
              <Flex
                flexDirection="row"
                justifyContent="space-evenly"
                alignItems="center"
                height={128}
                width={242}
                border="1px solid var(--border-gray)"
              >
                <Image src="images/Oval@2x.svg" width="25" height="25" alt="dot"></Image>
                <Image src="/images/vegies/pepper.png" width={50} height={95} alt="Pepper " />
                <Flex flexDirection="column">
                  <SpanInfoPrimary>
                    0.123021
                    <Image src="/images/icons/coins/bnb.svg" width="20" height="20" alt="" />
                  </SpanInfoPrimary>
                  <SpanInfoSecondary>~ $3.67 </SpanInfoSecondary>
                </Flex>
              </Flex>
              <Flex
                flexDirection="row"
                justifyContent="space-evenly"
                alignItems="center"
                height={128}
                width={242}
                border="1px solid var(--border-gray)"
              >
                <Image src="images/Oval@2x.svg" width="25" height="25" alt="dot"></Image>
                <Image src="/images/vegies/pepper.png" width={50} height={95} alt="Pepper " />
                <Flex flexDirection="column">
                  <SpanInfoPrimary>
                    0.123021
                    <Image src="/images/icons/coins/bnb.svg" width="20" height="20" alt="" />
                  </SpanInfoPrimary>
                  <SpanInfoSecondary>~ $3.67 </SpanInfoSecondary>
                </Flex>
              </Flex>
              <Flex
                flexDirection="row"
                justifyContent="space-evenly"
                alignItems="center"
                height={128}
                width={242}
                border="1px solid var(--border-gray)"
              >
                <Image src="images/Oval@2x.svg" width="25" height="25" alt="dot"></Image>
                <Image src="/images/vegies/pepper.png" width={50} height={95} alt="Pepper " />
                <Flex flexDirection="column">
                  <SpanInfoPrimary>
                    0.123021
                    <Image src="/images/icons/coins/bnb.svg" width="20" height="20" alt="" />
                  </SpanInfoPrimary>
                  <SpanInfoSecondary>~ $3.67 </SpanInfoSecondary>
                </Flex>
              </Flex>
              <Flex
                flexDirection="row"
                justifyContent="space-evenly"
                alignItems="center"
                height={128}
                width={242}
                border="1px solid var(--border-gray)"
              >
                <Image src="images/Oval@2x.svg" width="25" height="25" alt="dot"></Image>
                <Image src="/images/vegies/pepper.png" width={50} height={95} alt="Pepper " />
                <Flex flexDirection="column">
                  <SpanInfoPrimary>
                    0.123021
                    <Image src="/images/icons/coins/bnb.svg" width="20" height="20" alt="" />
                  </SpanInfoPrimary>
                  <SpanInfoSecondary>~ $3.67 </SpanInfoSecondary>
                </Flex>
              </Flex>
              <Flex
                flexDirection="row"
                justifyContent="space-evenly"
                alignItems="center"
                height={128}
                width={242}
                border="1px solid var(--border-gray)"
              >
                <Image src="images/Oval@2x.svg" width="25" height="25" alt="dot"></Image>
                <Image src="/images/vegies/pepper.png" width={50} height={95} alt="Pepper " />
                <Flex flexDirection="column">
                  <SpanInfoPrimary>
                    0.123021
                    <Image src="/images/icons/coins/bnb.svg" width="20" height="20" alt="" />
                  </SpanInfoPrimary>
                  <SpanInfoSecondary>~ $3.67 </SpanInfoSecondary>
                </Flex>
              </Flex>
              <Flex
                flexDirection="row"
                justifyContent="space-evenly"
                alignItems="center"
                height={128}
                width={242}
                border="1px solid var(--border-gray)"
              >
                <Image src="images/Oval@2x.svg" width="25" height="25" alt="dot"></Image>
                <Image src="/images/vegies/pepper.png" width={50} height={95} alt="Pepper " />
                <Flex flexDirection="column">
                  <SpanInfoPrimary>
                    0.123021
                    <Image src="/images/icons/coins/bnb.svg" width="20" height="20" alt="" />
                  </SpanInfoPrimary>
                  <SpanInfoSecondary>~ $3.67 </SpanInfoSecondary>
                </Flex>
              </Flex>
            </Grid>
          </Flex>
        </Flex>
        <Flex
          justifyContent="center"
          alignItems="center"
          flexDirection="row"
          borderTop="1px solid var(--border-gray)"
          height={150}
        >
          <Flex width={"40%"} flexDirection="column">
            <Text textAlign="left" fontSize={18} color={"var(--light-gray)"} px={4}>
              Salad will be ready to serve in:
            </Text>
            <Text textAlign="left" fontSize={24} color={"var(--dark-gray)"} px={4}>
              8 hours and 23 minutes
            </Text>
          </Flex>
          <Flex width={"60%"} px={4}>
            <FullButtonSecondary>Place A Bet</FullButtonSecondary>
          </Flex>
        </Flex>
      </Flex>
    </PrimaryCard>
  )
}
