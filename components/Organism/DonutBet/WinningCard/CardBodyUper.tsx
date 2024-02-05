import Image from "next/image"
import "react-circular-progressbar/dist/styles.css"
import styled from "styled-components"
import { ExternalLink } from "react-feather"

import { FlexWrapperCentered, Flex, SpanInfoPrimary, SpanLabel, Box } from "../../../Utils/Utility.style"

const LabelWrapperGrid = styled.div`
  display: grid;
  grid-template-columns: -webkit-min-content auto;
  grid-template-columns: min-content auto;
`

export const CardBodyUper = () => {
  return (
    <Flex flexDirection="row" borderBottom="1px solid var(--border-gray)" alignItems="center" height="192px">
      <Flex borderRight="1px solid var(--border-gray)" py={32} width={"40%"} justifyContent="center" height="100%">
        <Image src="/images/donuts/7.png" width="128" height="128" alt="" />
      </Flex>
      <Flex
        flexDirection="column"
        py={16}
        paddingRight={80}
        paddingLeft={16}
        width={"60%"}
        height="100%"
        justifyContent="space-evenly"
        position="relative"
      >
        <SpanLabel size={"20px"}>Block Details :</SpanLabel>
        <Box>
          <LabelWrapperGrid>
            <SpanLabel size={"16px"}>Number: </SpanLabel>
            <SpanInfoPrimary>123021</SpanInfoPrimary>
          </LabelWrapperGrid>
          <LabelWrapperGrid>
            <SpanLabel size={"16px"}>Hash:</SpanLabel>
            <SpanInfoPrimary>
              35f…af7 <ExternalLink size={18} />
            </SpanInfoPrimary>
          </LabelWrapperGrid>
        </Box>
        <Box position="absolute" bottom={10} right={10}>
          <Image src="/images/icons/won.svg" width="40" height="40" alt="" />
        </Box>
      </Flex>
    </Flex>
  )
}
