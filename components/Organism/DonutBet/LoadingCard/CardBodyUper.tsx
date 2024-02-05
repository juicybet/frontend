import Image from "next/image"
import { Flex } from "../../../Utils/Utility.style"

export const CardBodyUper = () => {
  return (
    <Flex flexDirection="row" borderBottom="1px solid var(--border-gray)" alignItems="center">
      <Flex borderRight="1px solid var(--border-gray)" p={24} width={"50%"} justifyContent="center">
        <Image src="/images/donuts/7.png" width="128" height="128" alt="" />
      </Flex>
    </Flex>
  )
}
