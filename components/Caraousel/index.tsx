import styled from "styled-components"
import Image from "next/image"
import { Flex } from "../Utils/Utility.style"
import { Radio } from "../Radio/Radio"

export const RadioCaraousel = ({ children, Img }: { Img: string; children: JSX.Element | string }) => {
  return (
    <Flex flexDirection="column">
      <Flex alignItems="center" justifyContent="center" m={1} size={[64, 128]}>
        <Image src={Img} width="100" height="100" alt="Donut " />
      </Flex>
      <Flex alignItems="center" justifyContent="center">
        <Radio name="bet">{children}</Radio>
      </Flex>
    </Flex>
  )
}
