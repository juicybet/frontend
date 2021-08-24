import { Box, Flex, SpanInfoPrimary, SpanLabel } from "../../../Utils/Utility.style"
import Image from "next/image"
import styled from "styled-components"
import { ExternalLink } from "react-feather"

const LabelWrapper = styled.label`
  display: grid;
  grid-template-columns: -webkit-min-content auto;
  grid-template-columns: min-content auto;
`

export const CardBodyUper = () => {
  return (
    <Flex flexDirection="row" borderBottom="1px solid var(--border-gray)" alignItems="center" height="192px">
      <Flex
        borderRight="1px solid var(--border-gray)"
        py={32}
        width={"40%"}
        justifyContent="center"
        height="100%"
        backgroundImage="url(/images/stripes_pattern.png)"
      >
        <Image src="/images/donuts/8.png" width="128" height="128" alt="" />
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
          <LabelWrapper>
            <SpanLabel size={"16px"}>Number: </SpanLabel>
            <SpanInfoPrimary>123021</SpanInfoPrimary>
          </LabelWrapper>
          <LabelWrapper>
            <SpanLabel size={"16px"}>Hash:</SpanLabel>
            <SpanInfoPrimary>
              35f…af7 <ExternalLink size={18} />
            </SpanInfoPrimary>
          </LabelWrapper>
        </Box>
        <Box position="absolute" bottom={10} right={10}>
          <Image src="/images/icons/lost.svg" width="40" height="40" alt="" />
        </Box>
      </Flex>
    </Flex>
  )
}
