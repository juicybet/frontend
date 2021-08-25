import Image from "next/image"
import { Button } from "../../../Atoms"
import { Card, CardBox, CardHeader } from "../../../Molecules"
import { Flex, Text, Grid, SpanInfoPrimary, SpanInfoSecondary } from "../../../Utils/Utility.style"

import { Doughnut } from "react-chartjs-2"

export const CardBodyUper = ({ data, options }: any) => {
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
