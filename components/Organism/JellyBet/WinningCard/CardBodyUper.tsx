import Image from "next/image"
import { FlexWrapperCentered, Flex, Box } from "../../../Utils/Utility.style"
import styled from "styled-components"

export const CardBodyUper = () => {
  return (
    <Flex flexDirection="row" borderBottom="1px solid var(--border-gray)">
      <Flex
        borderRight="1px solid var(--border-gray)"
        p={48}
        width={"50%"}
        position="relative"
        backgroundImage="url(/images/stripes_pattern.png)"
      >
        <Image src="/images/Watermelon.png" width="120" height="150" alt="" />
        <Box position="absolute" bottom={10} right={10}>
          <Image src="/images/icons/lost.svg" width="40" height="40" alt="" />
        </Box>
      </Flex>
      <Flex p={48} width={"50%"} position="relative">
        <Image src="/images/strawberry.png" width="120" height="150" alt="" />
        <Box position="absolute" bottom={10} right={10}>
          <Image src="/images/icons/won.svg" width="40" height="40" alt="" />
        </Box>
      </Flex>
    </Flex>
  )
}
