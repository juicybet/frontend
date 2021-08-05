import styled from "styled-components"
import Image from "next/image"
import { Flex } from "../Utils/Utility.style"
import { Radio } from "../Radio/Radio"
import { maxHeight } from "styled-system"

export const RadioCaraousel = ({
  children,
  Img,
  width,
  height,
}: {
  width: string
  height: string
  Img: string
  children: JSX.Element | string
}) => {
  return (
    <Flex flexDirection="column">
      <Flex alignItems="center" justifyContent="center" m={1} size={[64, 128]}>
        <Image src={Img} width={width} height={height} alt="Donut " />
      </Flex>
      <Flex alignItems="center" justifyContent="center">
        <Radio name="bet">{children}</Radio>
      </Flex>
    </Flex>
  )
}
