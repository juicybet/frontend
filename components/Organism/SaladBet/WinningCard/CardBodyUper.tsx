import Image from "next/image"
import { Flex } from "../../../Utils/Utility.style"

export const CardBodyUper = () => {
  return (
    <Flex flexDirection="row" borderBottom="1px solid var(--border-gray)">
      <Flex flexDirection="column" size={[92, 180]} p={2} justifyContent="space-between">
        <Image src="/images/vegies/pepper.png" width={60} height={100} alt="Pepper " />
      </Flex>
      <Flex flexDirection="column" size={[92, 180]} p={2} justifyContent="space-between">
        <Image src="/images/vegies/pepper.png" width={60} height={100} alt="Pepper " />
      </Flex>
      <Flex flexDirection="column" size={[92, 180]} p={2} justifyContent="space-between">
        <Image src="/images/vegies/pepper.png" width={60} height={100} alt="Pepper " />
        <Flex alignItems="center" justifyContent="center">
          <Image src="/images/icons/won.svg" width="40" height="40" alt="" />
        </Flex>
      </Flex>
      <Flex flexDirection="column" size={[92, 180]} p={2} justifyContent="space-between">
        <Image src="/images/vegies/pepper.png" width={60} height={100} alt="Pepper " />
      </Flex>
      <Flex flexDirection="column" size={[92, 180]} p={2} justifyContent="space-between">
        <Image src="/images/vegies/pepper.png" width={60} height={100} alt="Pepper " />
      </Flex>
      <Flex
        flexDirection="column"
        size={[92, 180]}
        p={2}
        justifyContent="space-between"
        backgroundImage="url('images/Rectangle.png')"
        backgroundSize="cover"
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
      >
        <Flex alignItems="center" justifyContent="center">
          <Image src="/images/vegies/broccoli.png" width={60} height={100} alt="Brocolli " />
        </Flex>
        <Flex alignItems="center" justifyContent="center">
          <Image src="/images/icons/lost.svg" width="40" height="40" alt="" />
        </Flex>
      </Flex>
    </Flex>
  )
}
