import { PopUpCardVegies } from "../../../Molecules"
import { Flex, Text, SpanInfoPrimary, SpanInfoSecondary } from "../../../Utils/Utility.style"

import Image from "next/image"

export const CardBodyUper = () => {
  return (
    <Flex alignItems="center" border="1px solid var(--border-gray)">
      <Flex width={"40%"}>
        <PopUpCardVegies>
          <Image src="/images/vegies/pepper.png" width={50} height={100} alt="Pepper " />
          <Image src="/images/icons/lost.svg" width="40" height="40" alt="" />
        </PopUpCardVegies>
        <PopUpCardVegies backgroundImage="url('images/Rectangle.png')" backgroundSize="cover">
          <Image src="/images/vegies/broccoli.png" width={60} height={100} alt="Brocolli " />
          <Image src="/images/icons/won.svg" width="40" height="40" alt="" />
        </PopUpCardVegies>
      </Flex>
      <Flex width={"60%"} flexDirection="column" py={1} px={3} justifyContent={"space-between"} height={160}>
        <Text color={"var(--light-gray)"} fontSize={18}>
          Your current bet:
          <Flex flexDirection="column" width={"50%"}>
            <SpanInfoPrimary>
              0.123021
              <Image src="/images/icons/coins/bnb.svg" width="20" height="20" alt="" />
            </SpanInfoPrimary>
            <SpanInfoSecondary>~ $3.67 </SpanInfoSecondary>
          </Flex>
        </Text>
        <Text color={"var(--light-gray)"} fontSize={18}>
          New bet amount:
          <Flex flexDirection="column" width={"50%"}>
            <SpanInfoPrimary>
              0.123021
              <Image src="/images/icons/coins/bnb.svg" width="20" height="20" alt="" />
            </SpanInfoPrimary>
            <SpanInfoSecondary>~ $3.67 </SpanInfoSecondary>
          </Flex>
        </Text>
      </Flex>
    </Flex>
  )
}
