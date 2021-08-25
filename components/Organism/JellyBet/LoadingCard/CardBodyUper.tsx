import Image from "next/image"
import { Flex } from "../../../Utils/Utility.style"

export const CardBodyUper = () => {
  return (
    <Flex flexDirection="row" borderBottom="1px solid var(--border-gray)">
      <Flex borderRight="1px solid var(--border-gray)" p={48} width={"50%"}>
        <Image src="/images/Watermelon.png" width="120" height="150" alt="" />
      </Flex>
      <Flex p={48} width={"50%"}>
        <Image src="/images/strawberry.png" width="120" height="150" alt="" />
      </Flex>
    </Flex>
  )
}
